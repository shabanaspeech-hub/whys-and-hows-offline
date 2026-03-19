/**
 * Data Validation Utility for WH Questions
 * Validates all questions and scenes for clinical accuracy
 */

import { questions, WHQuestion, categories, WHCategory } from "../data/questions";
import { scenes, Scene, SceneQuestion } from "../data/scenes";

interface ValidationError {
  type: "question" | "scene";
  id: string;
  field: string;
  message: string;
  severity: "error" | "warning";
}

function validateQuestion(q: WHQuestion): ValidationError[] {
  const errors: ValidationError[] = [];

  // Check required fields
  if (!q.id) errors.push({ type: "question", id: q.id, field: "id", message: "Missing question ID", severity: "error" });
  if (!q.question) errors.push({ type: "question", id: q.id, field: "question", message: "Missing question text", severity: "error" });
  if (!q.image) errors.push({ type: "question", id: q.id, field: "image", message: "Missing image/emoji", severity: "error" });
  if (!q.category) errors.push({ type: "question", id: q.id, field: "category", message: "Missing category", severity: "error" });

  // Validate category is valid
  const validCats: WHCategory[] = ["who", "what", "where", "when", "why", "how"];
  if (!validCats.includes(q.category)) {
    errors.push({ type: "question", id: q.id, field: "category", message: `Invalid category: ${q.category}`, severity: "error" });
  }

  // Validate choices
  if (!q.choices || q.choices.length < 2) {
    errors.push({ type: "question", id: q.id, field: "choices", message: "Must have at least 2 choices", severity: "error" });
  }
  if (q.choices && q.choices.length > 3) {
    errors.push({ type: "question", id: q.id, field: "choices", message: "More than 3 choices may overwhelm children", severity: "warning" });
  }

  // Validate correctIndex
  if (q.correctIndex < 0 || q.correctIndex >= (q.choices?.length ?? 0)) {
    errors.push({ type: "question", id: q.id, field: "correctIndex", message: `correctIndex ${q.correctIndex} out of bounds (${q.choices?.length} choices)`, severity: "error" });
  }

  // Check for duplicate choices
  if (q.choices) {
    const texts = q.choices.map(c => c.text.toLowerCase().trim());
    const uniqueTexts = new Set(texts);
    if (uniqueTexts.size !== texts.length) {
      errors.push({ type: "question", id: q.id, field: "choices", message: "Duplicate answer choices detected", severity: "error" });
    }
  }

  // Validate question matches category (semantic check)
  const questionLower = q.question.toLowerCase();
  const categoryKeywords: Record<WHCategory, string[]> = {
    who: ["who"],
    what: ["what"],
    where: ["where"],
    when: ["when"],
    why: ["why"],
    how: ["how"],
  };
  const keywords = categoryKeywords[q.category];
  if (keywords && !keywords.some(kw => questionLower.startsWith(kw))) {
    errors.push({ type: "question", id: q.id, field: "question", message: `Question doesn't start with "${q.category}" keyword`, severity: "warning" });
  }

  // Check feedback exists
  if (!q.correctFeedback) {
    errors.push({ type: "question", id: q.id, field: "correctFeedback", message: "Missing sentence model feedback", severity: "warning" });
  }

  return errors;
}

function validateSceneQuestion(sceneId: string, qi: number, q: SceneQuestion): ValidationError[] {
  const errors: ValidationError[] = [];
  const id = `${sceneId}-q${qi}`;

  if (!q.question) errors.push({ type: "scene", id, field: "question", message: "Missing question text", severity: "error" });
  if (!q.choices || q.choices.length < 2) errors.push({ type: "scene", id, field: "choices", message: "Must have at least 2 choices", severity: "error" });
  if (q.correctIndex < 0 || q.correctIndex >= (q.choices?.length ?? 0)) {
    errors.push({ type: "scene", id, field: "correctIndex", message: `correctIndex out of bounds`, severity: "error" });
  }

  // Check for duplicate choices
  if (q.choices) {
    const texts = q.choices.map(c => c.text.toLowerCase().trim());
    if (new Set(texts).size !== texts.length) {
      errors.push({ type: "scene", id, field: "choices", message: "Duplicate answer choices", severity: "error" });
    }
  }

  // Check feedback
  if (!q.correctFeedback) {
    errors.push({ type: "scene", id, field: "correctFeedback", message: "Missing sentence model feedback", severity: "warning" });
  }

  return errors;
}

function validateScene(scene: Scene): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!scene.id) errors.push({ type: "scene", id: scene.id, field: "id", message: "Missing scene ID", severity: "error" });
  if (!scene.title) errors.push({ type: "scene", id: scene.id, field: "title", message: "Missing title", severity: "error" });
  if (!scene.image) errors.push({ type: "scene", id: scene.id, field: "image", message: "Missing image", severity: "error" });
  if (!scene.questions || scene.questions.length === 0) {
    errors.push({ type: "scene", id: scene.id, field: "questions", message: "No questions", severity: "error" });
  }

  scene.questions.forEach((q, i) => {
    errors.push(...validateSceneQuestion(scene.id, i, q));
  });

  return errors;
}

export function validateAllData(): ValidationError[] {
  const allErrors: ValidationError[] = [];

  // Validate all WH questions
  questions.forEach(q => {
    allErrors.push(...validateQuestion(q));
  });

  // Check all categories have questions
  const validCats: WHCategory[] = ["who", "what", "where", "when", "why", "how"];
  validCats.forEach(cat => {
    const catQuestions = questions.filter(q => q.category === cat);
    if (catQuestions.length === 0) {
      allErrors.push({ type: "question", id: cat, field: "category", message: `No questions for category "${cat}"`, severity: "error" });
    }
  });

  // Check for duplicate question IDs
  const ids = questions.map(q => q.id);
  const uniqueIds = new Set(ids);
  if (uniqueIds.size !== ids.length) {
    allErrors.push({ type: "question", id: "global", field: "id", message: "Duplicate question IDs detected", severity: "error" });
  }

  // Validate all scenes
  scenes.forEach(scene => {
    allErrors.push(...validateScene(scene));
  });

  return allErrors;
}

export function runValidation(): void {
  const errors = validateAllData();
  const criticalErrors = errors.filter(e => e.severity === "error");
  const warnings = errors.filter(e => e.severity === "warning");

  if (criticalErrors.length > 0) {
    console.group("🔴 WH Questions - Validation Errors");
    criticalErrors.forEach(e => {
      console.error(`[${e.type}] ${e.id} → ${e.field}: ${e.message}`);
    });
    console.groupEnd();
  }

  if (warnings.length > 0) {
    console.group("🟡 WH Questions - Validation Warnings");
    warnings.forEach(e => {
      console.warn(`[${e.type}] ${e.id} → ${e.field}: ${e.message}`);
    });
    console.groupEnd();
  }

  if (errors.length === 0) {
    console.log("✅ WH Questions - All data validated successfully!");
  } else {
    console.log(`📊 Validation: ${criticalErrors.length} errors, ${warnings.length} warnings`);
  }
}

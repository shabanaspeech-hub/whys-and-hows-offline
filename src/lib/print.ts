import { WHCategory, categories, getQuestionsByCategory } from "@/data/questions";
import { scenes, Scene } from "@/data/scenes";

function openPrintWindow(html: string) {
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}

const baseStyles = `
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; padding: 24px; color: #222; }
    h1 { font-size: 22px; margin-bottom: 4px; }
    .subtitle { font-size: 12px; color: #888; margin-bottom: 16px; }
    .question { margin-bottom: 18px; page-break-inside: avoid; }
    .q-text { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
    .choices { display: flex; gap: 12px; flex-wrap: wrap; }
    .choice { border: 2px solid #ddd; border-radius: 12px; padding: 8px 16px; font-size: 14px; min-width: 100px; text-align: center; }
    .choice .emoji { font-size: 28px; display: block; margin-bottom: 2px; }
    .footer { margin-top: 24px; font-size: 10px; color: #aaa; text-align: center; border-top: 1px solid #eee; padding-top: 8px; }
    @media print { body { padding: 12px; } }
  </style>
`;

export function printCategory(categoryId: WHCategory) {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return;
  const qs = getQuestionsByCategory(categoryId);

  const questionsHtml = qs
    .map(
      (q, i) => `
    <div class="question">
      <div class="q-text">${i + 1}. ${q.image} ${q.question}</div>
      <div class="choices">
        ${q.choices.map((c) => `<div class="choice"><span class="emoji">${c.emoji}</span>${c.text}</div>`).join("")}
      </div>
    </div>`
    )
    .join("");

  openPrintWindow(`
    <html><head><title>${cat.label} Questions</title>${baseStyles}</head>
    <body>
      <h1>${cat.emoji} ${cat.label} Questions</h1>
      <div class="subtitle">WH Questions — Developed by Speech Language Therapist Shabana Tariq</div>
      ${questionsHtml}
      <div class="footer">WH Questions App — Developed by SLT Shabana Tariq</div>
    </body></html>
  `);
}

export function printScene(sceneId: string) {
  const scene = scenes.find((s) => s.id === sceneId);
  if (!scene) return;

  const questionsHtml = scene.questions
    .map(
      (q, i) => `
    <div class="question">
      <div class="q-text">${i + 1}. ${q.question}</div>
      <div class="choices">
        ${q.choices.map((c) => `<div class="choice"><span class="emoji">${c.emoji}</span>${c.text}</div>`).join("")}
      </div>
    </div>`
    )
    .join("");

  openPrintWindow(`
    <html><head><title>${scene.title} Questions</title>${baseStyles}</head>
    <body>
      <h1>${scene.emoji} ${scene.title}</h1>
      <div class="subtitle">Picture Scene Questions — Developed by Speech Language Therapist Shabana Tariq</div>
      ${questionsHtml}
      <div class="footer">WH Questions App — Developed by SLT Shabana Tariq</div>
    </body></html>
  `);
}

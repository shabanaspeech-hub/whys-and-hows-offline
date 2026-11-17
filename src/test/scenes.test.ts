import { describe, expect, it } from "vitest";
import { scenes } from "../data/scenes";

describe("picture scene answers", () => {
  it("balances correct answers across answer positions", () => {
    for (const choiceCount of [2, 3]) {
      const counts = Array.from({ length: choiceCount }, (_, index) =>
        scenes.flatMap((scene) => scene.questions)
          .filter((question) => question.choices.length === choiceCount && question.correctIndex === index)
          .length,
      );

      expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
    }
  });

  it("keeps the Pet Shop fish answer aligned with the aquarium", () => {
    const petShop = scenes.find((scene) => scene.id === "petshop");
    const fishQuestion = petShop?.questions.find((question) => question.question === "Where are the fish?");

    expect(fishQuestion?.choices[fishQuestion.correctIndex]?.text).toBe("In a tank");
  });
});
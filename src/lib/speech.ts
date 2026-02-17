import { getSettings } from "./settings";

export function speak(text: string, onEnd?: () => void) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const settings = getSettings();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = settings.voiceSpeed;
  utterance.pitch = settings.voicePitch;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(
    (v) => v.lang.startsWith("en") && v.name.toLowerCase().includes("female")
  ) || voices.find((v) => v.lang.startsWith("en"));
  if (preferred) utterance.voice = preferred;

  if (onEnd) utterance.onend = onEnd;

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

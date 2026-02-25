// Simple synthesized sound effects using Web Audio API
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  return audioCtx;
}

export function playCorrectSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Happy ascending chime - 3 quick notes going up
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.3, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.4);
    });

    // Add a sparkle on top
    const sparkle = ctx.createOscillator();
    const sparkleGain = ctx.createGain();
    sparkle.connect(sparkleGain);
    sparkleGain.connect(ctx.destination);
    sparkle.type = "sine";
    sparkle.frequency.value = 1046.5; // C6
    sparkleGain.gain.setValueAtTime(0.2, now + 0.3);
    sparkleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    sparkle.start(now + 0.3);
    sparkle.stop(now + 0.8);
  } catch {
    // Silently fail if audio not available
  }
}

export function playWrongSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Gentle descending "boop boop" - not harsh
    const notes = [349.23, 261.63]; // F4, C4
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.25, now + i * 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.2 + 0.3);
      osc.start(now + i * 0.2);
      osc.stop(now + i * 0.2 + 0.3);
    });
  } catch {
    // Silently fail if audio not available
  }
}

export function playMilestoneSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Fanfare! C-E-G-C ascending with longer sustain
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.3, now + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.6);
      osc.start(now + i * 0.15);
      osc.stop(now + i * 0.15 + 0.6);
    });
  } catch {
    // Silently fail
  }
}

// Randomized praise messages
const praises = [
  "🎉 Great job!",
  "🌟 Wonderful!",
  "🏆 Awesome!",
  "✨ Fantastic!",
  "🥳 Amazing!",
  "💪 Super!",
  "🎊 Brilliant!",
  "⭐ Excellent!",
];

const milestoneMessages = [
  "🔥 You're on fire! Keep going!",
  "🌈 You are doing great!",
  "🚀 Wow, you're a superstar!",
  "💫 You're unstoppable!",
  "🎯 3 in a row! Amazing!",
];

export function getRandomPraise(): string {
  return praises[Math.floor(Math.random() * praises.length)];
}

export function getRandomMilestone(): string {
  return milestoneMessages[Math.floor(Math.random() * milestoneMessages.length)];
}

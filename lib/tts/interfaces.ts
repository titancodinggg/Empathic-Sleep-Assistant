// interfaces.ts
export interface LmntVoice {
  id: string;
  name: string;
  language: string;
  gender: string;
  style: string;
  // ... other voice properties
}

export interface SpeechSynthesisOptions {
  text: string;
  voice?: string; // Optional voice ID
  speed?: number; // Optional playback speed
  // ... other synthesis options
}

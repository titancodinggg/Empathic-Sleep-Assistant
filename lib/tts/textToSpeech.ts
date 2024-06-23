import { Speech } from "lmnt-node";
import { SpeechSynthesisOptions } from "./interfaces";

const LMNT_API_KEY = "1d17194e363f41ce86fa97e7b5f738b5"; //process.env.LMNT_API_KEY; 

const textToSpeech = async (
  options: SpeechSynthesisOptions
): Promise<Uint8Array | null> => {
  try {
    const speech = new Speech(LMNT_API_KEY);

    // Synthesize text to speech
    const synthesis = await speech.synthesize(options.text, "daniel");
    return synthesis.audio; // Returns the synthesized audio data (Uint8Array)
  } catch (error) {
    console.error("Error synthesizing speech:", error);
    return null;
  }
};

export default textToSpeech;

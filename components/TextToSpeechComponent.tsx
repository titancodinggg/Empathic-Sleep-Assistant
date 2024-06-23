import React, { useState } from "react";
import textToSpeech from "../lib/tts/textToSpeech";
import { LmntVoice, SpeechSynthesisOptions } from "../lib/tts/interfaces";
import Player from "react-player"; // Assuming you use react-player for audio playback

const TextToSpeechComponent: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [voice, setVoice] = useState<string>("lily");
  const [audioData, setAudioData] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVoice(event.target.value);
  };

  const handleGenerateSpeech = async () => {
    try {
      const audio = await textToSpeech({ text, voice });
      setAudioData(audio);
      setError(null);
    } catch (error) {
      setError("Error generating speech!");
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <select value={voice} onChange={handleVoiceChange}>
        <option value="lily">Lily</option>
        <option value="daniel">Daniel</option>
        {/* Add more options for available voices */}
      </select>
      <button onClick={handleGenerateSpeech}>Generate Speech</button>
      {error && <p>Error: {error}</p>}
      {audioData && (
        <Player
          url={URL.createObjectURL(
            new Blob([audioData], { type: "audio/mpeg" })
          )}
        />
      )}
    </div>
  );
};

export default TextToSpeechComponent;

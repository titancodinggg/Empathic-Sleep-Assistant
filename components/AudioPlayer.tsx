// components/AudioPlayer.tsx
import React, { useState } from "react";
import { fetchAudioFile } from "../lib/tts/audioService";
import AudioPlayer from "react-audio-player";

const AudioPlayerComponent: React.FC = () => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  const handleFetchAudio = async () => {
    try {
      const audioBlob = await fetchAudioFile();
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchAudio}>Fetch and Play Audio</button>
      {audioSrc && <AudioPlayer src={audioSrc} controls autoPlay />}
    </div>
  );
};

export default AudioPlayerComponent;

// components/AudioPlayer.tsx
import React, { useEffect, useState } from "react";
import { fetchAudioFile } from "../lib/tts/audioService";
import AudioPlayer from "react-audio-player";

type AudioProps = {
  message: string
};

const AudioPlayerComponent = ({message}:AudioProps) => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  useEffect(() => {
    handleFetchAudio(message);
  }, []);

  const handleFetchAudio = async (audioText: String) => {
    try {
      const audioBlob = await fetchAudioFile(audioText);
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  return (
    <div>
      {/* <button onClick={handleFetchAudio()}>Fetch and Play Audio</button> */}
      {audioSrc && <AudioPlayer src={audioSrc} controls={false} autoPlay />}
    </div>
  );
};

export default AudioPlayerComponent;

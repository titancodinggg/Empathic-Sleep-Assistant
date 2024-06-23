// services/audioService.ts
import axios from "axios";

const API_URL = "https://api.lmnt.com/v1/ai/speech";

export const fetchAudioFile = async (audioText: String): Promise<Blob> => {
  const response = await axios.get(API_URL, {
    responseType: "blob",
    headers: {
      "X-API-Key": "1d17194e363f41ce86fa97e7b5f738b5",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    params: {
      voice: "amy",
      text: audioText,
    },
  });
  console.log(response);
  //let blobData = response.data;
  return response.data;
};

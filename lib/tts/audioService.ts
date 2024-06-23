// services/audioService.ts
import axios from "axios";

const API_URL = "https://api.lmnt.com/v1/ai/speech";

export const fetchAudioFile = async (): Promise<Blob> => {
  const response = await axios.get(API_URL, {
    responseType: "blob",
    headers: {
      "X-API-Key": "1d17194e363f41ce86fa97e7b5f738b5",
    },
    params: {
      voice: "amy",
      text: "hello I am doing great",
    },
  });
  console.log(response);
  //let blobData = response.data;
  return response.data;
};

import { GetServerSideProps } from "next";
import Speech from "lmnt-node"; // Assuming lmnt-node is modified or works server-side

export async function getServerSideProps(context: any) {
  const text = "This is some text to convert to speech.";
  const voice = "lily";

  const speech = new Speech("1d17194e363f41ce86fa97e7b5f738b5");
  const synthesis = await speech.synthesize(text, voice);
  const audioData = synthesis.audio;

  return {
    props: {
      audioData,
    },
  };
}

const MyComponent = ({ audioData: any }) => {
  return (
    <div>
      <Player
        url={URL.createObjectURL(new Blob([audioData], { type: "audio/mpeg" }))}
        controls
      />
    </div>
  );
};

export default MyComponent;

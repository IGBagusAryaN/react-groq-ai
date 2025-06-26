import { useState } from "react";
import "./App.css";
import LogoAnimation from "./lottie/logo";
import { requesToGroqAi } from "./utils/groq";
import { Light as SyntaxHighlight } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("");
  const handleSubmit = async () => {
    const ai = await requesToGroqAi(content.value);
    setData(ai);
  };

  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-start items-center max-w-xl w-full mx-auto">
        <LogoAnimation />
        <form className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Masukan prompt..."
            id="content"
            className="border border-gray-300 rounded-md py-2 px-4"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-sky-500 text-white font-medium cursor-pointer py-2 rounded-md hover:bg-sky-400 "
          >
            Kirim
          </button>
        </form>
        <div className="max-w-xl w-full mx-auto rounded-md">
         {data ?  <SyntaxHighlight
            language="swift"
            style={darcula}
            wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              borderRadius: '0.5rem', 
            }}
          >
            {data}
          </SyntaxHighlight> : null}
        </div>
      </div>
    </>
  );
}

export default App;

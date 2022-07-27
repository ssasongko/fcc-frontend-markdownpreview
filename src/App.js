import { useState, useEffect } from "react"
import { marked } from "marked"

import INITIAL_MARKDOWN from "./utils/markdown"

const App = () => {

  // belum paham
  marked.setOptions({
    breaks: true
  });

  const [textArea, setTextArea] = useState(INITIAL_MARKDOWN)
  
  useEffect(()=>{
    console.info("success update")
  },[textArea])

  return (
    <div className="w-full h-full flex mt-10">
      <div className="w-1/2 border">
        <textarea 
          id="editor" 
          className="w-full p-3" 
          rows="30" 
          cols="100" 
          onChange={(e)=>{setTextArea(e.target.value)}}>
            {textArea}
          </textarea>
      </div>
      <div 
        id="preview"
        className="w-1/2 border p-3"
        dangerouslySetInnerHTML={{
        __html: marked(textArea,),
        }}
        >
      </div>
    </div>
  );
}

export default App;

import React, { useRef, useState, useEffect } from "react";
import d2i from "dom-to-image";

function App() {
  const targetDom = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    d2i.toPng(targetDom.current).then((url) => setImageUrl(url));
  }, []);

  return (
    <div>
      <div ref={targetDom}>
        <h1>이 글자는 테스트 용 글자입니다</h1>
      </div>
      {imageUrl && <img src={imageUrl} alt="lyric" />}
    </div>
  );
}

export default App;

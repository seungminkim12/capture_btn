import React from "react";
import html2canvas from "html2canvas";

function App() {
  const captureClicked = (event) => {
    html2canvas(document.querySelector("#myCanvas"), {}).then((canvas) => {
      saveAs(canvas.toDataURL(), "sdf.png");
    });
  };
  const saveAs = (uri, filename) => {
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  return (
    <>
      <div
        className="container"
        
        style={{ border: "1px solid pink", width: "350px", height: "350px" ,backgroundColor:"pink"}}
      >
        myCanvas
        <div
          className="square"
          id="myCanvas"
          style={{ border: "1px solid aqua", width: "96px", height: "48px",backgroundColor:"aqua" }}
        >
          square
        </div>
      </div>
      <div>
      <button onClick={captureClicked}>Capture</button>
      </div>
    </>
  );
}

export default App;

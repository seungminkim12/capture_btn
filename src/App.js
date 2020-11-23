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
        id="myCanvas"
        style={{ border: "1px solid pink", width: "350px", height: "300px" }}
      >
        <div
          className="square"
          style={{ border: "1px solid aqua", width: "300px", height: "350px" }}
        >
          square
        </div>
      </div>
      <button onClick={captureClicked}>Capture</button>
    </>
  );
}

export default App;

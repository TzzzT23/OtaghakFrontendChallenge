const streamToText = async (stream: ReadableStream<Uint8Array>) => {
  let result = "";
  const transformStream = new TextDecoderStream();
  const reader = stream.pipeThrough(transformStream).getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    result += value;
  }
  return result;
};

const handleSprite = () => {
  const myDiv =
    document.getElementById("div_id") || document.createElement("div");
  myDiv.id = "div_id";
  myDiv.setAttribute("hidden", "true");

  fetch("/sprite.svg").then(async (res) => {
    myDiv.innerHTML = await streamToText(
      res.body as ReadableStream<Uint8Array>
    );
    document.body.appendChild(myDiv);
  });
};

export default handleSprite;

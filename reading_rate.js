function readingRate(textContainerID) {
  if (typeof textContainerID !== "string" || textContainerID.length === 0)
    throw new Error("Parametro 'textContainerID' inválido");
  let readingRateInSeconds = 0;
  const textContainer = window.document.getElementById(textContainerID);
  const content = textContainer.innerText;
  const wordCount = content.split(" ").length;
  readingRateInSeconds = (wordCount*60)/200;
  return readingRateInSeconds;
}
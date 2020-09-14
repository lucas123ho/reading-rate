function readingRate(textContainerID) {
  // Validação
  if (typeof textContainerID !== "string" || textContainerID.length === 0)
    throw new Error("Parametro 'textContainerID' inválido");

  let readingRateInSeconds = 0;
  // Recuperando elemento HTML
  const textContainer = window.document.getElementById(textContainerID);
  // Pegando todos os textos
  const content = textContainer.innerText;
  // Quantidade de palavras do texto
  const wordCount = content.split(" ").length;
  // Processando o tempo de leitura
  readingRateInSeconds = (wordCount*60)/200;

  return readingRateInSeconds;
}

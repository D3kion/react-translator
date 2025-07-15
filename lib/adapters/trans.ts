// const getTranslation = async (
//   text: string | string[],
//   from?: language,
//   to?: language,
// ) => throttle(async () => {
//   const chunks = chunkRequest(text as string, CHARACTER_LIMIT);
//   const translations = await Promise.all(chunks.map(async (chunk) => {
//     try {
//       //  translating happens here. ✨ bing! ✨
//       const translation = await translate(chunk, from, to);
//       return JSON.parse(translation)?.text ?? '';
//     } catch (err) {
//       throw getErrorInTranslationMessage(err);
//     }
//   }));
//   const translatedText = translations.join(' ');
//   return translatedText;
// }, DEBOUNCE_RATE)();

// const chunkRequest = (
//   text: string,
//   chunkSize: number = 0,
// ) => {
//   const chunks = [];

//   for (let i = 0; i < text.length;) {
//     const endIndex = i + chunkSize;

//     //  slices at last full sentences (within chunkSize)
//     //  to aid better translation
//     const endIndexFullSentence = (Math.min(endIndex, text.lastIndexOf('.', endIndex - 1) + 1) || endIndex);
//     const chunk = (text.slice(i, endIndexFullSentence));
//     chunks.push(chunk);

//     //  afterthough: next index is the last translated full sentence endIndex
//     i += endIndexFullSentence;
//   }

//   return chunks;
// };

// const translate = async (text: string, from?: language, to?: language) => {
//   const requestOptions = {
//     credentials: 'omit',
//     mode: 'cors',
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${SERVER_TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(
//       {
//         text,
//         from,
//         to,
//       },
//     ),
//   } as RequestInit;

//   let response = await fetch(SERVER_URL || PROXY_URL, requestOptions);

//   if (isBadResponse(response)) response = await fetch(SERVER_URL || PROXY_URL_ALT, requestOptions);

//   if (isBadResponse(response)) {
//     // unstable (fallback) server
//     response = await fetch(SERVER_URL || PROXY_URL_RENDER, requestOptions);
//   }

//   if (response.status === 200) return response.json();

//   const error = new Error(`${response.status} - ${response.statusText}`);
//   throw getErrorInTranslationMessage(error);
// };

self.onmessage = async (event: MessageEvent<Parameters<typeof fetch>>) => {
  try {
    const [input, init] = event.data;
    const res = await fetch(input, { ...(init ?? {}), mode: "same-origin" });
    self.postMessage(res);
  } catch (error: unknown) {
    self.postMessage(error);
  }
};

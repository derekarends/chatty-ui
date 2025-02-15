const host = "http://localhost:5173"
const apiHost = "http://localhost:5279";
export const env = {
  azure: {
    clientId: "",
    authority: "",
  },
  host,
  api: {
    chat: `${apiHost}/api/chat`,
  },
  signalr: {
    hubUrl: `${apiHost}/hubs/chat`,
  },
};

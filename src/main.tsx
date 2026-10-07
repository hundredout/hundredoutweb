
  import { createRoot } from "react-dom/client";
  import { initBotId } from "botid/client/core";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  initBotId({ protect: [{ path: "/api/subscribe", method: "POST" }] });

  createRoot(document.getElementById("root")!).render(<App />);
  
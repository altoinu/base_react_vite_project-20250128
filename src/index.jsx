import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Main() {
  return <h1>Hello from React!!!</h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
);

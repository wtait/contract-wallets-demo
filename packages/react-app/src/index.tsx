import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StyledEngineProvider } from "@mui/joy/styles";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
);

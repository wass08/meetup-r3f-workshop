import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfiguratorProvider } from "./hooks/useConfigurator";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ConfiguratorProvider>
        <App />
      </ConfiguratorProvider>
    </ChakraProvider>
  </React.StrictMode>
);

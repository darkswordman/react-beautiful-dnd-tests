import React from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

import "./App.css";
import { QuoteApp } from "./components/basic-vertical-list";
import { BasicTable } from "./components/basic-table";

const engine = new Styletron();
const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BasicTable />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;

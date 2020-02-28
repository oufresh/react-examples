import * as React from "react";
import { Header } from "./Header";
import appStyles from "./App.module.css";

export default function App() {
  return (
    <div className={appStyles.App}>
      <Header />
      <main className={appStyles.Main}></main>
    </div>
  );
}

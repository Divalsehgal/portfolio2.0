import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DATA from "../data.json";
import MentionBox from "./components/MentionBox/MentionBox";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};
function App() {
  return (
    <>
      <MentionBox data={DATA} />
    </>
  )
}

export default App;

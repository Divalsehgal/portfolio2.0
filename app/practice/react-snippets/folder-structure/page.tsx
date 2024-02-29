'use client'
import { files } from "./files";
import Folder from "./components/Folder";

export default function page() {
  return (
    <div>
      <div className="container">
        <h1>Folder Structure</h1>
      </div>
      <Folder {...files} />
    </div>
  );
}

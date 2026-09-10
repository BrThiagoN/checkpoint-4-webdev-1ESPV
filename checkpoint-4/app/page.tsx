import { Playwrite_CA } from "next/font/google";
import Image from "next/image";

import Notation from "./components/notation";

export default function Home() {
  return (
    <div>
      <header className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold">HARD NOTATION</h1>
      </header>
      <Notation />
    </div>

  );
}

import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      Practice
      <Link href="/practice/react-snippets">React snippets</Link>

    </div>
  );
}

export default page;

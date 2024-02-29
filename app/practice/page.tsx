import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Link href="/practice/react-snippets"><Button>React snippets</Button></Link>

    </div>
  );
}

export default page;

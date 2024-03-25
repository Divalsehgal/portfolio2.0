import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";

type Props = {};

function Page({}: Props) {
const defaultTab = "react-snippets";
  return (
    <div className="container h-screen">
      <Tabs defaultValue={defaultTab} className="">
        <TabsList>
          <TabsTrigger value="react-snippets">React snippets</TabsTrigger>
          <TabsTrigger value="javascript-problems">
            Javascript problems
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="react-snippets"
          className="text-tertiary-light dark:text-tertiary-dark"
        >
          <Link href="/practice/react-snippets">
            <Button>React snippets</Button>
          </Link>
        </TabsContent>
        <TabsContent
          value="javascript-problems"
          className="text-tertiary-light dark:text-tertiary-dark"
        >
          <Link href="/practice/javascript-problems">
            <Button>JavaScript problems</Button>
          </Link>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Page;

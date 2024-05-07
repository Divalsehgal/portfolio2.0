import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";


function Page() {
  const defaultTab = "react-snippets";
  return (
      <Tabs defaultValue={defaultTab} className="">
        <TabsList className="">
          <TabsTrigger value="react-snippets">React snippets</TabsTrigger>
          <TabsTrigger value="javascript-problems">
            Javascript problems
          </TabsTrigger>
        </TabsList>
        <section className="mt-8">
          <TabsContent
            value="react-snippets"
            className="text-tertiary-light dark:text-tertiary-dark "
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
        </section>
      </Tabs>
  );
}

export default Page;

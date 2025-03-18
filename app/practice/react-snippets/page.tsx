import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { questionsArray } from "@/constants";
import React from "react";

type Props = {};

function Page({}: Props) {
  return (
    <div className="p-10 container flex  gap-3 flex-wrap border border-secondary-light dark:border-secondary-dark">
      {questionsArray?.map((snippets) => {
        return (
          <React.Fragment key={snippets?.id}>
            <Link href={`/practice/react-snippets/${snippets?.linkUrl}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{snippets?.file}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p></p>
                </CardContent>
                <CardFooter>
                  <p></p>
                </CardFooter>
              </Card>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Page;

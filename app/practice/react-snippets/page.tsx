import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

function page({}: Props) {

const questionsArray = [
  {
    id: "1",
    file: "Type Writer Effect",
    linkUrl: "type-writer-effect",
  },
  {
    id: "2",
    file: "Hacker News",
    linkUrl: "hacker-news",
  },
  ,
  {
    id: "3",
    file: "Form Validation",
    linkUrl: "form-validation",
  },
  ,
  {
    id: "4",
    file: "All CheckBoxes",
    linkUrl: "all-checkboxes",
  },
  ,
  {
    id: "5",
    file: "CountDown Timer",
    linkUrl: "timer",
  },
  {
    id: "6",
    file: "Transfer List",
    linkUrl: "transfer-list",
  },
  {
    id: "7",
    file: "Mention Box",
    linkUrl: "mention-box",
  },
  {
    id: "8",
    file: "Folder Structure",
    linkUrl: "folder-structure",
  },
  {
    id: "9",
    file: "Comment Reply Box",
    linkUrl: "comment-reply-box",
  },
];

  return (
    <div>
      {" "}
      {questionsArray.map((snippets) => {
        return (
          <React.Fragment key={snippets?.id}>
            <Link href={`/practice/react-snippets/${snippets?.linkUrl}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{snippets?.file}</CardTitle>
                  <CardDescription>Questions Description</CardDescription>
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

export default page;

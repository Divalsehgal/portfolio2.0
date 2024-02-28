import Link from "next/link";
import React from "react";

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
      {questionsArray.map((snippets) => {
        return (
          <React.Fragment key={snippets?.id}>
            <Link href={`/react-snippets/${snippets?.linkUrl}`}>
              <div className="question">
                <div className="title">{snippets?.file}</div>
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default page;

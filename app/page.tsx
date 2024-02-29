import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <PageHeader>
        <PageHeaderHeading>My Blog / Practice Questions</PageHeaderHeading>
        <PageHeaderDescription>
          Welcome here
        </PageHeaderDescription>
      </PageHeader>
    </div>
  );
}

export default page;

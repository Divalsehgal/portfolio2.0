import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Practice front end questions",
  description: "This page contains front end questions",
};

function layout({ children }: { children: React.ReactNode }) {
  return <div className="py-8 container h-screen">{children}</div>;
}

export default layout;

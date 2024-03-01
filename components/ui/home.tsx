import Image from "next/image";
import profile from "../../public/assets/profile.jpg";
import Tech from "./tech";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-header";
import { Label } from "./label";

export function RightComponent() {
  return (
    <div className="md:w-7/12 flex flex-col justify-center items-center">
      {/* Introduction */}
      <PageHeader>
        <PageHeaderHeading>My Name is Dival</PageHeaderHeading>
        <PageHeaderDescription>
          Welcome to my corner of the web, where I share my insights,
          experiences, and projects.
        </PageHeaderDescription>
      </PageHeader>

      {/* Skills logos */}
      <Tech />
    </div>
  );
}





type Props = {};

function Home() {
  return (
    <div className="flex md:justify-center md:items-center">
      <div className="md:w-full md:flex md:justify-center md:items-center">
    
        <RightComponent />
      </div>
    </div>
  );
}
export default Home;

import { useState } from "react";
import Icon from "./Icon";
import { FileProps } from "../files";

const Folder  = (props: FileProps) => {
  const { name, isFolder, children } = props;
  console.log(props)
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {isFolder ? (
          open ? (
            <Icon
              style={{
                height: "10px",
                width: "10px",
              }}
              name={"caretDown"}
              onClick={() => setOpen(false)}
            />
          ) : (
            <Icon
              name={"caretRight"}
              style={{
                height: "10px",
                width: "10px",
              }}
              onClick={() => setOpen(true)}
            />
          )
        ) : (
          ""
        )}
        {name}
      </div>

      <div>
        {isFolder &&
          open &&
          children &&
          children.map((f: FileProps) => {
            return <Folder key={f.name} {...f} />;
          })}
      </div>
    </>
  );
};
export default Folder;

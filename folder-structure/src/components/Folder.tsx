import { useState } from "react";
import Icon from "./Icon";
import { File } from "../files";

const Folder = (props: File) => {
  const { name, isFolder, children } = props;
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
          children.map((f: File) => {
              return <Folder key={f.name} {...f} />;
          })}
      </div>
    </>
  );
};
export default Folder;

import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./themeContext";

function Image() {
  // access the context value
  const { theme } = useContext(ThemeContext);
  console.log(`${theme}-image  image`);
  return (
    <div className={`${theme}-image  image`}>
      <div className={`${theme}-ball ball`} />
      <Button />
    </div>
  );
}

export default Image;

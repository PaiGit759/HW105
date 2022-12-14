import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Button() {
  // access the context value
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="button">
      Switch
      <span role="img" aria-label="sun">
        🌞
      </span>
      <span role="img" aria-label="moon">
        🌚
      </span>
    </button>
  );
}

export default Button;

/* 
import React from "react";
import { ThemeContextConsumer } from "./themeContext";

function Button(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <button onClick={context.toggleTheme} className="button">
          Switch
          <span role="img" aria-label="sun">
            🌞
          </span>
          <span role="img" aria-label="moon">
            🌚
          </span>
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
 */

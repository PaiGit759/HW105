import React, { useState, createContext } from "react";
// create context
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [theme, setTheme] = useState("day");
  //method to toggle theme
  const toggleTheme = () => {
    console.log("hello", "hello");
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  // console.log(`{theme}`, "hello");

  return (
    // the Provider gives access to the context to its children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };

/* import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "Day"
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
 */

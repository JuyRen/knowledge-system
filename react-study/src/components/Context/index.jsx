import React from "react";
import Toolbar from "./Toolbar";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./index";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    return (
      <>
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Toolbar />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>
      </>
    );
  }
}

import React, { useContext } from "react";
import { ThemeContext } from "./index";

// export default class ThemedButton extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     let props = this.props;
//     let theme = this.context;

//     return <button {...props} style={{ backgroundColor: theme.background }} />;
//   }
// }

export default function ThemedButton(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      {...props}
      style={{ backgroundColor: theme.background }}
      onClick={toggleTheme}
    />
    // <ThemeContext.Consumer>
    //   {({ theme, toggleTheme }) => (
    //     <button
    //       {...props}
    //       style={{ backgroundColor: theme.background }}
    //       onClick={toggleTheme}
    //     />
    //   )}
    // </ThemeContext.Consumer>
  );
}

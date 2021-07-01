import React from "react";

export const AppContext = React.createContext({
  won: false,
  lost: false,
  danger: false,
  limit: 750,
  progress: 0,
  type: "words",
  hardcore: false,
});

export function withAppContext(Component, data = {}) {
  return class extends React.Component {
    render() {
      return (
        <AppContext.Consumer>
          {(context) => <Component {...context} {...data} />}
        </AppContext.Consumer>
      );
    }
  };
}

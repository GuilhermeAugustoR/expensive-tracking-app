import React from "react";
import { IExpensiveContext, IProps } from "./expensiveContext.structure";

export const ExpensiveContext = React.createContext({} as IExpensiveContext);

const ExpensiveContextProvider: React.FC<IProps> = ({ children }) => {
  const [login, setLogin] = React.useState<boolean | undefined>(false);

  return (
    <ExpensiveContext.Provider
      value={React.useMemo(
        () => ({
          login,
          setLogin,
        }),
        [login, setLogin]
      )}
    >
      {children}
    </ExpensiveContext.Provider>
  );
};

export default ExpensiveContextProvider;

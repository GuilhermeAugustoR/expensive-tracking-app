import React from "react";

export interface IExpensiveContext {
  login: boolean | undefined;
  setLogin: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export interface IProps {
  children: React.ReactNode;
}

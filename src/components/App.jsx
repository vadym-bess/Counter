import React from "react"
import { Counter } from './Counter/Counter';


export const App = () => {
  return (
    <div>
      <Counter counter={Counter} />
    </div>
  );
};
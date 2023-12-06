import { createContext } from "react";


export const CounterContext = createContext({
    count:0,
    increment:null,
    decrement:null
});
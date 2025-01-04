// MyContextProvider.js
import React, { useState } from "react";
import MyContext from "./context";

const MyContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <MyContext.Provider value={{ count, setCount }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;

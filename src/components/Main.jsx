import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Todolist from "./todolist";
import Home from "./Home";

const Main = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Home" />
                <Tab label="Todo" />
            </Tabs>
            <div>
                {value === 0 && <Home />}
                {value === 1 && <Todolist />}
            </div>
        </div>
    );

};

export default Main;
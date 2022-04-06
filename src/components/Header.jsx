import React from "react";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

function Header() {
    return (
        <header>
            <h1>
                <TwoWheelerIcon fontSize="large" color = "action"/>
                ToDoList
            </h1>
        </header>
    )
    
}

export default Header;
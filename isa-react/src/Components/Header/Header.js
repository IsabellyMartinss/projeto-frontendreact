import React from "react";
import { EstiloHeader } from "./styled";
import { Animated } from "react-animated-css";

export function Header() {
    return (
        <Animated>
            <EstiloHeader>
                <h1>Interstellar Ships <br></br> Star Trek: Discovery</h1>
            </EstiloHeader>
        </Animated>
    )
}


import React from "react";
import { EstiloHeader } from "./styled";
import { Animated } from "react-animated-css";

export function Header() {
    return (
        <Animated>
            <EstiloHeader>
                <h1>Star Trek: Discovery<br></br>Interstellar Ships</h1>
            </EstiloHeader>
        </Animated>
    )
}


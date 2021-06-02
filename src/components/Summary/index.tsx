import React from "react";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { Container } from "./style";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt="Saida" />
                </header>
                <strong>- R$ 400.00</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 600.00</strong>
            </div>
        </Container>
    )
}
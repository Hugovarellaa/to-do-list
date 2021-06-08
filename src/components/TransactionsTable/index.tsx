import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface transition {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string
    createAt: string;
};

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<transition[]>([])
    
    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    },[])


    return (    
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createAt}</td>
                    </tr>
                    )
                })}
                  
                </tbody>
            </table>
        </Container>
    )
}
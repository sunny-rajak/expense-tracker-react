import React, { useState } from "react";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
    const [input, setInput] = useState("");
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        if (!input || !amount) return;

        const newExpense = {
            id: expenses.length + 1,
            title: input,
            amount: amount,
        };

        setExpenses([...expenses, newExpense]);
        setInput("");
        setAmount("");
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expenses) => expenses.id !== id));
    };

    return (
        <main>
            <h1>Expense Tracker</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Expense"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                />
                <button className="add" onClick={addExpense}>
                    Add Expense
                </button>
            </div>

            <ul className="expense-list">
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span>{expense.title}</span>
                        <span>{expense.amount}</span>

                        <button
                            className="delete"
                            onClick={() => deleteExpense(expense.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default ExpenseTracker;

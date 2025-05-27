

const transactions = [
    { "amount": 120.00, "date": "2024-08-01", "category": "food", "type": "expense" },
    { "amount": 2000.00, "date": "2024-08-02", "category": "income", "type": "income" },
    { "amount": 50.00, "date": "2024-08-05", "category": "entertainment", "type": "expense" },
    { "amount": 30.00, "date": "2024-08-10", "category": "transport", "type": "expense" },
    { "amount": 150.00, "date": "2024-08-15", "category": "food", "type": "expense" },
    { "amount": 80.00, "date": "2024-08-20", "category": "utilities", "type": "expense" },
    { "amount": 3000.00, "date": "2024-08-25", "category": "income", "type": "income" },
    { "amount": 75.00, "date": "2024-08-28", "category": "entertainment", "type": "expense" }
]


const displayAllTransactions  = () => {
    console.table(transactions);
}

const setChoice = (inChoice) => {

    if (inChoice == 1) {
        displayAllTransactions();
    }
    else if (inChoice == 2) {
        console.log("EHELL");
    }   

}

const newArray = transactions.map( category in )

console.log("1. Display 2. ---- 3. ----")
const choice = prompt("Enter a option: ");
// const choice = 1;
setChoice(choice);




const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");
let transactions=localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
transactionFormEl.addEventListener("submit", addTransaction);
function addTransaction(e) {
    e.preventDefault();
    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value.trim());
    if(description === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }
    transactions.push({ id:Date.now(),description:description,amount:amount });
    localStorage.setItem("transactions", JSON.stringify(transactions));
    descriptionEl.value = "";
    amountEl.value = "";
    renderTransactions();
    updateBalance();
}
function renderTransactions() {
    transactionListEl.innerHTML = "";
    const sortedTransactions = transactions.sort((a, b) => b.id - a.id);
    sortedTransactions.forEach(transaction => {
        createTransactionElement(transaction);
    })
}
function createTransactionElement(transaction) {
    const transactionEl = document.createElement("li");
    transactionEl.classList.add("transaction");
    transactionEl.classList.add(transaction.amount < 0 ? "expense" : "income");
    transactionEl.innerHTML = `
        ${transaction.description} <span>${transaction.amount < 0 ? "-" : "+"}${formatCurrency(transaction.amount)}</span>
        <button class="delete-btn" onclick="deleteTransaction(${transaction.id})" type="button">x</button>
    `;
    transactionListEl.appendChild(transactionEl);   
}
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    renderTransactions();
    updateBalance();
}
function updateBalance() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) ).toFixed(2);
    balanceEl.innerText = formatCurrency(total);
    incomeAmountEl.innerText = formatCurrency(income);
    expenseAmountEl.innerText = formatCurrency(expense);
}
function formatCurrency(amount){
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}
renderTransactions();
updateBalance();
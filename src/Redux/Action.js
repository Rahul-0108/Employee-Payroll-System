const Add_Money = "Add_Money";

const Remove_Money = "Remove_Money";

function TransactMoney(transactionType, employeeid, amount) {
  return { type: transactionType, employeeId: employeeid, money: amount };
}

export { Add_Money, Remove_Money, TransactMoney };

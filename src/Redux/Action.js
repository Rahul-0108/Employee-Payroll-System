const Add_Money = "Add_Money";

const Remove_Money = "Remove_Money";

const INPUT_Money = "INPUT_Money";

function TransactMoney(transactionType, employeeid, amount) {
  return { type: transactionType, employeeId: employeeid, money: amount };
}

export { Add_Money, Remove_Money, INPUT_Money, TransactMoney };

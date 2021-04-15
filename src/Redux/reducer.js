import { Add_Money, Remove_Money } from "./Action";

const initialState = { employyee1: { money: 1000 }, employyee2: { money: 1000 }, employyee3: { money: 1000 }, employyee4: { money: 1000 }, employyee5: { money: 1000 } };

export const reducer = (state = initialState, action) => {
  if (action.money === undefined || action.money === "") return state;
  const employeeData = state[action.employeeId];
  switch (action.type) {
    case Add_Money:
      return { ...state, [action.employeeId]: { money: employeeData.money + Number(action.money) } };
    case Remove_Money:
      return { ...state, [action.employeeId]: { money: employeeData.money - Number(action.money) } };
    default:
      return state;
  }
};

import { Add_Money, Remove_Money, INPUT_Money } from "./Action";

const initialState = { employyee1: { money: 1000, value: 0 }, employyee2: { money: 1000, value: 0 }, employyee3: { money: 1000, value: 0 }, employyee4: { money: 1000, value: 0 }, employyee5: { money: 1000, value: 0 } };

export const reducer = (state = initialState, action) => {
  if (action.type != INPUT_Money && (action.money === undefined || action.money === "")) return state;
  const employeeData = state[action.employeeId];
  switch (action.type) {
    case Add_Money:
      return { ...state, [action.employeeId]: { money: employeeData.money + Number(action.money), value: employeeData.value } };
    case Remove_Money:
      if (employeeData.money - Number(action.money) >= 0) return { ...state, [action.employeeId]: { money: employeeData.money - Number(action.money), value: employeeData.value } };
      else return state;
    case INPUT_Money:
      return { ...state, [action.employeeId]: { money: employeeData.money, value: action.money } };
    default:
      return state;
  }
};

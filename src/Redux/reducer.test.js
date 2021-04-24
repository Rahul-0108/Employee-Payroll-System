import { Add_Money, INPUT_Money, Remove_Money, TransactMoney } from "./Action";
import { reducer } from "./reducer";

describe("Reducer test", () => {
  it("Reducer Test", () => {
    const initialState = { employyee1: { money: 1000, value: 0 } };
    expect(reducer(initialState, TransactMoney(Add_Money, "employyee1", 1000))).toEqual({ employyee1: { money: 2000, value: 0 } });
    expect(reducer(initialState, TransactMoney(Remove_Money, "employyee1", 100))).toEqual({ employyee1: { money: 900, value: 0 } });
    expect(reducer(initialState, TransactMoney(Remove_Money, "employyee1", 10000))).toEqual({ employyee1: { money: 1000, value: 0 } });
    expect(reducer(initialState, TransactMoney(INPUT_Money, "employyee1", 100))).toEqual({ employyee1: { money: 1000, value: 100 } });
    expect(reducer(initialState, TransactMoney(Remove_Money, "employyee1", ""))).toEqual({ employyee1: { money: 1000, value: 0 } });
  });
});

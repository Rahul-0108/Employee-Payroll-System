import React from "react";
import { connect } from "react-redux";
import { INPUT_Money, Add_Money, Remove_Money, TransactMoney } from "./Redux/Action";
import "./App.css";

class EmployeeUI extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ backgroundColor: "black", color: "white", padding: "8px" }}>Employee Money System</h1>
        <table className="table-bordered" style={{ width: "50%", marginTop: "8%", marginLeft: "auto", marginRight: "auto" }}>
          <thead>
            <tr>
              <th>EmployeeId</th>
              <th>Account Total Money</th>
              <th>Transaction Amount</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Employee1</td>
              <td>{this.props.state.employyee1.money}</td>
              <td>
                <input type="text" id="id1" value={this.props.state.employyee1.value} onChange={(event) => this.props.transaction(INPUT_Money, "employyee1", event.target.value)} className="form-control"></input>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Add_Money, "employyee1", this.props.state.employyee1.value)}>
                  Add
                </button>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Remove_Money, "employyee1", this.props.state.employyee1.value)}>
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>Employee2</td>
              <td>{this.props.state.employyee2.money}</td>
              <td>
                <input type="text" id="id2" value={this.props.state.employyee2.value} onChange={(event) => this.props.transaction(INPUT_Money, "employyee2", event.target.value)} className="form-control"></input>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Add_Money, "employyee2", this.props.state.employyee2.value)}>
                  Add
                </button>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Remove_Money, "employyee2", this.props.state.employyee2.value)}>
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>Employee3</td>
              <td>{this.props.state.employyee3.money}</td>
              <td>
                <input type="text" id="id3" value={this.props.state.employyee3.value} onChange={(event) => this.props.transaction(INPUT_Money, "employyee3", event.target.value)} className="form-control"></input>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Add_Money, "employyee3", this.props.state.employyee3.value)}>
                  Add
                </button>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Remove_Money, "employyee3", this.props.state.employyee3.value)}>
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>Employee4</td>
              <td>{this.props.state.employyee4.money}</td>
              <td>
                <input type="text" id="id4" value={this.props.state.employyee4.value} onChange={(event) => this.props.transaction(INPUT_Money, "employyee4", event.target.value)} className="form-control"></input>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Add_Money, "employyee4", this.props.state.employyee4.value)}>
                  Add
                </button>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Remove_Money, "employyee4", this.props.state.employyee4.value)}>
                  Remove
                </button>
              </td>
            </tr>
            <tr>
              <td>Employee5</td>
              <td>{this.props.state.employyee5.money}</td>
              <td>
                <input type="text" id="id5" value={this.props.state.employyee5.value} onChange={(event) => this.props.transaction(INPUT_Money, "employyee5", event.target.value)} className="form-control"></input>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Add_Money, "employyee5", this.props.state.employyee5.value)}>
                  Add
                </button>
              </td>
              <td>
                <button style={{ borderWidth: "0px" }} onClick={() => this.props.transaction(Remove_Money, "employyee5", this.props.state.employyee5.value)}>
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    transaction: (transactionType, employeeid, amount) => {
      dispatch(TransactMoney(transactionType, employeeid, amount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeUI);

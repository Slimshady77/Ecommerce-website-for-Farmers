import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreator } from "./State/Actions/index";
import { useSelector } from "react-redux";

const Balance = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreator, dispatch);
  const amount = useSelector((state) => state.amount);

  const withdrawMoney = (amountToWithdraw) => {
    if (amount - amountToWithdraw >= 0) {
      action.withdrawMoney(amountToWithdraw);
    } else {
      console.log("Insufficient balance.");
    }
  };

  return (
    <>
      <div>
        {/* <h1>Deposit/Withdraw Money</h1> */}
        <button className="btn btn-primary mx-3" onClick={() => withdrawMoney(1)}>
          -
        </button>
        <button disabled={true} className="btn btn-primary">
          Quanitity: {amount}
        </button>
        <button className="btn btn-primary mx-3" onClick={() => action.depositMoney(1)}>
          +
        </button>
      </div>
    </>
  );
};

export default Balance;

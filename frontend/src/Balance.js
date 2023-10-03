import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreator } from "./State/Actions/index";

const Balance = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreator, dispatch);

  return (
    <>
      <div>
        {/* <h1>Deposite/Withdraw Money</h1> */}
        <button
          className="btn btn-primary mx-3"
          onClick={() => action.withdrawMoney(100)}
        >
          -
        </button>
        Update Balance
        <button
          className="btn btn-primary mx-3"
          onClick={() => action.depositMoney(100)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Balance;

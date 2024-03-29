import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreator } from "./State/Actions/index";
import { useSelector } from "react-redux";
import Product from "./Product";

const Balance = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreator, dispatch);
  const amount = useSelector((state) => state.amount);

  const withdrawMoney = (amountToWithdraw) => {
    if (amount - amountToWithdraw >= 1) {
      action.withdrawMoney(amountToWithdraw);
    } else {
      console.log("Insufficient balance.");
    }
  };
  const depositMoney = (amountToDeposite) => {
    console.log(Product.products);
    if (amount + amountToDeposite >= Product.products) {
      action.depositMoney(amountToDeposite);
    } else {
      console.log("Insufficient balance.");
    }
  };

  return (
    <>
      <div>
        {/* <h1>Deposit/Withdraw Money</h1> */}
        <button
          className="btn btn-primary mx-3"
          onClick={() => withdrawMoney(1)}
        >
          -
        </button>
        <button disabled={true} className="btn btn-primary">
          Quanitity: {amount}
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => action.depositMoney(1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Balance;

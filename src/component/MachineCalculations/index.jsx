import React, { useContext } from "react";
import "./index.css";
import { DataContext } from "../../store";
function MachineCalculations({ shift, machine }) {
  const { data } = useContext(DataContext);
  const {
    totalPriceMS,
    totalPriceHSD,
    totalSaleMS,
    totalSaleHSD,
    totalPaytm,
    totalBorrowings,
    totalSpendings,
    totalDeposits,
  } = data?.[shift]?.[machine];
  return (
    <div className="machine-calculations-container">
      <div className="total-fuel-calculations-container">
        <div className="total-fuel-calculations">
          <span>Total MS Sale: {totalSaleMS} litres</span>
          <span>Total MS Price: Rs {totalPriceMS}</span>
        </div>
        <div className="total-fuel-calculations">
          <span>Total HSD Sale: {totalSaleHSD} litres</span>
          <span>Total HSD Price: Rs {totalPriceHSD}</span>
        </div>
      </div>
      <div className="total-fuel-calculations-container-sub">
        <span>{"Total Paytm : "}</span>
        <span>Rs {totalPaytm}</span>
      </div>
      <div className="total-fuel-calculations-container-sub">
        <span>{"Total Borrowings : "}</span>
        <span>Rs {totalBorrowings}</span>
      </div>
      <div className="total-fuel-calculations-container-sub">
        <span>{"Total Spendings : "}</span>
        <span>Rs {totalSpendings}</span>
      </div>
      <div className="total-fuel-calculations-container-sub">
        <span>{"Total Deposits : "}</span>
        <span>Rs {totalDeposits}</span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>{"Total Sale Price ( MS Price + HSD Price ) : "}</span>
        <span className="highlight-totals">
          Rs {parseFloat(totalPriceHSD + totalPriceMS).toFixed(2)}
        </span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>{"( Total Sale Price - Paytm  ) : "}</span>
        <span className="highlight-totals">
          Rs {parseFloat(totalPriceHSD + totalPriceMS - totalPaytm).toFixed(2)}
        </span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>{"( Total Sale Price - Paytm - Borrowings ) : "}</span>
        <span className="highlight-totals">
          Rs{" "}
          {parseFloat(
            totalPriceHSD + totalPriceMS - totalPaytm - totalBorrowings
          ).toFixed(2)}
        </span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>
          {"( Total Sale Price - Paytm - Borrowings - Spendings ) : "}
        </span>
        <span className="highlight-totals">
          Rs{" "}
          {parseFloat(
            totalPriceHSD +
              totalPriceMS -
              totalPaytm -
              totalBorrowings -
              totalSpendings
          ).toFixed(2)}
        </span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>
          {
            "( Total Sale Price - Paytm - Borrowings - Spendings - Deposits ) : "
          }
        </span>
        <span className="highlight-totals">
          Rs{" "}
          {parseFloat(
            totalPriceHSD +
              totalPriceMS -
              totalPaytm -
              totalBorrowings -
              totalSpendings -
              totalDeposits
          ).toFixed(2)}
        </span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>Due {machine === "machine1" ? "Machine 1" : "Machine 2"} </span>
        <span className="highlight-totals">
          Rs{" "}
          {parseFloat(
            totalPriceHSD +
              totalPriceMS -
              totalPaytm -
              totalBorrowings -
              totalSpendings -
              totalDeposits
          ).toFixed(2)}
        </span>
      </div>
      <div className="total-fuel-calculations-container">
        <span>Total Due ( Machine 1 + Machine 2 ) : </span>
        <span className="highlight-totals">
          Rs{" "}
          {parseFloat(
            totalPriceHSD +
              totalPriceMS -
              totalPaytm -
              totalBorrowings -
              totalSpendings -
              totalDeposits
          ).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default MachineCalculations;

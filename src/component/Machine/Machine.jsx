import React, { useCallback, useEffect, useState } from "react";
import "./Machine.css";
import MachineForm from "../MachineForm";
import InputList from "../InputList";
import InputListWithDetails from "../InputListWithDetails";

function Machine({ number }) {
  const [totalSpending, setTotalSpending] = useState(0.0);
  const [totalPaytm, setTotalPaytm] = useState(0.0);
  const [totalBorrowing, setTotalBorrowing] = useState(0.0);
  const [totalDeposits, setTotalDeposits] = useState(0.0);
  const [totalMsSale, setTotalMsSale] = useState(0.0);
  const [totalMsPrice, setTotalMsPrice] = useState(0.0);
  const [totalHsdSale, setTotalHsdSale] = useState(0.0);
  const [totalHsdPrice, setTotalHsdPrice] = useState(0.0);
  const [totalDue, setTotalDue] = useState(0.0);
  const calculateTotalDue = useCallback(() => {
    const total =
      totalMsPrice +
      totalHsdPrice -
      totalBorrowing -
      totalDeposits -
      totalPaytm -
      totalSpending;
    setTotalDue(total);
  }, [
    totalBorrowing,
    totalDeposits,
    totalHsdPrice,
    totalMsPrice,
    totalPaytm,
    totalSpending,
  ]);
  useEffect(() => {
    calculateTotalDue();
  }, [calculateTotalDue]);
  const formatDate = () => {
    let date = new Date();
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.toLocaleString("default", { year: "numeric" });
    return day + "-" + month + "-" + year;
  };
  return (
    <div className="machine-main-container">
      <div className="machine-heading">
        <span
          style={{ fontSize: "24px", fontStyle: "italic", fontWeight: "bold" }}
        >
          Machine {number}
        </span>
        <span
          style={{ fontSize: "24px", fontStyle: "italic", fontWeight: "bold" }}
        >
          {formatDate()}
        </span>
        <span
          style={{ fontSize: "24px", fontStyle: "italic", fontWeight: "bold" }}
        >
          Total Due: {parseFloat(totalDue).toFixed(2)}
        </span>
      </div>
      <MachineForm
        key={`MS-${number}`}
        fuelType={"MS"}
        sale={totalMsSale}
        price={totalMsPrice}
        setSale={setTotalMsSale}
        setPrice={setTotalMsPrice}
      />
      <MachineForm
        key={`HSD-${number}`}
        fuelType={"HSD"}
        sale={totalHsdSale}
        price={totalHsdPrice}
        setSale={setTotalHsdSale}
        setPrice={setTotalHsdPrice}
      />
      <div className="sale-description">
        <span>{`Total Price : ${totalHsdPrice + totalMsPrice}`}</span>
      </div>
      <InputList
        key={`paytm-${number}`}
        type={"Paytm"}
        total={totalPaytm}
        setTotal={setTotalPaytm}
      />
      <InputListWithDetails
        key={`borrowings-${number}`}
        type={"Borrowings"}
        total={totalBorrowing}
        setTotal={setTotalBorrowing}
      />

      <InputListWithDetails
        key={`spendings-${number}`}
        type={"Spendings"}
        total={totalSpending}
        setTotal={setTotalSpending}
      />
      <InputList
        key={`deposits-${number}`}
        type={"Deposits"}
        total={totalDeposits}
        setTotal={setTotalDeposits}
      />
    </div>
  );
}

export default Machine;

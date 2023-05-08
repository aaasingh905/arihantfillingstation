import { TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

function MachineForm({ fuelType, sale, price, setSale, setPrice }) {
  const [closingBalanceMs, setClosingBalanceMs] = useState();
  const [openingBalanceMs, setOpeningBalanceMs] = useState();
  const [tankerMs, setTankerMs] = useState();
  const [msPrice, setMsPrice] = useState();

  const calculateMsTotal = useCallback(() => {
    if (closingBalanceMs && openingBalanceMs && msPrice) {
      const total = (closingBalanceMs - openingBalanceMs - tankerMs) * msPrice;
      setPrice(total);
    } else {
      setPrice(0.0);
    }
  }, [closingBalanceMs, openingBalanceMs, msPrice, tankerMs]);
  const calculateTotalSale = useCallback(() => {
    if (closingBalanceMs && openingBalanceMs) {
      const tanker = tankerMs > 0 ? tankerMs : 0;
      const total = closingBalanceMs - openingBalanceMs - tanker;
      setSale(total);
    } else {
      setSale(0.0);
    }
  }, [closingBalanceMs, openingBalanceMs, tankerMs]);
  useEffect(() => {
    calculateMsTotal();
    calculateTotalSale();
  }, [
    closingBalanceMs,
    openingBalanceMs,
    msPrice,
    tankerMs,
    calculateMsTotal,
    calculateTotalSale,
  ]);

  return (
    <>
      <div className="machine-balance-input">
        <TextField
          required
          id="closing-balance-ms"
          label={`Closing Balance ${fuelType}`}
          value={closingBalanceMs}
          onChange={(e) => {
            setClosingBalanceMs(e?.target?.value);
            console.log(closingBalanceMs);
          }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="opening-balance-ms"
          label={`Opening Balance ${fuelType}`}
          value={openingBalanceMs}
          onChange={(e) => {
            setOpeningBalanceMs(e?.target?.value);
            console.log(openingBalanceMs);
          }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="tanker-ms"
          label={`Tanker ${fuelType}`}
          value={tankerMs}
          onChange={(e) => {
            setTankerMs(e?.target?.value);
            console.log(tankerMs);
          }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="price-ms"
          label={`Price ${fuelType}`}
          value={msPrice}
          onChange={(e) => {
            setMsPrice(e?.target?.value);
            console.log(msPrice);
          }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="sale-description">
        <span>{`Total ${fuelType} Sale: ${sale} Ltrs`}</span>
        <span>{`Total Price: Rs ${price}`}</span>
      </div>
    </>
  );
}

export default MachineForm;

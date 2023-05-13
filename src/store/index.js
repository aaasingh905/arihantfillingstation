import React, { createContext, useState } from "react";
import { formatDate } from "../utils";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    date: new Date(),
    shift1: {
      priceMS: 0.0,
      priceHSD: 0.0,
      machine1: {
        openingBalanceHSD: 0.0,
        closingBalanceHSD: 0.0,
        openingBalanceMS: 0.0,
        closingBalanceMS: 0.0,
        tankerMS: 0.0,
        tankerHSD: 0.0,
        totalSaleMS: 0.0,
        totalSaleHSD: 0.0,
        totalPriceHSD: 0.0,
        totalPriceMS: 0.0,
        listPaytm: [],
        listBorrowings: [],
        listSpendings: [],
        listDeposits: [],
        totalPaytm: 0.0,
        totalBorrowings: 0.0,
        totalSpendings: 0.0,
        totalDeposits: 0.0,
        totalDue: 0.0,
      },
      machine2: {
        openingBalanceHSD: 0.0,
        closingBalanceHSD: 0.0,
        openingBalanceMS: 0.0,
        closingBalanceMS: 0.0,
        tankerMS: 0.0,
        tankerHSD: 0.0,
        totalSaleMS: 0.0,
        totalSaleHSD: 0.0,
        totalPriceHSD: 0.0,
        totalPriceMS: 0.0,
        listPaytm: [],
        listBorrowings: [],
        listSpendings: [],
        listDeposits: [],
        totalPaytm: 0,
        totalBorrowings: 0,
        totalSpendings: 0,
        totalDeposits: 0,
        totalDue: 0.0,
      },
    },
    shift2: {
      priceHSD: 95.0,
      priceMS: 108.0,
      machine1: {
        openingBalanceHSD: 0.0,
        closingBalanceHSD: 0.0,
        openingBalanceMS: 0.0,
        closingBalanceMS: 0.0,
        tankerMS: 0.0,
        tankerHSD: 0.0,
        totalSaleMS: 0.0,
        totalSaleHSD: 0.0,
        totalPriceHSD: 0.0,
        totalPriceMS: 0.0,
        listPaytm: [],
        listBorrowings: [],
        listSpendings: [],
        listDeposits: [],
        totalPaytm: 0,
        totalBorrowings: 0,
        totalSpendings: 0,
        totalDeposits: 0,
        totalDue: 0.0,
      },
      machine2: {
        openingBalanceHSD: 0.0,
        closingBalanceHSD: 0.0,
        openingBalanceMS: 0.0,
        closingBalanceMS: 0.0,
        tankerMS: 0.0,
        tankerHSD: 0.0,
        totalSaleMS: 0.0,
        totalSaleHSD: 0.0,
        totalPriceHSD: 0.0,
        totalPriceMS: 0.0,
        listPaytm: [],
        listBorrowings: [],
        listSpendings: [],
        listDeposits: [],
        totalPaytm: 0,
        totalBorrowings: 0,
        totalSpendings: 0,
        totalDeposits: 0,
        totalDue: 0.0,
      },
    },
  });

  const updateData = (shift, machine, key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [shift]: {
          ...prevState[shift],
          [machine]: {
            ...prevState[shift][machine],
            [key]: value,
          },
        },
      };
    });
  };

  const updateStore = (value) => {
    setData(() => value);
  };

  const updateDate = (value) => {
    setData((prevState) => {
      return {
        ...prevState,
        date: value,
      };
    });
  };
  const updatePrice = (shift, key, value) => {
    setData((prevState) => {
      return {
        ...prevState,
        [shift]: {
          ...prevState[shift],
          [key]: value,
        },
      };
    });
  };

  const contextValue = {
    data,
    updateData,
    updatePrice,
    updateDate,
    updateStore,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };

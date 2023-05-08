import { TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

function InputList({ type, total, setTotal }) {
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState();
  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter") {
      setList([...list, parseFloat(event?.target?.value)]);
      setListItem(0);
    }
  };
  useEffect(() => {
    const sum = list.reduce((partialSum, a) => partialSum + a, 0);
    setTotal(sum);
  }, [list]);
  const listUI = useMemo(() => {
    return (
      <ul className="list-ui-container">
        {list.map((ele) => {
          return <li>{ele}</li>;
        })}
      </ul>
    );
  }, [list]);
  return (
    <div className="list-main">
      <div className="list-container">
        <TextField
          required
          id="list-input"
          label={`Enter ${type} list`}
          value={listItem}
          onChange={(e) => {
            setListItem(parseFloat(e?.target?.value));
          }}
          type="number"
          onKeyUp={(event) => {
            handleKeyPressEvent(event);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <span className="list-header">{`${type} Total : ${total}`}</span>
      </div>
      {listUI}
    </div>
  );
}

export default InputList;

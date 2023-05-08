import { TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

function InputListWithDetails({ type, total, setTotal }) {
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState();
  const [comment, setComment] = useState("");
  const handleKeyPressEvent = (event) => {
    if (event.key === "Enter" && listItem > 0 && comment) {
      setList([...list, { item: parseFloat(listItem), comment: comment }]);
      setListItem(0);
      setComment("");
    }
  };
  useEffect(() => {
    let sum = 0;
    list.forEach(({ item }) => {
      console.log(item);
      sum = sum + item;
    });
    setTotal(sum);
  }, [list]);
  const listUI = useMemo(() => {
    return (
      <ul className="list-ui-container">
        {list.map(({ item, comment }) => {
          return <li>{`${item} - ${comment}`}</li>;
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
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="list-input"
          label={`Enter Name`}
          value={comment}
          onChange={(e) => {
            setComment(e?.target?.value);
          }}
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

export default InputListWithDetails;

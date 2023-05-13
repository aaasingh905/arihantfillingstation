import { DatePicker } from "antd";
import { formatDate } from "../../utils";
import axios from "axios";
import "./index.css";
import { useContext } from "react";
import { DataContext } from "../../store";
const SearchRecordInput = ({ setLoading, loading }) => {
  const { updateDate, updateStore } = useContext(DataContext);
  const onChange = (date, dateString) => {
    const tempDate = formatDate(dateString);
    console.log(tempDate);
    if (tempDate) {
      axios
        .get(`http://localhost:1333/shiftdata/${tempDate}`)
        .then((res) => {
          if (res.status === 200) {
            updateStore(res.data);
          }
          if (res.status === 201) {
            updateDate(tempDate);
          }
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };
  return (
    <div className="search-record-container">
      <DatePicker onChange={onChange} />
    </div>
  );
};
export default SearchRecordInput;

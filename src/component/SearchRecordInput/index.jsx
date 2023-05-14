import { DatePicker } from "antd";
import { formatDate } from "../../utils";
import axios from "axios";
import "./index.css";
import { useContext } from "react";
import { DataContext } from "../../store";
import { initialData, urlProd } from "../../constants";
const SearchRecordInput = ({ setLoading, loading }) => {
  const { updateStore } = useContext(DataContext);
  const onChange = (date, dateString) => {
    const tempDate = formatDate(dateString);
    if (tempDate) {
      axios
        .get(`${urlProd}/shiftdata/${tempDate}`)
        .then((res) => {
          if (res.status === 200) {
            updateStore(res.data);
          }
          if (res.status === 201) {
            updateStore({ ...initialData, date: res.data.date });
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      setLoading(true);
    }
  };
  return (
    <div className="search-record-container">
      <DatePicker onChange={onChange} />
    </div>
  );
};
export default SearchRecordInput;

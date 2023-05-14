import React, { useContext } from "react";
import SearchRecordInput from "../SearchRecordInput";
import { Col, Row } from "antd";
import Summary from "../Summary";
import { UserContext } from "../../store/UserStore";
import { Navigate } from "react-router-dom";

function ViewRecord() {
  const [loading, setLoading] = React.useState(true);
  const {
    user: { token },
  } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="view-record-main-container">
      <Row justify={"center"}>
        <Col span={3}>
          <SearchRecordInput setLoading={setLoading} />
        </Col>
      </Row>
      {!loading && (
        <>
          <Row justify={"start"}>
            <Col span={12} style={{ padding: "15px" }}>
              <Summary shift={"shift1"} machine={"machine1"} />
            </Col>
            <Col span={12} style={{ padding: "15px" }}>
              <Summary shift={"shift1"} machine={"machine2"} />
            </Col>
          </Row>
          <Row justify={"start"}>
            <Col span={12} style={{ padding: "15px" }}>
              <Summary shift={"shift2"} machine={"machine1"} />
            </Col>
            <Col span={12} style={{ padding: "15px" }}>
              <Summary shift={"shift2"} machine={"machine2"} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default ViewRecord;

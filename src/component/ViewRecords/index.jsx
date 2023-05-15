import React, { useContext } from "react";
import SearchRecordInput from "../SearchRecordInput";
import { Col, Collapse, Row } from "antd";
import Summary from "../Summary";
import { UserContext } from "../../store/UserStore";
import { Navigate } from "react-router-dom";

function ViewRecord() {
  const { Panel } = Collapse;
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
        <Col span={4}>
          <SearchRecordInput setLoading={setLoading} />
        </Col>
      </Row>
      {!loading && (
        <Collapse accordion defaultActiveKey={["shift1"]}>
          <Panel
            header={
              <div className="panel-header-details">
                <span>{"Shift 1"}</span>
              </div>
            }
            key="shift1"
          >
            <Row justify={"start"}>
              <Col span={12} style={{ padding: "15px" }}>
                <Summary shift={"shift1"} machine={"machine1"} />
              </Col>
              <Col span={12} style={{ padding: "15px" }}>
                <Summary shift={"shift1"} machine={"machine2"} />
              </Col>
            </Row>
          </Panel>
          <Panel
            header={
              <div className="panel-header-details">
                <span>{"Shift 2"}</span>
              </div>
            }
            key="shift2"
          >
            <Row justify={"start"}>
              <Col span={12} style={{ padding: "15px" }}>
                <Summary shift={"shift2"} machine={"machine1"} />
              </Col>
              <Col span={12} style={{ padding: "15px" }}>
                <Summary shift={"shift2"} machine={"machine2"} />
              </Col>
            </Row>
          </Panel>
        </Collapse>
      )}
    </div>
  );
}

export default ViewRecord;

import * as React from "react";
import Machine from "./component/Machine/Machine";
import SearchRecordInput from "./component/SearchRecordInput";
import { Button, Col, Radio, Row, Tabs } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import Header from "./component/Header";
import "./App.css";
import MachineCalculations from "./component/MachineCalculations";
import axios from "axios";
import { DataContext } from "./store";

export default function FullWidthGrid() {
  const [loading, setLoading] = React.useState(true);
  const [shift, setShift] = React.useState(1);
  const { data } = React.useContext(DataContext);
  const tabItems = [
    {
      label: `Machine 1`,
      key: "machine1",
      children: (
        <Row justify="start">
          <Col span={12}>
            <Machine
              key={"machine1"}
              machine={"machine1"}
              shift={`shift${shift}`}
            />
          </Col>
          <Col span={12}>
            <MachineCalculations
              key={"machine1"}
              machine={"machine1"}
              shift={`shift${shift}`}
            />
          </Col>
        </Row>
      ),
    },
    {
      label: `Machine 2`,
      key: "machine2",
      children: (
        <Row justify="start">
          <Col span={12}>
            <Machine
              key={"machine2"}
              machine={"machine2"}
              shift={`shift${shift}`}
            />
          </Col>
          <Col span={11}>
            <MachineCalculations
              key={"machine2"}
              machine={"machine2"}
              shift={`shift${shift}`}
            />
          </Col>
        </Row>
      ),
    },
  ];
  const saveRecord = () => {
    axios
      .post("https://arihant-filling-station-be.onrender.com/shiftdata", data)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <Row justify={"center"}>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <div className="app-container">
        <Row justify={"space"}>
          <Col span={8}>
            <SearchRecordInput setLoading={setLoading} />
          </Col>
          {!loading && (
            <>
              <Col span={8}>
                <div className="search-record-container1">
                  <Radio.Group
                    onChange={(e) => setShift(e?.target.value)}
                    value={shift}
                  >
                    <Radio value={1}>Shift 1</Radio>
                    <Radio value={2}>Shift 2</Radio>
                  </Radio.Group>
                </div>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  style={{ float: "right", background: "green" }}
                  icon={<SaveOutlined />}
                  onClick={saveRecord}
                >
                  Save
                </Button>
              </Col>
            </>
          )}
        </Row>
        {!loading && (
          <Row justify={"center"}>
            <Col span={24}>
              <Tabs
                key={shift}
                defaultActiveKey="1"
                centered
                items={tabItems}
                style={{ border: "none" }}
              />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
}

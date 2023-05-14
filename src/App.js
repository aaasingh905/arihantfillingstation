import * as React from "react";
import { Col, Row } from "antd";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import AddRecord from "./component/AddRecord";
import ViewRecord from "./component/ViewRecords";
import Login from "./component/Login";

export default function FullWidthGrid() {
  return (
    <Router>
      <Row justify={"center"}>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<AddRecord />} />
        <Route path="/view" element={<ViewRecord />} />
      </Routes>
    </Router>
  );
}

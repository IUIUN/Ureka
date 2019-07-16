import React from 'react';
import { Col, Row } from 'antd';

export const Container = ({ children }) => {
  return (
    <Row>
      <Col xs={0} md={4}  />
      <Col xs={24} md={16}>{children}</Col>
      <Col xs={0} md={4} />
    </Row>
  );
};

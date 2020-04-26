import React from 'react';
import { Card, Col, Row, Text } from 'wix-style-react';

export default function SubmitedArea({ saved }) {
  return (
    <Card>
      <Card.Header title="Submitted Info" />
      <Card.Divider />
      <Card.Content>
        <Row>
          <Col span="6">
            <Text weight="normal">Name:</Text>
          </Col>
          <Col span="6">
            <Text weight="normal">{saved.name}</Text>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Text weight="normal">Favorite Color:</Text>
          </Col>
          <Col span="6">
            <Text weight="normal">{saved.color}</Text>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Text weight="normal">Fun Fact:</Text>
          </Col>
          <Col span="6">
            <Text weight="normal">{saved.funFact}</Text>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
}
import React from 'react';
import { Container, Box, Page, FormField, Input, InputArea, Row, Col, Card, Dropdown, Checkbox, Button } from 'wix-style-react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '',
      funFact: '',
      terms: false,
    };
  }

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { name, color, terms, funFact } = this.state;
    return (
      <Container>
        <Page>
          <Page.Header
            title="WSR Form"
            actionsBar={(
              <Box align="space-between" width="200">
                <Button skin="standard" priority="secondary">Clear</Button>
                <Button skin="standard">Submit</Button>
              </Box>
            )}
          />
          <Page.Content>
            <Row>
              <Col span={8}>
                <Card>
                  <Card.Header title="WSR Form" subtitle="Create your own page with wix-style-react" />
                  <Card.Divider />
                  <Card.Content>
                    <Row>
                      <Col span={6}>
                        <FormField label="Name" required>
                          <Input
                            size="normal"
                            placeholder="Enter a name"
                            required
                            value={name}
                            onChange={(e) => this.handleChange('name', e.target.value)}
                          />
                        </FormField>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={6}>
                        <FormField label="Favorite Color">
                          <Dropdown
                            placeholder="Select a color"
                            value={color}
                            onChange={(e) => this.handleChange('color', e.target.value)}
                            options={[
                              { id: 'red', value: 'Red' },
                              { id: 'green', value: 'Green' },
                              { id: 'blue', value: 'Blue' },
                            ]}
                          />
                        </FormField>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <Checkbox checked={terms} onChange={() => this.handleChange('terms', !terms)}>
                          I agree to the terms of use
                        </Checkbox>
                      </Col>
                      <Col span={4}>
                        <Row>
                          <Col span={6}>
                            <Button skin="standard" priority="secondary">Clear</Button>
                          </Col>
                          <Col span={6}>
                            <Button skin="standard">Submit</Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Content>
                </Card>
              </Col>
              <Col span={4}>
                <Card>
                  <Card.Header title="Extra" />
                  <Card.Divider />
                  <Card.Content>
                    <FormField label="Fun Fact">
                      <InputArea
                        placeholder="Enter something interesting"
                        value={funFact}
                        rows={4}
                        onChange={(e) => this.handleChange('funFact', e.target.value)}
                      />
                    </FormField>
                  </Card.Content>
                </Card>
              </Col>
            </Row>
          </Page.Content>
        </Page>
      </Container>
    );
  }
}

import React from 'react';
import _ from 'lodash';
import { Container, Box, Page, FormField, Input, InputArea, Row, Col, Card, Dropdown, Checkbox, Button, Text } from 'wix-style-react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: {
        name: '',
        color: '',
        funFact: '',
        terms: false,
      },
      saved: {},
    };
  }

  handleChange(key, value) {
    this.setState((currState) => {
      const nextState = _.cloneDeep(currState);
      nextState.draft[key] = value;

      return nextState;
    });
  }

  handleClear = () => {
    this.setState({
      draft: {
        name: '',
        color: '',
        funFact: '',
        terms: false,
      },
      saved: {},
    });
  };

  handleSubmit = () => {
    this.setState((currState) => {
      const nextState = _.cloneDeep(currState);
      nextState.saved = _.cloneDeep(nextState.draft);

      return nextState;
    });
  };

  render() {
    const { draft, saved } = this.state;
    const submitDisalbed = !draft.name || !draft.terms;

    return (
      <Container>
        <Page>
          <Page.Header
            title="WSR Form"
            actionsBar={(
              <Box align="space-between" width="200">
                <Button skin="standard" priority="secondary" onClick={this.handleClear}>Clear</Button>
                <Button skin="standard" disabled={submitDisalbed} onClick={this.handleSubmit}>Submit</Button>
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
                            value={draft.name}
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
                            value={draft.color}
                            onSelect={(selection) => this.handleChange('color', selection.value)}
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
                        <Checkbox checked={draft.terms} onChange={() => this.handleChange('terms', !draft.terms)}>
                          I agree to the terms of use
                        </Checkbox>
                      </Col>
                      <Col span={4}>
                        <Row>
                          <Col span={6}>
                            <Button skin="standard" priority="secondary" onClick={this.handleClear}>Clear</Button>
                          </Col>
                          <Col span={6}>
                            <Button skin="standard" disabled={submitDisalbed} onClick={this.handleSubmit}>Submit</Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Content>
                </Card>
              </Col>
              <Col span={4}>
                <Row>
                  <Col>
                    <Card>
                      <Card.Header title="Extra" />
                      <Card.Divider />
                      <Card.Content>
                        <FormField label="Fun Fact">
                          <InputArea
                            placeholder="Enter something interesting"
                            value={draft.funFact}
                            rows={4}
                            onChange={(e) => this.handleChange('funFact', e.target.value)}
                          />
                        </FormField>
                      </Card.Content>
                    </Card>
                  </Col>
                </Row>
                {!_.isEmpty(saved) && (
                  <Row>
                    <Col>
                      <Card>
                        <Card.Header title="Submited Info" />
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
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </Page.Content>
        </Page>
      </Container>
    );
  }
}

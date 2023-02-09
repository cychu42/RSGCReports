import React from 'react';
import { Container, Form, Col } from 'react-bootstrap';

const InsurancePolicy = () => {
  return (
    <div>
      <Container>
        <Form>
          <h3>Insurance Policy</h3>
          {/* <Row> */}
          <Form.Group as={Col} controlId="formInsurer">
            <Form.Label>Insurer</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formInsurerName">
            <Form.Label>Name of Insurer</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formInsuranceAgent">
            <Form.Label>Agent/Broker</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* </Row> */}
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="1234 Fake St" />
          </Form.Group>
          {/* <Row> */}
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* <Form.Group as={Col} controlId="formProvince">
            <Form.Label>Province/Territory</Form.Label>
            <Form.Select defaultValue="Province">
              <option>List of provinces and territories...</option>
              <option value={}>Alberta</option>
              <option value={}>British Columbia</option>
              <option value={}>Manitoba</option>
              <option value={}>New Brunswick</option>
              <option value={}>Newfoundland and Labrador</option>
              <option value={}>Nova Scotia</option>
              <option value={}>Ontario</option>
              <option value={}>Prince Edward Island</option>
              <option value={}>Quebec</option>
              <option value={}>Saskatchewan</option>
              <option value={}>Northwest Territories</option>
              <option value={}>Nunavut</option>
              <option value={}>Yukon</option>
            </Form.Select>
          </Form.Group> */}
          <Form.Group as={Col} controlId="formPostal">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" />
            <Form.Text>
              No dashes {'"'}-{'"'} and/or spaces
            </Form.Text>
          </Form.Group>
          {/* </Row> */}
          {/* <Row> */}
          <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="4161231234" />
            <Form.Text>
              Numbers only, no dashes {'"'}-{'"'} and/or brackets {'"'}
              {'()'}
              {'"'}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} controlId="formPolicyNumber">
            <Form.Label>Policy Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* </Row> */}
          <br />
          <Button varient="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default InsurancePolicy;

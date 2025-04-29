import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack,Button,Badge,Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

const BootstrapExample = () => {
  return (
    //fragment
    <>
    {/* <React.Fragment></React.Fragment> */}
    {/* <Fragment></Fragment> */}
    <div>
      <h3 className='text-success'>Hello</h3>
      <button className='btn btn-primary'>Add</button>
      <button className='btn btn-danger'>Cancel</button>
      <hr />
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        </Stack>
        <h1>
            Example heading
            <Badge bg="secondary" as={Button}>
            New
            </Badge>
        </h1>
       
    </div>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    </>
  )
}
export default BootstrapExample

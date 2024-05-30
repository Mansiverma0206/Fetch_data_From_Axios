import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Add() {
  const [values, setValues] = useState({
    id: '',
    name: '',
    email: '',
    number: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const saveUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Update Component</h1>
      <hr />
      <div className="d-flex w-100 v-100 justify-content-center align-items-center bg-light">
        <div className="w-75 mt-5 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1 className='text-center'>Update User Details</h1>
          <Form className='d-grid gap-2' onSubmit={saveUpdate}>
            <Form.Group className="mb-3">
              <Form.Control
                type='text'
                placeholder='Enter Your id'
                value={values.id}
                onChange={e => setValues({ ...values, id: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='text'
                placeholder='Enter Your Name'
                value={values.name}
                onChange={e => setValues({ ...values, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='email'
                placeholder='Enter Your Email Address'
                value={values.email}
                onChange={e => setValues({ ...values, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type='phone'
                placeholder='Enter Your Phone number'
                value={values.number}
                onChange={e => setValues({ ...values, number: e.target.value })}
                required
              />
            </Form.Group>
            <Button type='submit' className='btn-lg' variant='warning'>Save</Button>
            <Button type='button' className='btn-lg' variant='warning' onClick={() => navigate('/')}>Back</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

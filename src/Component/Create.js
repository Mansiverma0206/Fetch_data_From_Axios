import { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Create()
{
  const [values,setValues] = useState({
    id:'',
    name : '',
    email : '',
    number : ''
  })

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",values)
    .then(res=>
      {console.log(res)
        navigate("/")
      })
    .catch(err=> console.log(err));
  }
   return<>
    <h1 style={{textAlign:"center"}}>Create Component</h1>
    <div className="d-flex w-100 v-100 justify-content-center align-items-center bg-light">
     <div className="w-75 mt-5 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1 className='text-center'>Create New User</h1>
      <Form className='d-grid gap-2 ' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
          <Form.Control type='text' placeholder='Enter Your id' onChange={e=>setValues({...values,id:e.target.value})} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder='Enter Your Name' onChange={e=>setValues({...values,name:e.target.value})} required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='email' placeholder='Enter Your Email Address' onChange={e=>setValues({...values,email:e.target.value})}required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type='phone' placeholder='Enter Your Phone number' onChange={e=>setValues({...values,number:e.target.value})}required></Form.Control>
        </Form.Group>
        <Button type='submit' className='btn-lg' variant='warning'>Save user</Button>
        {/* <Link to="/"><Button type='back' className='btn-lg'variant='warning'>Back</Button></Link>  */}
       </Form>
      </div>    
    </div>
   </>
}
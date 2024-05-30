import { useEffect ,useState} from "react";
import axios from "axios";
import { useParams ,Link } from "react-router-dom";

export default function View()
{
   const [data,setData] = useState([])
   const {id} = useParams();
   useEffect(()=>{
      axios.get("http://localhost:3000/users/"+id)
      .then(res=>setData(res.data))
      .catch(err=> console.log(err));
   },[])
   return<>
    <h1 style={{textAlign:"center"}}>View Component</h1><hr/>
    <div className="d-flex w-100 v-100 justify-content-center align-items-center bg-light">
      <div className="w-50 bordered vh-20 bg-white shadow px-4 pb-5 rounded mt-3">
       <h1>Details of User </h1>
       <div className="mb-2">
         <strong>Id : {data.id}</strong>
       </div>
       <div className="mb-2">
         <strong>Name : {data.name}</strong>
       </div>
       <div className="mb-2">
         <strong>Email : {data.email}</strong>
       </div>
       <div className="mb-2">
         <strong>Phone : {data.number}</strong>
       </div>
       <Link to={`/update/${id}`}  className='btn btn-success'>Update</Link>
       <Link to="/" className="btn btn-primary ms-3">Back</Link>
   </div>
   </div>
   </>
}
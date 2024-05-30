import { Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Update from './Component/Update';
import Create from './Component/Create';
import View from './Component/View';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App()
{
  return<>
  
  <div className="wrapper">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/view/:id' element={<View/>}/>
     </Routes>
    </div>
    </>
}


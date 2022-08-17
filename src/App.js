import logo from './logo.svg';
import Signup from './Signup';
import { Route,Routes } from 'react-router-dom';
import Signin from './Signin';
import Mainnav from './Mainnav';
import Popular from './Popular';
import Favr from './Favr';

function App() {
  return (
   <>
   <Routes>
 
   <Route exact path ="/" element ={<Signup/>}></Route>
    <Route exact path ="/signin" element ={<Signin/>}></Route>
    <Route exact path ="/mainnav" element ={<Mainnav/>}></Route>
    <Route exact path ="/popular" element ={<Popular/>}></Route>
    <Route exact path ="/favr" element ={<Favr/>}></Route>
    
   </Routes>

    

   </>
  );
}

export default App;

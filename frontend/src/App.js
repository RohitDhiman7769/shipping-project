
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Qualification from "./components/Qualification";
import Sidenavbar from "./components/Sidenavbar";
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className='container'>
        <Sidenavbar></Sidenavbar>

        <div className='main'>
            <div className='header'>
               <Header></Header>
            </div>

            <div className='data'>

               <Routes>
                    <Route exact path='/profile' Component={Profile} />
                    <Route exact path='/qualification' Component={Qualification} />
                    <Route exact path='/skills' Component={Skills}/>
                    <Route exact path='/experience' Component={Experience}/>
                    <Route exact path='/contact' Component={Contact}/>
               </Routes>
               {/* <h1>hii i am h1 tag</h1> */}
            </div>

        </div>
      

      </div>
    </>
  );
}

export default App;
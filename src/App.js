import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx';
import Friends from './Components/Friends/Friends.jsx';
import Header from './Components/Header/Header.jsx';
import Inductive from './Components/Inductive/Inductive.jsx';
import Container from './Components/Layout/Container/Container.jsx';
import AboutUser from './Components/Logged/AboutUser/AboutUser.jsx';
import Main from './Components/Logged/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Private/Dashboard/Dashboard.jsx';
import Profile from './Components/Private/Profile/Profile.jsx';
import Register from './Components/Register/Register.jsx';
import useToken from './Token/UseToken.js';

const App = () => {
  const { token, setToken } = useToken();
  
  if(!token) {   
    return (
      <BrowserRouter>
        <Container>
          <Inductive />

          <section className="containers container__form">
            <p className="language">Português (BR)</p>

            <Routes>
              <Route path='/' element={ <Login setToken={ setToken } /> } />
              <Route path='/register' element={ <Register /> } />
              <Route path='/forgetPassword' element={ <ForgetPassword /> } />
            </Routes>
          </section>
        </Container>
      </BrowserRouter>
    );
  }

  return (
    <>
      {
        token && (
          <BrowserRouter>
            <Header />
            
            <Main>
              <AboutUser />

              <Routes>
                <Route path='/' element={ <Dashboard /> } />
                <Route path='/profile' element={ <Profile /> } />
                <Route path='/friends' element={ <Friends /> } />
              </Routes>
            </Main>
          </BrowserRouter>
        )
    }
    </>
  );
}

export default App;

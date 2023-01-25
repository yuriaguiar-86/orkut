import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Inductive from './Components/Inductive/Inductive.jsx';
import Container from './Components/Layout/Container/Container.jsx';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Inductive />

        <section className="containers container__form">
          <p className="language">Português (BR)</p>

          <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/forgetPassword' element={ <ForgetPassword /> } />
          </Routes>
        </section>
      </Container>
    </BrowserRouter>
  );
}

export default App;

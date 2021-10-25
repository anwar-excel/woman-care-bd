
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';

import Footer from './Pages/Footer/Footer';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ContactUs from './Pages/ContactUs/ContactUs';
import Doctors from './Pages/Home/Doctors/Doctors';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            {/* <Route path="/service">
              <Service></Service>
            </Route> */}
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;

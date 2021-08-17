import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Event from './components/views/Event/Event';
import Booking from './components/views/Booking/Booking';
import Kitchen from './components/views/Kitchen/Kitchen';
import New from './components/views/New/New';
import Order from './components/views/Order/Order';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';
import Homepage from './components/views/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={New} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

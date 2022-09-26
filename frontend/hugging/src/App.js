import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import ReserveCounsel from './pages/counsel/ReserveCounsel';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/counsel/reserve' />
        </Route>
        <Route path='/counsel/reserve'>
          <ReserveCounsel />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

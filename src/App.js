import { Route, Switch } from 'react-router-dom';

import AllTicketsPage from './pages/AllTickets';
import NewTicketPage from './pages/NewTicket';
import InfoPage from './pages/Info';
import QueuePage from './pages/Queue';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllTicketsPage />
        </Route>
        <Route path='/new-ticket'>
          <NewTicketPage />
        </Route>
        <Route path='/queue'>
          <QueuePage />
        </Route>
        <Route path='/info'>
          <InfoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

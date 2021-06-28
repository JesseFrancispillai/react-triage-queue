import { useHistory } from 'react-router-dom';

import NewTicketForm from '../components/tickets/NewTicketForm';

function NewTicketPage() {
  const history = useHistory();

  function addTicketHandler(meetupData) {
    fetch(
      'https://react-triage-queue-default-rtdb.firebaseio.com/tickets.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
        history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Ticket</h1>
      <NewTicketForm onAddTicket={addTicketHandler} />
    </section>
  );
}

export default NewTicketPage;

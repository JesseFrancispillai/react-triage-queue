import TicketList from '../components/tickets/TicketList';

import { useState, useEffect } from 'react';

const DUMMY_DATA = [
  {
    id: 'm1',
    priority: 1,
    fname: 'John',
    lname: 'Doe',
    date: 'June 24, 2021',
    notes: 'notes',
  },
];

function AllTicketsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTickets, setLoadedTickets] = useState([]);

  useEffect(() => {
      setIsLoading(true);
    fetch('https://react-triage-queue-default-rtdb.firebaseio.com/tickets.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tickets = [];

        for (const key in data) {
            const ticket = {
                id: key,
                ...data[key]
            };
            tickets.push(ticket)
        }

        setIsLoading(false);
        setLoadedTickets(tickets);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Tickets</h1>
      <TicketList tickets={loadedTickets} />
    </section>
  );
}

export default AllTicketsPage;

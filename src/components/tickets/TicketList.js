import TicketItem from './TicketItem';

import classes from './TicketList.module.css';

function TicketList(props) {
  return (
    <ul className={classes.list}>
      {props.tickets.map((ticket) => (
        <TicketItem 
            key={ticket.id} 
            id={ticket.id} 
            priority={ticket.priority} 
            fname={ticket.fname} 
            lname={ticket.lname}
            date={ticket.date}
            notes={ticket.notes}/>
      ))}
    </ul>
  );
}

export default TicketList;

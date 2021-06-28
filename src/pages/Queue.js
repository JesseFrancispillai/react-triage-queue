import { useContext } from 'react';

import QueueContext from '../store/queue-context';
import TicketList from '../components/tickets/TicketList'

function QueuePage() {

    const queueCtx = useContext(QueueContext);

    let content;

    if (queueCtx.totalQueue === 0) {
        content = <p>No tickets</p>
    } else {
        content = <TicketList tickets={queueCtx.queue}/>
    }

    return (
        <section>
            <h1>Queue</h1>
            {content}
        </section>
    );
}

export default QueuePage;
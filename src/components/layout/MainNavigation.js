import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Triage Queue - ReactJS</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Tickets</Link>
                    </li>
                    <li>
                        <Link to='/new-ticket'>Add New Ticket</Link>
                    </li>
                    <li>
                        <Link to='/queue'>Queue</Link>
                    </li>
                    <li>
                        <Link to='/info'>Info</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
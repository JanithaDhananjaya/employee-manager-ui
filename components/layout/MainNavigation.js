import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Employee Manager</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/employee/list'>All Employees</Link>
                    </li>
                    <li>
                        <Link href='/employee/add'>Add New Employee</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
import {useRouter} from 'next/router';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const router = useRouter();
    const goHomePage = () => {
        router.push('/employee/list');
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo} onClick={goHomePage}>Employee Manager</div>
        </header>
    );
}

export default MainNavigation;
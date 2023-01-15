import Employee from "./Employee";
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import classes from './EmployeeList.module.css';

const Item = styled(Paper)(({theme}) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

function EmployeeList(props) {
    return (
      <ul className={classes.list}>
          {props.employees.map((emp) => (
              <Employee emp={emp} />
          ))}
      </ul>
    );
}

export default EmployeeList;
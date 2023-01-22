import {useRouter} from 'next/router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Col from 'react-bootstrap/Col';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Employee(props) {
    const router = useRouter();

    function editEmployee() {
        router.push('/' + props.emp._id);
    }

    const deleteEmployee=(empId) =>{
        props.removeEmployee(empId);
    }

    return (
        <Col>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={props.emp.photo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.emp.first_name} {props.emp.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.emp.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.emp.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.emp.gender ==="M" ? "Male" : props.emp.gender === "F" ? "Female" : "-"}
                    </Typography>
                </CardContent>
                <CardActions style={{float:'right'}}>
                    <Button size="small" onClick={() => deleteEmployee(props.emp._id)}><DeleteIcon color='error' /></Button>
                    <Button size="small" onClick={editEmployee}><EditIcon color='success'/></Button>
                </CardActions>
            </Card>
        </Col>
    );
}

export default Employee;
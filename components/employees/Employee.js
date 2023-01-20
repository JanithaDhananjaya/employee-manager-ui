import {useRouter} from 'next/router';

import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';

function Employee(props) {
    const router = useRouter();

    function editEmployee() {
        router.push('/' + props.emp._id);
    }

    const deleteEmployee=(empId) =>{
        console.log(empId)
        props.removeEmployee(empId);
    }

    return (
        <Col>
            <Card>
                <Card.Img style={{width: '300px', height: '160px'}} variant="top" src={props.emp.photo}/>
                <Card.Body>
                    <Card.Title>{props.emp.first_name} {props.emp.last_name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button size="small" onClick={() => deleteEmployee(props.emp._id)}>Delete</Button>
                    <Button size="small" onClick={editEmployee}>Edit</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Employee;
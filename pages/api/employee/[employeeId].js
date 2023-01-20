import connectMongo from "@/database/connection-config";

import {getEmployee, putEmployee, deleteEmployee} from '../../../database/employeeController';

export default async function handler(req, res) {
    connectMongo().catch((error) => res.status(405).json({error}));

    //type of request
    const {method} = req;

    switch (method) {
        case 'GET':
            getEmployee(req, res);
            break;

        case 'PUT':
            putEmployee(req, res);
            break;

        case 'DELETE':
            deleteEmployee(req, res);
            break;
        default:
            res.setHeader('Allow', ["GET", 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
import connectMongo from "@/database/connection-config";

import {getEmployees, postEmployee, putEmployee, deleteEmployee} from '../../../database/employeeController';

export default async function handler(req, res) {
    // connectMongo().catch(() => res.status(405).json({error: "Error in the Connection"}));
    connectMongo();

    //type of request
    const {method} = req;

    switch (method) {
        case 'GET':
            getEmployees(req, res);
            break;

        case 'POST':
            postEmployee(req, res);
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
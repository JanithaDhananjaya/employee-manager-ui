// Controller

import Employees from '../model/employee';

// GET: http://localhost:3000/api/employee
export async function getEmployees(req, res) {
    try {
        console.log('ppppppppppppppppppp')
        const employees = await Employees.find({});
        console.log(employees)
        if (!employees) return res.status(404).json({error: "Data not Found"});
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({error: "Error while fetching Data"});
    }
}

// GET: http://localhost:3000/api/employee/1
export async function getEmployee(req, res) {
    try {
        const {employeeId} = req.query;

        if (employeeId) {
            const employee = await Employees.findById(employeeId);
            res.status(200).json(employee);
        }
        res.status(404).json({error: "Data not Found"});
    } catch (error) {
        res.status(404).json({error: "Error while fetching Data"});
    }
}

// POST: http://localhost:3000/api/employee
export async function postEmployee(req, res) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({error: "Form Data not provided!"});
        Employees.create(formData, (err, data) => {
            return res.status(200).json(data);
        })
    } catch (error) {
        res.status(404).json({error});
    }
}

// PUT: http://localhost:3000/api/employee/1
export async function putEmployee(req, res) {
    try {
        const {employeeId} = req.query;
        const formData = req.body;

        if (employeeId && formData) {
            await Employees.findByIdAndUpdate(employeeId, formData);
            res.status(200).json(formData);
        }
        res.status(404).json({error: 'User not selected!'});
    } catch (error) {
        res.status(404).json({error});
    }
}

// DELETE: http://localhost:3000/api/employee/1
export async function deleteEmployee(req, res) {
    try {
        const {employeeId} = req.query;

        if (employeeId) {
            const employee = await Employees.findByIdAndDelete(employeeId);
            res.status(200).json({deleted: employeeId});
        }
        res.status(404).json({error: 'User not selected!'});
    } catch (error) {
        res.status(404).json({error});
    }
}
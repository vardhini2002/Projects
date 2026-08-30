import {
    Request,
    Response,
    NextFunction
} from "express";

import * as employeeService from "../services/employeeService";

export const getEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const employees =
            await employeeService.getEmployees();

        res.json(employees);
    } catch (error) {
        next(error);
    }
};
import db from "../config/db";

export const findAll = async(): Promise<any[]> => {
    const [rows] = await db.query("SELECT * FROM employees");
    return rows as any[];
}
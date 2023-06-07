import { Request, Response } from "express";
import {
    getMenuId,
    getMenuAll
} from '../models/MenuModel';

const getAllMenu = async (req: Request, res: Response): Promise<Response> => {
    try { 
        const menu = await getMenuAll();
        return res.status(200).type('json').send(JSON.stringify (menu, null, 2));
    } catch(e) {
        return res.sendStatus(400);
    };
};
const getMenu = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const menu = await getMenuId(id);
        return res.status(200).type('json').send(JSON.stringify (menu, null, 2))
    } catch(e) {
        return res.sendStatus(400);
    };
};

export { getAllMenu, getMenu };
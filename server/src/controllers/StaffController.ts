import express from "express";

import {
    getStaffs,
    getStaffById,
    createNewStaff,
    updateStaffById,
    deleteStaffById,
} from "../models/StaffModel";

export const getStaff = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const staff = await getStaffById(id);

        return res.status(200).json(staff);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getAllStaffs = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const staffs = await getStaffs();
        return res.status(200).json(staffs);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const createStaff = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const { namaStaff, jabatanStaff, fotoProfil } = req.body;

        const staff = await createNewStaff({
            namaStaff,
            jabatanStaff,
            fotoProfil,
        });

        return res.status(200).json(staff).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const updateStaff = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const { id } = req.params;
        const { namaStaff, jabatanStaff, fotoProfil } = req.body;

        const staff = await updateStaffById(id, {
            namaStaff,
            jabatanStaff,
            fotoProfil,
        });

        return res.status(200).json(staff).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteStaff = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const { id } = req.params;
        const deletedStaff = await deleteStaffById(id);
        return res.json(deletedStaff);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

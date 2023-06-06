import express from "express";

import {
    getAllStaffs,
    getStaff,
    deleteStaff,
    updateStaff,
    createStaff,
} from "../controllers/StaffController";

export default (router: express.Router) => {
    router.get("/staffs", getAllStaffs);
    router.get("/staffs/:id", getStaff);
    router.post("/staffs", createStaff);
    router.delete("/staffs/:id", deleteStaff);
    router.patch("/staffs/:id", updateStaff);
};

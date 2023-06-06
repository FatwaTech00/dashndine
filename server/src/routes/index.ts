import express from "express";

import staffRoute from "./StaffRoute";

const router = express.Router();

export default (): express.Router => {
    staffRoute(router);

    return router;
};

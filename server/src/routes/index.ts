import express from "express";

import staffRoute from "./StaffRoute";
import menuRoute from "./MenuRoute";

const router = express.Router();

export default (): express.Router => {
    staffRoute(router);
    menuRoute(router);
    return router;
};

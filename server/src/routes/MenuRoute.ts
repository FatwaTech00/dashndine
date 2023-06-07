import { Router } from "express";

import {
    getAllMenu,
    getMenu
} from '../controllers/MenuController';

export default (router: Router) => {
    router.get('/menus',getAllMenu);
    router.get('/menus/:id',getMenu);
};
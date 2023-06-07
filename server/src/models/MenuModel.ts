import { Schema, model} from "mongoose";
import { Menu } from './index';

const menuSchema = new Schema<Menu>({
    id_menu: { type: String, require: true },
    nama_menu: { type: String, require: true },
    desc_menu: { type: String, require: true },
    harga_menu: { type: Number, require: true },
    kategori_menu: { type: String, require: true },
    foto_menu: { type: String, require: true }
});

const menuModel = model("Menu",menuSchema);

export const getMenuId = (id: string) => menuModel.findById(id);
export const getMenuAll = () => menuModel.find();
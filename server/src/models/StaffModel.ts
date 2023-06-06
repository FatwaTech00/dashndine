import mongoose from "mongoose";

// MongoDB schema
const StaffSchema = new mongoose.Schema({
    namaStaff: { type: String, require: true },
    jabatanStaff: { type: String, require: true },
    fotoProfil: { type: String, require: true },
});

// MongoDB model
export const StaffModel = mongoose.model("Staff", StaffSchema);

// MongoDB actions
export const getStaffs = () => StaffModel.find();
export const getStaffById = (idStaff: string) => StaffModel.findById(idStaff);
export const createNewStaff = (values: Record<string, any>) =>
    new StaffModel(values).save().then((staff) => staff.toObject());
export const updateStaffById = (idStaff: string, values: Record<string, any>) =>
    StaffModel.findByIdAndUpdate(idStaff, values);
export const deleteStaffById = (idStaff: string) =>
    StaffModel.findByIdAndDelete({ _id: idStaff });

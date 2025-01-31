import { staff } from "../model/staffModel.js"


export const staffDetails = async (req, res) => {

    res.end("name: staff age: 40years ")

}

export const getStaffById = async (req, res) => {
    try {
        const { Id } = req.params;
        const staff_Data = await staff.find({ Id });
        if (staff_Data.length === 0) {
            return res.status(404).json({ message: "Staff  no found" });
        }

        return res.status(200).json({ message: "Staff successfully found", staff_Data });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const listOfStaff = async (req, res) => {
    try {
        const list = await staff.find();
        if (list) {
            return response.status(200).json({ Message: list });
        }
        else {
            return response.status(404).json({ error: "List is not found" });
        }
    }
    catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const getStaffByName = async (req, res) => {
    try {
        const { name } = req.params;

        const staff_name = await staff.find({ name: { $regex: (name, "i") } });

        if (staff_name.length === 0) {
            return res.status(404).json({ message: "Staff not found" });
        }

        return res.status(200).json({ message: "Staff successfully found", staff: staff_name });
    } catch (err) {
        console.error("Error fetching staff:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const getList = async (req, res) => {
    try {
        const list = await staff.find()
        if (list) {
            return res.status(200).json({ message: "staff list", list });
        }
        else {
            return res.status(400).json({ error: "Bad request" })
        }
    }
    catch (err) {
        console.log(err);
    }
}
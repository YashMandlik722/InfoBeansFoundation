import { staff } from "../model/staffModel.js"
//(Only For Admin)
//Getting Staff By Id
export const getStaffById = async (req, res) => {
    try {
        const { Id } = req.params.id;
        const staff_Data = await staff.find({ Id });
        if (staff_Data.length === 0) {
            return res.status(404).json({ message: "Staff  no found" });
        }

        return res.status(200).json({ message: "Staff successfully found", staff_Data });
    } catch (err) {
        console.log("Error in staffController's getStaffById");
        console.log(err);
        return res.status(500).json({ error: "Internal server error in staffController's getStaffById" });
    }
};

//Getting Staff List
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
        console.log("Error in staffController's listOfStaff");
        console.log(err);
        return res.status(500).json({ error: "Internal server error in staffController's listOfStaff" });
    }
}

//Getting Staff By Name
export const getStaffByName = async (req, res) => {
    try {
        const { name } = req.params;

        const staff_name = await staff.find({ name: { $regex: (name, "i") } });

        if (staff_name.length === 0) {
            return res.status(404).json({ message: "Staff not found" });
        }

        return res.status(200).json({ message: "Staff successfully found", staff: staff_name });
    } catch (err) {
        console.log("Error in staffController's getStaffByName");
        console.log(err);
        return res.status(500).json({ error: "Internal server error in staffController's getStaffByName" });
    }
};

// Add Staff Details
// Update Staff Details
// Delete Staff Details


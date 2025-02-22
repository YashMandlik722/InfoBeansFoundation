import { staff } from "../model/staffModel.js"

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


export const addStaff = async (req, res) => {
    try {
        req.body.photo_url = req.files.photo[0].filename
        req.body.aadhar_url = req.files.aadhar[0].filename
        
        const result = await staff.create(req.body);

        if(data) res.status(200).json({message: "Staff member added successfully!",operation: true});
        else res.status(300).json({message: "Failed to enter data"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};


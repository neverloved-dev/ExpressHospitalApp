const getDoctors = "SELECT * FROM doctors";
const getDoctorByID = "SELECT * FROM doctors WHERE id = $1";
const addDoctor = "INSERT INTO doctors(id,name,age,specialization) values($1,$2,$3,$4)";
const deleteDoctor = "DELETE FROM doctors where id = $1";

module.exports = {
    getDoctors,
    getDoctorByID,
    addDoctor,
    deleteDoctor,
}
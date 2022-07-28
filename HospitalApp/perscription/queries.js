const getAllbyDoctor = "SELECT * FROM perscriptions WHERE doctor_id = $1";
const getAllbyPatient= "SELECT * FROM perscriptions WHERE patient_id = $1";
const updatePerscription = "UPDATE perscriptions SET text = $1 WHERE perscription_id = $2";
const newPerscription = "INSERT INTO perscriptions(perscription_id,doctor_id,patient_id,text) VALUES($1,$2,$3,$4)";
const deletePerscription = "DELETE FROM perscriptions WHERE perscription_id = $1";

module.exports = {
    getAllbyDoctor,
    getAllbyPatient,
    updatePerscription,
    newPerscription,
    deletePerscription,
}
const getAllPatients = "SELECT * FROM Patients";
const getPatient = "SELECT * FROM Patients WHERE id = $1";
const insertPatient = "INSERT INTO Patients(ID,Name) VALUES($1,$2) RETURNS *";
const updatePatientData = "UPDATE Patients SET Name = $1 WHERE ID = $2";
const deltePatient= "DELETE FROM Patients WHERE ID = $1 RETURNS *";


module.exports = {
    getAllPatients,
    getPatient,
    insertPatient,
    updatePatientData,
    deltePatient,

}
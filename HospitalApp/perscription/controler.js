const pool = require('../db');
const query = require('./queries');

function getAllbyDoctor(req,res)
{
    const id = parseInt(req.params.id);
    pool.query(query.getAllbyDoctor,
        [id],
        (error,results)=>{
            if (error) throw error;
            res.send(200).json(results.rows);
        });
}

function getAllbyPatient(req,res)
{
    const id = parseInt(req.params.id);
    pool.query(query.getAllbyPatient,
        [id],
        (error,results)=>{
            if (error) throw error;
            res.send(200).json(results.rows);
        });
}

function updatePerscription(req,res)
{
    const id = parseInt(req.params.id);
    const text = req.body;
    pool.query(query.updatePerscription,[text,id],
        (error,results)=>{
            if (error) throw error;
            res.send(200).json(results.rows);
        });
}

function newPerscription(req,res)
{
    const {perscription_id,doctor_id,patient_id,text} = req.body;
    pool.query(
        query.updatePerscription,
        [perscription_id,doctor_id,patient_id,text],
        (error,results)=>{
            if (error) throw error;
            res.send(201).send("New perscription added!");
        }
    );
}



function deletePerscription(req,res)
{
    const id = parseInt(req.params.id);
    pool.query(
        query.deletePerscription,
        [id],
        (error,results)=>{
            if (error) throw error;
            res.send(201).send("Perscription deleted!");
        }
    );
}

module.exports = {
    getAllbyDoctor,
    getAllbyPatient,
    updatePerscription,
    newPerscription,
    deletePerscription,
}
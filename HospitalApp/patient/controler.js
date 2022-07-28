const pool = require('../db');
const query = require('./queries');

const getAllPatients =(req,res)=>{
    pool.query(query.getAllPatients,(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    })
}

const getPatient = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(query.getPatient,[id],(error,result)=>{
        if(error)throw error;
        res.status(200).json(result.rows);
    })
}

const updatePatientData = (req,res)=>{
    const id = parseInt(req.params.id);
    const name = req.body;
    pool.query(
        query.updatePatientData,[name,id],
        (error,result)=>{
            if(error)throw error;
            res.status(201).send("Patient name updated").send(result.fields);
        }
    )
}

const removePatient = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(
        query.deltePatient,
        [id],
        (error,result)=>{
            if(error)throw error;
            res.status(200).json(result.rows);
        }
    )
}


const addPatient = (req,res)=>{
    const {id,name}=req.params;
    pool.query(query.insertPatient,
        [id,name],
        (error,result)=>{
            if(error)throw error;
            res.status(201);
            query.getAllPatients;
        });
}

module.exports = {
    getAllPatients,
    getPatient,
    updatePatientData,
    removePatient,
    addPatient,
};
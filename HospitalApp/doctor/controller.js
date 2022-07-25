const pool = require('../db');
const queries = require('./queries');

const getDoctors=(req,res)=>{
    pool.query(queries.getDoctors, (error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    });
}

const getDoctorByID=(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getDoctorByID,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    });
}

const addDoctor=(req,res)=>{
    const {id,name,age,specialization} = req.body;
    pool.query(
        queries.addDoctor,
        [id,name,age,specialization],
        (error,results)=>{
            if(error)throw error;
            res.status(201);
            alert("Doctor added sucsesffuly!");
        }
    )
}

module.exports = {
    getDoctors,
    getDoctorByID,
    addDoctor,
}
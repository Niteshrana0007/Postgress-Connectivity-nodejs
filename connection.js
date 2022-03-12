
const  Pool = require("pg").Pool;
const express = require('express')
const app = express();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sql_demo",
    password: "admin",
    port: 5432,
  });
  
app.use(express.json()) // => req.body => this will all data

//get student data
app.get('/', async(req ,res) => {

    try{
        const allStudent = await pool.query("SELECT * FROM student ")
        console.log(allStudent.rows)
        res.json(allStudent.rows)

    }catch(err){
        console.error(err.message)
    }
})

//get a specific student
app.get("/student/:id" , async(req , res) => {
    const { id } = req.params;
    try{
        
        const student = await pool.query("SELECT * FROM STUDENT WHERE s_id = $1 ",[Number(id)])
        console.log(id)
        res.json(student.rows)

    }catch(err){
        console.log(err.message)
    }
})

//create a student data
app.post("/student" ,async(req , res) => {
    
    try{
        const { s_id , student_id , student_name , gender , email , is_active } = req.body;
        const newStudent = await pool.query("INSERT INTO STUDENT VALUES($1,$2,$3,$4,$5,$6)",
        [s_id , student_id , student_name , gender , email , is_active]
        );
        res.setHeader('Content-Type', 'application/json');
        res.json(newStudent)
        console.log(newStudent)
        
    }
    catch(err){
        console.log(err.message)
    }
})

//delete a student data
app.delete("/student/:id" , async(req , res) => {
    const { id } = req.params;
    try{
        
        const delStudent = await pool.query("DELETE FROM student WHERE s_id = $1 ",[Number(id)])
        console.log("deleted")
        res.json(id)

    }catch(err){
        console.log(err.message)
    }
})

//update a student data
app.put("/student/:id" , async(req , res) => {
    const { id } = req.params;
    try{
        
        const updated = await pool.query(" ",[Number(id)])
        console.log("deleted")
        res.json(id)

    }catch(err){
        console.log(err.message)
    }
})


//run local server
app.listen(3000, () => {
    console.log('server is listerning on port 3000')
})


// const { Client} = require("pg");

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "sql_demo",
//   password: "admin",
//   port: 5432,
// });

// client.connect();

// client.query('select * from student' , (err,res) => {

//     if(!err){
//         console.log(res.rows)
//     }
//     else{
//         console.log(err.message)
//     }
//     client.end;
// })

// client.query('select * from subject' , (err,res) => {

//     if(!err){
//         console.log(res.rows)
//     }
//     else{
//         console.log(err.message)
//     }
//     client.end;
// })


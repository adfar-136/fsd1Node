const mysql = require("mysql2");
const connection = mysql.createConnection({
    host :"localhost",
    user : "root",
    password: "Margaret@12345",
    database :"classdb"
})

connection.connect(()=>{
    console.log("connected to mysql")
    //create table

    connection.query(`
        CREATE TABLE students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30),
        email VARCHAR(100),
        age INT)`,()=>{
            console.log("Table Create");
             //insert data
            connection.query(`
                INSERT INTO students (name,email,age) VALUES
                ('Adfar','adfar@gmail.com',28),
                ('Aman','aman@gmail.com',32),
                ('Suraj','suraj@gmail.com',44)`,()=>{
                    console.log("Data Inserted");
                    //data retrieve
                    connection.query('SELECT * FROM students',(err,data)=>{
                        console.log(data);
                        connection.query('UPDATE STUDENTS SET age = ? where name = ?',[35,'Adfar'],()=>{
                            console.log("Data inserted")
                            connection.query('SELECT * FROM students',(err,results)=>{
                                console.log(results)
                                connection.query('DELETE FROM students where name = ?',['Adfar'],()=>{
                                    console.log("Adfar Deleted");
                                    connection.query('SELECT * FROM students',(err,result)=>{
                                        console.log(result)
                                    })
                                })
                            })
                        })
                   
                    })
                })
           
        })
})






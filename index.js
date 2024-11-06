const express = require("express");
const app = express();
let { employee } = require("./models/employee.model");
let { sequelize } = require("./lib/index");

app.use(express.json());

let employeeData = [
  {
    name: 'John Doe',
    department: 'Engineering',
    salary: 75000,
    designation: 'Software Engineer',
  },
  {
    name: 'Jane Smith',
    department: 'Human Resources',
    salary: 60000,
    designation: 'HR Manager',
  },
  {
    name: 'Samuel Green',
    department: 'Finance',
    salary: 85000,
    designation: 'Financial Analyst',
  },
  {
    name: 'Emily White',
    department: 'Marketing',
    salary: 55000,
    designation: 'Content Strategist',
  },
  {
    name: 'Michael Brown',
    department: 'Sales',
    salary: 70000,
    designation: 'Sales Manager',
  },
  {
    name: 'Linda Johnson',
    department: 'IT Support',
    salary: 50000,
    designation: 'System Administrator',
  },
  {
    name: 'David Wilson',
    department: 'Operations',
    salary: 65000,
    designation: 'Operations Manager',
  },
  {
    name: 'Rachel Adams',
    department: 'Engineering',
    salary: 78000,
    designation: 'Frontend Developer',
  },
  {
    name: 'Paul Martinez',
    department: 'Product',
    salary: 90000,
    designation: 'Product Manager',
  },
  {
    name: 'Sophie Turner',
    department: 'Customer Service',
    salary: 45000,
    designation: 'Customer Support Specialist',
  },
];

// Defining a route to seed the data
app.get("/seed_db", async (req, res) => {
 try{
  await sequelize.sync({ force: true });
  
  await employee.bulkCreate(employeeData);
  
  res.status(200).json({ message: "Database seeding successful." });
 } catch(error){
   res.status(500).json({ message: "Error seeding the data", error: error.message });
 }
});

app.listen(3000, () => {
  console.log("Server is running on Port : 3000");
});
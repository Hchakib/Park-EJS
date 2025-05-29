const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const riderouter = require("./routes/r_ride");
const visitorrouter = require("./routes/r_visitor");
const ticketrouter = require("./routes/r_ticket");
const employeecontroller = require("./routes/r_employee");
const maintenancecontroller = require("./routes/r_maintenance");

const connectionMongo = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://chakib:system@cluster0.hqeua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Connection Mongo : ${connect.connection.host}`);
  } catch (error) {
    console.log("error: " + error.message);
  }
};
connectionMongo();

app.use("/ride", riderouter);
app.use("/visitor", visitorrouter);
app.use("/ticket", ticketrouter);
app.use("/employee", employeecontroller);
app.use("/maintenance", maintenancecontroller);

const port = 3010;

app.listen(port, () => {
  console.log(`Server is running on htpp://localhost:${port}`);
});

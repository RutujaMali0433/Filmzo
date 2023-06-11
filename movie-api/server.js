const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB is Connected"))
.catch((err) => console.log(err));

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
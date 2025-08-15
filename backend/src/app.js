const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const clubRoutes = require("./routes/clubRoutes");
const eventRoutes = require("./routes/eventRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("BMS Connect API running"));

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/events", eventRoutes);

app.use(errorHandler);

module.exports = app;

import express from "express";
import cors from "cors"
import { userRouter } from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("API is running 🚀");
});

app.get("/api/vi/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

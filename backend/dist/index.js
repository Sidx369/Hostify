import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (_req, res) => {
    res.send("API is running 🚀");
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map
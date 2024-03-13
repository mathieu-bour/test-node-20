import express from "express";

const app = express();
app.use(express.json()); // allow to use json data in request body

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Rota home atingida!")
})
app.get("/dashboard", (req, res) => {
  res.send("Rota dashboard atingida!")
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server rodando na porta " + PORT)
})
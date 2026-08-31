import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());
app.get('/employees', (req, res) => {
  res.json([
        {
            id: 1,
            name: "Harsha",
            email: "harsha@example.com",
            role: "Developer",
            salary: 50000,
        },
    ]

  );
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
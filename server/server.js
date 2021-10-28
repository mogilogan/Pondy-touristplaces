import express from 'express';
import cors from 'cors';

import touristplaces from "./api/touristplaces.route.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/touristplaces", touristplaces);
app.use("*", (req,res) => res.status(404).json({error: "not found"}));
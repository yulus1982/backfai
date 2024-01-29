import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/ai-content/", async (req, res) => {
  
  const {
    prompt,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
  } = req.body;

  const openAPICall = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
     
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: frequency_penalty,
      presence_penalty: presence_penalty,
    }),
  });

  const content = await openAPICall.json();
  res.status(201).json({ output: content });
});

const port = process.env.PORT || 6002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

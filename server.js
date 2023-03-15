const express = require("express");
const app = express();
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
app.use(cors());
const port = 5000;

app.use(express.json());
let credentials = {};
app.post("/send_credentials", (req, res) => {
 credentials = req.body;
})

app.get("/get_credentials", (req, res) => {
  console.log(credentials);
  res.send(credentials);
});
app.post("/get_response", async (req, res) => {
  const Prompt = req.body.prompt;

  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: Prompt }],
  });
  //send the prompt to the server
  //send the response from the backend to the content.js
  res.send(completion.data.choices[0].message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

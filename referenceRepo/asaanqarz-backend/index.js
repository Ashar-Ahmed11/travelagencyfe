const express = require('express');
const app = express();
const port = process.env.PORT || 8000
var cors = require('cors')

const connectToMongoose = require('./db'); // if this connects to MongoDB
connectToMongoose();


app.use(express.json())
app.use(cors())

app.use("/api/user", require("./routes/user"))
app.use("/api/number", require("./routes/number"))
app.use("/api/auth", require("./routes/auth"))
const { router: homeRouter, ensureHomeDocument } = require("./routes/home");
app.use("/api/home", homeRouter);
const { router: contentRouter } = require("./routes/content");
app.use("/api/content", contentRouter);
app.use("/api/posts", require("./routes/posts"))

app.get('/', (req, res) => {
  res.send('Hello, Backend running!');
});

app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  try {
    await ensureHomeDocument();
    console.log("Home content ensured.");
  } catch (e) {
    console.error("Failed seeding home content", e);
  }
});
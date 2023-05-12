const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const userMessage = req.body.userMessage.toLowerCase();
  let botMessage = '';
    console.log(userMessage);
  if (userMessage==='hello') {
    botMessage = 'Hi there!';
  } else if (userMessage==='how are you') {
    botMessage = 'I am doing well, thank you!';
  } else {
    botMessage = 'I am sorry, I did not understand that.';
  }

  res.json(botMessage);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

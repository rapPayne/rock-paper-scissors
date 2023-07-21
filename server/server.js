import express from 'express';

const app = express();

const port = 3001;
const handChoices = ['Rock', 'Paper', 'Scissors'];

app.get('/rock-paper-scissors', (req, res) => {
  const selectRockPaperOrScissors = () => handChoices[Math.floor(Math.random() * handChoices.length)];
  res.send(selectRockPaperOrScissors());
});

app.use(express.static('../client'));

app.listen(port, () => console.log(`Web app listening on port ${port}`));
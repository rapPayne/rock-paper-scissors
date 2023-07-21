import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = 3001;
const handChoices = ['Rock', 'Paper', 'Scissors'];

app.get('/rock-paper-scissors', (req, res) => {
  const selectRockPaperOrScissors = () => handChoices[Math.floor(Math.random() * handChoices.length)];
  res.send(selectRockPaperOrScissors());
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => console.log(`Web app listening on port ${port}`));
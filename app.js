import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/data', function (req, res) {
	res.send('Hello World');
});

app.listen(PORT);
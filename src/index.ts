import express, { Request, Response, NextFunction } from 'express';
import { handleForm } from './handle-form';

// creating an express application
const app = express();


app.get('/', (req: Request, res: Response) => {
    res.status(200).send('url: ' + req.url);
});

app.get('/about', (req: Request, res: Response) => {
    const path = __dirname + '/about.html';
    res.sendFile(path);
});

const MESSAGES = [
    'Good Morning',
    'Drop dead',
    'How are you?',
    'Go to sleep, you\'re tired',
    'Have a lovely day'
];

function getRandomMessage(msgs: string[]) {
    const idx = Math.floor(Math.random() * msgs.length);
    return msgs[idx];
}

app.get('/random', (req: Request, res: Response) => {
    res
        .status(200)
        .header('content-type', 'text/plain')
        .send(getRandomMessage(MESSAGES));
});

app.get('/handle-form', handleForm);

app.listen(3000, () => {
    console.log('Express is running at port 3000');
});


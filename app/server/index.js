import app from './app';

const port = process.env.PORT || 80;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);

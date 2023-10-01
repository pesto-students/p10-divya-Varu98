const express = require('express');
const app = express();
const weatherRouter = require('./app/routes/weather.route');

app.use(express.json());
const logger = (req, res, next) => {
    console.log(`\ntime: ${new Date()}\n`);
    next();
};
app.use(logger);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my weather app' });
});

app.use('/api/weather', weatherRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server has started on port: ' + PORT);
});

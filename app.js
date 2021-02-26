const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useFindAndModify', false);

const categoriesRouter = require('./routes/categoriesRouter.js');
const quizzsRouter = require('./routes/quizzsRouter.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const port = 3002;

app.use('/quizzs', quizzsRouter);
app.use('/categories', categoriesRouter);

mongoose.connect('mongodb://localhost:27017/multichoice_quizz',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',() => console.log('Erreur lors de la connexion'));
db.once('open',() => {
    console.log("Base de données dispo!");
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })
})


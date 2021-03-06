/*Imports */
/*Commentarios */
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRoutes.js';

const app = express();

require('dotenv').config();

/*Conexao com o MongoDB*/
/*Commentarios */
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
        process.env.USERDB +
        ':' +
        process.env.PWDDB +
        '@bootcamp-smurc.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('Servidor em execucao'));

// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
  }),
})


const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Servidor local ativo! Porta: 8080")
})

app.use(express.json());


const indexRouter = require('@/routes/index');
app.use('/', indexRouter);
const viewsRouter = require('./src/routes/viewsRouter');
app.use('/', viewsRouter);

module.exports = app;


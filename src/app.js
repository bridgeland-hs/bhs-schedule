const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const data = require('../data/schedule.json');
const dailySchedule = require('./daily-schedule');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/schedules', (req, res) => {
  res.json(Object.keys(data));
});

app.get('/schedule/', (req, res) => {
  res.json(data);
});

app.get('/schedule/today', (req, res) => {
  res.json(dailySchedule());
});

app.get('/schedule/:schedule', (req, res) => {
  const { schedule } = req.params;
  const scheduleData = data[schedule];
  if (scheduleData) {
    res.json(scheduleData);
  } else {
    res.status(404).send('Schedule not found');
  }
});

module.exports = app;

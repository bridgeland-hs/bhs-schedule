const chalk = require('chalk');
const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(chalk`Listening: {blue http://localhost:${port}}`);
});

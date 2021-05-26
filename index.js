const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const { sequelize } = require('./server/lib/db')
const app = express()
const port = 3000

const sessionStore = new SequelizeStore({
  db: sequelize,
});
const index = require('./server/routes/index');

// Handle request
app.use(
  session({
    store: sessionStore,
    secret: 'secret',
    saveUninitialized: false,
    resave: false
  })
);
sessionStore.sync()
app.options('*', cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api', index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
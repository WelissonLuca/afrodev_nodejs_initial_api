const configExpress = require('./config/configExpress')


app = configExpress();

app.listen(3000, () => console.log('Server is running'))

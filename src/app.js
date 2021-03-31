const configExpress = require('./config/configExpress')
const connection = require('./infra/connection');

app = configExpress();
connection.connect(err => {
    if (err)
        throw err;
    
    app.listen(3000, () => console.log("Server is running"));
})



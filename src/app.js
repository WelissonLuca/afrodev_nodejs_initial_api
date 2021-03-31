const configExpress = require('./config/configExpress')
const connection = require('./infra/Connection');
const Tables = require('./infra/Tables');




connection.connect(err => {
    if (err)
        throw err;
    
    Tables.init(connection);

    app = configExpress();
    
    app.listen(3000, () => console.log("Server is running"));
})



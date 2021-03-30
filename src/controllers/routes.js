module.export = app => {
    app.get('/scheduling', (req, res) => {
        res.send('Server ok')
    });
    app.post('/scheduling', (req, res) => {
        
    });
}
module.export = app => {
    app.get('/scheduling', (req, res) => {
        res.send('Server ok')
    });
}
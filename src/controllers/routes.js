module.exports = app => {
    app.get('/scheduling', (req, res) => {
        res.send('Server ok')
    });
}
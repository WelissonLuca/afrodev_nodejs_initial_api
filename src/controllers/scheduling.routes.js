module.exports = app => {
    app.get('/scheduling', (req, res) => {
        res.send('Server ok')
    });
    app.post('/scheduling', (req, res) => {
        const scheduling = req.body;
        console.log(scheduling);
        res.json({ok: true})
    });
}
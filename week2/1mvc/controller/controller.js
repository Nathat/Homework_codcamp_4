router.get('/', function(req ,res) {
	res.send(list)
})
router.post('/', function(req, res) {
	list.push(req.body.data)
	res.send(list)
})
'use strict';

module.exports.create_programs = (req, res, db) => {
	const program = req.body;
	console.log(program);
	db.collection('programs').insert(program, (err, result) => {
		if (err)
			res.send('err');
		else
			res.send(result.ops[0]);
	});
};

module.exports.list_programs = (res, db) => {
	db.collection('programs').find().toArray((err, items) => {
		if (err)
			res.send('Not found');
		else
			res.send(items);
	});
};


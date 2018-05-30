'use strict';

var ObjectId = require('mongodb').ObjectId;

module.exports.create_programs = (req, res, db) => {
  const program = req.body;
  db.collection('programs').insert(program, (err, result) => {
    if (err)
      res.send('err');
    else
      res.send(result.ops[0]);
  });
};

module.exports.list_programs = (res, db) => {
  db.collection('programs')
    .find({}, { "_id": 0, "pid": 1, "name": 1, "type": 1, "level": 1, "in_nepal": 1 })
    .toArray((err, items) => {
      if (err)
        res.send('Not found');
      else
        res.send(items);
    });
};

module.exports.program_det = (req, res, db) => {
  db.collection('programs')
    .findOne(ObjectId(req.params.id), (err, prog) => {
      if (err)
        res.send('Not found');
      else
        res.send(prog);
    });
};

module.exports.list_samadhi = (res, db) => {
  db.collection('programs')
    .find({type: 1})
    .toArray((err, items) => {
      if (err)
        res.send('Not found');
      else
        res.send(items);
    });
};

module.exports.list_pragya = (res, db) => {
  console.log('asdf');
  db.collection('programs')
    .find({type: 0})
    .toArray((err, items) => {
      if (err)
        res.send('Not found');
      else
        res.send(items);
    });
};

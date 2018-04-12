import {Records} from "../models";

export default (req, res) => {

    Records.create({operation:req.body.operation, date: req.body.date})
        .then(record => res.status(201).send(record));
    //res.setHeader('Content-Type', 'text/plain')
    //res.write('you posted:\n')
    //res.end(req.body.operation)
}
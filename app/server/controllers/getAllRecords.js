import {Records} from "../models";

export default (req, res) => {
    Records.findAll().then(record => {
        res.status(200).json(record)
    })
}
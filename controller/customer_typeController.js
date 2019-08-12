const express = require('express')
const {
    CustomerType
} = require('./../models/db')
const router = express.Router();
router.use((req, res, next) => {

    next();
});

router.get('/', (req, res) => {
    CustomerType.findAll().then(types => {
        res.json(types)
    });
});

router.get('/:id(\\d*)', (req, res) => {
    CustomerType.findByPk(req.params.id).then(types => {
        if (type != null) {
            res.json(types)
        } else {
            res.status(404).send('Not Found!');
        }
    });
});

router.post('/', (req, res) => {
    //bat loi
    CustomerType.create(req.body).then(type => {
        req.json(type);
    }).catch(err => {
        return res.status(400).send(err.errors);
    });
});

router.put('/:id(\\d+)', (req, res) => {
    //check err
    CustomerType.findByPk(req.params.id).then(type => {
        if (type != null) {
            type.update({
                name: req.body.name,
                commission: req.body.commission
            }).then(type => {
                res.json(type);
            }).catch(err => {
                return res.status(400).send(err.errors);
            });
        }
        else {
            res.status(404).send('Not Found!');
        }
    });
});
router.delete('/:id(\\d+)', (req, res) => {
    CustomerType.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(500).send(err.errors);
    });
});

module.exports = router;
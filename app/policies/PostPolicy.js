const { user } = require('../models/index')

module.exports = {

    //Practicamente es un middleware
    show(req, res, next) {
        if (req.user.id === req.post.userId || user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "You are not authorized to view this post" });
        }
    },

    update(req, res, next) {
        if (req.user.id === req.post.userId || user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "You are not authorized to view this post" });
        }
    },

    delete(req, res, next) {
        if (req.user.id === req.post.userId || user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "You are not authorized to view this post" });
        }
    }
}
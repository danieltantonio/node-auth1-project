module.exports = (req,res,next) => {
    if(!req.session.userid) {
        return res.status(400).json({ message: 'You shall not pass!' });
    }

    next();
}
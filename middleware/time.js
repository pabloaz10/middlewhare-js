function time(req, res, next) {
    const currentTime = new Date();
    console.log(`Current time: ${currentTime}`);
    req.time = currentTime;
    next();
}

module.exports = time;
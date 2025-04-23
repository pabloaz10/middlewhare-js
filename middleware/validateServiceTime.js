
function validadeServiceTime(req, res, next) {
    const currentHour = req.time.getHours();

    if (currentHour < 8 || currentHour > 21) {
        console.log('serviço não disponível');
        return res.status(403).send({ message: 'serviço não disponível' });
    }
    next();
}

module.exports = validadeServiceTime;

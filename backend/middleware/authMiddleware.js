const authMiddleware = async(req, res, next) => {
    console.log('mmiddleware')
    next()
}

export default authMiddleware
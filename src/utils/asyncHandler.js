const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandler}
// for try catch you can use this as well
/*
const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code ||404).json({
            success: false,
            message: err.message
        })
        
    }
}
*/
// asyncHandler is a higher order function
// In this case, it is used to communicate to database
// asyncHandler is a wrapper function which will be used whenever it is necessary

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }
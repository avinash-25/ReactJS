export const globalMiddleware = async (req, res, next) => {
    console.log("Global middleware");
    next();
}
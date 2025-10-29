export const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        success: true,
        error: null,
        message,
        data
    });
}

export const errorResponse = (res, statusCode, error, message) => {
    return res.status(statusCode).json({
        success: false,
        error,
        message,
        data: null
    });
}
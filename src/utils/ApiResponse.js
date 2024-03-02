class ApiResponse {
    constructor(statusCode, data, message = "Success"){
                // Initializing ApiResponse object with status code, data, and message

        this.statusCode = statusCode
        this.data = data
        this.message = message;
                // Setting success flag based on status code
        this.success = statusCode <400
    }
}

// Exporting ApiResponse class

export { ApiResponse }
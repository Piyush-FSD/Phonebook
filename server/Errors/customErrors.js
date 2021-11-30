export class HttpException extends Error {
    constructor(message) {
        super(message);
    }
}

export class UnprocessableError extends HttpException {

    constructor(message) {
        super(message);

        this.code = 422;
        this.name = 'Unprocessable'
    }
}


export class BadRequestError extends HttpException {

    constructor(message) {
        super(message);

        this.code = 400;
        this.name = 'BadRequestError'
    }
}

export class NotFoundError extends HttpException {

    constructor(message) {
        super(message);

        this.code = 404;
        this.name = 'NotFoundError'
    }
}




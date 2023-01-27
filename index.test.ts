const handleError = require("./index.ts");

describe("Test creating errors", () => {
    test("Test with normal errors", () => {
        const error = new Error("a random error");
        const newError = handleError(error, "Running another test", 400, true);
        expect(newError.status).toBe(400);
    });

    test("Test different status codes are recognized", () => {
        const error = new Error("Another random error");
        const newError = handleError(error, "Running another test", 500,true );
        expect(newError.status).toBe(500);
        expect(newError.msg).toBe("Error occurred while Running another test");
    });

    test("Test default status code", () => {
        const error = new Error("Another random error");
        const newError = handleError(error, "Running another test", undefined, true);
        expect(newError.status).toBe(500);
    })
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const dotenv_1 = require("dotenv");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = __importDefault(require("./routes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use(routes_1.default);
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        status: error.status || 500,
        message: error.message
    });
};
app.use(errorHandler);
const PORT = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => console.log(`Está en el puerto: ${PORT}`));
//# sourceMappingURL=index.js.map
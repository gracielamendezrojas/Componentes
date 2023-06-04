import express, {Request, Response, NextFunction, Application, ErrorRequestHandler} from "express";
import {Server} from "http";
import createHttpError from "http-errors";
import {config} from "dotenv";
import swaggerUi from "swagger-ui-express";
import Router from "./routes";

config();

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.use(Router)

app.use((req: Request, res: Response, next: NextFunction)=>{
    next(new createHttpError.NotFound())
})

const errorHandler : ErrorRequestHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        status: error.status || 500,
        message: error.message
    });
}

app.use(errorHandler)

const PORT: Number = Number(process.env.PORT) || 3000;
const server: Server = app.listen(PORT, () => console.log(`Está en el puerto: ${PORT}`));
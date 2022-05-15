"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ExressServer {
    constructor(env) {
        this._App = (0, express_1.default)();
        this._path = '/api/';
        this._env = env;
        this._port = this._env.PORT;
        this.routes();
        this.middlewares();
    }
    middlewares() {
        //this._App.use();
    }
    routes() {
        //const blogRoute = new ApiRouter(express.Router())
        //this._App.use(this._path + "blogs", blogsRoutes.router)
    }
    start() {
        this._App.listen(this._port, () => {
            console.log("listen on port " + this._port);
        });
    }
}
exports.default = ExressServer;

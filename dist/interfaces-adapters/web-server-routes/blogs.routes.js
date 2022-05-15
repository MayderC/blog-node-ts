"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class BlogRouter {
    constructor(controller) {
        this._router = express_1.default.Router();
        this._controller = controller;
        this.loadRoutes();
    }
    loadRoutes() {
        this._router.post('/', this._controller.add);
    }
    get router() {
        return this._router;
    }
}
exports.default = BlogRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Blog_1 = __importDefault(require("../../../aplication-bussines-rules/sevices/blog/Blog"));
class BlogController {
    constructor(blogService) {
        this._blogService = blogService;
    }
    add(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
    getAll(req, res) {
        throw new Error("Method not implemented.");
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    getById(req, res) {
        return res.json(new Blog_1.default("Titulo de blog", "contenido del blog"));
    }
}
exports.default = BlogController;

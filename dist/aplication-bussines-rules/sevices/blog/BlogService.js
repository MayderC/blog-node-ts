"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Blog_1 = __importDefault(require("./Blog"));
class BlogService {
    constructor(unitOfWork) {
        this._unitOfWork = unitOfWork;
    }
    add() {
        return true;
    }
    delete() {
        return true;
    }
    getAll() {
        return new Array();
    }
    getById() {
        return new Blog_1.default("hola", "Holaaa");
    }
    update() {
        return true;
    }
}
exports.default = BlogService;

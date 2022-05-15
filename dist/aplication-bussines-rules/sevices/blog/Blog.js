"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blog {
    constructor(title, body) {
        this._title = title;
        this._body = body;
    }
    get title() {
        return this._title;
    }
    get body() {
        return this._body;
    }
}
exports.default = Blog;

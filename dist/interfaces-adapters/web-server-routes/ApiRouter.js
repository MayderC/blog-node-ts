"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiRouter {
    constructor(router) {
        this._router = router;
    }
    get router() {
        return this._router;
    }
}
exports.default = ApiRouter;

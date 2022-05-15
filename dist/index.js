"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./aplication-bussines-rules/web-server/server"));
const index_1 = __importDefault(require("./config/environments/index"));
const server = new server_1.default(index_1.default);
server.start();

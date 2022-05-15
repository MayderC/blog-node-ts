"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_types_1 = __importDefault(require("./env-types"));
if (!process.env.NODE_ENV) {
    require('dotenv').config();
    console.log(process.env.PORT);
}
const getEnvironment = (env) => {
    switch (env) {
        case env_types_1.default.Development:
            return require('./development');
        default:
            return require('./development');
    }
};
exports.default = getEnvironment(process.env.NODE_ENV);

"use strict";
var main_1 = require("./main");
var auth_1 = require("../lib/auth");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = auth_1.auth0AuthenticationHook(main_1.firebaseAzureFunction);
// export default firebaseAzureFunction;
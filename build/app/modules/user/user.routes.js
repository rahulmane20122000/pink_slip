"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const user_service_1 = __importDefault(require("./user.service"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/get-all-users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.getAllUsers();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.userRouter.post('/generate-pink-slip', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.generatePinkSlip(req.body, res.locals.email);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.userRouter.get("/get-all-pending-slips", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_service_1.default.getAllPendingSlips(res.locals.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
// userRouter.get('/', permit([ROLES.ADMIN]), async (req, res, next) => {
//     try {
//         const response = await userService.getAllUsers();
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// });
// userRouter.put('/:id', permit([ROLES.AGENT]), async (req, res, next) => {
//     try {
//         const response = await userService.updateUser(req.params.id, req.body);
//         res.send(new ResponseHandler(response));
//     } catch (error) {
//         next(error);
//     }
// });
//# sourceMappingURL=user.routes.js.map
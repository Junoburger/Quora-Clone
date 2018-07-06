"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let AnswerController = class AnswerController {
    getPage(id) {
        return entity_1.default.findOne(id);
    }
    async allPages() {
        const answers = await entity_1.default.find();
        return { answers };
    }
    async updatePage(id, update) {
        const answer = await entity_1.default.findOne(id);
        if (!answer)
            throw new routing_controllers_1.NotFoundError('Cannot find answer');
        return entity_1.default.merge(answer, update).save();
    }
    createPage(answer) {
        return answer.save();
    }
};
__decorate([
    routing_controllers_1.Get('/answers/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "getPage", null);
__decorate([
    routing_controllers_1.Get('/answers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "allPages", null);
__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.Put('/answers/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "updatePage", null);
__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.Post('/answers'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "createPage", null);
AnswerController = __decorate([
    routing_controllers_1.JsonController()
], AnswerController);
exports.default = AnswerController;
//# sourceMappingURL=controller.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionSchema = exports.Region = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const district_entity_1 = require("../../district/schema/district.entity");
let Region = class Region {
    name;
    districts;
};
exports.Region = Region;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Region.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{
                type: mongoose_2.default.Schema.ObjectId,
                ref: [district_entity_1.District]
            }]
    }),
    __metadata("design:type", Array)
], Region.prototype, "districts", void 0);
exports.Region = Region = __decorate([
    (0, mongoose_1.Schema)()
], Region);
exports.RegionSchema = mongoose_1.SchemaFactory.createForClass(Region);
//# sourceMappingURL=region.entity.js.map
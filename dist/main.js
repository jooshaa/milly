"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["error", "warn"],
    });
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}/api`));
}
start();
//# sourceMappingURL=main.js.map
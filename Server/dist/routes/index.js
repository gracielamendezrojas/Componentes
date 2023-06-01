"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sample_1 = __importDefault(require("../controllers/sample"));
const router = express_1.default.Router();
router.get("/hola-mundo", async (_req, res) => {
    const controller = new sample_1.default();
    const response = await controller.holaMundo();
    return res.send(response);
});
exports.default = router;
//# sourceMappingURL=index.js.map
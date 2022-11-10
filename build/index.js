"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const health_1 = __importDefault(require("./routes/health"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // for parsing application/json
const IP = (_a = process.env.IP) !== null && _a !== void 0 ? _a : '127.0.0.1';
const PORT = '3000';
app.use('/health', health_1.default);
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port http://${IP}:${PORT}`);
});

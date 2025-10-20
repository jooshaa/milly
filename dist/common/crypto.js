"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = encode;
exports.decode = decode;
const crypto = __importStar(require("crypto"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const password = process.env.crypt_password;
const ivstring = Buffer.alloc(16);
function sha256(input) {
    return crypto.createHash("sha256").update(input).digest();
}
function password_derive_bytes(password, salt, iterations, len) {
    let key;
    key = Buffer.from(password + salt);
    for (let i = 0; i < iterations; i++) {
        key = sha256(key);
    }
    if (key.length < len) {
        const hx = password_derive_bytes(password, salt, iterations - 1, 20);
        for (let counter = 1; key.length < len; ++counter) {
            key = Buffer.concat([
                key,
                sha256(Buffer.concat([Buffer.from(counter.toString()), hx])),
            ]);
        }
    }
    return Buffer.alloc(len, key);
}
async function encode(str) {
    const key = password_derive_bytes(password, "", 100, 32);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, ivstring);
    const part1 = cipher.update(str, "utf8");
    const part2 = cipher.final();
    const encrypted = Buffer.concat([part1, part2]).toString("base64");
    return encrypted;
}
async function decode(str) {
    const key = password_derive_bytes(password, "", 100, 32);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, ivstring);
    let decrypted = decipher.update(str, "base64", "utf8");
    decrypted += decipher.final();
    return decrypted;
}
//# sourceMappingURL=crypto.js.map
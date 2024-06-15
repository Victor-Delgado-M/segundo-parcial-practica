"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerMiddleware {
    constructor() {
        // Constructor opcional para inicialización
    }
    // Middleware para registrar las solicitudes HTTP
    logRequest(req, res, next) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
        next(); // Llamada al siguiente middleware o ruta
    }
}
exports.default = LoggerMiddleware;

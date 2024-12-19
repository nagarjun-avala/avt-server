const { Router } = require("express");
const os = require("os");
const version = process.env.npm_package_version;

const router = Router();

router.get("/", (req, res) => {
    const serverInfo = {
      success: true,
      args: {}, // You can modify this if you want to return query parameters or similar
      headers: {
        host: req.get("Host"),
        "x-request-start": `t${Date.now() / 1000}`, // Mock request start time
        connection: "close",
        "x-forwarded-proto": req.protocol,
        "x-forwarded-port": req.get("X-Forwarded-Port") || "443",
      },
      url: req.protocol + "://" + req.get("Host") + req.originalUrl, // Full URL
      serverInfo: {
        message: "Welcome to the Node.js server!",
        serverName: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        uptime: os.uptime(),
        nodeVersion: process.version,
      },
    };
    res.status(200).json({
      serverVersion: `v${version}`,
      serverInfo,
    });
  });

module.exports = router;

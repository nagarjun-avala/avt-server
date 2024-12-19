const { Router } = require("express");
const os = require("os");
const version = process.env.npm_package_version;
/** Routes import */

const router = Router();

// router.use("/",adminRoutes) // http://localhost:8080/api/



/**Testing Route */
router.get("/test", (req, res) => {
  const serverInfo = {
    success: true,
    args: {}, // You can modify this if you want to return query parameters or similar
    headers: {
      host: req.get("Host"),
      "x-request-start": `t${Date.now() / 1000}`, // Mock request start time
      connection: "close",
      "x-forwarded-proto": req.protocol,
      "x-forwarded-port": req.get("X-Forwarded-Port") || "443",
      "x-amzn-trace-id": "Root=1-67643567-6b1e830a647f5ed91f8f52e2",
      "sec-ch-ua":
        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "upgrade-insecure-requests": "1",
      "user-agent": req.get("User-Agent"),
      accept: req.get("Accept"),
      "sec-fetch-site": "none",
      "sec-fetch-mode": "navigate",
      "sec-fetch-user": "?1",
      "sec-fetch-dest": "document",
      "accept-encoding": req.get("Accept-Encoding"),
      "accept-language": req.get("Accept-Language"),
      priority: "u=0, i",
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
}); // http://localhost:8080/api/test

module.exports = router;

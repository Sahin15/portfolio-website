const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

// Lightweight in-memory rate limiter per IP (max 6 submissions per 15 minutes)
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const ipRequestStore = new Map();

const contactRateLimiter = (req, res, next) => {
  const now = Date.now();
  const clientIp = req.ip || req.socket?.remoteAddress || 'unknown';

  // Periodically prune expired entries to prevent memory growth
  if (ipRequestStore.size > 500) {
    for (const [ip, entry] of ipRequestStore.entries()) {
      if (now - entry.startTime > RATE_LIMIT_WINDOW_MS) {
        ipRequestStore.delete(ip);
      }
    }
  }

  const record = ipRequestStore.get(clientIp);

  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    ipRequestStore.set(clientIp, { count: 1, startTime: now });
    return next();
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      error:
        'Too many message attempts from your network. Please wait a few minutes or contact me directly by email.',
      fieldErrors: {},
    });
  }

  record.count += 1;
  return next();
};

router.post('/', contactRateLimiter, submitContactForm);

module.exports = router;

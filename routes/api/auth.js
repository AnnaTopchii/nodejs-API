const express = require("express");

const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../schemas/joiUserSchemas");

// register

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

// login

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;

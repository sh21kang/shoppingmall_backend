"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateJwt = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _prismaClient = require("../generated/prisma-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    const user = await _prismaClient.prisma.user({
      id: payload.id
    });

    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

const authenticateJwt = (req, res, next) => _passport.default.authenticate("jwt", {
  sessions: false
}, (error, user) => {
  if (user) {
    req.user = user;
  }

  next();
})(req, res, next);

exports.authenticateJwt = authenticateJwt;

_passport.default.use(new _passportJwt.Strategy(jwtOptions, verifyUser));

_passport.default.initialize();
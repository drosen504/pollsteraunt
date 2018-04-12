'use strict';
exports.DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/pollsteraunt';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/pollsteraunt-test';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET ;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
// const config = {API_KEY : 'wnY4Trg2G2BzWvRBHlMLl-_1KEt2Z7Hd-2D4untSR_KJ6fJYwhAlT_Y-InkvpNrfq21EKtBsJD_G2aC0DUnwQEBRO43pX4zbR39mTNe8-NFwZp_GOEF6tuDS0fLLWnYx'};
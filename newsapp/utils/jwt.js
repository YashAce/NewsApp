/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file contains jwt configs.
**/

require('dotenv').config();

import { sign, verify } from 'jsonwebtoken';

export const generateToken = (user) => {
    console.log("entered jwt", user);
    return sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

export const verifyToken = (token) => {
    return verify(token, process.env.JWT_SECRET);
};


import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }
  let payload;
  try {
    payload = jwt.verify(token, 'secretKey');
  } catch (e) {
    return res.status(401).send('Unauthorized request');
  }
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }
  req.userId = payload.subject;
  next();
}

router.post('/login', (req, res) => {
  let userData = req.body;

  if (userData.email === "Marvellous" && userData.password === "Marvellous") {
    let payload = { subject: 1 };
    let token = jwt.sign(payload, 'secretKey');
    res.status(200).send({ token });
  } else {
    res.status(401).send('Invalid Password');
  }
});

export default router;

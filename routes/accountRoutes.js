const express = require("express");
const router = express.Router();

const {
  createAccount,
  getAccounts,
  depositMoney,
  withdrawMoney
} = require("../controllers/accountController");

router.post("/create", createAccount);

router.get("/accounts", getAccounts);

router.post("/deposit/:id", depositMoney);

router.post("/withdraw/:id", withdrawMoney);

module.exports = router;
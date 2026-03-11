const Account = require("../models/Account");

exports.createAccount = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

exports.depositMoney = async (req, res) => {
  const account = await Account.findById(req.params.id);
  const { amount } = req.body;

  account.balance += amount;
  await account.save();

  res.json(account);
};

exports.withdrawMoney = async (req, res) => {
  const account = await Account.findById(req.params.id);
  const { amount } = req.body;

  if (account.balance < amount) {
    return res.json({ message: "Insufficient Balance" });
  }

  account.balance -= amount;
  await account.save();

  res.json(account);
};
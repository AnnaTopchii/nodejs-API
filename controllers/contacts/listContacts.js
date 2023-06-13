const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const data = await Contact.find({}, "-createdAt -updatedAt");
  res.json(data);
};

module.exports = listContacts;

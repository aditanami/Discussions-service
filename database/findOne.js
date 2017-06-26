const models    = require("../models");

module.exports = async function (modelName, whereQuery) {
  const model = models[modelName];
  const res = await model.findOne({
    where: whereQuery
  });
  return res;
};
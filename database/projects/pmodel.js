const db = require("../knexconfig");

module.exports = {
  find,
  findById,
  add,
  remove,
};

function find() {
  return db("projects");
}
function findById(id) {
  return db("projects").where({ id }).first();
}

function add(project) {
  return db("projects").insert(project);
}

function remove(id) {
  return db("projects").where("id", id).del();
}

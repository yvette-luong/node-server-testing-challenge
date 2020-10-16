
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", (tbl) => {
        tbl.increments(); //project id
        tbl.string("project_name", 169).notNullable().unique(); //project name
        tbl.boolean("mvp"); //project completed
        tbl.string("project_description", 250).notNullable(); // prj description
      }); 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
}

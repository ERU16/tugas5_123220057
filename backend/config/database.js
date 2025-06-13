import { Sequelize } from "sequelize";

const db = new Sequelize("notesbagas", "root", "bismillah", {
    host: "34.122.239.172",
    dialect: "mysql",
});

export default db;

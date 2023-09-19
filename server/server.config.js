const config = {
    app: {
        port: "5000",
        name: "iNotebook",
    },
    database: {
        port: "",
        name: "",
    },
};

config.database.uri = `mongodb://localhost:${config.database.port}/${config.database.name}?directConnection=true`;

module.exports = config;

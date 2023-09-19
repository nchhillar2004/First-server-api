const config = {
    app: {
        port: "5000",
        name: "iNotebook",
    },
    database: {
        port: "27017",
        name: "inotebook",
    },
};

config.database.uri = `mongodb://localhost:${config.database.port}/${config.database.name}?directConnection=true`;

module.exports = config;

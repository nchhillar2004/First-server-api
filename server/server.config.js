const config = {
    app: {
        port: "5000",
        name: "iNotebook",
    },
    database: {
        port: "27017",
        name: "inotebook",
        password: "nchhillar",
    },
};

config.database.uri = `mongodb+srv://mern:${config.database.password}@cluster0.rzhlemb.mongodb.net/${config.database.name}?retryWrites=true&w=majority`;

module.exports = config;

const config = {
    app : {
        name : "App Name",
        port : "5000",
    },
    database : {
        name : "Database Name to connect with",
        port : "Data base port ex- 27017",
        username : "Your MongoDB username",
        password : "Your MongoDB password",
    }
}

const config.database.uri = `mongodb+srv://${config.database.username}:${config.database.password}@cluster0.rzhlemb.mongodb.net/${config.database.name}?retryWrites=true&w=majority`;

module.exports = config;

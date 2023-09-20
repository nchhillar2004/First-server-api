const config = {
    app : {
        name : "App Name",
        port : "5000",
    }
    database : {
        name : "Database Name to connect with",
        port : "Data base port ex- 27017",
    }
}

const config.database.uri = "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"

module.exports = config;

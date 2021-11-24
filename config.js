const _config = {

    // Client Settings (REQUIRED)
    prefix: "h!", // The prefix to run all commands inside of the bot
    token: "YOUR_TOKEN", // The token from your Discord Dev Portal
    aboutServer: "YOUR_DESCRIPTION", // This is a description of your server
    date_format: "MM-DD-YYYY HH:mm", // The date format for the bot
    copyright: "© 2021 Your Name", // The footer for most embeds
    colorhex: "#2F3136", // The main theme and color of the bot
    deleteCommands: true, // This will decide whether or not to delete commands when they are ran.

    // Application Settings (REQUIRED)
    themeColor: "blue", // The theme color for the main logger (blue, red, green, yellow, magenta)
    port: "8080", // The port for the bot to listen on
    debugmode: true, // Toggles the logging of errors and excess information
    logCommandLoading: false, // Toggles the logging of commands being loaded

    // MySQL Settings (REQUIRED)
    database: {
        host: "localhost", // The IP of your SQL Server
        user: "root", // The username for your SQL Server
        password: "", // The password for of the user for your SQL Server
        database: "database" // The database designated for the bot
    },

    command_count: 5,
    event_count: 5

}

module.exports = _config

let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["WebDev", "Data Science", "Salesforce"],
    launchOutput: function(num) {
        if (num % 2 === 0 && num % 3 === 0) {
            return "LaunchCode!"
        } else if (num % 2 === 0 && num % 5 === 0) {
            return 'Launch Rocks! (CRASH!!!!)'
        } else if (num % 2 === 0) {
            return "Launch!"
        } else if (num % 3 === 0) {
            return "Code!"
        } else if (num % 5 === 0) {
            return "Rocks!"
        }
    }
  
}

module.exports = launchcode;


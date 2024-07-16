// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  describe("launchcode", function() {
    
    test("Is value of organization nonprofit", function() {
      let output = launchcode.organization
      expect(output).toBe("nonprofit")
    })

    test("Is executive director Jeff", function() {
      let output = launchcode.executiveDirector
      expect(output).toBe("Jeff")
    })

    test("Is percentage 100", function() {
      let output = launchcode.percentageCoolEmployees
      expect(output).toBe(100)
    })

    test("Does programs offered contain the correct values", function() {
      let arr = launchcode.programsOffered
      expect(arr[0]).toBe("WebDev")
      expect(arr[1]).toBe("Data Science")
      expect(arr[2]).toBe("Salesforce")
      expect(arr.length).toBe(3)
    })

    test("When passed a number only divisible by 2 the function returns 'Launch!", function() {
      let output = launchcode.launchOutput(4);
      expect(output).toBe("Launch!")
    })

    test("When passed a number only divisible by 3 the function returns 'Code!", function() {
      let output = launchcode.launchOutput(9);
      expect(output).toBe("Code!")
    })

    test("When passed a number only divisible by 5 the function returns 'Rocks!", function() {
      let output = launchcode.launchOutput(25);
      expect(output).toBe("Rocks!")
    })

    test("When passed a number only divisible by 2 and 3 the function returns 'Launchcode!", function() {
      let output = launchcode.launchOutput(6);
      expect(output).toBe("LaunchCode!")
    })

    test("When passed a number only divisible by 2 and 5 the function returns 'Launch Rocks! (CRASH!!!!)'", function() {
      let output = launchcode.launchOutput(10);
      expect(output).toBe('Launch Rocks! (CRASH!!!!)')
    })
  })
  
});
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    var employeeDetailsContainer = document.getElementById("employeeDetailsContainer");
    var employeeNameElement = document.getElementById("employeeName");
    var employeeDetailsElement = document.getElementById("employeeDetails");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Simulated employee login credentials and data
      var employeeCredentials = [
        { username: "Chayadevi", password: "12345", name: "Chaya devi", age: 25, gender: "Female", department: "Maths", salary: "$50,000" },
        { username: "Bhargavi", password: "12345", name: "Bhargavi", age: 25, gender: "Female", department: "English", salary: "$60,000" },
        { username: "Tejasri", password: "12345", name: "Teja sri", age: 28, gender: "Female", department: "IT", salary: "$70,000" },
        { username: "Yeshwanth", password: "12345", name: "Yeshwanth", age: 32, gender: "Male", department: "Electrical", salary: "$55,000" },
        { username: "Nikhil", password: "12345", name: "Nikhil", age: 31, gender: "Male", department: "Operations", salary: "$45,000" }
      ];
  
      var usernameInput = document.getElementById("username");
      var passwordInput = document.getElementById("password");
      var enteredUsername = usernameInput.value;
      var enteredPassword = passwordInput.value;
  
      // Check if username and password match an employee's credentials
      var matchedEmployee = employeeCredentials.find(function(employee) {
        return employee.username === enteredUsername && employee.password === enteredPassword;
      });
  
      if (matchedEmployee) {
        // Successful login
        usernameInput.value = "";
        passwordInput.value = "";
  
        displayEmployeeDetails(matchedEmployee);
      } else {
        // Failed login
        alert("Invalid username or password. Please try again.");
        usernameInput.value = "";
        passwordInput.value = "";
        usernameInput.focus();
      }
    });
  
    function displayEmployeeDetails(employee) {
      // Update employee details container
      employeeNameElement.textContent = "Welcome, " + employee.name + "!";
      employeeDetailsContainer.style.display = "block";
  
      // Display employee details
      var detailsHTML = "<h2>Employee Details</h2>" +
                        "<p class='details-item'><strong>Name:</strong> " + employee.name + "</p>" +
                        "<p class='details-item'><strong>Age:</strong> " + employee.age + "</p>" +
                        "<p class='details-item'><strong>Gender:</strong> " + employee.gender + "</p>" +
                        "<p class='details-item'><strong>Department:</strong> " + employee.department + "</p>" +
                        "<p class='details-item'><strong>Salary:</strong> " + employee.salary + "</p>";
      employeeDetailsElement.innerHTML = detailsHTML;
    }
  });
  
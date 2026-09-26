"use strict";
// Classes with Methods
class LoginPage {
    a = 20;
    login = () => {
        console.log("Login called");
    };
}
const loginPage = new LoginPage();
loginPage.login();
console.log(loginPage.a);

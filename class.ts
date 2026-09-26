// Classes with Methods

class LoginPage {
    a : number = 20
    login=(): void => {
        console.log("Login called")
    }
}

const loginPage = new LoginPage()
loginPage.login()
console.log(loginPage.a)
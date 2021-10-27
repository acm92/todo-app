class AuthenticationService {

    successfulLogin(username, password){
        sessionStorage.setItem("authenticatedUser", username)
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser")
    }

    isUserLoggedIn() {
        let session = sessionStorage.getItem("authenticatedUser")
        if(session === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null) return ""
        return user

    }

}

export default new AuthenticationService
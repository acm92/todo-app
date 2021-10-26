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

}

export default new AuthenticationService
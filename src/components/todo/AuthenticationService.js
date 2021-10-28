import axios from "axios"

class AuthenticationService {

    successfulLogin(username, password){
        sessionStorage.setItem("authenticatedUser", username)
        this.setupAxiosInterceptors()
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

    setupAxiosInterceptors() {
        //{ Authorization: basicAuthHeaderString}

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}

export default new AuthenticationService
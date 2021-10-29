import axios from "axios"

class AuthenticationService {

    //User Validation API to connect to the BackEnd
    //executeBasicAuthenticationService(username, password) {
   //     return axios.get("http://localhost:8080/basicauth", {headers: {authorization: this.createBasicAuthToken(username, password)}})
   // }

    //User Validation API to connect to the BackEnd
    executeJwtAuthenticationService(username, password) {
        return axios.post("http://localhost:8080/authenticate", {
            username,
            password
        })
    }

    successfulLoginForJwt(username, token) {
        sessionStorage.setItem("authenticatedUser", username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    successfulLogin(username, password){
        sessionStorage.setItem("authenticatedUser", username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
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

    setupAxiosInterceptors(basicAuthHeader) {
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
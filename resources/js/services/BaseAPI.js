const API_URL = "http://master-data.local";
export default class BaseAPI {
    constructor(store) {

        let header = {};
        if(store.state.loggedIn) {
            let token = store.state.user["user_token"]["access_token"];
            console.log(token);
            header['Authorization'] = `Bearer ${token}`;
        }

        this.api = axios.create({
            // base URL is read from the "constructor"
            baseURL: API_URL,
            // here are some default headers
            headers: {
                ...header,
                'Cache-Control': 'no-cache',
                'Accept': 'application/vn.masterdata.v1+json'
            },
            // 30 second timeout...
            timeout: 30000
        });
    }

    processResponse(response) {
        console.log('---- BEGIN process response -----');

        let data = response.data;

        if (data.hasOwnProperty('data')) {
            return data.data;
        }

        console.log(response);
    }

    logError(e, error) {
        console.log(e.toString());
        if (error != undefined) {
            if (e.response.hasOwnProperty('status')) {
                let errorMessage = [];
                if (e.response.status == 422) {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(function (key) {
                        errorMessage.push(errors[key][0]);
                    })
                }
                if (e.response.status == 404) {
                    errorMessage.push(e.response.data.message);
                }
                error(errorMessage);
            }
        }
    }

    get(endpoint, success, error) {
        this.api.get(endpoint)
            .then(response => this.processResponse(response))
            .then(json => success(json))
            .catch(e => this.logError(e, error))
    }

    post(endpoint, params = {}, success, error) {
        this.api.post(endpoint, params)
            .then(response => this.processResponse(response))
            .then(json => success(json))
            .catch(e => this.logError(e, error))
    }
}
const API_URL = "http://master-data.local";
export default class BaseAPI {
    constructor() {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzN2QzMjQ2NzJlZTcxZDgyNjAxMzNjOGUwOWNlMDM1MGMyMGQ4YzBhNTU2OTVhNzQyYzY3MjFlNmEzZDU3ZmUxZDkzN2ZhOThhZmExYTU4In0.eyJhdWQiOiIyIiwianRpIjoiYjM3ZDMyNDY3MmVlNzFkODI2MDEzM2M4ZTA5Y2UwMzUwYzIwZDhjMGE1NTY5NWE3NDJjNjcyMWU2YTNkNTdmZTFkOTM3ZmE5OGFmYTFhNTgiLCJpYXQiOjE1NTAyNTk0MzgsIm5iZiI6MTU1MDI1OTQzOCwiZXhwIjoxNTUyNjc4NjM4LCJzdWIiOiIxNiIsInNjb3BlcyI6W119.SrdpW2M148o7QVaufUIl-ZHnuWQAtyeF38zn5TyWiNTCmOQH9q0r7iiaF2J35EUVuXsIplN6cIMUOtIQgwm9kGPRaf982KaVIt0ki8XO3j2N1IefBygAQXV41lSEf1UBLK78uD39qZEYtKPWfi66jRbsXfVdFY45IJelNH_8OEzfl-urQnjHwwr3uuUvtNHEbiGxs6sAXKEY7f1fXNoCviKpKU4ls0sTdJYApg3ugF3mASLkAWk_2xbGh-Wxw4MeHkBLM0ggHD-wLYvd0SdZILcfGdszzPIgUFNy1vSSUqHga-ZRwkhOT8B5Nx1EJaOZHHGOfwnGuikPnNC_HsDI3AQrjQ0-952U0YkExD0cZvx4sKwYwW0fdiWrjPD9Q1Vt-9BEHERxkCGCtBrZMICDfO1vEEkFMQnxs8hl2zS9n7k3CRH6rSxes2t9FZk360OCUJ0OujqrN4huMD2abz1i-dZbgPw38iMPx8eq1kM-_OW0p1FABLpeW-RGoQlVTVHt0ZBFjSUAfgni5kDsywt587X4_eluiJbUwqYcgYr5PpRg6ypl7BzMmoCNT3AOIoT4YqjsNSkrsS-12Q0xXHPdUjItQrLZle93aAwCLFhuh_B0CLCeK7ladpEkSXQhXMJrL8aQBPsjZuUbLXBw97FAhO9v68mjrR3PUDWrIR-VKWE";
        let header = {};
        // if(props.hasOwnProperty('auth') && props.auth.token != undefined) {
        //     console.log('Token: ' + props.auth.token);
        //     header['Authorization'] = `Bearer ${props.auth.token}`;
        // }

        header['Authorization'] = `Bearer ${token}`;
        this.api = axios.create({
            // base URL is read from the "constructor"
            baseURL: API_URL,
            // here are some default headers
            headers: {
                ...header,
                'Cache-Control': 'no-cache',
                'Accept': 'application/vn.masterdata.v1+json'
            },
            // 10 second timeout...
            timeout: 10000
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
            if (e.response.status == 422) {
                let errors = e.response.data.errors;
                let errorMessage = [];
                Object.keys(errors).forEach(function (key) {
                    errorMessage.push(errors[key][0]);
                })
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
import axios from "axios";
import { Fragment, useState } from "react"
import { Circles } from "react-loader-spinner";

const MyLoader = () => {

    const [isLoading, setIsLoading] = useState(true)

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        setIsLoading(true)
        return config;
    }, function (error) {
        // Do something with request error
        setIsLoading(false)
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        setIsLoading(false)
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        setIsLoading(false)
        return Promise.reject(error);
    });

    return (
        <Fragment>
            {isLoading && (
                <div className="loader">
                    <Circles
                        type="BallTriangle"
                        color="#68A1FA"
                        height={100}
                        width={100}
                    />
                </div>
            )}
        </Fragment>
    )
}

export default MyLoader
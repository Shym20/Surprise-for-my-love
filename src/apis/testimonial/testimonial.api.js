import { getTokenLocal } from "../../utils/localStorage.util";
import ApiRoutes from "../../configs/endpoints.config";
import HttpClient from "../index.api";
const baseURL = process.env.VITE_API_URL;

class TestimonialApi extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${getTokenLocal()}`;
      config.headers["ngrok-skip-browser-warning"] = `true`;

      config.headers["authkey"] = process.env.VITE_AUTH_KEY;
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };

  getTestimonialConfig = ApiRoutes.Auth.GetTestimonials;
  

  getTestimonials = async (reqBody) => {
    return this.instance({
      method: this.getTestimonialConfig.Method,
      url: this.getTestimonialConfig.Endpoint,
      headers: {},
      params: reqBody,
    });
  };

}

export default TestimonialApi;

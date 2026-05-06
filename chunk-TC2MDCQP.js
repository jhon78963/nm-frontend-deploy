import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/environments/environment.ts
var environment = {
  production: false,
  BASE_URL: "http://localhost:8000/api",
  BASE_WEB_URL: "http://localhost:8000",
  BASE_FILE_URL: "http://localhost:8001/api",
  BASE_STORAGE_URL: "http://localhost:8001/storage/",
  BASE_UPLOAD_URL: "http://127.0.0.1:3050",
  COMPANY_ID: 1
};

// src/app/utils/constants.ts
var BASE_URL = environment.BASE_URL;
var BASE_WEB_URL = environment.BASE_WEB_URL;
var COMPANY_ID = environment.COMPANY_ID;
var BASE_FILE_URL = environment.BASE_FILE_URL;
var BASE_STORAGE_URL = environment.BASE_STORAGE_URL;
var BASE_UPLOAD_URL = environment.BASE_UPLOAD_URL;

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = BASE_URL;
    this.BASE_WEB_URL = BASE_WEB_URL;
  }
  get(path, headers) {
    return this.http.get(`${this.BASE_URL}/${path}`, { headers });
  }
  post(path, body, headers) {
    return this.http.post(`${this.BASE_URL}/${path}`, body, { headers });
  }
  put(path, body, headers) {
    return this.http.put(`${this.BASE_URL}/${path}`, body, { headers });
  }
  patch(path, body, headers) {
    return this.http.patch(`${this.BASE_URL}/${path}`, body, { headers });
  }
  delete(path, headers) {
    return this.http.delete(`${this.BASE_URL}/${path}`, { headers });
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  environment,
  BASE_FILE_URL,
  BASE_STORAGE_URL,
  BASE_UPLOAD_URL,
  ApiService
};
//# sourceMappingURL=chunk-TC2MDCQP.js.map

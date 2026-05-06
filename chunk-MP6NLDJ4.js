import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/app/services/genders.service.ts
var GendersService = class _GendersService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getAll() {
    return this.apiService.get("genders").pipe(map((response) => response.data));
  }
  getOne(id) {
    return this.apiService.get(`genders/${id}`);
  }
  static {
    this.\u0275fac = function GendersService_Factory(t) {
      return new (t || _GendersService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GendersService, factory: _GendersService.\u0275fac, providedIn: "root" });
  }
};

export {
  GendersService
};
//# sourceMappingURL=chunk-MP6NLDJ4.js.map

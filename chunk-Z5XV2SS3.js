import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/app/services/warehouse.service.ts
var WarehousesService = class _WarehousesService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  /**
   * @param tenantId Si se indica, filtra tiendas del cliente SaaS.
   */
  getAll(tenantId) {
    let path = "warehouses";
    if (tenantId != null) {
      path += `?tenant_id=${tenantId}`;
    }
    return this.apiService.get(path).pipe(map((response) => response.data));
  }
  getOne(id) {
    return this.apiService.get(`warehouses/${id}`);
  }
  static {
    this.\u0275fac = function WarehousesService_Factory(t) {
      return new (t || _WarehousesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WarehousesService, factory: _WarehousesService.\u0275fac, providedIn: "root" });
  }
};

export {
  WarehousesService
};
//# sourceMappingURL=chunk-Z5XV2SS3.js.map

import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/purchase/services/purchase.service.ts
var PurchaseService = class _PurchaseService {
  constructor(api) {
    this.api = api;
    this.basePath = "purchases";
  }
  registerBulk(payload) {
    return this.api.post(`${this.basePath}/bulk`, payload);
  }
  getList(limit = 10, page = 1, search = "", warehouseId = null, status = null) {
    let url = `${this.basePath}?limit=${limit}&page=${page}`;
    if (search.trim()) {
      url += `&search=${encodeURIComponent(search.trim())}`;
    }
    if (warehouseId != null && warehouseId > 0) {
      url += `&warehouseId=${warehouseId}`;
    }
    if (status) {
      url += `&status=${encodeURIComponent(status)}`;
    }
    return this.api.get(url);
  }
  getOne(id) {
    return this.api.get(`${this.basePath}/${id}`);
  }
  cancel(id, reason) {
    return this.api.post(`${this.basePath}/${id}/cancel`, {
      reason: reason?.trim() || null
    });
  }
  patchHeader(id, body) {
    return this.api.patch(`${this.basePath}/${id}`, body);
  }
  updateLine(purchaseId, lineId, body) {
    return this.api.patch(`${this.basePath}/${purchaseId}/lines/${lineId}`, body);
  }
  deleteLine(purchaseId, lineId) {
    return this.api.delete(`${this.basePath}/${purchaseId}/lines/${lineId}`);
  }
  static {
    this.\u0275fac = function PurchaseService_Factory(t) {
      return new (t || _PurchaseService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PurchaseService, factory: _PurchaseService.\u0275fac, providedIn: "root" });
  }
};

export {
  PurchaseService
};
//# sourceMappingURL=chunk-ZCRV5PSW.js.map

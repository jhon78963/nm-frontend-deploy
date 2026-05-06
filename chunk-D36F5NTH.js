import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  BehaviorSubject,
  debounceTime,
  map,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/app/private/administration/tenants/services/tenants.service.ts
var TenantsService = class _TenantsService {
  constructor(apiService) {
    this.apiService = apiService;
    this.tenants = [];
    this.total = 0;
    this.tenants$ = new BehaviorSubject(this.tenants);
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, name = "") {
    let url = `tenants?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${encodeURIComponent(name)}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((res) => {
      this.updateList(res.data);
      this.updateTotal(res.paginate.total);
    }));
  }
  getList() {
    return this.tenants$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  getOne(id) {
    return this.apiService.get(`tenants/${id}`);
  }
  create(data) {
    return this.apiService.post("tenants", data).pipe(switchMap(() => this.callGetList()));
  }
  edit(id, data) {
    return this.apiService.patch(`tenants/${id}`, data).pipe(switchMap(() => this.callGetList()));
  }
  delete(id) {
    return this.apiService.delete(`tenants/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  updateList(v) {
    this.tenants = v;
    this.tenants$.next(this.tenants);
  }
  updateTotal(v) {
    this.total = v;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function TenantsService_Factory(t) {
      return new (t || _TenantsService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TenantsService, factory: _TenantsService.\u0275fac, providedIn: "root" });
  }
};

export {
  TenantsService
};
//# sourceMappingURL=chunk-D36F5NTH.js.map

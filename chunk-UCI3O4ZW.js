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

// src/app/private/administration/roles/services/roles.service.ts
var RolesService = class _RolesService {
  constructor(apiService) {
    this.apiService = apiService;
    this.roles = [];
    this.total = 0;
    this.roles$ = new BehaviorSubject(this.roles);
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, name = "") {
    let url = `roles?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${encodeURIComponent(name)}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateRoles(response.data);
      this.updateTotalRoles(response.paginate.total);
    }));
  }
  getList() {
    return this.roles$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  getOne(id) {
    return this.apiService.get(`roles/${id}`);
  }
  getPermissions() {
    return this.apiService.get("roles/permissions");
  }
  create(data) {
    return this.apiService.post("roles", data).pipe(switchMap(() => this.callGetList()));
  }
  edit(id, data) {
    return this.apiService.patch(`roles/${id}`, data).pipe(switchMap(() => this.callGetList()));
  }
  delete(id) {
    return this.apiService.delete(`roles/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  syncPermissions(id, permissions) {
    return this.apiService.post(`roles/${id}/sync-permissions`, { permissions }).pipe(switchMap(() => this.callGetList()));
  }
  updateRoles(value) {
    this.roles = value;
    this.roles$.next(this.roles);
  }
  updateTotalRoles(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function RolesService_Factory(t) {
      return new (t || _RolesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RolesService, factory: _RolesService.\u0275fac, providedIn: "root" });
  }
};

export {
  RolesService
};
//# sourceMappingURL=chunk-UCI3O4ZW.js.map

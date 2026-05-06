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

// src/app/private/administration/users/models/users.model.ts
var User = class {
  constructor(user) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.name = user.name;
    this.surname = user.surname;
    this.profilePicture = user.profilePicture;
    this.googleId = user.googleId;
    this.roles = user.roles ?? [];
    this.role = user.role ?? user.roles?.[0];
    this.tenantId = user.tenantId;
    this.warehouseId = user.warehouseId;
  }
};

// src/app/private/administration/users/services/users.service.ts
var UsersService = class _UsersService {
  constructor(apiService) {
    this.apiService = apiService;
    this.users = [];
    this.users$ = new BehaviorSubject(this.users);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, name = "") {
    let url = `users?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${encodeURIComponent(name)}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateUsers(response.data.map((u) => new User(u)));
      this.updateTotalUsers(response.paginate.total);
    }));
  }
  getList() {
    return this.users$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  create(data) {
    return this.apiService.post("users", data).pipe(switchMap(() => this.callGetList()));
  }
  delete(id) {
    return this.apiService.delete(`users/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  edit(id, data) {
    return this.apiService.patch(`users/${id}`, data).pipe(switchMap(() => this.callGetList()));
  }
  getOne(id) {
    return this.apiService.get(`users/${id}`).pipe(map((u) => new User(u)));
  }
  updateUsers(value) {
    this.users = value;
    this.users$.next(this.users);
  }
  updateTotalUsers(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function UsersService_Factory(t) {
      return new (t || _UsersService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
  }
};

export {
  UsersService
};
//# sourceMappingURL=chunk-OP4E35GI.js.map

import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  Router
} from "./chunk-UPUIZKRS.js";
import {
  catchError,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/app/auth/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
  }
  setAuthentication(token) {
    localStorage.setItem("tokenData", JSON.stringify(token));
    return true;
  }
  setUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  setRefreshData(token) {
    localStorage.setItem("tokenData", JSON.stringify(token));
  }
  login(body) {
    return this.apiService.post("auth/login", body).pipe(tap((token) => this.setAuthentication(token)), switchMap(() => this.me()), tap((user) => {
      this.setUserData(user);
      this.router.navigateByUrl("/");
    }), catchError((err) => {
      return throwError(() => err.error.message);
    }));
  }
  me() {
    return this.apiService.post("auth/me", {});
  }
  logout(refreshToken, accessToken) {
    return this.apiService.post("auth/logout", { refreshToken, accessToken });
  }
  refreshToken(refreshToken, accessToken) {
    return this.apiService.post("auth/refresh-token", {
      refreshToken,
      accessToken
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-P7KTF6AG.js.map

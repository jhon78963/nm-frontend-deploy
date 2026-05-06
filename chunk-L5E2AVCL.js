import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-OI5KBWGW.js";

// src/app/services/progress-spinner.service.ts
var ProgressSpinnerService = class _ProgressSpinnerService {
  constructor() {
    this.loadingSubject = new Subject();
    this.loading$ = this.loadingSubject.asObservable();
  }
  show() {
    this.loadingSubject.next(true);
  }
  hidden() {
    this.loadingSubject.next(false);
  }
  static {
    this.\u0275fac = function ProgressSpinnerService_Factory(t) {
      return new (t || _ProgressSpinnerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProgressSpinnerService, factory: _ProgressSpinnerService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProgressSpinnerService
};
//# sourceMappingURL=chunk-L5E2AVCL.js.map

import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/reports/reports-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./reports.component-KSC7GFLA.js").then((c) => c.ReportsComponent)
  }
];
var ReportsRoutingModule = class _ReportsRoutingModule {
  static {
    this.\u0275fac = function ReportsRoutingModule_Factory(t) {
      return new (t || _ReportsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/reports/reports.module.ts
var ReportsModule = class _ReportsModule {
  static {
    this.\u0275fac = function ReportsModule_Factory(t) {
      return new (t || _ReportsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ReportsRoutingModule] });
  }
};
export {
  ReportsModule
};
//# sourceMappingURL=reports.module-NFXKWNUN.js.map

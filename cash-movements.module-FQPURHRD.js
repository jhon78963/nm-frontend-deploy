import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/cash-movements/cash-movements-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./cash-movements.component-X36HF5QY.js").then((c) => c.CashMovementsListComponent)
  },
  {
    path: "admin-expenses",
    loadComponent: () => import("./admin-expenses.component-MX6X4JEO.js").then((c) => c.AdminExpensesComponent)
  }
];
var CashMovementsRoutingModule = class _CashMovementsRoutingModule {
  static {
    this.\u0275fac = function CashMovementsRoutingModule_Factory(t) {
      return new (t || _CashMovementsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CashMovementsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/cash-movements/cash-movements.module.ts
var CashMovementsModule = class _CashMovementsModule {
  static {
    this.\u0275fac = function CashMovementsModule_Factory(t) {
      return new (t || _CashMovementsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CashMovementsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, CashMovementsRoutingModule] });
  }
};
export {
  CashMovementsModule
};
//# sourceMappingURL=cash-movements.module-FQPURHRD.js.map

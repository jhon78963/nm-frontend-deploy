import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/finance-routing.module.ts
var routes = [
  {
    path: "cash-movements",
    title: "Movimientos de Caja",
    data: { breadcrumb: "Movimientos de Caja" },
    loadChildren: () => import("./cash-movements.module-FQPURHRD.js").then((m) => m.CashMovementsModule)
  },
  {
    path: "expenses",
    title: "Gastos",
    data: { breadcrumb: "Gastos" },
    loadChildren: () => import("./expenses.module-AKQM2L37.js").then((m) => m.ExpensesModule)
  },
  {
    path: "orders",
    title: "Ordenes",
    data: { breadcrumb: "Ordenes" },
    loadChildren: () => import("./orders.module-W6BC2HOF.js").then((m) => m.OrdersModule)
  },
  { path: "", pathMatch: "full", redirectTo: "cash-movements" }
];
var AdministrationRoutingModule = class _AdministrationRoutingModule {
  static {
    this.\u0275fac = function AdministrationRoutingModule_Factory(t) {
      return new (t || _AdministrationRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdministrationRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/finance.module.ts
var FinanceModule = class _FinanceModule {
  static {
    this.\u0275fac = function FinanceModule_Factory(t) {
      return new (t || _FinanceModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FinanceModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AdministrationRoutingModule] });
  }
};
export {
  FinanceModule
};
//# sourceMappingURL=finance.module-RBZCVRC4.js.map

import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/purchase/purchase-routing.module.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "list",
    title: "Listado de compras",
    data: { breadcrumb: "Compras" },
    loadComponent: () => import("./purchase-list.component-HTQT2NZB.js").then((m) => m.PurchaseListComponent)
  },
  {
    path: "register",
    title: "Registro de compras",
    data: { breadcrumb: "Nueva compra" },
    loadComponent: () => import("./purchase-register.component-JUI7AUSS.js").then((c) => c.PurchaseRegisterComponent)
  },
  {
    path: ":id",
    title: "Detalle de compra",
    data: { breadcrumb: "Detalle compra" },
    loadComponent: () => import("./purchase-detail.component-53APT7VG.js").then((m) => m.PurchaseDetailComponent)
  }
];
var PurchaseRoutingModule = class _PurchaseRoutingModule {
  static {
    this.\u0275fac = function PurchaseRoutingModule_Factory(t) {
      return new (t || _PurchaseRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PurchaseRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/inventories/purchase/purchase.module.ts
var PurchaseModule = class _PurchaseModule {
  static {
    this.\u0275fac = function PurchaseModule_Factory(t) {
      return new (t || _PurchaseModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PurchaseModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PurchaseRoutingModule] });
  }
};
export {
  PurchaseModule
};
//# sourceMappingURL=purchase.module-OYKLITHF.js.map

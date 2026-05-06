import {
  RouterModule,
  RouterOutlet
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement
} from "./chunk-OI5KBWGW.js";

// src/app/private/private-routing.module.ts
var routes = [
  {
    path: "",
    title: "Home",
    data: { breadcrumb: "Home" },
    loadChildren: () => import("./home.module-CZODK5WZ.js").then((m) => m.HomeModule)
  },
  {
    path: "inventories",
    title: "Inventario",
    data: { breadcrumb: "Inventario" },
    loadChildren: () => import("./inventories.module-6SL4PMQG.js").then((m) => m.InventoriesModule)
  },
  {
    path: "profile",
    title: "Profile",
    data: { breadcrumb: "Profile" },
    loadChildren: () => import("./profile.module-YDWAJYDF.js").then((m) => m.ProfileModule)
  },
  {
    path: "administration",
    title: "Administraci\xF3n",
    data: { breadcrumb: "Administraci\xF3n" },
    loadChildren: () => import("./administration.module-PTPPQHWS.js").then((m) => m.AdministrationModule)
  },
  {
    path: "directory",
    title: "Directorio",
    data: { breadcrumb: "Directorio" },
    loadChildren: () => import("./directory.module-7H4AE6VT.js").then((m) => m.DirectoryModule)
  },
  {
    path: "sales",
    title: "Ventas",
    data: { breadcrumb: "Ventas" },
    loadChildren: () => import("./sales-list.module-P3YU4UAQ.js").then((m) => m.SalesListModule)
  },
  {
    path: "sales/pos",
    title: "POS",
    data: { breadcrumb: "POS" },
    loadChildren: () => import("./pos.module-URR4SQ26.js").then((m) => m.PosModule)
  },
  {
    path: "finance",
    title: "M\xF3dulo Financiero",
    data: { breadcrumb: "M\xF3dulo Financiero" },
    loadChildren: () => import("./finance.module-RBZCVRC4.js").then((m) => m.FinanceModule)
  },
  {
    path: "financial-summary",
    title: "Resumen Financiero",
    data: { breadcrumb: "Resumen Financiero" },
    loadChildren: () => import("./financial-summary.module-LA46JFXE.js").then((m) => m.FinancialSummaryModule)
  },
  {
    path: "reports",
    title: "Reportes",
    data: { breadcrumb: "Reportes" },
    loadChildren: () => import("./reports.module-NFXKWNUN.js").then((m) => m.ReportsModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
    data: { breadcrumb: "Home" }
  }
];
var PrivateRoutingModule = class _PrivateRoutingModule {
  static {
    this.\u0275fac = function PrivateRoutingModule_Factory(t) {
      return new (t || _PrivateRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PrivateRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/private.component.ts
var PrivateComponent = class _PrivateComponent {
  static {
    this.\u0275fac = function PrivateComponent_Factory(t) {
      return new (t || _PrivateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivateComponent, selectors: [["app-private"]], decls: 1, vars: 0, template: function PrivateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivateComponent, { className: "PrivateComponent" });
})();

// src/app/private/private.module.ts
var PrivateModule = class _PrivateModule {
  static {
    this.\u0275fac = function PrivateModule_Factory(t) {
      return new (t || _PrivateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PrivateModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PrivateRoutingModule] });
  }
};
export {
  PrivateModule
};
//# sourceMappingURL=private.module-AXYB3KMT.js.map

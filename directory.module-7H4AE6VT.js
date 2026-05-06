import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/directory/directory-routing.module.ts
var routes = [
  {
    path: "team",
    title: "Equipo",
    data: { breadcrumb: "Equipo" },
    loadChildren: () => import("./team.module-PQGRFPFO.js").then((m) => m.TeamModule)
  },
  {
    path: "customers",
    title: "Clientes",
    data: { breadcrumb: "Clientes" },
    loadChildren: () => import("./customers.module-OJKERFV6.js").then((m) => m.CustomersModule)
  },
  {
    path: "vendors",
    title: "Proveedores",
    data: { breadcrumb: "Proveedores" },
    loadChildren: () => import("./vendors.module-JVVNWNBB.js").then((m) => m.VendorsModule)
  },
  { path: "", pathMatch: "full", redirectTo: "team" }
];
var DirectoryRoutingModule = class _DirectoryRoutingModule {
  static {
    this.\u0275fac = function DirectoryRoutingModule_Factory(t) {
      return new (t || _DirectoryRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DirectoryRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/directory/directory.module.ts
var DirectoryModule = class _DirectoryModule {
  static {
    this.\u0275fac = function DirectoryModule_Factory(t) {
      return new (t || _DirectoryModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DirectoryModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DirectoryRoutingModule] });
  }
};
export {
  DirectoryModule
};
//# sourceMappingURL=directory.module-7H4AE6VT.js.map

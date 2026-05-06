import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/administration/administration-routing.module.ts
var routes = [
  {
    path: "roles",
    title: "Roles y permisos",
    data: { breadcrumb: "Roles" },
    loadChildren: () => import("./roles.module-ZJ56WOHX.js").then((m) => m.RolesModule)
  },
  {
    path: "users",
    title: "Usuarios",
    data: { breadcrumb: "Usuarios" },
    loadChildren: () => import("./users.module-PGS4A2TQ.js").then((m) => m.UsersModule)
  },
  {
    path: "tenants",
    title: "Clientes",
    data: { breadcrumb: "Clientes" },
    loadChildren: () => import("./tenants.module-ZQT6AXPI.js").then((m) => m.TenantsModule)
  },
  {
    path: "warehouses",
    title: "Tiendas",
    data: { breadcrumb: "Tiendas" },
    loadChildren: () => import("./warehouses.module-GNAIT2RQ.js").then((m) => m.WarehousesModule)
  },
  {
    path: "action-logs",
    title: "Historial de acciones",
    data: { breadcrumb: "Historial" },
    loadChildren: () => import("./action-logs.module-EZZ4P363.js").then((m) => m.ActionLogsModule)
  },
  { path: "", pathMatch: "full", redirectTo: "roles" }
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

// src/app/private/administration/administration.module.ts
var AdministrationModule = class _AdministrationModule {
  static {
    this.\u0275fac = function AdministrationModule_Factory(t) {
      return new (t || _AdministrationModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdministrationModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AdministrationRoutingModule] });
  }
};
export {
  AdministrationModule
};
//# sourceMappingURL=administration.module-PTPPQHWS.js.map

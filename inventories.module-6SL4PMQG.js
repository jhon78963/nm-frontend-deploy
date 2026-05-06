import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/inventories-routing.module.ts
var routes = [
  {
    path: "products",
    title: "Productos",
    data: { breadcrumb: "Productos" },
    loadChildren: () => import("./products.module-S55ZQ2X7.js").then((m) => m.ProductsModule)
  },
  {
    path: "sizes",
    title: "Tallas",
    data: { breadcrumb: "Tallas" },
    loadChildren: () => import("./sizes.module-PBHOVHZR.js").then((m) => m.SizesModule)
  },
  {
    path: "colors",
    title: "Colores",
    data: { breadcrumb: "Colores" },
    loadChildren: () => import("./colors.module-5ZZ5I3DK.js").then((m) => m.ColorsModule)
  },
  {
    path: "purchase",
    title: "Compras",
    data: { breadcrumb: "Compras" },
    loadChildren: () => import("./purchase.module-OYKLITHF.js").then((m) => m.PurchaseModule)
  }
];
var InventoriesRoutingModule = class _InventoriesRoutingModule {
  static {
    this.\u0275fac = function InventoriesRoutingModule_Factory(t) {
      return new (t || _InventoriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InventoriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/inventories/inventories.module.ts
var InventoriesModule = class _InventoriesModule {
  static {
    this.\u0275fac = function InventoriesModule_Factory(t) {
      return new (t || _InventoriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InventoriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, InventoriesRoutingModule] });
  }
};
export {
  InventoriesModule
};
//# sourceMappingURL=inventories.module-6SL4PMQG.js.map

import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/products/products-routing.module.ts
var routes = [
  {
    path: "step",
    loadComponent: () => import("./form.component-TZJFV2KA.js").then((c) => c.StepperFormComponent),
    children: [
      { path: "", redirectTo: "general", pathMatch: "full" },
      {
        path: "general",
        loadComponent: () => import("./products-form.component-MN6LOAXE.js").then((c) => c.ProductsFormComponent)
      },
      {
        path: "general/:id",
        loadComponent: () => import("./products-form.component-MN6LOAXE.js").then((c) => c.ProductsFormComponent)
      },
      {
        path: "sizes/:id",
        loadComponent: () => import("./sizes-form.component-VPP4PRCR.js").then((c) => c.SizesFormComponent)
      },
      {
        path: "colors/:id",
        loadComponent: () => import("./colors-form.component-77ORVQPA.js").then((c) => c.ColorsFormComponent)
      },
      {
        path: "ecommerce/:id",
        loadComponent: () => import("./ecommerce-form.component-ASKO45DS.js").then((c) => c.EcommerceFormComponent)
      }
    ]
  },
  {
    path: "",
    loadComponent: () => import("./products.component-HGKLVMKM.js").then((c) => c.ProductListComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./products-form.component-MN6LOAXE.js").then((c) => c.ProductsFormComponent)
  },
  {
    path: "sizes/:id",
    loadComponent: () => import("./sizes-form.component-VPP4PRCR.js").then((c) => c.SizesFormComponent)
  },
  {
    path: "colors/:id",
    loadComponent: () => import("./colors-form.component-77ORVQPA.js").then((c) => c.ColorsFormComponent)
  },
  {
    path: "ecommerce/:id",
    loadComponent: () => import("./ecommerce-form.component-ASKO45DS.js").then((c) => c.EcommerceFormComponent)
  },
  {
    path: "history/:id",
    loadComponent: () => import("./products-history.component-62J5DGBN.js").then((c) => c.ProductHistoryComponent)
  },
  { path: "", pathMatch: "full", redirectTo: "products" }
];
var ProductsRoutingModule = class _ProductsRoutingModule {
  static {
    this.\u0275fac = function ProductsRoutingModule_Factory(t) {
      return new (t || _ProductsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/inventories/products/products.module.ts
var ProductsModule = class _ProductsModule {
  static {
    this.\u0275fac = function ProductsModule_Factory(t) {
      return new (t || _ProductsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ProductsRoutingModule] });
  }
};
export {
  ProductsModule
};
//# sourceMappingURL=products.module-S55ZQ2X7.js.map

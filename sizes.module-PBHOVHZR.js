import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/sizes/sizes-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./sizes.component-3Q7ZKK57.js").then((c) => c.SizeListComponent)
  }
];
var SizesRoutingModule = class _SizesRoutingModule {
  static {
    this.\u0275fac = function SizesRoutingModule_Factory(t) {
      return new (t || _SizesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SizesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/inventories/sizes/sizes.module.ts
var SizesModule = class _SizesModule {
  static {
    this.\u0275fac = function SizesModule_Factory(t) {
      return new (t || _SizesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SizesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, SizesRoutingModule] });
  }
};
export {
  SizesModule
};
//# sourceMappingURL=sizes.module-PBHOVHZR.js.map

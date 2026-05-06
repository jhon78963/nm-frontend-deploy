import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/colors/colors-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./colors.component-XBZYRUIR.js").then((c) => c.ColorListComponent)
  }
];
var ColorsRoutingModule = class _ColorsRoutingModule {
  static {
    this.\u0275fac = function ColorsRoutingModule_Factory(t) {
      return new (t || _ColorsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ColorsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/inventories/colors/colors.module.ts
var ColorsModule = class _ColorsModule {
  static {
    this.\u0275fac = function ColorsModule_Factory(t) {
      return new (t || _ColorsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ColorsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ColorsRoutingModule] });
  }
};
export {
  ColorsModule
};
//# sourceMappingURL=colors.module-5ZZ5I3DK.js.map

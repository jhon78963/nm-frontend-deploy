import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/orders/orders-routing.module.ts
var routes = [
  {
    path: "",
    title: "Lista",
    data: { breadcrumb: "Lista" },
    loadComponent: () => import("./list.component-FF33MAXR.js").then((c) => c.OrderListComponent)
  },
  {
    path: "register",
    title: "Registro",
    data: { breadcrumb: "Registro" },
    loadComponent: () => import("./form.component-CVN63NGH.js").then((c) => c.OrderFormComponent)
  },
  {
    path: "edit/:id",
    title: "Editar",
    data: { breadcrumb: "Editar" },
    loadComponent: () => import("./form.component-CVN63NGH.js").then((c) => c.OrderFormComponent)
  }
];
var OrdersRoutingModule = class _OrdersRoutingModule {
  static {
    this.\u0275fac = function OrdersRoutingModule_Factory(t) {
      return new (t || _OrdersRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OrdersRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/orders/orders.module.ts
var OrdersModule = class _OrdersModule {
  static {
    this.\u0275fac = function OrdersModule_Factory(t) {
      return new (t || _OrdersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OrdersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, OrdersRoutingModule] });
  }
};
export {
  OrdersModule
};
//# sourceMappingURL=orders.module-W6BC2HOF.js.map

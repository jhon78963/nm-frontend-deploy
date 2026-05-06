import {
  ActivatedRoute,
  Router
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/orders/pages/form/form.component.ts
var OrderFormComponent = class _OrderFormComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.orderId = 0;
    if (this.route.snapshot.paramMap.get("id")) {
      this.orderId = Number(this.route.snapshot.paramMap.get("id"));
    }
  }
  ngOnInit() {
    console.log(this.orderId);
  }
  static {
    this.\u0275fac = function OrderFormComponent_Factory(t) {
      return new (t || _OrderFormComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderFormComponent, selectors: [["app-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function OrderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "form works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderFormComponent, { className: "OrderFormComponent" });
})();
export {
  OrderFormComponent
};
//# sourceMappingURL=form.component-CVN63NGH.js.map

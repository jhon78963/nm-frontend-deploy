import {
  ButtonDirective,
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import "./chunk-J33MWZEZ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-OI5KBWGW.js";

// src/app/notfound/notfound.component.ts
var _c0 = () => ["/"];
var NotfoundComponent = class _NotfoundComponent {
  static {
    this.\u0275fac = function NotfoundComponent_Factory(t) {
      return new (t || _NotfoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotfoundComponent, selectors: [["ng-component"]], decls: 17, vars: 4, consts: [[1, "flex", "align-items-center", "py-0", "px-3", "w-full", "z-2", "px-5", 2, "height", "62px", "box-shadow", "0 10px 40px 0 rgb(41 50 65 / 6%)", "background", "var(--surface-card)"], ["id", "logolink", 3, "routerLink"], ["src", "assets/logo/main-logo.png", "alt", "logo.svg", "width", "10%"], [1, "flex", "flex-column", "justify-content-center", "align-items-center", "px-4", 2, "min-height", "calc(100vh - 62px)"], [1, "flex", "flex-column", "justify-content-center", "align-items-center", "text-center"], ["src", "assets/layout/images/pages/asset-404.svg", "alt", "freya-layout", 2, "margin-bottom", "-150px", "width", "332px", "height", "271px"], [1, "", 2, "font-size", "140px", "line-height", "171px"], [1, "block", "text-300", "text-center", "font-medium"], ["pButton", "", "pRipple", "", "type", "button", "label", "volver al inicio", 1, "mt-4", "font-medium", "p-button-lg", 3, "routerLink"], [1, "flex", "flex-wrap", "align-items-center", "pt-8", "pb-4", "px-4"], [1, "m-0", "mr-5"], [1, "m-0", "mt-1", "text-300", "font-medium"]], template: function NotfoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "a", 1);
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
        \u0275\u0275element(6, "img", 5);
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10, " Parece que estas perdido. ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "h4", 10);
        \u0275\u0275text(14, "Novedades Maritex App");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "h6", 11);
        \u0275\u0275text(16, "Copyright \u24B8 ZeroGroups");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
      }
    }, dependencies: [RouterLink, ButtonDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotfoundComponent, { className: "NotfoundComponent" });
})();

// src/app/notfound/notfound-routing.module.ts
var NotfoundRoutingModule = class _NotfoundRoutingModule {
  static {
    this.\u0275fac = function NotfoundRoutingModule_Factory(t) {
      return new (t || _NotfoundRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotfoundRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([{ path: "", component: NotfoundComponent }]), RouterModule] });
  }
};

// src/app/notfound/notfound.module.ts
var NotfoundModule = class _NotfoundModule {
  static {
    this.\u0275fac = function NotfoundModule_Factory(t) {
      return new (t || _NotfoundModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotfoundModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, NotfoundRoutingModule, ButtonModule] });
  }
};
export {
  NotfoundModule
};
//# sourceMappingURL=notfound.module-QYRTSR72.js.map

import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-OI5KBWGW.js";

// src/app/private/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "img-container"], [1, "img-center"], ["src", "assets/logo/logo-1.png", "alt", "login-home", "width", "100%"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.img-center[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  mix-blend-mode: multiply;\n  width: 30%;\n}\n@media screen and (max-width: 768px) {\n  .img-center[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .img-center[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (min-width: 1025px) {\n  .img-center[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

// src/app/private/home/home-routing.module.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "" }
];
var HomeRoutingModule = class _HomeRoutingModule {
  static {
    this.\u0275fac = function HomeRoutingModule_Factory(t) {
      return new (t || _HomeRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/home/home.module.ts
var HomeModule = class _HomeModule {
  static {
    this.\u0275fac = function HomeModule_Factory(t) {
      return new (t || _HomeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, HomeRoutingModule] });
  }
};
export {
  HomeModule
};
//# sourceMappingURL=home.module-CZODK5WZ.js.map

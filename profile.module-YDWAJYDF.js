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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-OI5KBWGW.js";

// src/app/private/profile/profile.component.ts
var ProfileComponent = class _ProfileComponent {
  static {
    this.\u0275fac = function ProfileComponent_Factory(t) {
      return new (t || _ProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "profile works!");
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent" });
})();

// src/app/private/profile/profile-routing.module.ts
var routes = [
  { path: "", component: ProfileComponent },
  { path: "", pathMatch: "full", redirectTo: "profile" }
];
var ProfileRoutingModule = class _ProfileRoutingModule {
  static {
    this.\u0275fac = function ProfileRoutingModule_Factory(t) {
      return new (t || _ProfileRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfileRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/profile/profile.module.ts
var ProfileModule = class _ProfileModule {
  static {
    this.\u0275fac = function ProfileModule_Factory(t) {
      return new (t || _ProfileModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfileModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ProfileRoutingModule] });
  }
};
export {
  ProfileModule
};
//# sourceMappingURL=profile.module-YDWAJYDF.js.map

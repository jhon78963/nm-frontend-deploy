import {
  Steps,
  StepsModule
} from "./chunk-6BGSZECH.js";
import {
  KeyFilterModule
} from "./chunk-4PKLMTHZ.js";
import {
  DialogService
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  Toast,
  ToastModule
} from "./chunk-NOHFYFBO.js";
import "./chunk-3ZDI7NAM.js";
import "./chunk-5YEVHO5S.js";
import "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  ReactiveFormsModule
} from "./chunk-F6S55RTJ.js";
import {
  MessageService
} from "./chunk-J33MWZEZ.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  filter,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/products/pages/form/form.component.ts
function StepperFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275listener("click", function StepperFormComponent_Conditional_5_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275element(1, "path", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.currentIndex === 0 ? "cursor-not-allowed" : "cursor-accepted");
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", ctx_r1.currentIndex === 0 ? "#6B6B6B" : "#ffb340");
  }
}
function StepperFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275listener("click", function StepperFormComponent_Conditional_7_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275element(1, "path", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.currentIndex === 3 ? "cursor-not-allowed" : "cursor-accepted");
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", ctx_r1.currentIndex === 3 ? "#6B6B6B" : "#ffb340");
  }
}
var StepperFormComponent = class _StepperFormComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.productId = 0;
    this.items = [];
    this.currentIndex = 0;
  }
  ngOnInit() {
    this.initialProductId();
    this.uploadSteps();
    this.updateStepStatus();
    this.updateQueryParam();
  }
  initialProductId() {
    if (this.route.snapshot.firstChild) {
      this.productId = Number(this.route.snapshot.firstChild.paramMap.get("id"));
    }
  }
  uploadSteps() {
    this.items = [
      {
        label: "General",
        routerLink: [`/inventories/products/step/general/${this.productId}`]
      },
      {
        label: "Tallas",
        routerLink: [`/inventories/products/step/sizes/${this.productId}`]
      },
      {
        label: "Colores",
        routerLink: [`/inventories/products/step/colors/${this.productId}`]
      },
      {
        label: "Ecommerce",
        routerLink: [`/inventories/products/step/ecommerce/${this.productId}`]
      }
    ];
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      const link = this.items[this.currentIndex].routerLink?.[0];
      if (link) {
        this.router.navigate([link]);
      }
    }
  }
  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex += 1;
      const link = this.items[this.currentIndex].routerLink?.[0];
      if (link) {
        this.router.navigate([link]);
      }
    }
  }
  updateStepStatus() {
    const isDisabled = this.productId === 0;
    [1, 2, 3].forEach((index) => {
      if (this.items[index]) {
        this.items[index].disabled = isDisabled;
      }
    });
  }
  updateQueryParam() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const childRoute = this.route.firstChild;
      if (childRoute) {
        childRoute.paramMap.subscribe((params) => {
          const id = Number(params.get("id"));
          this.productId = id;
          this.uploadSteps();
          this.updateStepStatus();
        });
      }
    });
  }
  static {
    this.\u0275fac = function StepperFormComponent_Factory(t) {
      return new (t || _StepperFormComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepperFormComponent, selectors: [["app-products-form"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 11, vars: 5, consts: [[1, "card", "card-w-title", "flex", "flex-wrap", "px-0", "md:px-4", "pt-2", "md:pt-4"], [1, "col-12", "h-full"], [1, "flex", "justify-content-between", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", 3, "class"], ["styleClass", "mt-5", 1, "w-full", 3, "activeIndexChange", "model", "readonly", "activeIndex"], [1, "col-12"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 48 48", "fill", "none", 3, "click"], ["d", "M28 14L18 24L28 34", "stroke-width", "5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 34L30 24L20 14", "stroke-width", "5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function StepperFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
        \u0275\u0275text(3, "Productos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, StepperFormComponent_Conditional_5_Template, 2, 3, ":svg:svg", 3);
        \u0275\u0275elementStart(6, "p-steps", 4);
        \u0275\u0275twoWayListener("activeIndexChange", function StepperFormComponent_Template_p_steps_activeIndexChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.currentIndex, $event) || (ctx.currentIndex = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, StepperFormComponent_Conditional_7_Template, 2, 3, ":svg:svg", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "p-toast");
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.productId > 0 ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("model", ctx.items)("readonly", false);
        \u0275\u0275twoWayProperty("activeIndex", ctx.currentIndex);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.productId > 0 ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      KeyFilterModule,
      StepsModule,
      Steps,
      RouterOutlet,
      ToastModule,
      Toast
    ], styles: ["\n\n  .p-menuitem-link {\n  width: 100%;\n}\n.cursor-not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.cursor-accepted[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepperFormComponent, { className: "StepperFormComponent" });
})();
export {
  StepperFormComponent
};
//# sourceMappingURL=form.component-TZJFV2KA.js.map

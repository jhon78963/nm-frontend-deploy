import {
  PosService
} from "./chunk-YX6E5JMI.js";
import "./chunk-TC2MDCQP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-F6S55RTJ.js";
import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  DecimalPipe,
  NgIf,
  Subject,
  __async,
  __spreadProps,
  __spreadValues,
  computed,
  debounceTime,
  effect,
  inject,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/sales/pos/components/pos-footer/pos-footer.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PosFooterComponent_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementEnd();
  }
}
function PosFooterComponent_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "S/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 17);
    \u0275\u0275listener("ngModelChange", function PosFooterComponent_For_3_Conditional_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const method_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAmount(method_r2.id, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const method_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", method_r2.amount);
  }
}
function PosFooterComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 9);
    \u0275\u0275listener("click", function PosFooterComponent_For_3_Template_div_click_1_listener() {
      const method_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMethod(method_r2.id));
    });
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PosFooterComponent_For_3_Conditional_5_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PosFooterComponent_For_3_Conditional_6_Template, 5, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border-indigo-600", method_r2.active && method_r2.id !== "YAPE")("bg-indigo-50", method_r2.active && method_r2.id !== "YAPE")("text-indigo-700", method_r2.active && method_r2.id !== "YAPE")("border-pink-500", method_r2.active && method_r2.id === "YAPE")("bg-pink-50", method_r2.active && method_r2.id === "YAPE")("text-pink-600", method_r2.active && method_r2.id === "YAPE")("border-gray-200", !method_r2.active)("text-gray-500", !method_r2.active)("opacity-60", !method_r2.active);
    \u0275\u0275advance();
    \u0275\u0275classMap(method_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, method_r2.active ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r2.activeMethods().length > 1 && method_r2.active ? 6 : -1);
  }
}
function PosFooterComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Falta cubrir: S/ ", \u0275\u0275pipeBind2(3, 1, ctx_r2.remaining(), "1.2-2"), " ");
  }
}
var PosFooterComponent = class _PosFooterComponent {
  constructor() {
    this.posService = inject(PosService);
    this.methods = signal([
      {
        id: "CASH",
        label: "Efectivo",
        icon: "pi pi-money-bill",
        active: true,
        amount: null
      },
      {
        id: "YAPE",
        label: "Yape/Plin",
        icon: "pi pi-qrcode",
        active: false,
        amount: null
      },
      {
        id: "CARD",
        label: "Tarjeta",
        icon: "pi pi-credit-card",
        active: false,
        amount: null
      }
    ]);
    this.totalToPay = computed(() => this.posService.grandTotal());
    this.activeMethods = computed(() => this.methods().filter((m) => m.active));
    this.currentSum = computed(() => {
      return this.activeMethods().reduce((acc, m) => acc + (m.amount || 0), 0);
    });
    this.remaining = computed(() => {
      if (this.activeMethods().length <= 1)
        return 0;
      return Math.max(0, this.totalToPay() - this.currentSum());
    });
    effect(() => {
      if (this.posService.cart().length === 0) {
        this.resetMethods();
      }
    }, { allowSignalWrites: true });
  }
  resetMethods() {
    this.methods.update((list) => list.map((m) => __spreadProps(__spreadValues({}, m), {
      active: m.id === "CASH",
      amount: null
    })));
  }
  toggleMethod(id) {
    this.methods.update((list) => list.map((m) => {
      if (m.id === id) {
        const activeCount = list.filter((x) => x.active).length;
        if (m.active && activeCount === 1)
          return m;
        return __spreadProps(__spreadValues({}, m), { active: !m.active, amount: null });
      }
      return m;
    }));
  }
  updateAmount(id, value) {
    this.methods.update((list) => list.map((m) => m.id === id ? __spreadProps(__spreadValues({}, m), { amount: value }) : m));
  }
  handleCheckout() {
    const active = this.activeMethods();
    const total = this.totalToPay();
    if (total <= 0) {
      this.posService.processCheckoutWithPayments([]);
      return;
    }
    let finalPayments = [];
    if (active.length === 1) {
      finalPayments = [
        {
          method: active[0].id,
          amount: total
        }
      ];
    } else {
      if (Math.abs(this.currentSum() - total) > 0.1) {
        alert(`Los montos no cuadran. Faltan S/ ${this.remaining().toFixed(2)}`);
        return;
      }
      finalPayments = active.map((m) => ({
        method: m.id,
        amount: m.amount || 0
      }));
    }
    this.posService.processCheckoutWithPayments(finalPayments);
  }
  static {
    this.\u0275fac = function PosFooterComponent_Factory(t) {
      return new (t || _PosFooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosFooterComponent, selectors: [["app-pos-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 6, consts: [[1, "fixed", "bottom-0", "left-0", "w-full", "bg-white", "z-4", "shadow-top", "border-top-1", "border-gray-100", "px-4", "py-3", "fadein-animation"], [1, "flex", "gap-2", "mb-3", "align-items-start"], [1, "flex-1", "flex", "flex-column", "gap-2"], [1, "bg-red-50", "border-1", "border-red-100", "border-round-lg", "px-3", "py-1", "mb-2", "text-center", "fadein-animation"], [1, "flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "letter-spacing-1"], [1, "text-3xl", "font-black", "text-gray-900"], [1, "w-full", "bg-indigo-700", "text-white", "py-3", "border-round-xl", "font-bold", "text-lg", "shadow-3", "border-none", "cursor-pointer", "hover:bg-indigo-800", "active:scale-95", "transition-all", "flex", "justify-content-center", "align-items-center", "gap-2", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "pi", "pi-check-circle", "text-xl"], [1, "border-1", "border-round-xl", "p-2", "cursor-pointer", "transition-all", "flex", "flex-column", "align-items-center", "justify-content-center", "gap-1", "h-4rem", "relative", "overflow-hidden", 3, "click"], [1, "text-xl"], [1, "text-xs", "font-bold"], [1, "absolute", "top-0", "right-0", "p-1"], [1, "fadein-animation"], [1, "pi", "pi-check-circle", "text-xs"], [1, "relative", "w-full"], [1, "absolute", "left-2", "translate-y-50", "text-gray-400", "text-xs", "font-bold", "position-custom"], ["type", "number", "placeholder", "0.00", 1, "w-full", "border-1", "border-gray-300", "border-round-lg", "py-2", "pl-4", "pr-1", "text-center", "font-bold", "text-gray-800", "text-sm", "outline-none", "focus:border-indigo-500", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "text-xs", "text-red-600", "font-bold"]], template: function PosFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, PosFooterComponent_For_3_Template, 7, 23, "div", 2, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, PosFooterComponent_Conditional_4_Template, 4, 4, "div", 3);
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
        \u0275\u0275text(7, "Total a Pagar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function PosFooterComponent_Template_button_click_11_listener() {
          return ctx.handleCheckout();
        });
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "COBRAR");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.methods());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(4, ctx.activeMethods().length > 1 && ctx.remaining() > 0.1 ? 4 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(10, 3, ctx.posService.grandTotal(), "1.2-2"), "");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.activeMethods().length > 1 && ctx.remaining() > 0.1);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);\n}\n.fadein-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadein 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.position-custom[_ngcontent-%COMP%] {\n  top: 30%;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=pos-footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosFooterComponent, { className: "PosFooterComponent" });
})();

// src/app/private/finance/sales/pos/components/pos-header/pos-header.component.ts
function PosHeaderComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275element(3, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function PosHeaderComponent_Conditional_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275element(10, "i", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r1.posService.currentCustomer()) == null ? null : tmp_1_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.posService.currentCustomer()) == null ? null : tmp_2_0.dni, " ");
  }
}
var PosHeaderComponent = class _PosHeaderComponent {
  constructor() {
    this.posService = inject(PosService);
    this.dniQuery = "";
  }
  search() {
    const found = this.posService.searchCustomerByDni(this.dniQuery);
    if (!found)
      this.dniQuery = "";
  }
  reset() {
    this.posService.currentCustomer.set(null);
    this.dniQuery = "";
  }
  static {
    this.\u0275fac = function PosHeaderComponent_Factory(t) {
      return new (t || _PosHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosHeaderComponent, selectors: [["app-pos-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "bg-white", "px-3", "py-3", "shadow-1", "z-2", "relative", "border-bottom-1", "border-gray-100", "flex-shrink-0"], [1, "flex", "justify-content-between", "align-items-center", "mb-2"], [1, "pi", "pi-bars", "text-xl", "text-gray-500"], [1, "font-bold", "text-gray-700"], [1, "w-2rem", "h-2rem", "border-circle", "bg-gray-200", "flex", "align-items-center", "justify-content-center"], [1, "pi", "pi-user", "text-gray-500"], [1, "relative", "w-full"], [1, "pi", "pi-user", "absolute", "text-gray-400", "z-1", 2, "top", "50%", "left", "1rem", "transform", "translateY(-50%)"], ["type", "tel", "placeholder", "DNI / RUC Cliente", "inputmode", "numeric", 1, "w-full", "border-round-xl", "py-3", "pl-6", "pr-6", "border-none", "bg-gray-100", "font-medium", "text-gray-800", "focus:bg-white", "focus:shadow-input", "transition-all", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "absolute", "right-0", "top-0", "h-full", "w-3rem", "border-none", "bg-indigo-600", "border-round-right-xl", "text-white", "cursor-pointer", "hover:bg-indigo-700", 3, "click"], [1, "pi", "pi-search"], [1, "mt-2", "bg-indigo-50", "border-1", "border-indigo-100", "border-round-xl", "p-2", "flex", "justify-content-between", "align-items-center", "slide-down", "animation-duration-200"], [1, "flex", "align-items-center", "gap-2", "overflow-hidden"], [1, "bg-indigo-600", "text-white", "border-circle", "w-2rem", "h-2rem", "flex", "align-items-center", "justify-content-center", "flex-shrink-0"], [1, "pi", "pi-check", "text-xs"], [1, "overflow-hidden"], [1, "font-bold", "text-indigo-900", "text-sm", "white-space-nowrap", "overflow-hidden", "text-overflow-ellipsis"], [1, "text-xs", "text-indigo-500", "font-medium"], [1, "bg-transparent", "border-none", "text-gray-400", "hover:text-gray-600", "cursor-pointer", "p-2", 3, "click"], [1, "pi", "pi-times"]], template: function PosHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275text(4, "POS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275element(6, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "i", 7);
        \u0275\u0275elementStart(9, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function PosHeaderComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dniQuery, $event) || (ctx.dniQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keydown.enter", function PosHeaderComponent_Template_input_keydown_enter_9_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275listener("click", function PosHeaderComponent_Template_button_click_10_listener() {
          return ctx.search();
        });
        \u0275\u0275element(11, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, PosHeaderComponent_Conditional_12_Template, 11, 2, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.dniQuery);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(12, ctx.posService.currentCustomer() ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.shadow-input[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n}\n.slide-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slidedown 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_slidedown {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=pos-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosHeaderComponent, { className: "PosHeaderComponent" });
})();

// src/app/private/finance/sales/pos/components/pos-selector/pos-selector.component.ts
var _forTrack02 = ($index, $item) => $item.color_id;
function PosSelectorComponent_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_For_15_Template_div_click_0_listener() {
      const size_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTabSize(size_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-indigo-600", ctx_r1.activeSize() === size_r4)("bg-indigo-600", ctx_r1.activeSize() === size_r4)("text-white", ctx_r1.activeSize() === size_r4)("border-gray-100", ctx_r1.activeSize() !== size_r4)("bg-white", ctx_r1.activeSize() !== size_r4)("text-gray-600", ctx_r1.activeSize() !== size_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r4, " ");
  }
}
function PosSelectorComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3, "Selecciona una talla arriba");
    \u0275\u0275elementEnd()();
  }
}
function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 33);
  }
}
function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "span", 41);
    \u0275\u0275text(6, "S/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 42);
    \u0275\u0275listener("ngModelChange", function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const v_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updatePrice(v_r6, $event));
    })("focus", function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template_input_focus_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.target.select());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 38)(9, "span", 39);
    \u0275\u0275text(10, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 43)(12, "button", 44);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const v_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateQty(ctx_r1.activeSize(), v_r6, -1, $event));
    });
    \u0275\u0275text(13, " - ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 45);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 46);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template_button_click_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const v_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateQty(ctx_r1.activeSize(), v_r6, 1, $event));
    });
    \u0275\u0275text(17, " + ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const v_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.getSelectionPrice(v_r6));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getSelectionQty(v_r6));
  }
}
function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5, "Toca para agregar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(3, 1, v_r6.price, "1.2-2"), "");
  }
}
function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_Conditional_18_For_5_Template_div_click_0_listener() {
      const v_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(v_r6.stock > 0 && ctx_r1.getSelectionQty(v_r6) === 0 ? ctx_r1.toggleVariant(v_r6) : null);
    });
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 32);
    \u0275\u0275template(3, PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_3_Template, 1, 0, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_9_Template, 18, 2, "div", 36)(10, PosSelectorComponent_Conditional_0_Conditional_18_For_5_Conditional_10_Template, 6, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-indigo-500", ctx_r1.getSelectionQty(v_r6) > 0)("bg-indigo-50", ctx_r1.getSelectionQty(v_r6) > 0)("border-white", ctx_r1.getSelectionQty(v_r6) === 0)("opacity-50", v_r6.stock <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", v_r6.hex);
    \u0275\u0275classProp("border-gray-200", v_r6.hex === "#ffffff")("border-transparent", v_r6.hex !== "#ffffff");
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r1.getSelectionQty(v_r6) > 0 ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r6.colorName);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-green-600", v_r6.stock > 5)("text-red-500", v_r6.stock <= 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Stock: ", v_r6.stock, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, ctx_r1.getSelectionQty(v_r6) > 0 ? 9 : 10);
  }
}
function PosSelectorComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, PosSelectorComponent_Conditional_0_Conditional_18_For_5_Template, 11, 22, "div", 29, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("2. Selecciona Variantes (", ctx_r1.activeSize(), ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.currentSizeVariants());
  }
}
function PosSelectorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.posService.closeModal());
    });
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "h2", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "span", 8);
    \u0275\u0275text(12, "1. Selecciona Talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275repeaterCreate(14, PosSelectorComponent_Conditional_0_For_15_Template, 2, 13, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275template(17, PosSelectorComponent_Conditional_0_Conditional_17_Template, 4, 0, "div", 12)(18, PosSelectorComponent_Conditional_0_Conditional_18_Template, 6, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span", 16);
    \u0275\u0275text(23, "Resumen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 17)(25, "strong", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " prendas ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "span", 16);
    \u0275\u0275text(30, "Total Estimado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 20);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 21);
    \u0275\u0275listener("click", function PosSelectorComponent_Conditional_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275element(35, "i", 22);
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r1.posService.modalState().product) == null ? null : tmp_1_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" SKU: ", (tmp_2_0 = ctx_r1.posService.modalState().product) == null ? null : tmp_2_0.sku, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.availableSizes());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(17, !ctx_r1.activeSize() ? 17 : 18);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.totalModalItems());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(33, 7, ctx_r1.totalModalPrice(), "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.totalModalItems() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.posService.modalState().isEditing ? "GUARDAR CAMBIOS" : "AGREGAR AL CARRITO");
  }
}
var PosSelectorComponent = class _PosSelectorComponent {
  constructor() {
    this.posService = inject(PosService);
    this.activeSize = signal(null);
    this.selections = signal(/* @__PURE__ */ new Map());
    this.availableSizes = computed(() => {
      const prod = this.posService.modalState().product;
      return prod ? Object.keys(prod.variants) : [];
    });
    this.currentSizeVariants = computed(() => {
      const prod = this.posService.modalState().product;
      const active = this.activeSize();
      if (!prod || !active)
        return [];
      return prod.variants[active] || [];
    });
    this.totalModalItems = computed(() => {
      let count = 0;
      for (const item of this.selections().values()) {
        count += item.qty;
      }
      return count;
    });
    this.totalModalPrice = computed(() => {
      let total = 0;
      for (const item of this.selections().values()) {
        total += item.qty * item.price;
      }
      return total;
    });
    effect(() => {
      const state = this.posService.modalState();
      untracked(() => {
        if (state.isOpen && state.product) {
          const initialMap = /* @__PURE__ */ new Map();
          this.activeSize.set(null);
          const currentCart = this.posService.cart();
          const productItemsInCart = currentCart.filter((i) => i.productId === state.product.id);
          productItemsInCart.forEach((cartItem) => {
            const variantsInSize = state.product.variants[cartItem.size] || [];
            const realVariant = variantsInSize.find((v) => String(v.color_id) === String(cartItem.color.color_id));
            if (realVariant) {
              const key = this.getItemKey(cartItem.size, realVariant.color_id);
              initialMap.set(key, {
                variant: realVariant,
                size: cartItem.size,
                qty: cartItem.quantity,
                price: cartItem.unitPrice
              });
            }
          });
          this.selections.set(initialMap);
          if (state.isEditing && state.editingCartItem) {
            this.activeSize.set(state.editingCartItem.size);
          } else {
            const scannedSku = state.product.sku;
            let foundSizeKey = null;
            for (const sizeKey in state.product.variants) {
              const variantsList = state.product.variants[sizeKey];
              const match = variantsList.find((v) => v.sku === scannedSku);
              if (match) {
                foundSizeKey = sizeKey;
                break;
              }
            }
            if (foundSizeKey) {
              this.activeSize.set(foundSizeKey);
            } else {
              const sizes = Object.keys(state.product.variants);
              if (sizes.length > 0)
                this.activeSize.set(sizes[0]);
            }
          }
        }
      });
    }, { allowSignalWrites: true });
  }
  getItemKey(size, colorId) {
    return `${size}_${String(colorId)}`;
  }
  selectTabSize(size) {
    this.activeSize.set(size);
  }
  toggleVariant(variant) {
    const size = this.activeSize();
    if (!size)
      return;
    if (variant.stock <= 0)
      return;
    const key = this.getItemKey(size, variant.color_id);
    const currentMap = new Map(this.selections());
    if (currentMap.has(key)) {
      const current = currentMap.get(key);
      if (current.qty < variant.stock) {
        current.qty++;
        currentMap.set(key, current);
      }
    } else {
      currentMap.set(key, { variant, size, qty: 1, price: variant.price });
    }
    this.selections.set(currentMap);
  }
  addSelection(size, variant, qty, price) {
    const key = this.getItemKey(size, variant.color_id);
    const newMap = new Map(this.selections());
    newMap.set(key, { variant, size, qty, price });
    this.selections.set(newMap);
  }
  updateQty(size, variant, delta, event) {
    if (event)
      event.stopPropagation();
    const key = this.getItemKey(size, variant.color_id);
    const currentMap = new Map(this.selections());
    if (!currentMap.has(key)) {
      if (delta > 0)
        this.toggleVariant(variant);
      return;
    }
    const item = currentMap.get(key);
    const newQty = item.qty + delta;
    if (newQty <= 0) {
      currentMap.delete(key);
    } else if (newQty <= variant.stock) {
      item.qty = newQty;
      currentMap.set(key, item);
    }
    this.selections.set(currentMap);
  }
  updatePrice(variant, newPrice) {
    const size = this.activeSize();
    if (!size)
      return;
    const key = this.getItemKey(size, variant.color_id);
    const currentMap = new Map(this.selections());
    if (currentMap.has(key)) {
      const item = currentMap.get(key);
      item.price = newPrice;
      currentMap.set(key, item);
      this.selections.set(currentMap);
    }
  }
  getSelectionQty(variant) {
    const size = this.activeSize();
    if (!size)
      return 0;
    const key = this.getItemKey(size, variant.color_id);
    return this.selections().get(key)?.qty || 0;
  }
  getSelectionPrice(variant) {
    const size = this.activeSize();
    if (!size)
      return variant.price;
    const key = this.getItemKey(size, variant.color_id);
    return this.selections().get(key)?.price || variant.price;
  }
  confirm() {
    const state = this.posService.modalState();
    if (!state.product)
      return;
    const selections = this.selections();
    const currentCart = this.posService.cart();
    const existingItems = currentCart.filter((i) => i.productId === state.product.id);
    const processedCartIds = /* @__PURE__ */ new Set();
    for (const selection of selections.values()) {
      const existingItem = existingItems.find((i) => i.size === selection.size && String(i.color.color_id) === String(selection.variant.color_id));
      if (existingItem) {
        const updatedItem = __spreadProps(__spreadValues({}, existingItem), {
          quantity: selection.qty,
          unitPrice: selection.price,
          total: selection.qty * selection.price,
          color: selection.variant
        });
        this.posService.updateItem(updatedItem);
        processedCartIds.add(existingItem.cartId);
      } else {
        const newItem = {
          cartId: Date.now() + Math.random(),
          productId: state.product.id,
          sku: state.product.sku,
          name: state.product.name,
          size: selection.size,
          color: selection.variant,
          quantity: selection.qty,
          unitPrice: selection.price,
          total: selection.qty * selection.price
        };
        this.posService.addItem(newItem);
      }
    }
    for (const item of existingItems) {
      if (!processedCartIds.has(item.cartId)) {
        this.posService.removeItem(item.cartId);
      }
    }
    this.posService.closeModal();
  }
  static {
    this.\u0275fac = function PosSelectorComponent_Factory(t) {
      return new (t || _PosSelectorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosSelectorComponent, selectors: [["app-pos-selector"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "top-0", "left-0", "w-full", "h-full", "z-6", "flex", "align-items-end", "sm:align-items-center", "justify-content-center", "glass-overlay", "fadein-animation"], [1, "bg-white", "w-full", "sm:w-30rem", "border-round-top-2xl", "sm:border-round-2xl", "p-0", "shadow-6", "slide-up", "max-h-screen", "overflow-hidden", "relative", "flex", "flex-column", "h-[85vh]", "sm:h-auto"], [1, "p-4", "pb-2", "bg-white", "z-20", "border-bottom-1", "border-gray-100", "relative"], [1, "absolute", "top-0", "right-0", "m-4", "bg-transparent", "border-none", "text-gray-400", "hover:text-gray-600", "cursor-pointer", "p-2", "z-30", 3, "click"], [1, "pi", "pi-times", "text-xl"], [1, "pr-5", "mb-3"], [1, "text-xl", "font-bold", "text-gray-900", "m-0", "line-height-2"], [1, "text-gray-500", "text-sm", "font-mono", "m-0", "mt-1"], [1, "text-xs", "font-bold", "text-gray-400", "uppercase", "block", "mb-2"], [1, "flex", "gap-2", "overflow-x-auto", "pb-2", "scrollbar-hide"], [1, "px-4", "py-3", "border-1", "border-round-xl", "cursor-pointer", "transition-all", "font-bold", "text-sm", "min-w-3rem", "text-center", "select-none", "shadow-1", "flex-shrink-0", "relative", 3, "border-indigo-600", "bg-indigo-600", "text-white", "border-gray-100", "bg-white", "text-gray-600"], [1, "flex-1", "overflow-y-auto", "p-4", "bg-gray-50"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "text-gray-400", "opacity-60"], [1, "p-4", "border-top-1", "border-gray-200", "bg-white", "z-20", "shadow-up-2"], [1, "flex", "justify-content-between", "align-items-center", "mb-3"], [1, "flex", "flex-column"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-indigo-600", "text-lg"], [1, "text-right"], [1, "font-black", "text-xl", "text-gray-900"], [1, "w-full", "font-bold", "py-3", "bg-gray-900", "text-white", "border-round-xl", "shadow-3", "border-none", "cursor-pointer", "hover:bg-black", "transition-all", "disabled:opacity-50", "text-lg", "flex", "align-items-center", "justify-content-center", "gap-2", 3, "click", "disabled"], [1, "pi", "pi-check"], [1, "px-4", "py-3", "border-1", "border-round-xl", "cursor-pointer", "transition-all", "font-bold", "text-sm", "min-w-3rem", "text-center", "select-none", "shadow-1", "flex-shrink-0", "relative", 3, "click"], [1, "pi", "pi-arrow-up", "text-4xl", "mb-2"], [1, "font-bold", "text-sm"], [1, "flex", "justify-content-between", "mb-2", "px-1"], [1, "text-xs", "font-bold", "text-gray-400", "uppercase"], [1, "flex", "flex-column", "gap-3"], [1, "bg-white", "p-3", "border-round-2xl", "shadow-1", "flex", "flex-column", "sm:flex-row", "sm:align-items-center", "gap-3", "transition-all", "border-1", 3, "border-indigo-500", "bg-indigo-50", "border-white", "opacity-50"], [1, "bg-white", "p-3", "border-round-2xl", "shadow-1", "flex", "flex-column", "sm:flex-row", "sm:align-items-center", "gap-3", "transition-all", "border-1", 3, "click"], [1, "flex", "align-items-center", "gap-3", "flex-1"], [1, "w-3rem", "h-3rem", "border-circle", "border-1", "shadow-1", "relative", "flex", "align-items-center", "justify-content-center", "flex-shrink-0"], [1, "pi", "pi-check", "text-white", "text-xl", "shadow-2", "border-circle", "p-1", "bg-black-alpha-20"], [1, "font-bold", "text-gray-800", "text-sm", "capitalize"], [1, "text-xs"], [1, "flex", "align-items-center", "gap-3", "justify-content-between", "sm:justify-content-end", "w-full", "sm:w-auto", "mt-2", "sm:mt-0", "pt-2", "sm:pt-0", "border-top-1", "sm:border-top-none", "border-gray-200", "sm:border-none"], [1, "flex", "align-items-center", "gap-3", "justify-content-between", "sm:justify-content-end", "w-full", "sm:w-auto", "mt-2", "sm:mt-0", "pt-2", "sm:pt-0", "border-top-1", "sm:border-top-none", "border-gray-200", "sm:border-none", 3, "click"], [1, "flex", "flex-column", "align-items-center"], [1, "text-xs", "text-gray-500", "font-bold", "uppercase", "mb-1"], [1, "relative", "w-5rem"], [1, "absolute", "left-0", "top-custom", "translate-y-50", "ml-2", "text-gray-500", "text-xs", "font-bold"], ["type", "number", 1, "w-full", "border-1", "border-gray-200", "border-round-lg", "py-2", "pl-4", "pr-1", "text-right", "font-bold", "text-indigo-700", "bg-white", "focus:border-indigo-500", "outline-none", "text-sm", "h-custom", "shadow-1", 3, "ngModelChange", "focus", "ngModel"], [1, "flex", "align-items-center", "bg-white", "border-round-lg", "shadow-1", "h-2.2rem", "border-1", "border-gray-200"], [1, "border-none", "bg-transparent", "w-2rem", "h-full", "text-indigo-600", "font-bold", "hover:bg-gray-100", "border-round-left-lg", "cursor-pointer", "text-lg", 3, "click"], [1, "font-bold", "text-base", "w-1.5rem", "text-center", "text-gray-900"], [1, "border-none", "bg-transparent", "w-2rem", "h-full", "text-indigo-600", "font-bold", "hover:bg-gray-100", "border-round-right-lg", "cursor-pointer", "text-lg", 3, "click"], [1, "text-right", "hidden", "sm:block"], [1, "font-bold", "text-gray-400", "text-sm", "block"], [1, "text-xs", "text-indigo-500", "font-bold"]], template: function PosSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PosSelectorComponent_Conditional_0_Template, 38, 10, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.posService.modalState().isOpen ? 0 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.glass-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.fadein-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadein 0.2s ease-out;\n}\n.slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideup 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideup {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.h-custom[_ngcontent-%COMP%] {\n  height: 22px;\n}\n.top-custom[_ngcontent-%COMP%] {\n  top: 20%;\n}\n/*# sourceMappingURL=pos-selector.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosSelectorComponent, { className: "PosSelectorComponent" });
})();

// src/app/private/finance/sales/pos/pages/pos.component.ts
var _c0 = ["barcodeInput"];
var _forTrack03 = ($index, $item) => $item.cartId;
function PosComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.posService.toastMessage());
  }
}
function PosComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275listener("click", function PosComponent_span_13_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.posService.clearCart());
    });
    \u0275\u0275text(1, "Vaciar");
    \u0275\u0275elementEnd();
  }
}
function PosComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3, "Empieza a escanear");
    \u0275\u0275elementEnd()();
  }
}
function PosComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24)(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "i", 26);
    \u0275\u0275listener("click", function PosComponent_Conditional_15_For_2_Template_i_click_6_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.posService.removeItem(item_r5.cartId));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 28);
    \u0275\u0275listener("click", function PosComponent_Conditional_15_For_2_Template_div_click_8_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.posService.openEditModal(item_r5));
    });
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 31);
    \u0275\u0275listener("click", function PosComponent_Conditional_15_For_2_Template_span_click_12_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.posService.openEditModal(item_r5));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32)(16, "div", 33)(17, "button", 34);
    \u0275\u0275listener("click", function PosComponent_Conditional_15_For_2_Template_button_click_17_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.posService.updateQuantity(item_r5.cartId, -1));
    });
    \u0275\u0275text(18, " - ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 36);
    \u0275\u0275listener("click", function PosComponent_Conditional_15_For_2_Template_button_click_21_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.posService.updateQuantity(item_r5.cartId, 1));
    });
    \u0275\u0275text(22, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 37);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", item_r5.color.hex);
    \u0275\u0275classProp("border-1", item_r5.color.hex === "#ffffff")("border-gray-200", item_r5.color.hex === "#ffffff");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", item_r5.size, " \u2022 ", item_r5.color.colorName, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(14, 12, item_r5.unitPrice, "1.2-2"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r5.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Total: S/ ", \u0275\u0275pipeBind2(25, 15, item_r5.total, "1.2-2"), "");
  }
}
function PosComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, PosComponent_Conditional_15_For_2_Template, 26, 18, "div", 21, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.posService.cart());
  }
}
var PosComponent = class _PosComponent {
  constructor() {
    this.posService = inject(PosService);
    this.barcodeQuery = "";
    this.barcodeSubject = new Subject();
  }
  ngOnInit() {
    this.barcodeSubscription = this.barcodeSubject.pipe(debounceTime(300)).subscribe((valor) => {
      if (valor) {
        this.onScan();
      }
    });
  }
  onScan() {
    return __async(this, null, function* () {
      const code = this.barcodeQuery.trim();
      if (!code)
        return;
      const prod = yield this.posService.searchProductBySku(code);
      if (prod) {
        this.posService.openAddModal(prod);
        this.barcodeQuery = "";
      } else {
        this.barcodeQuery = "";
      }
    });
  }
  onQueryChange(valor) {
    this.barcodeSubject.next(valor);
  }
  ngAfterViewChecked() {
    if (!this.posService.modalState().isOpen && this.barcodeInput) {
    }
  }
  ngOnDestroy() {
    if (this.barcodeSubscription) {
      this.barcodeSubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function PosComponent_Factory(t) {
      return new (t || _PosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosComponent, selectors: [["app-pos"]], viewQuery: function PosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.barcodeInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 5, consts: [["mainScroll", ""], ["barcodeInput", ""], [1, "flex", "flex-column", "h-screen", "bg-ground", "font-family", "overflow-hidden", "relative", "bg-white", "rounded-xl"], [1, "fixed", "top-0", "left-50", "border-round-2xl", "mt-4", "px-4", "py-3", "shadow-6", "z-5", "bg-gray-900", "text-white", "flex", "align-items-center", "gap-2", "fadein-animation", 2, "transform", "translateX(-50%)"], [1, "flex-1", "overflow-y-auto", "p-3", "pb-8", 2, "padding-bottom", "140px !important"], [1, "mb-4", "bg-white", "border-round-xl", "shadow-1", "overflow-hidden", "flex", "align-items-center", "border-1", "border-gray-100"], ["type", "text", "placeholder", "Escanear c\xF3digo...", "autofocus", "", 1, "flex-1", "py-3", "px-3", "text-lg", "font-mono", "border-none", "outline-none", "text-gray-800", "placeholder-gray-400", 3, "ngModelChange", "ngModel"], [1, "bg-gray-100", "text-gray-600", "border-none", "px-4", "py-3", "cursor-pointer", "hover:bg-gray-200", "border-left-1", "border-gray-200", 3, "click"], [1, "pi", "pi-barcode", "text-xl"], [1, "flex", "justify-content-between", "align-items-end", "mb-3", "px-1", "border-bottom-1", "border-gray-200", "pb-2"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-widest"], ["class", "text-xs font-bold text-red-500 cursor-pointer hover:text-red-700 uppercase", 3, "click", 4, "ngIf"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "py-8", "opacity-40", "text-gray-400"], [1, "z-2"], [1, "z-3"], [1, "pi", "pi-info-circle", "text-lg"], [1, "font-bold", "text-sm"], [1, "text-xs", "font-bold", "text-red-500", "cursor-pointer", "hover:text-red-700", "uppercase", 3, "click"], [1, "pi", "pi-shopping-bag", "text-6xl", "mb-3", "text-gray-300"], [1, "text-sm", "font-medium"], [1, "flex", "flex-column", "gap-3"], [1, "bg-white", "p-3", "border-round-2xl", "shadow-1", "flex", "gap-3", "relative", "overflow-hidden", "fadein-animation", "border-1", "border-gray-50", "item-card"], [1, "w-3rem", "h-3rem", "border-circle", "shadow-1", "flex-shrink-0", "mt-1"], [1, "flex-1", "min-w-0"], [1, "flex", "justify-content-between", "align-items-start", "mb-1"], [1, "font-bold", "text-gray-900", "text-sm", "line-height-2", "block", "pr-2"], [1, "pi", "pi-trash", "text-red-300", "hover:text-red-500", "cursor-pointer", "p-1", 3, "click"], [1, "flex", "align-items-center", "flex-wrap", "gap-2"], [1, "bg-gray-50", "border-1", "border-gray-200", "border-round-lg", "px-2", "py-1", "flex", "align-items-center", "gap-1", "cursor-pointer", "hover:bg-gray-100", "transition-colors", 3, "click"], [1, "text-xs", "font-bold", "text-gray-600", "uppercase"], [1, "pi", "pi-pencil", "text-xs", "text-indigo-400", "ml-1"], [1, "ml-auto", "font-bold", "text-indigo-600", "text-sm", "cursor-pointer", "border-bottom-1", "border-indigo-300", 3, "click"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "pt-2", "border-top-1", "border-gray-100"], [1, "flex", "align-items-center", "bg-gray-50", "border-round-lg", "border-1", "border-gray-200", "h-2rem", "shadow-none"], [1, "border-none", "bg-transparent", "px-3", "h-full", "text-gray-500", "font-bold", "hover:bg-gray-200", "border-round-left-lg", "cursor-pointer", 3, "click"], [1, "font-bold", "text-sm", "w-2rem", "text-center"], [1, "border-none", "bg-transparent", "px-3", "h-full", "text-indigo-600", "font-bold", "hover:bg-indigo-50", "border-round-right-lg", "cursor-pointer", 3, "click"], [1, "font-bold", "text-sm", "text-gray-800"]], template: function PosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, PosComponent_Conditional_1_Template, 4, 1, "div", 3);
        \u0275\u0275element(2, "app-pos-header");
        \u0275\u0275elementStart(3, "main", 4, 0)(5, "div", 5)(6, "input", 6, 1);
        \u0275\u0275twoWayListener("ngModelChange", function PosComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.barcodeQuery, $event) || (ctx.barcodeQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function PosComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onQueryChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 7);
        \u0275\u0275listener("click", function PosComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScan());
        });
        \u0275\u0275element(9, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, PosComponent_span_13_Template, 2, 0, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, PosComponent_Conditional_14_Template, 4, 0, "div", 12)(15, PosComponent_Conditional_15_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "app-pos-footer", 13)(17, "app-pos-selector", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.posService.toastMessage() ? 1 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.barcodeQuery);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Carrito (", ctx.posService.totalItems(), ")");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.posService.cart().length > 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.posService.cart().length === 0 ? 14 : 15);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DecimalPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      PosHeaderComponent,
      PosFooterComponent,
      PosSelectorComponent
    ], styles: ["\n\n.fadein-animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadein 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.item-card[_ngcontent-%COMP%] {\n  transition: transform 0.1s;\n}\n.item-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\nmain[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n/*# sourceMappingURL=pos.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosComponent, { className: "PosComponent" });
})();

// src/app/private/finance/sales/pos/pos-routing.module.ts
var routes = [
  { path: "", component: PosComponent },
  { path: "", pathMatch: "full", redirectTo: "sales/pos" }
];
var PosRoutingModule = class _PosRoutingModule {
  static {
    this.\u0275fac = function PosRoutingModule_Factory(t) {
      return new (t || _PosRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PosRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/sales/pos/pos.module.ts
var PosModule = class _PosModule {
  static {
    this.\u0275fac = function PosModule_Factory(t) {
      return new (t || _PosModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PosModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PosRoutingModule] });
  }
};
export {
  PosModule
};
//# sourceMappingURL=pos.module-URR4SQ26.js.map

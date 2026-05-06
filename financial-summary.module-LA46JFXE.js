import {
  Skeleton,
  SkeletonModule
} from "./chunk-IKUVGV3H.js";
import {
  CashflowService
} from "./chunk-MIMKYK2H.js";
import {
  TagModule
} from "./chunk-HO5KCK4N.js";
import {
  CardModule
} from "./chunk-CFQXVXGZ.js";
import {
  Table,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  TooltipModule
} from "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-J33MWZEZ.js";
import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/private/finance/financial-summary/services/financial-summary.service.ts
var FinancialSummaryService = class _FinancialSummaryService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getSummary() {
    return this.apiService.get("financial/summary");
  }
  static {
    this.\u0275fac = function FinancialSummaryService_Factory(t) {
      return new (t || _FinancialSummaryService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FinancialSummaryService, factory: _FinancialSummaryService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/finance/financial-summary/pages/form/transaction-modal.component.ts
var _c0 = ["amountInput"];
var _c1 = (a0) => ({ "btn-disabled opacity-50": a0 });
function TransactionModalComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function TransactionModalComponent_div_0_div_17_Template_div_click_1_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCategory = cat_r4);
    });
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r1.selectedCategory == null ? null : ctx_r1.selectedCategory.id) === cat_r4.id ? "border-900 surface-50" : "surface-border");
    \u0275\u0275advance();
    \u0275\u0275property("className", "w-2rem h-2rem border-round-circle flex align-items-center justify-content-center " + cat_r4.colorClass);
    \u0275\u0275advance();
    \u0275\u0275classMap(cat_r4.icon + " text-sm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.name);
  }
}
function TransactionModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("click", function TransactionModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 5);
    \u0275\u0275listener("ngSubmit", function TransactionModalComponent_div_0_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(5, "div", 6)(6, "span", 7);
    \u0275\u0275text(7, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
    \u0275\u0275text(10, "S/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 10, 0);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionModalComponent_div_0_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 11)(14, "span", 12);
    \u0275\u0275text(15, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275template(17, TransactionModalComponent_div_0_div_17_Template, 6, 5, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "button", 16);
    \u0275\u0275listener("click", function TransactionModalComponent_div_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(20, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275text(22, " Guardar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 18);
    \u0275\u0275listener("click", function TransactionModalComponent_div_0_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Registrar ", ctx_r1.type === "INGRESO" ? "Ingreso" : "Gasto", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.amount ? "border-primary" : "surface-border");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.currentCategories);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isValid)("ngClass", \u0275\u0275pureFunction1(7, _c1, !ctx_r1.isValid));
  }
}
var TransactionModalComponent = class _TransactionModalComponent {
  constructor() {
    this.visible = false;
    this.type = "INGRESO";
    this.visibleChange = new EventEmitter();
    this.saved = new EventEmitter();
    this.amount = null;
    this.selectedCategory = null;
    this.incomeCategories = [
      {
        id: 1,
        name: "Venta",
        icon: "fas fa-tshirt",
        colorClass: "bg-green-100 text-green-600"
      },
      {
        id: 2,
        name: "Capital",
        icon: "fas fa-wallet",
        colorClass: "bg-blue-100 text-blue-600"
      }
    ];
    this.expenseCategories = [
      {
        id: 1,
        name: "Pasaje",
        icon: "fas fa-bus",
        colorClass: "bg-red-100 text-red-600"
      },
      {
        id: 2,
        name: "Comida",
        icon: "fas fa-utensils",
        colorClass: "bg-orange-100 text-orange-600"
      },
      {
        id: 3,
        name: "Puesto",
        icon: "fas fa-store",
        colorClass: "bg-purple-100 text-purple-600"
      },
      {
        id: 4,
        name: "Otros",
        icon: "fas fa-ellipsis-h",
        colorClass: "surface-200 text-600"
      }
    ];
  }
  // Detectar cuando se abre el modal para enfocar el input
  ngOnChanges(changes) {
    if (changes["visible"] && changes["visible"].currentValue === true) {
      setTimeout(() => {
        if (this.amountInput) {
          this.amountInput.nativeElement.focus();
        }
      }, 100);
    }
  }
  get currentCategories() {
    return this.type === "INGRESO" ? this.incomeCategories : this.expenseCategories;
  }
  get titleColor() {
    return this.type === "INGRESO" ? "text-green-600" : "text-red-600";
  }
  // Helper para saber si el formulario es válido
  get isValid() {
    return this.amount && this.amount > 0 && this.selectedCategory;
  }
  close() {
    this.visible = false;
    this.visibleChange.emit(false);
    setTimeout(() => {
      this.amount = null;
      this.selectedCategory = null;
    }, 200);
  }
  save() {
    if (!this.isValid) {
      console.warn("Formulario inv\xE1lido: Falta monto o categor\xEDa");
      return;
    }
    this.saved.emit({
      type: this.type,
      amount: this.amount,
      category: this.selectedCategory
    });
    this.close();
  }
  static {
    this.\u0275fac = function TransactionModalComponent_Factory(t) {
      return new (t || _TransactionModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionModalComponent, selectors: [["app-transaction-modal"]], viewQuery: function TransactionModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.amountInput = _t.first);
      }
    }, inputs: { visible: "visible", type: "type" }, outputs: { visibleChange: "visibleChange", saved: "saved" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["amountInput", ""], ["class", "fixed top-0 left-0 w-full h-full z-5 flex align-items-center justify-content-center", "style", "background-color: rgba(15, 23, 42, 0.4); backdrop-filter: blur(4px)", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "h-full", "z-5", "flex", "align-items-center", "justify-content-center", 2, "background-color", "rgba(15, 23, 42, 0.4)", "backdrop-filter", "blur(4px)"], [1, "surface-card", "border-round-2xl", "shadow-8", "p-5", "w-full", "max-w-25rem", "m-3", "slide-up", "relative", 3, "click"], [1, "text-xl", "font-bold", "mb-4", "m-0", 3, "ngClass"], [3, "ngSubmit"], [1, "mb-4"], [1, "text-xs", "font-bold", "text-500", "block", "mb-2"], [1, "flex", "align-items-center", "border-bottom-2", "py-2", "transition-colors", "duration-200", 3, "ngClass"], [1, "text-2xl", "font-bold", "text-400", "mr-2"], ["type", "number", "name", "amount", "placeholder", "0.00", 1, "w-full", "text-3xl", "font-bold", "border-none", "outline-none", "text-900", "bg-transparent", 3, "ngModelChange", "ngModel"], [1, "mb-5"], [1, "text-xs", "font-bold", "text-500", "block", "mb-3"], [1, "grid", "formgrid"], ["class", "col-6 mb-3", 4, "ngFor", "ngForOf"], [1, "flex", "gap-3"], ["type", "button", 1, "w-full", "surface-200", "text-700", "font-bold", "py-3", "border-round-xl", "border-none", "cursor-pointer", "hover:surface-300", "transition-colors", 3, "click"], ["type", "submit", 1, "w-full", "bg-bluegray-900", "text-white", "font-bold", "py-3", "border-round-xl", "border-none", "cursor-pointer", "hover:bg-bluegray-800", "transition-colors", "shadow-3", 3, "disabled", "ngClass"], [1, "absolute", "inset-0", "z-minus-1", 3, "click"], [1, "col-6", "mb-3"], [1, "cursor-pointer", "border-1", "border-round-xl", "p-3", "flex", "align-items-center", "gap-3", "transition-all", "transition-duration-200", "hover:surface-50", 3, "click", "ngClass"], [3, "className"], [1, "font-bold", "text-sm", "text-900"]], template: function TransactionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TransactionModalComponent_div_0_Template, 24, 9, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.visible);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n.slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.btn-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=transaction-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionModalComponent, { className: "TransactionModalComponent" });
})();

// src/app/private/finance/financial-summary/pages/list/financial-summary.component.ts
var _c02 = (a0, a1) => ({ "bg-green-100 text-green-700": a0, "bg-red-100 text-red-700": a1 });
var _c12 = (a0, a1) => ({ "pi-money-bill text-green-500": a0, "pi-mobile text-purple-500": a1 });
function FinancialSummaryListComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 3);
  }
}
function FinancialSummaryListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 18);
    \u0275\u0275text(5, " Caja Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20)(10, "span", 21);
    \u0275\u0275text(11, " Efec: ");
    \u0275\u0275elementStart(12, "strong", 22);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16, " Dig: ");
    \u0275\u0275elementStart(17, "strong", 22);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(8, 3, ctx_r0.cards().cash_total.amount, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(14, 6, ctx_r0.cards().cash_total.cash, "1.0-0"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(19, 9, ctx_r0.cards().cash_total.digital, "1.0-0"), "");
  }
}
function FinancialSummaryListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 3);
  }
}
function FinancialSummaryListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275element(5, "i", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "p", 29);
    \u0275\u0275text(9, " Ingresos Ventas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r0.cards().sales_income.growth > 0 ? "+" : "", "", ctx_r0.cards().sales_income.growth, "% ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(12, 3, ctx_r0.cards().sales_income.amount, "1.2-2"), " ");
  }
}
function FinancialSummaryListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 3);
  }
}
function FinancialSummaryListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 29);
    \u0275\u0275text(6, " Gastos Operativos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(9, 2, ctx_r0.cards().expenses.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cards().expenses.description, " ");
  }
}
function FinancialSummaryListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 3);
  }
}
function FinancialSummaryListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 34);
    \u0275\u0275element(3, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "p", 29);
    \u0275\u0275text(6, " Inversi\xF3n Stock ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 30);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(9, 2, ctx_r0.cards().stock_investment.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.cards().stock_investment.description, " ");
  }
}
function FinancialSummaryListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 36)(1, "th", 37);
    \u0275\u0275text(2, "Concepto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 38);
    \u0275\u0275text(4, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 38);
    \u0275\u0275text(6, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 38);
    \u0275\u0275text(8, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 39);
    \u0275\u0275text(10, "Monto");
    \u0275\u0275elementEnd()();
  }
}
function FinancialSummaryListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 40)(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 38)(9, "div", 44);
    \u0275\u0275element(10, "i", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 39)(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tx_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.concept);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c02, tx_r2.category === "Venta" || tx_r2.category === "Ingreso", tx_r2.category === "Gasto"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r2.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r2.date);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c12, tx_r2.method === "CASH", tx_r2.method !== "CASH"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r2.method, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", tx_r2.type === "income" ? "text-green-600" : "text-red-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tx_r2.type === "income" ? "+" : "-", " S/ ", \u0275\u0275pipeBind2(15, 9, tx_r2.amount, "1.2-2"), " ");
  }
}
function FinancialSummaryListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275text(3, " No hay movimientos recientes registrados. ");
    \u0275\u0275elementEnd()();
  }
}
var FinancialSummaryListComponent = class _FinancialSummaryListComponent {
  constructor() {
    this.financialSummaryService = inject(FinancialSummaryService);
    this.cashflowService = inject(CashflowService);
    this.currentDate = /* @__PURE__ */ new Date();
    this.datePipe = inject(DatePipe);
    this.messageService = inject(MessageService);
    this.loading = signal(true);
    this.cards = signal({
      cash_total: { amount: 0, cash: 0, digital: 0 },
      sales_income: { amount: 0, growth: 0 },
      expenses: { amount: 0, description: "" },
      stock_investment: { amount: 0, description: "" }
    });
    this.transactions = signal([]);
    this.showModal = false;
    this.modalType = "INGRESO";
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.loading.set(true);
    this.financialSummaryService.getSummary().subscribe({
      next: (res) => {
        this.cards.set(res.cards);
        this.transactions.set(res.recent_transactions);
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Error cargando dashboard", err);
        this.loading.set(false);
      }
    });
  }
  // Función que llaman tus botones "Ingreso" y "Gasto"
  openTransactionModal(type) {
    this.modalType = type;
    this.showModal = true;
  }
  // Función que recibe los datos cuando el usuario da click en Guardar
  handleTransactionSave(data) {
    this.cashflowService.registerSummaryMovement(data).subscribe({
      next: (res) => {
        if (res.success) {
          this.messageService.add({
            severity: "success",
            summary: "Guardado",
            detail: "Movimiento registrado correctamente"
          });
          this.showModal = false;
          this.loadDashboardData();
        }
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "No se pudo registrar el movimiento"
        });
      }
    });
  }
  static {
    this.\u0275fac = function FinancialSummaryListComponent_Factory(t) {
      return new (t || _FinancialSummaryListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinancialSummaryListComponent, selectors: [["app-financial-summary"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe, MessageService]), \u0275\u0275StandaloneFeature], decls: 26, vars: 9, consts: [[1, "flex", "flex-column", "gap-4", "p-4", "fadein-animation"], [1, "grid"], [1, "col-12", "md:col-3"], ["height", "10rem", "borderRadius", "16px"], [1, "surface-card", "border-round-2xl", "border-1", "surface-border", "shadow-2", "overflow-hidden"], [1, "p-4", "border-bottom-1", "surface-border", "flex", "flex-column", "sm:flex-row", "justify-content-between", "align-items-center", "gap-3"], [1, "font-bold", "text-800", "m-0", "text-xl"], [1, "flex", "gap-2"], ["pButton", "", "label", "Ingreso", "icon", "pi pi-plus", 1, "p-button-success", "p-button-outlined", "p-button-sm", "border-round-lg", "font-bold", 3, "click"], ["pButton", "", "label", "Gasto", "icon", "pi pi-minus", 1, "p-button-danger", "p-button-outlined", "p-button-sm", "border-round-lg", "font-bold", 3, "click"], ["styleClass", "p-datatable-sm", 3, "value", "loading", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "visibleChange", "saved", "visible", "type"], [1, "bg-bluegray-900", "border-round-2xl", "p-4", "text-white", "shadow-4", "relative", "overflow-hidden", "h-full", "flex", "flex-column", "justify-content-between"], [1, "absolute", "top-0", "right-0", "p-3", "opacity-10"], [1, "pi", "pi-wallet", "text-6xl"], [1, "text-gray-400", "text-xs", "font-bold", "uppercase", "mb-2", 2, "letter-spacing", "1px"], [1, "text-4xl", "font-bold", "m-0", "text-white"], [1, "flex", "gap-2", "text-xs", "mt-3"], [1, "surface-800", "p-2", "border-round", "border-1", "border-700", "text-gray-300"], [1, "text-white"], [1, "surface-card", "border-round-2xl", "p-4", "border-1", "surface-border", "shadow-2", "h-full", "flex", "flex-column", "justify-content-between"], [1, "flex", "justify-content-between", "mb-3"], [1, "w-3rem", "h-3rem", "bg-green-50", "border-round-lg", "flex", "align-items-center", "justify-content-center", "text-green-600"], [1, "pi", "pi-arrow-down", "text-xl", "font-bold"], [1, "text-xs", "font-bold", "text-green-700", "bg-green-100", "px-2", "py-1", "border-round-2xl", "h-fit", "flex", "align-items-center", "gap-1"], [1, "pi", "pi-chart-line", "text-xs"], [1, "text-500", "text-xs", "font-bold", "uppercase", "m-0"], [1, "text-3xl", "font-bold", "text-900", "mt-2", "mb-0"], [1, "w-3rem", "h-3rem", "bg-red-50", "border-round-lg", "flex", "align-items-center", "justify-content-center", "text-red-500"], [1, "pi", "pi-arrow-up", "text-xl", "font-bold"], [1, "text-xs", "text-400", "mt-1", "m-0"], [1, "w-3rem", "h-3rem", "bg-blue-50", "border-round-lg", "flex", "align-items-center", "justify-content-center", "text-blue-600"], [1, "pi", "pi-shopping-bag", "text-xl", "font-bold"], [1, "text-xs", "uppercase", "surface-50", "text-500"], [1, "p-3", "pl-4"], [1, "p-3"], [1, "p-3", "pr-4", "text-right"], [1, "border-bottom-1", "surface-border", "hover:surface-50", "transition-colors"], [1, "p-3", "pl-4", "font-medium", "text-900"], [1, "px-2", "py-1", "border-round", "text-xs", "font-bold", "inline-block", 3, "ngClass"], [1, "p-3", "text-600", "text-sm"], [1, "flex", "align-items-center", "gap-2", "text-700", "text-sm"], [1, "pi", 3, "ngClass"], [1, "font-bold", "text-lg", 3, "ngClass"], ["colspan", "5", 1, "text-center", "p-5", "text-500"], [1, "pi", "pi-inbox", "text-4xl", "mb-2", "block", "text-300"]], template: function FinancialSummaryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, FinancialSummaryListComponent_Conditional_3_Template, 1, 0, "p-skeleton", 3)(4, FinancialSummaryListComponent_Conditional_4_Template, 20, 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275template(6, FinancialSummaryListComponent_Conditional_6_Template, 1, 0, "p-skeleton", 3)(7, FinancialSummaryListComponent_Conditional_7_Template, 13, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 2);
        \u0275\u0275template(9, FinancialSummaryListComponent_Conditional_9_Template, 1, 0, "p-skeleton", 3)(10, FinancialSummaryListComponent_Conditional_10_Template, 12, 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 2);
        \u0275\u0275template(12, FinancialSummaryListComponent_Conditional_12_Template, 1, 0, "p-skeleton", 3)(13, FinancialSummaryListComponent_Conditional_13_Template, 12, 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 4)(15, "div", 5)(16, "h3", 6);
        \u0275\u0275text(17, "\xDAltimos Movimientos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 7)(19, "button", 8);
        \u0275\u0275listener("click", function FinancialSummaryListComponent_Template_button_click_19_listener() {
          return ctx.openTransactionModal("INGRESO");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 9);
        \u0275\u0275listener("click", function FinancialSummaryListComponent_Template_button_click_20_listener() {
          return ctx.openTransactionModal("GASTO");
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "p-table", 10);
        \u0275\u0275template(22, FinancialSummaryListComponent_ng_template_22_Template, 11, 0, "ng-template", 11)(23, FinancialSummaryListComponent_ng_template_23_Template, 16, 18, "ng-template", 12)(24, FinancialSummaryListComponent_ng_template_24_Template, 4, 0, "ng-template", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "app-transaction-modal", 14);
        \u0275\u0275twoWayListener("visibleChange", function FinancialSummaryListComponent_Template_app_transaction_modal_visibleChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.showModal, $event) || (ctx.showModal = $event);
          return $event;
        });
        \u0275\u0275listener("saved", function FinancialSummaryListComponent_Template_app_transaction_modal_saved_25_listener($event) {
          return ctx.handleTransactionSave($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(6, ctx.loading() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(9, ctx.loading() ? 9 : 10);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(12, ctx.loading() ? 12 : 13);
        \u0275\u0275advance(9);
        \u0275\u0275property("value", ctx.transactions())("loading", ctx.loading())("rowHover", true);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("visible", ctx.showModal);
        \u0275\u0275property("type", ctx.modalType);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      DecimalPipe,
      ButtonModule,
      ButtonDirective,
      PrimeTemplate,
      CardModule,
      TableModule,
      Table,
      TagModule,
      TooltipModule,
      SkeletonModule,
      Skeleton,
      TransactionModalComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinancialSummaryListComponent, { className: "FinancialSummaryListComponent" });
})();

// src/app/private/finance/financial-summary/financial-summary-routing.module.ts
var routes = [
  { path: "", component: FinancialSummaryListComponent },
  { path: "", pathMatch: "full", redirectTo: "financial-summary" }
];
var FinancialSummaryRoutingModule = class _FinancialSummaryRoutingModule {
  static {
    this.\u0275fac = function FinancialSummaryRoutingModule_Factory(t) {
      return new (t || _FinancialSummaryRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FinancialSummaryRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/financial-summary/financial-summary.module.ts
var FinancialSummaryModule = class _FinancialSummaryModule {
  static {
    this.\u0275fac = function FinancialSummaryModule_Factory(t) {
      return new (t || _FinancialSummaryModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FinancialSummaryModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FinancialSummaryRoutingModule] });
  }
};
export {
  FinancialSummaryModule
};
//# sourceMappingURL=financial-summary.module-LA46JFXE.js.map

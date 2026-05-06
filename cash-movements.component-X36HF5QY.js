import {
  CashflowService
} from "./chunk-MIMKYK2H.js";
import {
  Dialog,
  DialogModule
} from "./chunk-CVQIDRFM.js";
import "./chunk-S5OQ6NBU.js";
import {
  AutoCompleteModule
} from "./chunk-KFVFK4CL.js";
import {
  Calendar,
  CalendarModule,
  InputNumber,
  InputNumberModule
} from "./chunk-EYJWJYX5.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-4JQRHAYE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import "./chunk-TC2MDCQP.js";
import "./chunk-3ZDI7NAM.js";
import "./chunk-5YEVHO5S.js";
import "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-F6S55RTJ.js";
import "./chunk-J33MWZEZ.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/cash-movements/pages/list/cash-movements.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ width: "95%", maxWidth: "400px" });
function CashMovementsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function CashMovementsListComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeDate(-1));
    });
    \u0275\u0275elementEnd();
  }
}
function CashMovementsListComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function CashMovementsListComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeDate(1));
    });
    \u0275\u0275elementEnd();
  }
}
function CashMovementsListComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 63);
    \u0275\u0275element(4, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 65)(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 63)(9, "span", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 68);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.time);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r4.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind2(13, 4, item_r4.amount, "1.2-2"), " ");
  }
}
function CashMovementsListComponent_ForEmpty_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275text(2, " No hay ventas registradas ");
    \u0275\u0275elementEnd()();
  }
}
function CashMovementsListComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 63);
    \u0275\u0275element(4, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 63)(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 68);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.time);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r5.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" + ", \u0275\u0275pipeBind2(12, 4, item_r5.amount, "1.2-2"), " ");
  }
}
function CashMovementsListComponent_ForEmpty_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275text(2, " No hay ingresos extra ");
    \u0275\u0275elementEnd()();
  }
}
function CashMovementsListComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 63);
    \u0275\u0275element(4, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 71);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 63)(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 73);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.time);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r6.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" - ", \u0275\u0275pipeBind2(12, 4, item_r6.amount, "1.2-2"), " ");
  }
}
function CashMovementsListComponent_ForEmpty_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69);
    \u0275\u0275text(2, " No hay gastos ");
    \u0275\u0275elementEnd()();
  }
}
function CashMovementsListComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "Gastos Recurrentes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 75)(3, "div", 76)(4, "button", 77);
    \u0275\u0275listener("click", function CashMovementsListComponent_Conditional_100_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setQuickExpense("Pasaje", 4));
    });
    \u0275\u0275element(5, "i", 78);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Pasaje");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 79);
    \u0275\u0275text(9, "S/ 4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 76)(11, "button", 77);
    \u0275\u0275listener("click", function CashMovementsListComponent_Conditional_100_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setQuickExpense("Almuerzo", 10));
    });
    \u0275\u0275element(12, "i", 80);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Almuerzo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 79);
    \u0275\u0275text(16, "S/ 10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 76)(18, "button", 77);
    \u0275\u0275listener("click", function CashMovementsListComponent_Conditional_100_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setQuickExpense("Vigilancia", 1));
    });
    \u0275\u0275element(19, "i", 81);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Vigilancia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 79);
    \u0275\u0275text(23, "S/ 1");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(24, "div", 82);
  }
}
function CashMovementsListComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span", 55);
    \u0275\u0275text(2, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-calendar", 83);
    \u0275\u0275twoWayListener("ngModelChange", function CashMovementsListComponent_Conditional_101_Template_p_calendar_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.movementForm.date, $event) || (ctx_r1.movementForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.movementForm.date);
    \u0275\u0275property("showTime", true)("showIcon", true);
  }
}
var CashMovementsListComponent = class _CashMovementsListComponent {
  constructor() {
    this.cashflowService = inject(CashflowService);
    this.datePipe = inject(DatePipe);
    this.currentDate = /* @__PURE__ */ new Date();
    this.lists = signal({ sales: [], incomes: [], expenses: [] });
    this.summary = signal({ opening_balance: 100, final_balance: 0 });
    this.filters = { cash: true, yape: true, card: true };
    this.showModal = false;
    this.modalType = "INCOME";
    this.movementForm = {
      payment_method: "CASH",
      description: "",
      amount: null,
      date: /* @__PURE__ */ new Date()
    };
    this.paymentMethodsList = ["CASH", "YAPE", "CARD"];
    this.netOperations = computed(() => {
      const s = this.summary();
      return (s.total_sales || 0) + (s.total_incomes || 0) - (s.total_expenses || 0);
    });
  }
  get isAdmin() {
    const jsonData = localStorage.getItem("user");
    const userData = jsonData ? JSON.parse(jsonData) : void 0;
    return userData.role === "Super Admin" || userData.role === "Admin";
  }
  get filteredTotalIncomesAmount() {
    const sales = this.filteredList("sales").reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    const incomes = this.filteredList("incomes").reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    return sales + incomes;
  }
  get filteredTotalExpensesAmount() {
    return this.filteredList("expenses").reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  }
  get filteredFinalBalance() {
    return this.filteredTotalIncomesAmount - this.filteredTotalExpensesAmount;
  }
  // get filteredFinalBalance(): number {
  //   const base = Number(this.summary().opening_balance) || 0;
  //   return (
  //     base + this.filteredTotalIncomesAmount - this.filteredTotalExpensesAmount
  //   );
  // }
  ngOnInit() {
    this.reportSubscription = this.cashflowService.getReport().subscribe((data) => {
      if (data && data.lists) {
        this.lists.set(data.lists);
        this.summary.set(data.summary);
      }
    });
    this.refreshData();
  }
  ngOnDestroy() {
    if (this.reportSubscription) {
      this.reportSubscription.unsubscribe();
    }
  }
  // Helper para formatear fecha y llamar al servicio
  refreshData() {
    const dateStr = this.datePipe.transform(this.currentDate, "yyyy-MM-dd");
    const activeFilters = [];
    if (this.filters.cash)
      activeFilters.push("CASH");
    if (this.filters.yape) {
      activeFilters.push("YAPE");
      activeFilters.push("PLIN");
    }
    if (this.filters.card)
      activeFilters.push("CARD");
    this.cashflowService.loadDailyReport(dateStr, activeFilters).subscribe();
  }
  toggleFilter(key) {
    this.filters[key] = !this.filters[key];
    this.refreshData();
  }
  changeDate(days) {
    this.currentDate.setDate(this.currentDate.getDate() + days);
    this.currentDate = new Date(this.currentDate);
    this.refreshData();
  }
  // Filtrado visual local
  filteredList(type) {
    const list = this.lists()[type] || [];
    return list.filter((item) => {
      const method = (item.method || "CASH").toUpperCase();
      if (method.includes("CASH") && !this.filters.cash)
        return false;
      if ((method.includes("YAPE") || method.includes("PLIN")) && !this.filters.yape)
        return false;
      if ((method.includes("CARD") || method.includes("TARJETA")) && !this.filters.card)
        return false;
      return true;
    });
  }
  // Modal Actions
  openModal(type) {
    this.modalType = type;
    const defaultDate = new Date(this.currentDate);
    const now = /* @__PURE__ */ new Date();
    defaultDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
    this.movementForm = {
      description: "",
      amount: null,
      date: defaultDate,
      payment_method: "CASH"
    };
    this.showModal = true;
  }
  setQuickExpense(desc, amount) {
    this.movementForm.description = desc;
    this.movementForm.amount = amount;
  }
  saveMovement() {
    if (!this.movementForm.amount || !this.movementForm.date)
      return;
    const dateStr = this.datePipe.transform(this.currentDate, "yyyy-MM-dd");
    const formattedDate = this.datePipe.transform(this.movementForm.date, "yyyy-MM-dd HH:mm:ss");
    const movementData = {
      type: this.modalType,
      category: "STORE",
      // <--- Importante: Para que el Service sepa que es de tienda
      amount: this.movementForm.amount,
      description: this.movementForm.description,
      date: formattedDate,
      payment_method: this.movementForm.payment_method
    };
    this.cashflowService.registerMovement(movementData, null, dateStr).subscribe({
      next: () => {
        this.showModal = false;
      },
      error: (err) => console.error("Error guardando movimiento", err)
    });
  }
  static {
    this.\u0275fac = function CashMovementsListComponent_Factory(t) {
      return new (t || _CashMovementsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashMovementsListComponent, selectors: [["app-cashflow"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 115, vars: 47, consts: [[1, "flex", "flex-column", "h-screen", "bg-blue-50", "font-family", "relative"], [1, "surface-card", "shadow-2", "p-3", "z-2", "relative"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "align-items-center", "gap-2", "md:gap-3"], [1, "text-center", "md:text-left", "w-full", "md:w-auto"], [1, "text-xl", "font-bold", "text-900", "m-0"], [1, "text-sm", "text-500", "mt-1"], [1, "text-green-600", "font-bold"], [1, "flex", "align-items-center", "surface-100", "border-round-xl", "p-1", "w-full", "md:w-auto", "justify-content-between", "md:justify-content-center", "mt-2", "md:mt-0", "h-custom"], ["pButton", "", "icon", "pi pi-chevron-left", 1, "p-button-text", "p-button-rounded", "text-600"], [1, "flex", "flex-column", "align-items-center", "px-2", "md:px-4", "cursor-pointer"], [1, "text-[10px]", "md:text-xs", "font-bold", "text-500", "uppercase"], [1, "text-sm", "md:text-base", "font-bold", "text-800"], ["pButton", "", "icon", "pi pi-chevron-right", 1, "p-button-text", "p-button-rounded", "text-600"], [1, "flex", "gap-2", "w-full", "md:w-auto", "mt-2", "md:mt-0"], ["pButton", "", "label", "Ingreso", "icon", "pi pi-plus-circle", 1, "p-button-success", "p-button-outlined", "font-bold", "border-round-xl", "flex-1", "md:flex-none", "justify-content-center", 3, "click"], ["pButton", "", "label", "Gasto", "icon", "pi pi-minus-circle", 1, "p-button-danger", "p-button-outlined", "font-bold", "border-round-xl", "flex-1", "md:flex-none", "justify-content-center", 3, "click"], [1, "flex", "gap-2", "mt-3", "overflow-x-auto", "pb-1"], [1, "text-xs", "font-bold", "text-400", "uppercase", "mr-1", "align-self-center"], [1, "cursor-pointer", "border-1", "border-round-lg", "md:px-3", "px-2", "py-1", "text-xs", "font-bold", "flex", "align-items-center", "md:gap-2", "gap-1", "transition-colors", "white-space-nowrap", 3, "click", "ngClass"], [1, "pi", "pi-money-bill"], [1, "pi", "pi-mobile"], [1, "pi", "pi-credit-card"], [1, "flex-1", "overflow-y-auto", "p-2", "md:p-3", 2, "padding-bottom", "14rem !important"], [1, "surface-card", "border-round-xl", "shadow-1", "overflow-x-auto"], [1, "w-full", "text-sm", 2, "border-collapse", "collapse", "min-width", "600px"], [1, "surface-100", "text-500", "border-bottom-1", "border-200", "uppercase", "text-xs", "font-bold", "sticky", "top-0", "z-1"], [1, "p-3", "text-left", "w-6rem"], [1, "p-3", "text-center", "w-3rem"], [1, "p-3", "text-left"], [1, "p-3", "text-center", "w-8rem"], [1, "p-3", "text-right", "w-8rem"], [1, "text-700"], [1, "surface-50", "border-bottom-1", "border-100"], ["colspan", "5", 1, "p-2", "pl-3", "text-xs", "font-bold", "text-indigo-600", "uppercase"], [1, "pi", "pi-shopping-bag", "mr-2"], [1, "border-bottom-1", "surface-border", "hover:surface-50", "transition-colors"], ["colspan", "5", 1, "p-2", "pl-3", "text-xs", "font-bold", "text-green-600", "uppercase"], [1, "pi", "pi-plus-circle", "mr-2"], [1, "border-bottom-1", "surface-border", "hover:surface-50"], ["colspan", "5", 1, "p-2", "pl-3", "text-xs", "font-bold", "text-red-600", "uppercase"], [1, "pi", "pi-minus-circle", "mr-2"], [1, "fixed", "bottom-0", "left-0", "w-full", "surface-900", "text-0", "p-2", "md:p-3", "z-5", "shadow-top-2"], [1, "flex", "flex-column", "md:flex-row", "justify-content-between", "align-items-center", "gap-2", "md:gap-3", "max-w-7xl", "mx-auto"], [1, "flex", "flex-wrap", "gap-3", "md:gap-5", "text-sm", "justify-content-center"], [1, "text-400"], [1, "block", "text-[10px]", "md:text-xs", "font-bold", "uppercase", "mb-1"], [1, "font-mono", "text-lg", "md:text-xl", "font-bold", "text-white"], [1, "text-400", "border-left-1", "border-700", "pl-3", "md:pl-4"], [1, "font-mono", "text-lg", "md:text-xl", "font-bold", "text-green-400"], [1, "font-mono", "text-lg", "md:text-xl", "font-bold", "text-red-400"], [1, "flex", "align-items-center", "gap-2", "md:gap-3", "surface-800", "px-3", "md:px-4", "py-2", "border-round-xl", "border-1", "border-700", "mt-1", "md:mt-0", "w-full", "md:w-auto", "justify-content-center"], [1, "text-xs", "font-bold", "text-400", "uppercase"], [1, "text-2xl", "md:text-3xl", "font-black", "text-white"], ["styleClass", "p-fluid", 3, "visibleChange", "visible", "modal", "draggable", "resizable", "header"], [1, "flex", "flex-column", "gap-3", "pt-2"], [1, "block", "text-500", "font-bold", "text-sm", "mb-1"], ["styleClass", "w-full text-sm", 1, "w-full", 3, "ngModelChange", "options", "ngModel"], ["pInputText", "", "placeholder", "Ej: Pago de servicios", "autofocus", "", 3, "ngModelChange", "ngModel"], ["mode", "currency", "currency", "PEN", "locale", "es-PE", "placeholder", "0.00", "styleClass", "font-bold text-lg", 3, "ngModelChange", "ngModel", "min"], ["pButton", "", 1, "mt-2", "font-bold", "py-3", 3, "click", "label", "disabled"], ["pButton", "", "icon", "pi pi-chevron-left", 1, "p-button-text", "p-button-rounded", "text-600", 3, "click"], ["pButton", "", "icon", "pi pi-chevron-right", 1, "p-button-text", "p-button-rounded", "text-600", 3, "click"], [1, "p-3", "font-mono", "text-xs", "text-500"], [1, "p-3", "text-center"], [1, "pi", "pi-arrow-down", "text-green-500"], [1, "p-3"], [1, "font-bold", "text-800", "text-xs", "line-height-3"], [1, "text-xs", "font-bold", "px-2", "py-1", "border-round", "surface-200", "text-700"], [1, "p-3", "text-right", "font-bold", "text-green-600"], ["colspan", "5", 1, "p-3", "text-center", "text-500", "text-xs", "italic"], [1, "pi", "pi-plus", "text-green-500"], [1, "p-3", "font-bold", "text-800", "text-xs"], [1, "pi", "pi-minus", "text-red-500"], [1, "p-3", "text-right", "font-bold", "text-red-600"], [1, "text-xs", "font-bold", "text-500", "uppercase"], [1, "grid", "grid-nogutter", "gap-2"], [1, "col"], ["pButton", "", 1, "p-button-outlined", "p-button-secondary", "text-sm", "flex", "flex-column", "py-2", "h-full", "w-full", 3, "click"], [1, "pi", "pi-car", "text-xl", "mb-1"], [1, "text-xs", "font-bold", "surface-200", "px-2", "border-round", "mt-1"], [1, "pi", "pi-apple", "text-xl", "mb-1"], [1, "pi", "pi-shield", "text-xl", "mb-1"], [1, "border-top-1", "border-200", "my-1"], ["hourFormat", "12", "dateFormat", "dd/mm/yy", "appendTo", "body", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "showTime", "showIcon"]], template: function CashMovementsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Control de Caja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275text(7, " Estado: ");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "ABIERTO");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, CashMovementsListComponent_Conditional_11_Template, 1, 0, "button", 8);
        \u0275\u0275elementStart(12, "div", 9)(13, "span", 10);
        \u0275\u0275text(14, "Visualizando");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, CashMovementsListComponent_Conditional_18_Template, 1, 0, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13)(20, "button", 14);
        \u0275\u0275listener("click", function CashMovementsListComponent_Template_button_click_20_listener() {
          return ctx.openModal("INCOME");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 15);
        \u0275\u0275listener("click", function CashMovementsListComponent_Template_button_click_21_listener() {
          return ctx.openModal("EXPENSE");
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 16)(23, "span", 17);
        \u0275\u0275text(24, "Filtros:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 18);
        \u0275\u0275listener("click", function CashMovementsListComponent_Template_div_click_25_listener() {
          return ctx.toggleFilter("cash");
        });
        \u0275\u0275element(26, "i", 19);
        \u0275\u0275text(27, " CASH ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 18);
        \u0275\u0275listener("click", function CashMovementsListComponent_Template_div_click_28_listener() {
          return ctx.toggleFilter("yape");
        });
        \u0275\u0275element(29, "i", 20);
        \u0275\u0275text(30, " YAPE/PLIN ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 18);
        \u0275\u0275listener("click", function CashMovementsListComponent_Template_div_click_31_listener() {
          return ctx.toggleFilter("card");
        });
        \u0275\u0275element(32, "i", 21);
        \u0275\u0275text(33, " CARD ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 22)(35, "div", 23)(36, "table", 24)(37, "thead", 25)(38, "tr")(39, "th", 26);
        \u0275\u0275text(40, "Hora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th", 27);
        \u0275\u0275text(42, "Tipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th", 28);
        \u0275\u0275text(44, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th", 29);
        \u0275\u0275text(46, "M\xE9todo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th", 30);
        \u0275\u0275text(48, "Monto");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "tbody", 31)(50, "tr", 32)(51, "td", 33);
        \u0275\u0275element(52, "i", 34);
        \u0275\u0275text(53, " Ventas del D\xEDa ");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(54, CashMovementsListComponent_For_55_Template, 14, 7, "tr", 35, _forTrack0, false, CashMovementsListComponent_ForEmpty_56_Template, 3, 0, "tr");
        \u0275\u0275elementStart(57, "tr", 32)(58, "td", 36);
        \u0275\u0275element(59, "i", 37);
        \u0275\u0275text(60, " Otros Ingresos ");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(61, CashMovementsListComponent_For_62_Template, 13, 7, "tr", 38, _forTrack0, false, CashMovementsListComponent_ForEmpty_63_Template, 3, 0, "tr");
        \u0275\u0275elementStart(64, "tr", 32)(65, "td", 39);
        \u0275\u0275element(66, "i", 40);
        \u0275\u0275text(67, " Gastos ");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(68, CashMovementsListComponent_For_69_Template, 13, 7, "tr", 38, _forTrack0, false, CashMovementsListComponent_ForEmpty_70_Template, 3, 0, "tr");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(71, "div", 41)(72, "div", 42)(73, "div", 43)(74, "div", 44)(75, "span", 45);
        \u0275\u0275text(76, "Caja Base");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 46);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 47)(81, "span", 45);
        \u0275\u0275text(82, "Ingresos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 48);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 47)(87, "span", 45);
        \u0275\u0275text(88, "Egresos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span", 49);
        \u0275\u0275text(90);
        \u0275\u0275pipe(91, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "div", 50)(93, "span", 51);
        \u0275\u0275text(94, "Total en Caja");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "span", 52);
        \u0275\u0275text(96);
        \u0275\u0275pipe(97, "number");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(98, "p-dialog", 53);
        \u0275\u0275twoWayListener("visibleChange", function CashMovementsListComponent_Template_p_dialog_visibleChange_98_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.showModal, $event) || (ctx.showModal = $event);
          return $event;
        });
        \u0275\u0275elementStart(99, "div", 54);
        \u0275\u0275template(100, CashMovementsListComponent_Conditional_100_Template, 25, 0)(101, CashMovementsListComponent_Conditional_101_Template, 4, 3, "div");
        \u0275\u0275elementStart(102, "div")(103, "span", 55);
        \u0275\u0275text(104, "M\xE9todo de Pago");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "p-dropdown", 56);
        \u0275\u0275twoWayListener("ngModelChange", function CashMovementsListComponent_Template_p_dropdown_ngModelChange_105_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.movementForm.payment_method, $event) || (ctx.movementForm.payment_method = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div")(107, "span", 55);
        \u0275\u0275text(108, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "input", 57);
        \u0275\u0275twoWayListener("ngModelChange", function CashMovementsListComponent_Template_input_ngModelChange_109_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.movementForm.description, $event) || (ctx.movementForm.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div")(111, "span", 55);
        \u0275\u0275text(112, "Monto (S/)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "p-inputNumber", 58);
        \u0275\u0275twoWayListener("ngModelChange", function CashMovementsListComponent_Template_p_inputNumber_ngModelChange_113_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.movementForm.amount, $event) || (ctx.movementForm.amount = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "button", 59);
        \u0275\u0275listener("click", function CashMovementsListComponent_Template_button_click_114_listener() {
          return ctx.saveMovement();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.isAdmin ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 31, ctx.currentDate, "dd MMM, yyyy"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, ctx.isAdmin ? 18 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", ctx.filters.cash ? "bg-blue-50 border-blue-500 text-blue-700" : "surface-card border-300 text-500");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.filters.yape ? "bg-blue-50 border-blue-500 text-blue-700" : "surface-card border-300 text-500");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.filters.card ? "bg-blue-50 border-blue-500 text-blue-700" : "surface-card border-300 text-500");
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.filteredList("sales"));
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.filteredList("incomes"));
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.filteredList("expenses"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(79, 34, ctx.summary().opening_balance, "1.2-2"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("+ S/ ", \u0275\u0275pipeBind2(85, 37, ctx.filteredTotalIncomesAmount, "1.2-2"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("- S/ ", \u0275\u0275pipeBind2(91, 40, ctx.filteredTotalExpensesAmount, "1.2-2"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(97, 43, ctx.filteredFinalBalance, "1.2-2"), "");
        \u0275\u0275advance(2);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c0));
        \u0275\u0275twoWayProperty("visible", ctx.showModal);
        \u0275\u0275property("modal", true)("draggable", false)("resizable", false)("header", ctx.modalType === "INCOME" ? "Registrar Ingreso" : "Registrar Gasto");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(100, ctx.modalType === "EXPENSE" ? 100 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(101, ctx.isAdmin ? 101 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.paymentMethodsList);
        \u0275\u0275twoWayProperty("ngModel", ctx.movementForm.payment_method);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.movementForm.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.movementForm.amount);
        \u0275\u0275property("min", 0);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.modalType === "INCOME" ? "p-button-success" : "p-button-danger");
        \u0275\u0275property("label", ctx.modalType === "INCOME" ? "Guardar Ingreso" : "Confirmar Gasto")("disabled", !ctx.movementForm.amount || !ctx.movementForm.description);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      DecimalPipe,
      DatePipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ButtonModule,
      ButtonDirective,
      DialogModule,
      Dialog,
      InputTextModule,
      InputText,
      InputNumberModule,
      InputNumber,
      CalendarModule,
      Calendar,
      AutoCompleteModule,
      DropdownModule,
      Dropdown
    ], styles: ["\n\n  p-dialog .flex.flex-column.gap-3.pt-2 .p-button {\n  color: #ffffff;\n  background: #689f38;\n  border: 1px solid #689f38;\n}\n  p-dialog .flex.flex-column.gap-3.pt-2 .p-calendar:not(.p-calendar-disabled).p-focus > .p-inputtext,   p-dialog .flex.flex-column.gap-3.pt-2 .p-inputtext:enabled:focus,   p-dialog .flex.flex-column.gap-3.pt-2 .p-dropdown:not(.p-disabled).p-focus {\n  box-shadow: 0 0 0 0.2rem rgba(104, 159, 56, 0.1490196078);\n  border-color: #689f38;\n}\n  p-dialog .flex.flex-column.gap-3.pt-2 .p-inputtext:enabled:hover,   p-dialog .flex.flex-column.gap-3.pt-2 .p-dropdown:not(.p-dropdown-disabled):hover {\n  border-color: #689f38;\n}\n  p-dialog .flex.flex-column.gap-3.pt-2 .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {\n  background: rgba(104, 159, 56, 0.1490196078);\n}\n  p-dialog .flex.flex-column.gap-3.pt-2 .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {\n  color: #69707a;\n  background: rgba(104, 159, 56, 0.1490196078);\n}\n  .h-custom {\n  height: 49px;\n}\n/*# sourceMappingURL=cash-movements.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashMovementsListComponent, { className: "CashMovementsListComponent" });
})();
export {
  CashMovementsListComponent
};
//# sourceMappingURL=cash-movements.component-X36HF5QY.js.map

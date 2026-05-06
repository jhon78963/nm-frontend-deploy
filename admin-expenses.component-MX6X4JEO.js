import {
  CashflowService
} from "./chunk-MIMKYK2H.js";
import {
  Tag,
  TagModule
} from "./chunk-HO5KCK4N.js";
import {
  Dialog,
  DialogModule
} from "./chunk-CVQIDRFM.js";
import "./chunk-S5OQ6NBU.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-ACRAOC7V.js";
import {
  Table,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
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
import {
  BASE_UPLOAD_URL
} from "./chunk-TC2MDCQP.js";
import {
  Toast,
  ToastModule
} from "./chunk-NOHFYFBO.js";
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
import {
  MessageService,
  PrimeTemplate
} from "./chunk-J33MWZEZ.js";
import {
  DomSanitizer
} from "./chunk-NCIKOZG6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  RuntimeError,
  __spreadProps,
  __spreadValues,
  assertInInjectionContext,
  assertNotInReactiveContext,
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
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OI5KBWGW.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    });
  } else {
    state = signal({ kind: 1, value: options?.initialValue });
  }
  const sub = source.subscribe({
    next: (value) => state.set({ kind: 1, value }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({ kind: 2, error });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (ngDevMode && options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  });
}

// src/app/private/finance/cash-movements/pipes/safe-url.pipe.ts
var SafeUrlPipe = class _SafeUrlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static {
    this.\u0275fac = function SafeUrlPipe_Factory(t) {
      return new (t || _SafeUrlPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeUrl", type: _SafeUrlPipe, pure: true, standalone: true });
  }
};

// src/app/private/finance/cash-movements/pages/admin-expenses/admin-expenses.component.ts
var _c0 = ["fileUpload"];
var _c1 = () => ({ width: "90vw", maxWidth: "800px" });
var _c2 = () => ({ height: "80vh" });
function AdminExpensesComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedFile.name, "");
  }
}
function AdminExpensesComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AdminExpensesComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminExpensesComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "M\xE9todo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 29);
    \u0275\u0275text(8, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 30);
    \u0275\u0275text(10, "Voucher");
    \u0275\u0275elementEnd()();
  }
}
function AdminExpensesComponent_ng_template_42_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function AdminExpensesComponent_ng_template_42_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const expense_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showVoucher(expense_r5.voucher_path));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminExpensesComponent_ng_template_42_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Sin adjunto");
    \u0275\u0275elementEnd();
  }
}
function AdminExpensesComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 34);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 30)(12, "div", 35)(13, "button", 36);
    \u0275\u0275listener("click", function AdminExpensesComponent_ng_template_42_Template_button_click_13_listener() {
      const expense_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editExpense(expense_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminExpensesComponent_ng_template_42_Conditional_14_Template, 1, 0, "button", 37)(15, AdminExpensesComponent_ng_template_42_Conditional_15_Template, 2, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const expense_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, expense_r5.date, "dd/MM HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(expense_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", expense_r5.method);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(10, 8, expense_r5.amount, "1.2-2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(14, expense_r5.voucher_path ? 14 : 15);
  }
}
function AdminExpensesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 26);
    \u0275\u0275pipe(1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 1, ctx_r1.previewUrl()), \u0275\u0275sanitizeResourceUrl);
  }
}
function AdminExpensesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.previewUrl(), \u0275\u0275sanitizeUrl);
  }
}
var AdminExpensesComponent = class _AdminExpensesComponent {
  constructor() {
    this.baseUploadUrl = BASE_UPLOAD_URL;
    this.selectedMonth = /* @__PURE__ */ new Date();
    this.cashService = inject(CashflowService);
    this.messageService = inject(MessageService);
    this.datePipe = inject(DatePipe);
    this.loading = signal(false);
    this.adminExpenses = toSignal(this.cashService.getAdminExpenses(), {
      initialValue: []
    });
    this.selectedFile = null;
    this.displayPreview = signal(false);
    this.previewUrl = signal("");
    this.isPdf = signal(false);
    this.isEditing = signal(false);
    this.editingId = null;
    this.expenseForm = {
      description: "",
      amount: null,
      date: /* @__PURE__ */ new Date(),
      payment_method: "CASH",
      category: "ADMINISTRATIVE",
      type: "EXPENSE"
    };
    this.paymentMethods = [
      { label: "Efectivo", value: "CASH" },
      { label: "Yape/Plin", value: "YAPE" },
      { label: "Tarjeta", value: "CARD" },
      { label: "Transferencia", value: "TRANSFER" }
    ];
  }
  ngOnInit() {
    this.loadExpenses();
  }
  loadExpenses() {
    this.loading.set(true);
    const monthStr = this.datePipe.transform(this.selectedMonth, "yyyy-MM");
    this.cashService.loadMonthlyAdminExpenses(monthStr).subscribe({
      complete: () => this.loading.set(false)
    });
  }
  showVoucher(path) {
    const fullUrl = `${this.baseUploadUrl}${path}`;
    this.previewUrl.set(fullUrl);
    this.isPdf.set(path.toLowerCase().endsWith(".pdf"));
    this.displayPreview.set(true);
  }
  onFileSelect(event) {
    this.selectedFile = event.files[0];
  }
  editExpense(expense) {
    this.isEditing.set(true);
    this.editingId = expense.id;
    this.expenseForm = {
      description: expense.description,
      amount: expense.amount,
      date: new Date(expense.date),
      // Convertimos el string de la BD a Date
      payment_method: expense.method,
      category: "ADMINISTRATIVE",
      type: "EXPENSE"
    };
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  saveExpense() {
    if (!this.expenseForm.amount || !this.expenseForm.description)
      return;
    this.loading.set(true);
    const formattedDate = this.datePipe.transform(this.expenseForm.date, "yyyy-MM-dd HH:mm:ss");
    const currentMonthStr = this.datePipe.transform(this.selectedMonth, "yyyy-MM");
    const request$ = this.isEditing() ? this.cashService.updateMovement(this.editingId, __spreadProps(__spreadValues({}, this.expenseForm), { date: formattedDate }), this.selectedFile, currentMonthStr) : this.cashService.registerMovement(__spreadProps(__spreadValues({}, this.expenseForm), { date: formattedDate }), this.selectedFile, currentMonthStr);
    request$.subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "\xC9xito",
          detail: this.isEditing() ? "Gasto actualizado" : "Gasto registrado"
        });
        this.resetForm();
        this.loadExpenses();
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Ocurri\xF3 un error"
        });
        this.loading.set(false);
      }
    });
  }
  resetForm() {
    this.expenseForm = {
      description: "",
      amount: null,
      date: /* @__PURE__ */ new Date(),
      payment_method: "CASH",
      category: "ADMINISTRATIVE",
      type: "EXPENSE"
    };
    this.selectedFile = null;
    this.isEditing.set(false);
    this.editingId = null;
    if (this.fileUpload)
      this.fileUpload.clear();
  }
  static {
    this.\u0275fac = function AdminExpensesComponent_Factory(t) {
      return new (t || _AdminExpensesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminExpensesComponent, selectors: [["app-admin-expenses"]], viewQuery: function AdminExpensesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileUpload = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([MessageService, DatePipe, DialogModule]), \u0275\u0275StandaloneFeature], decls: 47, vars: 32, consts: [["fileUpload", ""], [1, "m-3", "flex", "align-items-center", "justify-content-center", "gap-3"], [1, "block", "font-bold"], ["view", "month", "dateFormat", "mm/yy", 1, "text-center", 3, "ngModelChange", "onSelect", "ngModel", "readonlyInput"], [1, "grid", "p-fluid"], [1, "col-12", "lg:col-4"], [1, "surface-card", "p-4", "shadow-2", "border-round-xl"], [1, "text-xl", "font-bold", "mb-4", "text-900"], [1, "flex", "flex-column", "gap-3"], [1, "block", "font-bold", "mb-2"], ["pInputText", "", "placeholder", "Ej: Pago de Alquiler", 3, "ngModelChange", "ngModel"], [1, "grid"], [1, "col-6"], ["mode", "currency", "currency", "PEN", "locale", "es-PE", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "options", "ngModel"], ["hourFormat", "12", "dateFormat", "dd/mm/yy", 3, "ngModelChange", "ngModel", "showTime", "showIcon"], ["mode", "basic", "chooseLabel", "Subir Archivo", "accept", "image/*,application/pdf", "maxFileSize", "5000000", "styleClass", "w-full", 3, "onSelect"], [1, "text-green-600", "font-bold", "mt-1", "block"], ["pButton", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-secondary", "py-3", "font-bold"], ["pButton", "", 1, "flex-1", "py-3", "font-bold", 3, "click", "label", "icon", "loading"], [1, "col-12", "lg:col-8"], ["responsiveLayout", "scroll", 3, "value", "rows", "paginator", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "visibleChange", "visible", "modal", "header", "contentStyle", "draggable", "resizable"], [1, "w-full", "h-full", "flex", "justify-content-center", "align-items-center"], ["width", "100%", "height", "100%", 2, "border", "none", 3, "src"], [1, "pi", "pi-check"], ["pButton", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-secondary", "py-3", "font-bold", 3, "click"], [1, "text-right"], [1, "text-center"], [1, "text-sm"], [1, "font-bold"], ["severity", "info", 3, "value"], [1, "text-right", "font-bold", "text-red-600"], [1, "flex", "justify-content-center", "gap-1"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", "p-button-sm", "p-button-warning", 3, "click"], ["pButton", "", "icon", "pi pi-eye", 1, "p-button-rounded", "p-button-text", "p-button-sm"], ["pButton", "", "icon", "pi pi-eye", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click"], [1, "text-400", "text-xs"], ["alt", "Voucher", 2, "max-width", "100%", "max-height", "100%", "object-fit", "contain", 3, "src"]], template: function AdminExpensesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "p-toast");
        \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Filtrar por Mes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p-calendar", 3);
        \u0275\u0275twoWayListener("ngModelChange", function AdminExpensesComponent_Template_p_calendar_ngModelChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onSelect", function AdminExpensesComponent_Template_p_calendar_onSelect_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadExpenses());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h2", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "div")(12, "span", 9);
        \u0275\u0275text(13, "Descripci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminExpensesComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.expenseForm.description, $event) || (ctx.expenseForm.description = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "span", 9);
        \u0275\u0275text(18, "Monto (S/)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p-inputNumber", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AdminExpensesComponent_Template_p_inputNumber_ngModelChange_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.expenseForm.amount, $event) || (ctx.expenseForm.amount = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12)(21, "span", 9);
        \u0275\u0275text(22, "M\xE9todo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p-dropdown", 14);
        \u0275\u0275twoWayListener("ngModelChange", function AdminExpensesComponent_Template_p_dropdown_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.expenseForm.payment_method, $event) || (ctx.expenseForm.payment_method = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div")(25, "span", 9);
        \u0275\u0275text(26, "Fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p-calendar", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AdminExpensesComponent_Template_p_calendar_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.expenseForm.date, $event) || (ctx.expenseForm.date = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div")(29, "span", 9);
        \u0275\u0275text(30, "Voucher (PDF o Imagen)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p-fileUpload", 16, 0);
        \u0275\u0275listener("onSelect", function AdminExpensesComponent_Template_p_fileUpload_onSelect_31_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelect($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, AdminExpensesComponent_Conditional_33_Template, 3, 1, "small", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, AdminExpensesComponent_Conditional_34_Template, 1, 0, "button", 18);
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275listener("click", function AdminExpensesComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveExpense());
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 20)(37, "div", 6)(38, "h2", 7);
        \u0275\u0275text(39, "Historial Administrativo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p-table", 21);
        \u0275\u0275template(41, AdminExpensesComponent_ng_template_41_Template, 11, 0, "ng-template", 22)(42, AdminExpensesComponent_ng_template_42_Template, 16, 11, "ng-template", 23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "p-dialog", 24);
        \u0275\u0275twoWayListener("visibleChange", function AdminExpensesComponent_Template_p_dialog_visibleChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.displayPreview, $event) || (ctx.displayPreview = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(44, "div", 25);
        \u0275\u0275template(45, AdminExpensesComponent_Conditional_45_Template, 2, 3, "iframe", 26)(46, AdminExpensesComponent_Conditional_46_Template, 1, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
        \u0275\u0275property("readonlyInput", true);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.isEditing() ? "Editar Gasto" : "Nuevo Gasto Administrativo", " ");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.expenseForm.description);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.expenseForm.amount);
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.paymentMethods);
        \u0275\u0275twoWayProperty("ngModel", ctx.expenseForm.payment_method);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.expenseForm.date);
        \u0275\u0275property("showTime", true)("showIcon", true);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(33, ctx.selectedFile ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.isEditing() ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.isEditing() ? "p-button-warning" : "p-button-help");
        \u0275\u0275property("label", ctx.isEditing() ? "Actualizar Gasto" : "Registrar Gasto")("icon", ctx.isEditing() ? "pi pi-refresh" : "pi pi-check")("loading", ctx.loading());
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.adminExpenses())("rows", 5)("paginator", true)("loading", ctx.loading());
        \u0275\u0275advance(3);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c1));
        \u0275\u0275twoWayProperty("visible", ctx.displayPreview);
        \u0275\u0275property("modal", true)("header", "Vista Previa del Voucher")("contentStyle", \u0275\u0275pureFunction0(31, _c2))("draggable", false)("resizable", false);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(45, ctx.isPdf() ? 45 : 46);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, ButtonDirective, PrimeTemplate, InputTextModule, InputText, InputNumberModule, InputNumber, CalendarModule, Calendar, DropdownModule, Dropdown, FileUploadModule, FileUpload, TableModule, Table, TagModule, Tag, ToastModule, Toast, DialogModule, Dialog, SafeUrlPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminExpensesComponent, { className: "AdminExpensesComponent" });
})();
export {
  AdminExpensesComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=admin-expenses.component-MX6X4JEO.js.map

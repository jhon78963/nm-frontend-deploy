import {
  formatDateForApi
} from "./chunk-AO5WIXMD.js";
import {
  UsersService
} from "./chunk-OP4E35GI.js";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  InputDateComponent,
  InputMoneyComponent,
  InputSearchComponent,
  InputSelectComponent,
  InputTextComponent,
  InputTextareaComponent,
  LoadingService,
  SharedModule,
  TablePaginationComponent
} from "./chunk-FOL26TWH.js";
import "./chunk-ACRAOC7V.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-TXRS3AUZ.js";
import "./chunk-H6LNU4BB.js";
import "./chunk-TNLOQWTB.js";
import "./chunk-KFVFK4CL.js";
import {
  showError,
  showSuccess,
  showToastWarn
} from "./chunk-MEV3ATV3.js";
import "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
import {
  Button,
  ButtonDirective
} from "./chunk-AUVIAVMC.js";
import {
  ApiService
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
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-J33MWZEZ.js";
import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DatePipe,
  __async,
  __spreadProps,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/expenses/services/expenses.service.ts
var ExpensesService = class _ExpensesService {
  constructor(apiService) {
    this.apiService = apiService;
    this.expenses = [];
    this.expenses$ = new BehaviorSubject(this.expenses);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
    this.filterState = null;
    this.STORAGE_KEY = "expenses_filter_state";
  }
  setFilterState(limit, page, search) {
    this.filterState = { limit, page, search };
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.filterState));
  }
  getFilterState() {
    if (!this.filterState) {
      const saved = sessionStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          this.filterState = JSON.parse(saved);
        } catch (e) {
          console.error("Error parsing expenses filter state", e);
          return null;
        }
      }
    }
    return this.filterState;
  }
  clearFilterState() {
    this.filterState = null;
    sessionStorage.removeItem(this.STORAGE_KEY);
  }
  callGetList(limit = 10, page = 1, name = "") {
    this.setFilterState(limit, page, name);
    let url = `expenses?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateExpenses(response.data);
      this.updateTotalExpenses(response.paginate.total);
    }));
  }
  getList() {
    return this.expenses$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  reloadWithCurrentState() {
    const s = this.getFilterState();
    return this.callGetList(s?.limit ?? 10, s?.page ?? 1, s?.search ?? "");
  }
  create(data) {
    return this.apiService.post("expenses", data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  delete(id) {
    return this.apiService.delete(`expenses/${id}`).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  edit(id, data) {
    return this.apiService.patch(`expenses/${id}`, data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  getOne(id) {
    return this.apiService.get(`expenses/${id}`);
  }
  updateExpenses(value) {
    this.expenses = value;
    this.expenses$.next(this.expenses);
  }
  updateTotalExpenses(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function ExpensesService_Factory(t) {
      return new (t || _ExpensesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpensesService, factory: _ExpensesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/finance/expenses/pages/form/expenses-form.component.ts
var _c0 = () => [];
function ExpenseFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function ExpenseFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveSale());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275element(2, "app-input-date", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "app-input-select", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275element(6, "app-input-textarea", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275element(8, "app-input-select", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 2);
    \u0275\u0275element(10, "app-input-money", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275element(12, "app-input-text", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 2);
    \u0275\u0275element(14, "app-input-select", 9);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.categories);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.paymentMethods);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", (tmp_4_0 = \u0275\u0275pipeBind1(15, 5, ctx_r1.users)) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isFormValid);
  }
}
var ExpenseFormComponent = class _ExpenseFormComponent {
  constructor(formBuilder, expensesService, usersService, dynamicDialogRef, dynamicDialogConfig, datePipe) {
    this.formBuilder = formBuilder;
    this.expensesService = expensesService;
    this.usersService = usersService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.datePipe = datePipe;
    this.form = this.formBuilder.group({
      expenseDate: [/* @__PURE__ */ new Date(), Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      amount: [0, Validators.required],
      paymentMethod: ["", Validators.required],
      referenceCode: ["", Validators.nullValidator],
      userId: [0, Validators.required]
    });
    this.categories = [
      { id: "SERVICIOS", name: "Servicios (Luz, Agua, Internet)" },
      { id: "ALQUILER", name: "Alquiler de Local" },
      { id: "PERSONAL", name: "Personal / Vigilancia" },
      { id: "MOBILIARIO", name: "Mobiliario / Activos (Maniqu\xEDes, Estantes)" },
      { id: "MERCADERIA", name: "Compra de Mercader\xEDa" },
      { id: "INSUMOS", name: "Insumos (Bolsas, Limpieza)" },
      { id: "VIATICOS", name: "Vi\xE1ticos (Pasajes, Alimentos)" },
      { id: "IMPUESTOS", name: "Impuestos / Tr\xE1mites" },
      { id: "OTROS", name: "Otros Gastos" }
    ];
    this.paymentMethods = [
      { id: "CASH", name: "Efectivo" },
      { id: "YAPE", name: "Yape" },
      { id: "TRANSFER", name: "Transferencia Bancaria" }
    ];
  }
  ngOnInit() {
    this.usersService.callGetList().subscribe();
    this.cleanUserID();
    if (this.dynamicDialogConfig.data.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.expensesService.getOne(id).subscribe((response) => {
        this.form.patchValue(response);
      });
    }
  }
  // buttonSaveSale(): void {
  //   if (this.form.valid) {
  //     this.form
  //       .get('expenseDate')
  //       ?.setValue(
  //         formatDateTime(this.form.get('expenseDate')?.value, this.datePipe),
  //       );
  //     const expense = new Expense(this.form.value);
  //     const id = this.dynamicDialogConfig.data.id;
  //     if (id) {
  //       this.expensesService.edit(id, expense).subscribe({
  //         next: () => this.dynamicDialogRef.close({ success: true }),
  //         error: () => {},
  //       });
  //     } else {
  //       this.expensesService.create(expense).subscribe({
  //         next: () => {
  //           this.dynamicDialogRef.close({ success: true });
  //           this.form.reset();
  //         },
  //         error: () => {},
  //       });
  //     }
  //   }
  // }
  buttonSaveSale() {
    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      const expensePayload = __spreadProps(__spreadValues({}, formValue), {
        // Formateamos la fecha AQUÍ, solo para enviarla, sin tocar el formulario visual
        expenseDate: formatDateForApi(formValue.expenseDate, this.datePipe)
      });
      const id = this.dynamicDialogConfig.data.id;
      if (id) {
        this.expensesService.edit(id, expensePayload).subscribe({
          next: () => this.dynamicDialogRef.close({ success: true }),
          error: (err) => console.error(err)
        });
      } else {
        this.expensesService.create(expensePayload).subscribe({
          next: () => {
            this.dynamicDialogRef.close({ success: true });
          },
          error: (err) => console.error(err)
        });
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
  cleanUserID() {
    this.form.get("userID")?.setValue(0);
  }
  get users() {
    return this.usersService.getList();
  }
  get isFormValid() {
    return this.form.valid;
  }
  static {
    this.\u0275fac = function ExpenseFormComponent_Factory(t) {
      return new (t || _ExpenseFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ExpensesService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig), \u0275\u0275directiveInject(DatePipe));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseFormComponent, selectors: [["app-expenses-form"]], decls: 1, vars: 1, consts: [[3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "col-12"], ["label", "Fecha", "for", "expenseDate", "controlName", "expenseDate"], ["placeholder", "Seleccione categor\xEDa", "label", "Categor\xEDa", "controlName", "category", "for", "category", "id", "category", "optionLabel", "name", "optionValue", "id", 3, "options"], ["placeholder", "Ingrese descripci\xF3n", "label", "Descripci\xF3n", "controlName", "description"], ["placeholder", "Seleccione m\xE9todo de pago", "label", "M\xE9todo de Pago", "controlName", "paymentMethod", "for", "paymentMethod", "id", "paymentMethod", "optionLabel", "name", "optionValue", "id", 3, "options"], ["label", "Monto", "controlName", "amount", "currency", "S/"], ["placeholder", "Ingrese c\xF3digo de referencia (opcional)", "label", "C\xF3digo de Referencia", "controlName", "referenceCode", "autofocus", ""], ["placeholder", "Seleccione usuario", "label", "Usuario", "controlName", "userId", "for", "userId", "id", "userId", "optionLabel", "username", "optionValue", "id", 3, "options"], ["type", "submit", "pButton", "", "label", "Guardar", 1, "mt-4", "w-full", "p-button-primary", "font-bold", "shadow-2", 3, "disabled"]], template: function ExpenseFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ExpenseFormComponent_Conditional_0_Template, 17, 8, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [ButtonDirective, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, InputDateComponent, InputMoneyComponent, InputSelectComponent, InputTextComponent, InputTextareaComponent, AsyncPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseFormComponent, { className: "ExpenseFormComponent" });
})();

// src/app/private/finance/expenses/pages/list/expenses.component.ts
var _c02 = () => [];
var _c1 = () => [10, 20, 50];
var ExpenseListComponent = class _ExpenseListComponent {
  constructor(dialogService, messageService, confirmationService, loadingService, expensesService) {
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.expensesService = expensesService;
    this.columns = [
      {
        header: "#",
        field: "id",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Fecha",
        field: "expenseDate",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Descripci\xF3n",
        field: "description",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Monto",
        field: "amount",
        clickable: false,
        image: false,
        money: true
      },
      {
        header: "Metodo de Pago",
        field: "paymentMethod",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Usuario",
        field: "user",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Acci\xF3n",
        field: "button",
        clickable: false,
        image: false,
        money: false
      }
    ];
    this.limit = 10;
    this.page = 1;
    this.search = "";
    this.callToAction = [
      {
        type: "button",
        size: "small",
        icon: "pi pi-pencil",
        outlined: true,
        pTooltip: "Editar",
        tooltipPosition: "bottom",
        click: (rowData) => this.buttonEditExpense(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.buttonDeleteExpense(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.restoreFilters();
    this.formGroup.get("search")?.setValue(this.search, { emitEvent: false });
    this.formGroup.get("search")?.valueChanges.pipe(startWith(this.search), debounceTime(600), distinctUntilChanged()).subscribe((value) => {
      const searchTerm = value || "";
      if (this.search !== searchTerm) {
        this.page = 1;
      }
      this.search = searchTerm;
      this.loadingService.sendLoadingState(true);
      this.getExpenses(this.limit, this.page, this.search);
    });
  }
  ngOnDestroy() {
    if (this.expenseModal) {
      this.expenseModal.close();
    }
  }
  restoreFilters() {
    const savedState = this.expensesService.getFilterState();
    if (savedState) {
      this.limit = savedState.limit;
      this.page = savedState.page;
      this.search = savedState.search;
      if (this.search) {
        this.formGroup.get("search")?.setValue(this.search, { emitEvent: false });
      }
    }
  }
  clearFilter() {
    this.search = "";
    this.limit = 10;
    this.page = 1;
    this.expensesService.clearFilterState();
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("", { emitEvent: false });
    this.getExpenses(this.limit, 1, "");
  }
  getExpenses() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.search) {
      this.updatePage(page);
      this.expensesService.callGetList(limit, page, name).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.limit = paginate.rows ?? 10;
      this.updatePage((paginate.page ?? 0) + 1);
      this.getExpenses(this.limit, this.page, this.search);
    });
  }
  get expenses() {
    return this.expensesService.getList();
  }
  get total() {
    return this.expensesService.getTotal();
  }
  buttonAddExpense() {
    this.expenseModal = this.dialogService.open(ExpenseFormComponent, {
      data: {},
      header: "Nuevo gasto",
      styleClass: "dialog-custom-form",
      focusOnShow: false
    });
    this.expenseModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Gasto creado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  buttonEditExpense(id) {
    this.expenseModal = this.dialogService.open(ExpenseFormComponent, {
      data: { id },
      header: "Detalle gasto",
      styleClass: "dialog-custom-form",
      focusOnShow: false
    });
    this.expenseModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Detalle actualizado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  buttonDeleteExpense(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas cancelar esta venta?",
      header: "Eliminar venta",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.expensesService.delete(id).subscribe(() => {
          showSuccess(this.messageService, "El registro ha sido cancelada");
        });
      },
      reject: () => {
        showToastWarn(this.messageService, "No se realiz\xF3 ninguna acci\xF3n.");
      }
    });
  }
  updatePage(value) {
    this.page = value;
  }
  static {
    this.\u0275fac = function ExpenseListComponent_Factory(t) {
      return new (t || _ExpenseListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(ExpensesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpenseListComponent, selectors: [["app-expenses"]], decls: 13, vars: 17, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [1, "flex", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function ExpenseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function ExpenseListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
        \u0275\u0275listener("click", function ExpenseListComponent_Template_p_button_click_4_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p-button", 6);
        \u0275\u0275listener("click", function ExpenseListComponent_Template_p_button_click_6_listener() {
          return ctx.buttonAddExpense();
        });
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "app-table-pagination", 8);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275pipe(10, "async");
        \u0275\u0275listener("paginateSelected", function ExpenseListComponent_Template_app_table_pagination_paginateSelected_8_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "p-toast")(12, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_7_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", (tmp_3_0 = \u0275\u0275pipeBind1(9, 11, ctx.expenses)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : \u0275\u0275pureFunction0(15, _c02))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_7_0 = \u0275\u0275pipeBind1(10, 13, ctx.total)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(16, _c1));
      }
    }, dependencies: [ConfirmDialog, Button, NgControlStatusGroup, FormGroupDirective, TablePaginationComponent, InputSearchComponent, Toast, AsyncPipe], styles: ['@charset "UTF-8";\n\n\n\n  {\n}\n  .dialog-custom-form {\n  width: 30% !important;\n  min-width: 400px !important;\n  max-width: 95vw !important;\n  height: auto !important;\n  overflow-y: visible !important;\n}\n  .dialog-custom-assign {\n  width: 20% !important;\n  min-width: 320px !important;\n}\n@media (max-width: 1024px) {\n    .dialog-custom-form {\n    width: 60% !important;\n    min-width: unset !important;\n  }\n    .dialog-custom-assign {\n    width: 50% !important;\n  }\n}\n@media (max-width: 480px) {\n    .dialog-custom-form,   .dialog-custom-assign {\n    width: 95% !important;\n    min-width: unset !important;\n  }\n}\n/*# sourceMappingURL=expenses.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpenseListComponent, { className: "ExpenseListComponent" });
})();

// src/app/private/finance/expenses/expenses-routing.module.ts
var routes = [
  { path: "", component: ExpenseListComponent },
  { path: "", pathMatch: "full", redirectTo: "expenses" }
];
var ExpensesRoutingModule = class _ExpensesRoutingModule {
  static {
    this.\u0275fac = function ExpensesRoutingModule_Factory(t) {
      return new (t || _ExpensesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExpensesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/expenses/expenses.module.ts
var ExpensesModule = class _ExpensesModule {
  static {
    this.\u0275fac = function ExpensesModule_Factory(t) {
      return new (t || _ExpensesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExpensesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ConfirmationService, DatePipe, DialogService, MessageService], imports: [
      CommonModule,
      ConfirmDialogModule,
      ExpensesRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      ToastModule
    ] });
  }
};
export {
  ExpensesModule
};
//# sourceMappingURL=expenses.module-AKQM2L37.js.map

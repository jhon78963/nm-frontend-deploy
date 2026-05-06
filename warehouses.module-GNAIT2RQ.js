import {
  TenantsService
} from "./chunk-D36F5NTH.js";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  InputSearchComponent,
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
import "./chunk-MEV3ATV3.js";
import "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-4JQRHAYE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  Button,
  ButtonModule
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
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators
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
  debounceTime,
  map,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleMap,
  ɵɵtext
} from "./chunk-OI5KBWGW.js";

// src/app/private/administration/warehouses/services/admin-warehouses.service.ts
var AdminWarehousesService = class _AdminWarehousesService {
  constructor(apiService) {
    this.apiService = apiService;
    this.list = [];
    this.total = 0;
    this.list$ = new BehaviorSubject(this.list);
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, name = "", tenantId) {
    let url = `warehouses?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${encodeURIComponent(name)}`;
    }
    if (tenantId != null) {
      url += `&tenant_id=${tenantId}`;
    }
    return this.apiService.get(url).pipe(debounceTime(400), map((res) => {
      this.list = res.data;
      this.total = res.paginate.total;
      this.list$.next(this.list);
      this.total$.next(this.total);
    }));
  }
  getList() {
    return this.list$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  getOne(id) {
    return this.apiService.get(`warehouses/${id}`);
  }
  create(data) {
    return this.apiService.post("warehouses", data).pipe(switchMap(() => this.callGetList()));
  }
  edit(id, data) {
    return this.apiService.patch(`warehouses/${id}`, data).pipe(switchMap(() => this.callGetList()));
  }
  delete(id) {
    return this.apiService.delete(`warehouses/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  static {
    this.\u0275fac = function AdminWarehousesService_Factory(t) {
      return new (t || _AdminWarehousesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminWarehousesService, factory: _AdminWarehousesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/administration/warehouses/pages/form/warehouses-form.component.ts
var _c0 = () => ({ width: "100%" });
var WarehousesFormComponent = class _WarehousesFormComponent {
  constructor(fb, adminWarehousesService, tenantsService, dynamicDialogRef, dynamicDialogConfig) {
    this.fb = fb;
    this.adminWarehousesService = adminWarehousesService;
    this.tenantsService = tenantsService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(25)]],
      tenantId: [null, Validators.required]
    });
    this.tenants = [];
  }
  ngOnInit() {
    this.tenantsService.callGetList(200, 1, "").subscribe(() => {
      this.tenantsService.getList().subscribe((list) => this.tenants = list);
    });
    const id = this.dynamicDialogConfig.data?.id;
    if (id) {
      this.adminWarehousesService.getOne(id).subscribe((w) => {
        this.form.patchValue({
          name: w.name,
          tenantId: w.tenantId ?? null
        });
      });
    }
  }
  get isValid() {
    return this.form.valid;
  }
  save() {
    if (!this.form.valid) {
      return;
    }
    const v = this.form.value;
    const id = this.dynamicDialogConfig.data?.id;
    if (id) {
      this.adminWarehousesService.edit(id, { name: v.name, tenantId: v.tenantId }).subscribe({
        next: () => this.dynamicDialogRef.close({ success: true }),
        error: () => this.dynamicDialogRef.close({ error: "Error al guardar." })
      });
    } else {
      this.adminWarehousesService.create({ name: v.name, tenantId: v.tenantId }).subscribe({
        next: () => this.dynamicDialogRef.close({ success: true }),
        error: () => this.dynamicDialogRef.close({ error: "Error al crear." })
      });
    }
  }
  static {
    this.\u0275fac = function WarehousesFormComponent_Factory(t) {
      return new (t || _WarehousesFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AdminWarehousesService), \u0275\u0275directiveInject(TenantsService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarehousesFormComponent, selectors: [["app-warehouses-form"]], decls: 12, vars: 7, consts: [[1, "flex", "flex-column", "gap-3", "p-2", 3, "formGroup"], [1, "field"], ["for", "tenantId"], ["inputId", "tenantId", "formControlName", "tenantId", "optionLabel", "name", "optionValue", "id", "placeholder", "Seleccione cliente", "appendTo", "body", 3, "options"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 1, "w-full"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancelar", 3, "click", "text"], ["label", "Guardar", 3, "click", "disabled"]], template: function WarehousesFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
        \u0275\u0275text(3, "Cliente (tenant)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "p-dropdown", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 1)(6, "label", 4);
        \u0275\u0275text(7, "Nombre de tienda");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "p-button", 7);
        \u0275\u0275listener("click", function WarehousesFormComponent_Template_p_button_click_10_listener() {
          return ctx.dynamicDialogRef.close();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p-button", 8);
        \u0275\u0275listener("click", function WarehousesFormComponent_Template_p_button_click_11_listener() {
          return ctx.save();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275property("options", ctx.tenants);
        \u0275\u0275advance(6);
        \u0275\u0275property("text", true);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.isValid);
      }
    }, dependencies: [InputText, Dropdown, Button, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=warehouses-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehousesFormComponent, { className: "WarehousesFormComponent" });
})();

// src/app/private/administration/warehouses/pages/list/warehouses.component.ts
var _c02 = () => [];
var _c1 = () => [10, 20, 50];
var WarehousesListComponent = class _WarehousesListComponent {
  constructor(dialogService, adminWarehousesService, messageService, confirmationService, loadingService) {
    this.dialogService = dialogService;
    this.adminWarehousesService = adminWarehousesService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.columns = [];
    this.limit = 10;
    this.page = 1;
    this.name = "";
    this.callToAction = [
      {
        type: "button",
        size: "small",
        icon: "pi pi-pencil",
        outlined: true,
        pTooltip: "Editar",
        tooltipPosition: "bottom",
        click: (row) => this.openEdit(row.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (row, event) => this.confirmDelete(row.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.columns = [
      { header: "#", field: "id", clickable: false, image: false, money: false },
      { header: "Tienda", field: "name", clickable: false, image: false, money: false },
      {
        header: "Tenant",
        field: "tenantId",
        clickable: false,
        image: false,
        money: false
      },
      { field: "button", header: "Acci\xF3n", clickable: false, image: false, money: false }
    ];
    this.load(this.limit, this.page, this.name);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((v) => {
      this.name = v ?? "";
      this.loadingService.sendLoadingState(true);
      this.load(this.limit, this.page, this.name);
    });
  }
  ngOnDestroy() {
    this.modal?.close();
  }
  clearFilter() {
    this.name = "";
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
  }
  load(limit = this.limit, page = this.page, search = this.name) {
    this.page = page;
    this.adminWarehousesService.callGetList(limit, page, search).subscribe();
    setTimeout(() => this.loadingService.sendLoadingState(false), 600);
  }
  get rows() {
    return this.adminWarehousesService.getList();
  }
  get total() {
    return this.adminWarehousesService.getTotal();
  }
  onPageSelected(event) {
    this.page = (event.page ?? 0) + 1;
    this.load(event.rows, this.page);
  }
  openCreate() {
    this.modal = this.dialogService.open(WarehousesFormComponent, {
      data: {},
      header: "Nueva tienda (warehouse)",
      width: "28rem"
    });
    this.modal.onClose.subscribe((v) => {
      if (v?.success) {
        this.toast("success", "Tienda creada.");
      } else if (v?.error) {
        this.toast("error", v.error);
      }
    });
  }
  openEdit(id) {
    this.modal = this.dialogService.open(WarehousesFormComponent, {
      data: { id },
      header: "Editar tienda",
      width: "28rem"
    });
    this.modal.onClose.subscribe((v) => {
      if (v?.success) {
        this.toast("success", "Tienda actualizada.");
      } else if (v?.error) {
        this.toast("error", v.error);
      }
    });
  }
  confirmDelete(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "\xBFEliminar esta tienda? Debe estar vac\xEDa de productos y usuarios dependientes.",
      header: "Eliminar tienda",
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.adminWarehousesService.delete(id).subscribe(() => {
          this.toast("success", "Tienda eliminada.");
        });
      }
    });
  }
  toast(severity, detail) {
    this.messageService.add({
      severity,
      summary: severity === "success" ? "Listo" : "Error",
      detail,
      life: 3500
    });
  }
  static {
    this.\u0275fac = function WarehousesListComponent_Factory(t) {
      return new (t || _WarehousesListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(AdminWarehousesService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WarehousesListComponent, selectors: [["app-warehouses-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 10, vars: 15, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "rowsPerPageOptions"]], template: function WarehousesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function WarehousesListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p-button", 3);
        \u0275\u0275listener("click", function WarehousesListComponent_Template_p_button_click_3_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "app-table-pagination", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275listener("paginateSelected", function WarehousesListComponent_Template_app_table_pagination_paginateSelected_5_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "p-toast")(9, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_6_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance();
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", (tmp_2_0 = \u0275\u0275pipeBind1(6, 9, ctx.rows)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(13, _c02))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_6_0 = \u0275\u0275pipeBind1(7, 11, ctx.total)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c1));
      }
    }, dependencies: [Button, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, FormGroupDirective, ConfirmDialog, Toast, AsyncPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WarehousesListComponent, { className: "WarehousesListComponent" });
})();

// src/app/private/administration/warehouses/warehouses-routing.module.ts
var routes = [{ path: "", component: WarehousesListComponent }];
var WarehousesRoutingModule = class _WarehousesRoutingModule {
  static {
    this.\u0275fac = function WarehousesRoutingModule_Factory(t) {
      return new (t || _WarehousesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WarehousesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/administration/warehouses/warehouses.module.ts
var WarehousesModule = class _WarehousesModule {
  static {
    this.\u0275fac = function WarehousesModule_Factory(t) {
      return new (t || _WarehousesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WarehousesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DialogService], imports: [
      CommonModule,
      WarehousesRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      DropdownModule,
      ConfirmDialogModule,
      ToastModule
    ] });
  }
};
export {
  WarehousesModule
};
//# sourceMappingURL=warehouses.module-GNAIT2RQ.js.map

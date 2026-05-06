import {
  TabViewModule,
  TreeModule
} from "./chunk-ZIDIS2DE.js";
import {
  Vendor
} from "./chunk-WG2CMH3Y.js";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  InputSearchComponent,
  InputTextComponent,
  LoadingService,
  SharedModule,
  TabMenuModule,
  TablePaginationComponent,
  TreeTableModule
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
  __async,
  debounceTime,
  map,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
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

// src/app/private/directory/vendors/services/vendors.service.ts
var VendorsService = class _VendorsService {
  constructor(apiService) {
    this.apiService = apiService;
    this.vendors = [];
    this.total = 0;
    this.vendors$ = new BehaviorSubject(this.vendors);
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, name = "") {
    let url = `vendors?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateVendors(response.data);
      this.updateTotalVendors(response.paginate.total);
    }));
  }
  getList() {
    return this.vendors$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  getOne(id) {
    return this.apiService.get(`vendors/${id}`);
  }
  create(data) {
    return this.apiService.post("vendors", data).pipe(switchMap(() => this.callGetList()));
  }
  edit(id, data) {
    return this.apiService.patch(`vendors/${id}`, data).pipe(switchMap(() => this.callGetList()));
  }
  delete(id) {
    return this.apiService.delete(`vendors/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  updateVendors(value) {
    this.vendors = value;
    this.vendors$.next(this.vendors);
  }
  updateTotalVendors(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function VendorsService_Factory(t) {
      return new (t || _VendorsService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VendorsService, factory: _VendorsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/directory/vendors/pages/form/vendors-form.component.ts
function VendorsFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function VendorsFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveVendor());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-input-text", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "app-input-text", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "app-input-text", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3);
    \u0275\u0275element(9, "app-input-text", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "button", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", !ctx_r1.isValid);
  }
}
var VendorsFormComponent = class _VendorsFormComponent {
  constructor(formBuilder, vendorsService, dynamicDialogRef, dynamicDialogConfig) {
    this.formBuilder = formBuilder;
    this.vendorsService = vendorsService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.nullValidator],
      local: ["", Validators.nullValidator],
      phone: ["", Validators.nullValidator]
    });
  }
  ngOnInit() {
    if (this.dynamicDialogConfig.data.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.vendorsService.getOne(id).subscribe((response) => {
        this.form.patchValue(response);
      });
    }
  }
  get isValid() {
    return this.form.valid;
  }
  buttonSaveVendor() {
    if (this.form) {
      const vendor = new Vendor(this.form.value);
      if (this.dynamicDialogConfig.data.id) {
        const id = this.dynamicDialogConfig.data.id;
        this.vendorsService.edit(id, vendor).subscribe({
          next: () => this.dynamicDialogRef.close(),
          error: () => {
          }
        });
      } else {
        this.vendorsService.create(vendor).subscribe({
          next: () => {
            this.dynamicDialogRef.close({ success: true });
            this.form.reset();
          },
          error: () => {
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function VendorsFormComponent_Factory(t) {
      return new (t || _VendorsFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VendorsService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorsFormComponent, selectors: [["app-vendor-form"]], decls: 1, vars: 1, consts: [[3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "col-12"], ["label", "Nombre", "for", "name", "type", "text", "id", "name", "placeholder", "Ingresa el nombre", "controlName", "name"], ["label", "Celular", "for", "phone", "type", "text", "id", "phone", "placeholder", "Ingresa el celular", "controlName", "phone"], ["label", "Direcci\xF3n", "for", "address", "type", "text", "id", "address", "placeholder", "Ingresa la direcci\xF3n", "controlName", "address"], ["label", "Galer\xEDa", "for", "local", "type", "text", "id", "local", "placeholder", "Ingresa la galer\xEDa", "controlName", "local"], ["type", "submit", "pButton", "", "label", "Guardar", 1, "mt-3", 3, "disabled"]], template: function VendorsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, VendorsFormComponent_Conditional_0_Template, 11, 2, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [ButtonDirective, \u0275NgNoValidate, NgControlStatusGroup, InputTextComponent, FormGroupDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorsFormComponent, { className: "VendorsFormComponent" });
})();

// src/app/private/directory/vendors/pages/list/vendors.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var VendorListComponent = class _VendorListComponent {
  constructor(dialogService, vendorsService, messageService, confirmationService, loadingService) {
    this.dialogService = dialogService;
    this.vendorsService = vendorsService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.columns = [];
    this.data = [];
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
        click: (rowData) => this.buttonEditVendor(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.buttonDeleteVendor(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.columns = [
      {
        header: "#",
        field: "id",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Nombre",
        field: "name",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Celular",
        field: "phone",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Direcci\xF3n",
        field: "address",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Galer\xEDa",
        field: "local",
        clickable: false,
        image: false,
        money: false
      },
      {
        field: "button",
        header: "Acci\xF3n",
        clickable: false,
        image: false,
        money: false
      }
    ];
    this.getVendors(this.limit, this.page, this.name);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.name = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getVendors(this.limit, this.page, this.name);
    });
  }
  ngOnDestroy() {
    if (this.vendorModal) {
      this.vendorModal.close();
    }
  }
  clearFilter() {
    this.name = "";
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
  }
  updatePage(value) {
    this.page = value;
  }
  getVendors() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.name) {
      this.updatePage(page);
      this.vendorsService.callGetList(limit, page, name).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  get vendors() {
    return this.vendorsService.getList();
  }
  get total() {
    return this.vendorsService.getTotal();
  }
  onPageSelected(event) {
    return __async(this, null, function* () {
      this.updatePage((event.page ?? 0) + 1);
      this.getVendors(event.rows, this.page);
    });
  }
  buttonAddVendor() {
    this.vendorModal = this.dialogService.open(VendorsFormComponent, {
      data: {},
      header: "Crear"
    });
    this.vendorModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? this.showSuccess("Role Creado.") : value?.error ? this.showError(value?.error) : null;
      }
    });
  }
  buttonEditVendor(id) {
    this.vendorModal = this.dialogService.open(VendorsFormComponent, {
      data: {
        id
      },
      header: "Editar"
    });
    this.vendorModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? this.showSuccess("Role actualizado.") : value?.error ? this.showError(value?.error) : null;
      }
    });
  }
  buttonDeleteVendor(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar este proveedor?",
      header: "Eliminar proveedor",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Si",
      rejectLabel: "No",
      accept: () => {
        this.vendorsService.delete(id).subscribe(() => {
          this.showSuccess("El rol ha sido eliminado");
        });
      },
      reject: () => {
      }
    });
  }
  showSuccess(message) {
    this.messageService.add({
      severity: "success",
      summary: "Confirmado",
      detail: message,
      life: 3e3
    });
  }
  showError(message) {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3e3
    });
  }
  static {
    this.\u0275fac = function VendorListComponent_Factory(t) {
      return new (t || _VendorListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(VendorsService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorListComponent, selectors: [["app-vendors"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService]), \u0275\u0275StandaloneFeature], decls: 10, vars: 15, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "rowsPerPageOptions"]], template: function VendorListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function VendorListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p-button", 3);
        \u0275\u0275listener("click", function VendorListComponent_Template_p_button_click_3_listener() {
          return ctx.buttonAddVendor();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "app-table-pagination", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275listener("paginateSelected", function VendorListComponent_Template_app_table_pagination_paginateSelected_5_listener($event) {
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
        \u0275\u0275property("data", (tmp_2_0 = \u0275\u0275pipeBind1(6, 9, ctx.vendors)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(13, _c0))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_6_0 = \u0275\u0275pipeBind1(7, 11, ctx.total)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c1));
      }
    }, dependencies: [CommonModule, AsyncPipe, FormsModule, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, ConfirmDialogModule, ConfirmDialog, Button, ToastModule, Toast, SharedModule, TablePaginationComponent, InputSearchComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorListComponent, { className: "VendorListComponent" });
})();

// src/app/private/directory/vendors/vendors-routing.module.ts
var routes = [
  { path: "", component: VendorListComponent },
  { path: "", pathMatch: "full", redirectTo: "vendors" }
];
var VendorsRoutingModule = class _VendorsRoutingModule {
  static {
    this.\u0275fac = function VendorsRoutingModule_Factory(t) {
      return new (t || _VendorsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VendorsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/directory/vendors/vendors.module.ts
var VendorsModule = class _VendorsModule {
  static {
    this.\u0275fac = function VendorsModule_Factory(t) {
      return new (t || _VendorsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VendorsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DialogService], imports: [
      CommonModule,
      VendorsRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      ToastModule,
      ConfirmDialogModule,
      TabViewModule,
      TreeModule,
      TreeTableModule,
      TabMenuModule
    ] });
  }
};
export {
  VendorsModule
};
//# sourceMappingURL=vendors.module-JVVNWNBB.js.map

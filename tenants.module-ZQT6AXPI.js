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
import "./chunk-4JQRHAYE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  Button,
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import "./chunk-TC2MDCQP.js";
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
  CommonModule,
  debounceTime,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-OI5KBWGW.js";

// src/app/private/administration/tenants/pages/form/tenants-form.component.ts
var TenantsFormComponent = class _TenantsFormComponent {
  constructor(fb, tenantsService, dynamicDialogRef, dynamicDialogConfig) {
    this.fb = fb;
    this.tenantsService = tenantsService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(25)]]
    });
  }
  ngOnInit() {
    const id = this.dynamicDialogConfig.data?.id;
    if (id) {
      this.tenantsService.getOne(id).subscribe((t) => {
        this.form.patchValue({ name: t.name });
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
    const name = this.form.value.name;
    const id = this.dynamicDialogConfig.data?.id;
    if (id) {
      this.tenantsService.edit(id, { name }).subscribe({
        next: () => this.dynamicDialogRef.close({ success: true }),
        error: () => this.dynamicDialogRef.close({ error: "Error al guardar." })
      });
    } else {
      this.tenantsService.create({ name }).subscribe({
        next: () => this.dynamicDialogRef.close({ success: true }),
        error: () => this.dynamicDialogRef.close({ error: "Error al crear." })
      });
    }
  }
  static {
    this.\u0275fac = function TenantsFormComponent_Factory(t) {
      return new (t || _TenantsFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TenantsService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantsFormComponent, selectors: [["app-tenants-form"]], decls: 8, vars: 3, consts: [[1, "flex", "flex-column", "gap-3", "p-2", 3, "formGroup"], [1, "field"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name", 1, "w-full"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancelar", 3, "click", "text"], ["label", "Guardar", 3, "click", "disabled"]], template: function TenantsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
        \u0275\u0275text(3, "Nombre sucursal / tenant");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "input", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "p-button", 5);
        \u0275\u0275listener("click", function TenantsFormComponent_Template_p_button_click_6_listener() {
          return ctx.dynamicDialogRef.close();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-button", 6);
        \u0275\u0275listener("click", function TenantsFormComponent_Template_p_button_click_7_listener() {
          return ctx.save();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275property("text", true);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.isValid);
      }
    }, dependencies: [InputText, Button, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tenants-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantsFormComponent, { className: "TenantsFormComponent" });
})();

// src/app/private/administration/tenants/pages/list/tenants.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var TenantsListComponent = class _TenantsListComponent {
  constructor(dialogService, tenantsService, messageService, confirmationService, loadingService) {
    this.dialogService = dialogService;
    this.tenantsService = tenantsService;
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
      { header: "Cliente", field: "name", clickable: false, image: false, money: false },
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
    this.tenantsService.callGetList(limit, page, search).subscribe();
    setTimeout(() => this.loadingService.sendLoadingState(false), 600);
  }
  get rows() {
    return this.tenantsService.getList();
  }
  get total() {
    return this.tenantsService.getTotal();
  }
  onPageSelected(event) {
    this.page = (event.page ?? 0) + 1;
    this.load(event.rows, this.page);
  }
  openCreate() {
    this.modal = this.dialogService.open(TenantsFormComponent, {
      data: {},
      header: "Nuevo cliente (tenant)",
      width: "26rem"
    });
    this.modal.onClose.subscribe((v) => {
      if (v?.success) {
        this.toast("success", "Tenant creado.");
      } else if (v?.error) {
        this.toast("error", v.error);
      }
    });
  }
  openEdit(id) {
    this.modal = this.dialogService.open(TenantsFormComponent, {
      data: { id },
      header: "Editar tenant",
      width: "26rem"
    });
    this.modal.onClose.subscribe((v) => {
      if (v?.success) {
        this.toast("success", "Tenant actualizado.");
      } else if (v?.error) {
        this.toast("error", v.error);
      }
    });
  }
  confirmDelete(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "\xBFEliminar este cliente? No debe tener tiendas ni usuarios asociados.",
      header: "Eliminar cliente",
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.tenantsService.delete(id).subscribe(() => {
          this.toast("success", "Tenant eliminado.");
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
    this.\u0275fac = function TenantsListComponent_Factory(t) {
      return new (t || _TenantsListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(TenantsService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantsListComponent, selectors: [["app-tenants-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 10, vars: 15, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "rowsPerPageOptions"]], template: function TenantsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function TenantsListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p-button", 3);
        \u0275\u0275listener("click", function TenantsListComponent_Template_p_button_click_3_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "app-table-pagination", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275listener("paginateSelected", function TenantsListComponent_Template_app_table_pagination_paginateSelected_5_listener($event) {
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
        \u0275\u0275property("data", (tmp_2_0 = \u0275\u0275pipeBind1(6, 9, ctx.rows)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(13, _c0))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_6_0 = \u0275\u0275pipeBind1(7, 11, ctx.total)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c1));
      }
    }, dependencies: [Button, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, FormGroupDirective, ConfirmDialog, Toast, AsyncPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantsListComponent, { className: "TenantsListComponent" });
})();

// src/app/private/administration/tenants/tenants-routing.module.ts
var routes = [{ path: "", component: TenantsListComponent }];
var TenantsRoutingModule = class _TenantsRoutingModule {
  static {
    this.\u0275fac = function TenantsRoutingModule_Factory(t) {
      return new (t || _TenantsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TenantsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/administration/tenants/tenants.module.ts
var TenantsModule = class _TenantsModule {
  static {
    this.\u0275fac = function TenantsModule_Factory(t) {
      return new (t || _TenantsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TenantsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DialogService], imports: [
      CommonModule,
      TenantsRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      ConfirmDialogModule,
      ToastModule
    ] });
  }
};
export {
  TenantsModule
};
//# sourceMappingURL=tenants.module-ZQT6AXPI.js.map

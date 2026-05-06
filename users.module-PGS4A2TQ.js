import {
  UsersService
} from "./chunk-OP4E35GI.js";
import {
  RolesService
} from "./chunk-UCI3O4ZW.js";
import {
  TenantsService
} from "./chunk-D36F5NTH.js";
import {
  WarehousesService
} from "./chunk-Z5XV2SS3.js";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  InputSearchComponent,
  InputSelectComponent,
  InputTextComponent,
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
import {
  RadioButtonModule
} from "./chunk-FDK6GE2Y.js";
import "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
import {
  Button,
  ButtonDirective
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
  CommonModule,
  __async,
  debounceTime,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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

// src/app/private/administration/users/pages/form/users-form.component.ts
var _c0 = () => [];
function UserFormComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-input-text", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275element(3, "app-input-text", 11);
    \u0275\u0275elementEnd();
  }
}
function UserFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function UserFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveUser());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-input-select", 4);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275element(6, "app-input-select", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3);
    \u0275\u0275element(9, "app-input-select", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 3);
    \u0275\u0275element(11, "app-input-text", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 3);
    \u0275\u0275element(13, "app-input-text", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UserFormComponent_Conditional_0_Conditional_14_Template, 4, 0);
    \u0275\u0275element(15, "button", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", (tmp_2_0 = \u0275\u0275pipeBind1(4, 6, ctx_r1.tenantsList)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", (tmp_3_0 = \u0275\u0275pipeBind1(7, 8, ctx_r1.roles)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.warehouses);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(14, ctx_r1.userId === 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isValid);
  }
}
var UserFormComponent = class _UserFormComponent {
  constructor(formBuilder, usersService, rolesService, warehousesService, tenantsService, dynamicDialogRef, dynamicDialogConfig) {
    this.formBuilder = formBuilder;
    this.usersService = usersService;
    this.rolesService = rolesService;
    this.warehousesService = warehousesService;
    this.tenantsService = tenantsService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.userId = 0;
    this.warehouses = [];
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      roleName: ["", Validators.required],
      tenantId: [1, Validators.required],
      warehouseId: [1, Validators.required]
    });
  }
  ngOnInit() {
    this.rolesService.callGetList(200, 1, "").subscribe();
    this.tenantsService.callGetList(200, 1, "").subscribe();
    this.form.get("tenantId")?.valueChanges.subscribe((tid) => {
      if (tid != null) {
        this.loadWarehouses(Number(tid));
      }
    });
    const initialTid = this.form.value.tenantId;
    this.loadWarehouses(initialTid);
    if (this.dynamicDialogConfig.data.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.userId = id;
      this.removeValidatorsForEdit();
      this.usersService.getOne(id).subscribe((response) => {
        const roleName = response.roles?.[0] ?? "";
        this.form.patchValue({
          username: response.username,
          email: response.email,
          name: response.name,
          surname: response.surname,
          roleName,
          tenantId: response.tenantId,
          warehouseId: response.warehouseId
        });
        if (response.tenantId) {
          this.loadWarehouses(response.tenantId);
        }
      });
    }
  }
  loadWarehouses(tenantId) {
    this.warehousesService.getAll(tenantId).subscribe((list) => {
      this.warehouses = list;
    });
  }
  removeValidatorsForEdit() {
    this.form.get("username")?.clearValidators();
    this.form.get("username")?.updateValueAndValidity();
    this.form.get("email")?.clearValidators();
    this.form.get("email")?.updateValueAndValidity();
  }
  get roles() {
    return this.rolesService.getList();
  }
  get tenantsList() {
    return this.tenantsService.getList();
  }
  get isValid() {
    return this.form.valid;
  }
  buttonSaveUser() {
    if (this.form.valid) {
      const v = this.form.value;
      const payload = {
        username: v.username,
        email: v.email,
        name: v.name,
        surname: v.surname,
        tenantId: Number(v.tenantId),
        warehouseId: Number(v.warehouseId),
        roleNames: [v.roleName],
        profilePicture: ""
      };
      if (this.userId) {
        const patch = {
          name: payload.name,
          surname: payload.surname,
          tenantId: payload.tenantId,
          warehouseId: payload.warehouseId,
          roleNames: payload.roleNames
        };
        this.usersService.edit(this.userId, patch).subscribe({
          next: () => this.dynamicDialogRef.close({ success: true }),
          error: () => {
          }
        });
      } else {
        this.usersService.create(payload).subscribe({
          next: () => {
            this.dynamicDialogRef.close({ success: true });
            this.form.reset();
          },
          error: () => {
          }
        });
      }
    } else {
      this.form.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function UserFormComponent_Factory(t) {
      return new (t || _UserFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(WarehousesService), \u0275\u0275directiveInject(TenantsService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormComponent, selectors: [["app-users-form"]], decls: 1, vars: 1, consts: [[3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "col-12"], ["placeholder", "Cliente (tenant)", "label", "Cliente", "controlName", "tenantId", "for", "tenant", "id", "tenant", "optionLabel", "name", "optionValue", "id", 3, "options"], ["placeholder", "Rol (Spatie)", "label", "Rol", "controlName", "roleName", "for", "role", "id", "role", "optionLabel", "name", "optionValue", "name", 3, "options"], ["placeholder", "Tienda (warehouse)", "label", "Tienda", "controlName", "warehouseId", "for", "warehouse", "id", "warehouse", "optionLabel", "name", "optionValue", "id", 3, "options"], ["placeholder", "Ingrese nombres", "label", "Nombre", "controlName", "name"], ["placeholder", "Ingrese apellidos", "label", "Apellidos", "controlName", "surname"], ["type", "submit", "pButton", "", "label", "Guardar", 3, "disabled"], ["placeholder", "Ingrese username", "label", "Username", "controlName", "username"], ["placeholder", "Ingrese email", "label", "Email", "controlName", "email"]], template: function UserFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UserFormComponent_Conditional_0_Template, 16, 12, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [ButtonDirective, \u0275NgNoValidate, NgControlStatusGroup, InputSelectComponent, InputTextComponent, FormGroupDirective, AsyncPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormComponent, { className: "UserFormComponent" });
})();

// src/app/private/administration/users/pages/list/users.component.ts
var _c02 = () => [];
var _c1 = () => [10, 20, 50];
var UserListComponent = class _UserListComponent {
  constructor(dialogService, messageService, confirmationService, loadingService, usersService) {
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.usersService = usersService;
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
        click: (rowData) => this.buttonEditUSer(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.buttonDeleteUser(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.columns = [
      {
        header: "Username",
        field: "username",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Email",
        field: "email",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Nombres",
        field: "name",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Apellidos",
        field: "surname",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Rol",
        field: "role",
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
    this.getUsers(this.limit, this.page, this.name);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.name = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getUsers(this.limit, this.page, this.name);
    });
  }
  ngOnDestroy() {
    if (this.userModal) {
      this.userModal.close();
    }
  }
  clearFilter() {
    this.name = "";
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
  }
  getUsers() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.name) {
      this.updatePage(page);
      this.usersService.callGetList(limit, page, name).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.updatePage((paginate.page ?? 0) + 1);
      this.getUsers(paginate.rows, this.page);
    });
  }
  get users() {
    return this.usersService.getList();
  }
  get total() {
    return this.usersService.getTotal();
  }
  buttonAddUser() {
    this.userModal = this.dialogService.open(UserFormComponent, {
      data: {},
      header: "Crear usuario",
      styleClass: "dialog-custom-form"
    });
    this.userModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Usuario Creado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  buttonEditUSer(id) {
    this.userModal = this.dialogService.open(UserFormComponent, {
      data: { id },
      header: "Editar usuario",
      styleClass: "dialog-custom-form"
    });
    this.userModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Usuario actualizado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  buttonDeleteUser(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar este usuario?",
      header: "Eliminar usuario",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.usersService.delete(id).subscribe(() => {
          showSuccess(this.messageService, "El usuario ha sido eliminado");
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
    this.\u0275fac = function UserListComponent_Factory(t) {
      return new (t || _UserListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(UsersService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 10, vars: 15, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "rowsPerPageOptions"]], template: function UserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function UserListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p-button", 3);
        \u0275\u0275listener("click", function UserListComponent_Template_p_button_click_3_listener() {
          return ctx.buttonAddUser();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "app-table-pagination", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275listener("paginateSelected", function UserListComponent_Template_app_table_pagination_paginateSelected_5_listener($event) {
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
        \u0275\u0275property("data", (tmp_2_0 = \u0275\u0275pipeBind1(6, 9, ctx.users)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(13, _c02))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_6_0 = \u0275\u0275pipeBind1(7, 11, ctx.total)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c1));
      }
    }, dependencies: [Button, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, FormGroupDirective, Toast, ConfirmDialog, AsyncPipe], styles: ["\n\n  .dialog-custom-form {\n  width: 30% !important;\n  height: auto !important;\n}\n  .dialog-custom-assign {\n  width: 15% !important;\n  height: auto !important;\n}\n@media (max-width: 480px) {\n    .dialog-custom-form {\n    width: 70% !important;\n    height: auto !important;\n  }\n    .dialog-custom-assign {\n    width: 70% !important;\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent" });
})();

// src/app/private/administration/users/users-routing.module.ts
var routes = [
  { path: "", component: UserListComponent },
  { path: "", pathMatch: "full", redirectTo: "users" }
];
var UsersRoutingModule = class _UsersRoutingModule {
  static {
    this.\u0275fac = function UsersRoutingModule_Factory(t) {
      return new (t || _UsersRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/administration/users/users.module.ts
var UsersModule = class _UsersModule {
  static {
    this.\u0275fac = function UsersModule_Factory(t) {
      return new (t || _UsersModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DialogService], imports: [
      CommonModule,
      UsersRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      ToastModule,
      ConfirmDialogModule,
      RadioButtonModule
    ] });
  }
};
export {
  UsersModule
};
//# sourceMappingURL=users.module-PGS4A2TQ.js.map

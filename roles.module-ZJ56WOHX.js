import {
  TabViewModule,
  TreeModule
} from "./chunk-ZIDIS2DE.js";
import {
  RolesService
} from "./chunk-UCI3O4ZW.js";
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
  MultiSelect,
  MultiSelectModule,
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
  ButtonDirective,
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
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-J33MWZEZ.js";
import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf,
  __async,
  debounceTime,
  forkJoin,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OI5KBWGW.js";

// src/app/private/administration/roles/utils/permission-options.ts
function buildPermissionGroups(perms) {
  const map = /* @__PURE__ */ new Map();
  for (const p of perms) {
    const g = p.group?.trim() || "Otros";
    if (!map.has(g)) {
      map.set(g, []);
    }
    map.get(g).push({ label: p.label ?? p.name, value: p.name });
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, "es")).map(([label, items]) => ({
    label,
    items: items.sort((x, y) => x.label.localeCompare(y.label, "es"))
  }));
}

// src/app/private/administration/roles/pages/form/roles-form.component.ts
var _c0 = () => ({ width: "100%" });
function RolesFormComponent_Conditional_0_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r3.value);
  }
}
function RolesFormComponent_Conditional_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "label", 8);
    \u0275\u0275text(2, "Permisos (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, " Puedes asignar permisos al crear el rol; siempre podr\xE1s ajustarlos con \xABSincronizar permisos\xBB en la lista. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-multiSelect", 10);
    \u0275\u0275template(6, RolesFormComponent_Conditional_0_div_4_ng_template_6_Template, 5, 2, "ng-template", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275property("options", ctx_r1.permissionGroups)("group", true)("filter", true)("showToggleAll", true);
  }
}
function RolesFormComponent_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Cargando permisos\u2026");
    \u0275\u0275elementEnd();
  }
}
function RolesFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2);
    \u0275\u0275listener("ngSubmit", function RolesFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveRole());
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
    \u0275\u0275element(3, "app-input-text", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RolesFormComponent_Conditional_0_div_4_Template, 7, 7, "div", 6)(5, RolesFormComponent_Conditional_0_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275element(8, "button", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loadingPerms_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.loadingPermissions)("ngIfElse", loadingPerms_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isValid || ctx_r1.loadingPermissions);
  }
}
var RolesFormComponent = class _RolesFormComponent {
  constructor(formBuilder, rolesService, dynamicDialogRef, dynamicDialogConfig) {
    this.formBuilder = formBuilder;
    this.rolesService = rolesService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      permissions: [[]]
    });
    this.permissionGroups = [];
    this.loadingPermissions = true;
  }
  ngOnInit() {
    const id = this.dynamicDialogConfig.data?.id;
    if (id) {
      forkJoin({
        perms: this.rolesService.getPermissions(),
        role: this.rolesService.getOne(id)
      }).subscribe({
        next: ({ perms, role }) => {
          this.permissionGroups = buildPermissionGroups(perms);
          this.form.patchValue({
            name: role.name,
            permissions: (role.permissions ?? []).map((p) => p.name)
          });
          this.loadingPermissions = false;
        },
        error: () => {
          this.loadingPermissions = false;
        }
      });
    } else {
      this.rolesService.getPermissions().subscribe({
        next: (perms) => {
          this.permissionGroups = buildPermissionGroups(perms);
          this.loadingPermissions = false;
        },
        error: () => {
          this.loadingPermissions = false;
        }
      });
    }
  }
  get isValid() {
    return this.form.valid;
  }
  buttonSaveRole() {
    if (!this.form?.valid) {
      return;
    }
    const id = this.dynamicDialogConfig.data?.id;
    const name = this.form.value.name;
    const permissions = this.form.value.permissions ?? [];
    if (id) {
      this.rolesService.edit(id, { name, permissions }).subscribe({
        next: () => this.dynamicDialogRef.close({ success: true }),
        error: () => this.dynamicDialogRef.close({
          error: "No se pudo actualizar el rol."
        })
      });
    } else {
      this.rolesService.create({ name, permissions }).subscribe({
        next: () => {
          this.dynamicDialogRef.close({ success: true });
          this.form.reset({ permissions: [] });
        },
        error: () => this.dynamicDialogRef.close({
          error: "No se pudo crear el rol."
        })
      });
    }
  }
  static {
    this.\u0275fac = function RolesFormComponent_Factory(t) {
      return new (t || _RolesFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesFormComponent, selectors: [["app-roles-form"]], decls: 1, vars: 1, consts: [["loadingPerms", ""], [3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "col-12"], ["label", "Rol", "for", "role", "type", "text", "id", "role", "placeholder", "Ingresa el nombre del rol", "controlName", "name"], ["class", "col-12", 4, "ngIf", "ngIfElse"], ["type", "submit", "pButton", "", "label", "Guardar", 1, "mt-3", 3, "disabled"], ["for", "role-perms", 1, "block", "mb-2"], [1, "text-600", "text-sm", "mt-0", "mb-2"], ["inputId", "role-perms", "formControlName", "permissions", "optionLabel", "label", "optionValue", "value", "optionGroupLabel", "label", "optionGroupChildren", "items", "filterBy", "label,value", "display", "chip", "placeholder", "Selecciona permisos", "appendTo", "body", 3, "options", "group", "filter", "showToggleAll"], ["pTemplate", "item"], [1, "flex", "flex-column", "gap-1"], [1, "text-500"], [1, "col-12", "p-3"]], template: function RolesFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RolesFormComponent_Conditional_0_Template, 9, 4, "form", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [NgIf, PrimeTemplate, ButtonDirective, MultiSelect, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, InputTextComponent, FormGroupDirective, FormControlName] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesFormComponent, { className: "RolesFormComponent" });
})();

// src/app/private/administration/roles/pages/form/role-sync.component.ts
var _c02 = () => ({ width: "100%" });
function RoleSyncComponent_div_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r3.value);
  }
}
function RoleSyncComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 3);
    \u0275\u0275text(2, "Permisos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, " En el desplegable ver\xE1s la descripci\xF3n en espa\xF1ol y debajo el c\xF3digo interno del permiso. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-multiSelect", 5);
    \u0275\u0275twoWayListener("ngModelChange", function RoleSyncComponent_div_0_Template_p_multiSelect_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selected, $event) || (ctx_r1.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, RoleSyncComponent_div_0_ng_template_6_Template, 5, 2, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "p-button", 8);
    \u0275\u0275listener("click", function RoleSyncComponent_div_0_Template_p_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dynamicDialogRef.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 9);
    \u0275\u0275listener("click", function RoleSyncComponent_div_0_Template_p_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c02));
    \u0275\u0275property("options", ctx_r1.permissionGroups);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selected);
    \u0275\u0275property("group", true)("filter", true)("showToggleAll", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true);
  }
}
function RoleSyncComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Cargando permisos\u2026");
    \u0275\u0275elementEnd();
  }
}
var RoleSyncComponent = class _RoleSyncComponent {
  constructor(rolesService, dynamicDialogRef, dynamicDialogConfig) {
    this.rolesService = rolesService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.permissionGroups = [];
    this.selected = [];
    this.loading = true;
  }
  ngOnInit() {
    const id = this.dynamicDialogConfig.data?.id;
    this.rolesService.getPermissions().subscribe((perms) => {
      this.permissionGroups = buildPermissionGroups(perms);
      this.rolesService.getOne(id).subscribe((role) => {
        this.selected = (role.permissions ?? []).map((p) => p.name);
        this.loading = false;
      });
    });
  }
  save() {
    const id = this.dynamicDialogConfig.data?.id;
    this.rolesService.syncPermissions(id, this.selected).subscribe({
      next: () => this.dynamicDialogRef.close({ success: true }),
      error: () => this.dynamicDialogRef.close({
        error: "No se pudieron sincronizar permisos."
      })
    });
  }
  static {
    this.\u0275fac = function RoleSyncComponent_Factory(t) {
      return new (t || _RoleSyncComponent)(\u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleSyncComponent, selectors: [["app-role-sync"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["loadingTpl", ""], ["class", "flex flex-column gap-3 p-2", 4, "ngIf", "ngIfElse"], [1, "flex", "flex-column", "gap-3", "p-2"], ["for", "perms"], [1, "text-600", "text-sm", "m-0"], ["inputId", "perms", "optionLabel", "label", "optionValue", "value", "optionGroupLabel", "label", "optionGroupChildren", "items", "filterBy", "label,value", "display", "chip", "placeholder", "Selecciona permisos", "appendTo", "body", 3, "ngModelChange", "options", "ngModel", "group", "filter", "showToggleAll"], ["pTemplate", "item"], [1, "flex", "justify-content-end", "gap-2"], ["label", "Cancelar", 3, "click", "text"], ["label", "Sincronizar", "icon", "pi pi-sync", 3, "click"], [1, "flex", "flex-column", "gap-1"], [1, "text-500"], [1, "p-4"]], template: function RoleSyncComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RoleSyncComponent_div_0_Template, 10, 9, "div", 1)(1, RoleSyncComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const loadingTpl_r4 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r4);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, MultiSelectModule, MultiSelect, PrimeTemplate, ButtonModule, Button], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: min(90vw, 32rem);\n}\n/*# sourceMappingURL=role-sync.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleSyncComponent, { className: "RoleSyncComponent" });
})();

// src/app/private/administration/roles/pages/list/roles.component.ts
var _c03 = () => [];
var _c1 = () => [10, 20, 50];
var RoleListComponent = class _RoleListComponent {
  constructor(dialogService, rolesService, messageService, confirmationService, loadingService) {
    this.dialogService = dialogService;
    this.rolesService = rolesService;
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
        click: (rowData) => this.buttonEditRole(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-sync",
        outlined: true,
        pTooltip: "Sincronizar permisos",
        tooltipPosition: "bottom",
        click: (rowData) => this.openSync(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.buttonDeleteRole(rowData.id, event)
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
        header: "Rol",
        field: "name",
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
    this.getRoles(this.limit, this.page, this.name);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.name = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getRoles(this.limit, this.page, this.name);
    });
  }
  ngOnDestroy() {
    if (this.roleModal) {
      this.roleModal.close();
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
  getRoles() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.name) {
      this.updatePage(page);
      this.rolesService.callGetList(limit, page, name).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  get roles() {
    return this.rolesService.getList();
  }
  get total() {
    return this.rolesService.getTotal();
  }
  onPageSelected(event) {
    return __async(this, null, function* () {
      this.updatePage((event.page ?? 0) + 1);
      this.getRoles(event.rows, this.page);
    });
  }
  buttonAddRole() {
    this.roleModal = this.dialogService.open(RolesFormComponent, {
      data: {},
      header: "Crear"
    });
    this.roleModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? this.showSuccess("Role Creado.") : value?.error ? this.showError(value?.error) : null;
      }
    });
  }
  buttonEditRole(id) {
    this.roleModal = this.dialogService.open(RolesFormComponent, {
      data: {
        id
      },
      header: "Editar"
    });
    this.roleModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? this.showSuccess("Role actualizado.") : value?.error ? this.showError(value?.error) : null;
      }
    });
  }
  openSync(id) {
    this.roleModal = this.dialogService.open(RoleSyncComponent, {
      data: { id },
      header: "Sincronizar permisos",
      width: "40rem"
    });
    this.roleModal.onClose.subscribe({
      next: (value) => {
        if (value?.success) {
          this.showSuccess("Permisos sincronizados.");
        } else if (value?.error) {
          this.showError(value.error);
        }
      }
    });
  }
  buttonDeleteRole(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar este rol?",
      header: "Eliminar rol",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Si",
      rejectLabel: "No",
      accept: () => {
        this.rolesService.delete(id).subscribe(() => {
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
    this.\u0275fac = function RoleListComponent_Factory(t) {
      return new (t || _RoleListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleListComponent, selectors: [["app-roles"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService]), \u0275\u0275StandaloneFeature], decls: 10, vars: 15, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "rowsPerPageOptions"]], template: function RoleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function RoleListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p-button", 3);
        \u0275\u0275listener("click", function RoleListComponent_Template_p_button_click_3_listener() {
          return ctx.buttonAddRole();
        });
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "app-table-pagination", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275listener("paginateSelected", function RoleListComponent_Template_app_table_pagination_paginateSelected_5_listener($event) {
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
        \u0275\u0275property("data", (tmp_2_0 = \u0275\u0275pipeBind1(6, 9, ctx.roles)) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : \u0275\u0275pureFunction0(13, _c03))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_6_0 = \u0275\u0275pipeBind1(7, 11, ctx.total)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c1));
      }
    }, dependencies: [CommonModule, AsyncPipe, FormsModule, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, ConfirmDialogModule, ConfirmDialog, Button, ToastModule, Toast, SharedModule, TablePaginationComponent, InputSearchComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleListComponent, { className: "RoleListComponent" });
})();

// src/app/private/administration/roles/roles-routing.module.ts
var routes = [
  { path: "", component: RoleListComponent },
  { path: "", pathMatch: "full", redirectTo: "roles" }
];
var RolesRoutingModule = class _RolesRoutingModule {
  static {
    this.\u0275fac = function RolesRoutingModule_Factory(t) {
      return new (t || _RolesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RolesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/administration/roles/roles.module.ts
var RolesModule = class _RolesModule {
  static {
    this.\u0275fac = function RolesModule_Factory(t) {
      return new (t || _RolesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RolesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DialogService], imports: [
      CommonModule,
      RolesRoutingModule,
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
  RolesModule
};
//# sourceMappingURL=roles.module-ZJ56WOHX.js.map

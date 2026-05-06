import {
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import {
  InputColorPickerComponent,
  InputTextComponent,
  SharedModule
} from "./chunk-FOL26TWH.js";
import {
  ButtonDirective
} from "./chunk-AUVIAVMC.js";
import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  Toast,
  ToastModule
} from "./chunk-NOHFYFBO.js";
import {
  FormBuilder,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  BehaviorSubject,
  CommonModule,
  debounceTime,
  map,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/colors/services/colors.service.ts
var ColorsService = class _ColorsService {
  constructor(apiService) {
    this.apiService = apiService;
    this.colors = [];
    this.colors$ = new BehaviorSubject(this.colors);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
    this.filterState = null;
    this.STORAGE_KEY = "colors_filter_state";
  }
  // Métodos de estado
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
          console.error("Error parsing color filter state", e);
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
    let url = `colors?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateColors(response.data);
      this.updateTotalColors(response.paginate.total);
    }));
  }
  getList() {
    return this.colors$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  // 4. Helper para recargar manteniendo página
  reloadWithCurrentState() {
    const s = this.getFilterState();
    return this.callGetList(s?.limit ?? 10, s?.page ?? 1, s?.search ?? "");
  }
  create(data) {
    return this.apiService.post("colors", data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  delete(id) {
    return this.apiService.delete(`colors/${id}`).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  edit(id, data) {
    return this.apiService.patch(`colors/${id}`, data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  getOne(id) {
    return this.apiService.get(`colors/${id}`);
  }
  updateColors(value) {
    this.colors = value;
    this.colors$.next(this.colors);
  }
  updateTotalColors(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function ColorsService_Factory(t) {
      return new (t || _ColorsService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColorsService, factory: _ColorsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/inventories/colors/models/colors.model.ts
var ColorSave = class {
  constructor(color) {
    this.id = color.id;
    this.description = color.description;
    this.hash = color.hash;
  }
};

// src/app/private/inventories/colors/pages/form/colors.component.ts
function ColorsCreateFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function ColorsCreateFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveColor());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-input-text", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "app-input-color-picker", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "button", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
  }
}
var ColorsCreateFormComponent = class _ColorsCreateFormComponent {
  constructor(formBuilder, colorsService, dynamicDialogRef, dynamicDialogConfig) {
    this.formBuilder = formBuilder;
    this.colorsService = colorsService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.colorId = 0;
    this.color = "";
    this.form = this.formBuilder.group({
      description: ["", Validators.required],
      hash: ["#000000", Validators.nullValidator]
    });
  }
  ngOnInit() {
    if (this.dynamicDialogConfig.data.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.colorId = this.dynamicDialogConfig.data.id;
      this.colorsService.getOne(id).subscribe((response) => {
        this.form.patchValue(response);
      });
    }
  }
  buttonSaveColor() {
    if (this.form) {
      const color = new ColorSave(this.form.value);
      if (this.dynamicDialogConfig.data.id) {
        const id = this.dynamicDialogConfig.data.id;
        this.colorsService.edit(id, color).subscribe({
          next: () => this.dynamicDialogRef.close({ success: true }),
          error: () => {
          }
        });
      } else {
        this.colorsService.create(color).subscribe({
          next: () => this.dynamicDialogRef.close({ success: true }),
          error: () => this.dynamicDialogRef.close({ error: true })
        });
      }
    }
  }
  static {
    this.\u0275fac = function ColorsCreateFormComponent_Factory(t) {
      return new (t || _ColorsCreateFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ColorsService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorsCreateFormComponent, selectors: [["app-colors-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "pt-2", "mt-5", 3, "formGroup"], [1, "pt-2", "mt-5", 3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "field", "col-12"], ["placeholder", "Ingrese color", "label", "Color", "controlName", "description"], ["controlName", "hash"], ["type", "submit", "pButton", "", "label", "Guardar"]], template: function ColorsCreateFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ColorsCreateFormComponent_Conditional_0_Template, 7, 1, "form", 0);
        \u0275\u0275element(1, "p-toast");
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, ToastModule, Toast, SharedModule, ButtonDirective, InputTextComponent, InputColorPickerComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorsCreateFormComponent, { className: "ColorsCreateFormComponent" });
})();

export {
  ColorsService,
  ColorsCreateFormComponent
};
//# sourceMappingURL=chunk-6OYOR6TO.js.map

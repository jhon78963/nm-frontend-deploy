import {
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import {
  InputSelectComponent,
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
  ɵɵadvance,
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

// src/app/private/inventories/sizes/services/sizes-selected.service.ts
var SizesSelectedService = class _SizesSelectedService {
  constructor(apiService) {
    this.apiService = apiService;
    this.sizes = [];
    this.sizes$ = new BehaviorSubject(this.sizes);
  }
  callGetList(productId, sizeTypeId) {
    let url = `sizes/selected?productId=${productId}`;
    if (sizeTypeId instanceof Array && sizeTypeId.length > 0) {
      url += `&sizeTypeId=${sizeTypeId}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((size) => {
      this.updateSizes(size);
    }));
  }
  getList() {
    return this.sizes$.asObservable();
  }
  create(data, productId, sizeTypeId) {
    return this.apiService.post("sizes", data).pipe(switchMap(() => this.callGetList(productId, sizeTypeId)));
  }
  getSizeTypes() {
    return this.apiService.get("size-types");
  }
  updateSizes(value) {
    this.sizes = value;
    this.sizes$.next(this.sizes);
  }
  static {
    this.\u0275fac = function SizesSelectedService_Factory(t) {
      return new (t || _SizesSelectedService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SizesSelectedService, factory: _SizesSelectedService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/inventories/sizes/services/sizes.service.ts
var SizesService = class _SizesService {
  constructor(apiService) {
    this.apiService = apiService;
    this.sizes = [];
    this.sizes$ = new BehaviorSubject(this.sizes);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
    this.filterState = null;
    this.STORAGE_KEY = "sizes_filter_state";
  }
  // Métodos para guardar/leer estado
  setFilterState(limit, page, search, sizeTypeIds) {
    this.filterState = { limit, page, search, sizeTypeIds };
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.filterState));
  }
  getFilterState() {
    if (!this.filterState) {
      const saved = sessionStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          this.filterState = JSON.parse(saved);
        } catch (e) {
          console.error("Error parsing size filter state", e);
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
  callGetList(limit = 10, page = 1, name = "", sizeTypeIds = []) {
    this.setFilterState(limit, page, name, sizeTypeIds);
    let url = `sizes?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    if (sizeTypeIds instanceof Array && sizeTypeIds.length > 0) {
      url += `&sizeTypeId=${sizeTypeIds}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateSizes(response.data);
      this.updateTotalSizes(response.paginate.total);
    }));
  }
  getList() {
    return this.sizes$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  // 4. Helpers para recargar manteniendo filtros
  reloadWithCurrentState() {
    const s = this.getFilterState();
    return this.callGetList(s?.limit ?? 10, s?.page ?? 1, s?.search ?? "", s?.sizeTypeIds ?? []);
  }
  create(data) {
    return this.apiService.post("sizes", data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  delete(id) {
    return this.apiService.delete(`sizes/${id}`).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  edit(id, data) {
    return this.apiService.patch(`sizes/${id}`, data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  getOne(id) {
    return this.apiService.get(`sizes/${id}`);
  }
  updateSizes(value) {
    this.sizes = value;
    this.sizes$.next(this.sizes);
  }
  updateTotalSizes(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function SizesService_Factory(t) {
      return new (t || _SizesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SizesService, factory: _SizesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/inventories/sizes/models/sizes.model.ts
var SizeSave = class {
  constructor(size) {
    this.id = size.id;
    this.description = size.description;
    this.sizeTypeId = size.sizeTypeId;
  }
};

// src/app/private/inventories/sizes/pages/form/sizes-form.component.ts
function SizesCreateFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function SizesCreateFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveSizeButton());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-input-select", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "app-input-text", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "button", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.sizesType);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.isValid);
  }
}
var SizesCreateFormComponent = class _SizesCreateFormComponent {
  constructor(formBuilder, sizesSelectedService, sizesService, dynamicDialogConfig, dynamicDialogRef) {
    this.formBuilder = formBuilder;
    this.sizesSelectedService = sizesSelectedService;
    this.sizesService = sizesService;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.dynamicDialogRef = dynamicDialogRef;
    this.productId = 0;
    this.sizeTypeId = 0;
    this.sizesType = [];
    this.form = this.formBuilder.group({
      id: [null],
      description: ["", Validators.required],
      sizeTypeId: [1, Validators.required]
    });
  }
  ngOnInit() {
    if (this.dynamicDialogConfig.data.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.sizeTypeId = this.dynamicDialogConfig.data.id;
      this.sizesService.getOne(id).subscribe((response) => {
        this.form.patchValue(response);
      });
    }
    this.sizesSelectedService.getSizeTypes().subscribe({
      next: (sizesType) => {
        this.sizesType = sizesType;
      }
    });
  }
  get isValid() {
    return this.form.valid;
  }
  saveSizeButton() {
    if (this.form) {
      const size = new SizeSave(this.form.value);
      if (this.dynamicDialogConfig.data.id) {
        const id = this.dynamicDialogConfig.data.id;
        this.sizesService.edit(id, size).subscribe({
          next: () => this.dynamicDialogRef.close({ success: true }),
          error: () => {
          }
        });
      } else {
        this.sizesService.create(size).subscribe({
          next: () => this.dynamicDialogRef.close({ success: true }),
          error: () => {
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function SizesCreateFormComponent_Factory(t) {
      return new (t || _SizesCreateFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SizesSelectedService), \u0275\u0275directiveInject(SizesService), \u0275\u0275directiveInject(DynamicDialogConfig), \u0275\u0275directiveInject(DynamicDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizesCreateFormComponent, selectors: [["app-sizes-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "col-12"], ["placeholder", "Seleccione tipo de talla", "label", "Tipo de talla", "controlName", "sizeTypeId", "for", "sizeTypeId", "id", "sizeTypeId", "optionLabel", "description", "optionValue", "id", 3, "options"], ["placeholder", "Ingrese talla", "label", "Talla", "controlName", "description"], ["type", "submit", "pButton", "", "label", "Guardar", 3, "disabled"]], template: function SizesCreateFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SizesCreateFormComponent_Conditional_0_Template, 7, 3, "form", 0);
        \u0275\u0275element(1, "p-toast");
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, ToastModule, Toast, SharedModule, ButtonDirective, InputSelectComponent, InputTextComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizesCreateFormComponent, { className: "SizesCreateFormComponent" });
})();

export {
  SizesSelectedService,
  SizesService,
  SizesCreateFormComponent
};
//# sourceMappingURL=chunk-6NZ6S5YI.js.map

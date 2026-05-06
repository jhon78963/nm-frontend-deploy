import {
  formatDateTime
} from "./chunk-AO5WIXMD.js";
import {
  PosService
} from "./chunk-YX6E5JMI.js";
import {
  Tag,
  TagModule
} from "./chunk-HO5KCK4N.js";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  InputDateComponent,
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
import {
  showError,
  showSuccess,
  showToastWarn
} from "./chunk-MEV3ATV3.js";
import {
  Table,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import {
  Dropdown
} from "./chunk-4JQRHAYE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  Button,
  ButtonDirective,
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
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  RouterLink,
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  __async,
  __spreadProps,
  __spreadValues,
  debounceTime,
  inject,
  map,
  signal,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/sales/list/pages/product-selector/product-selector.component.ts
function ProductSelectorComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Talla / Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 8);
    \u0275\u0275text(6, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 9);
    \u0275\u0275text(8, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd();
  }
}
function ProductSelectorComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10);
    \u0275\u0275listener("click", function ProductSelectorComponent_ng_template_6_Template_tr_click_0_listener() {
      const prod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(prod_r2));
    });
    \u0275\u0275elementStart(1, "td", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 14);
    \u0275\u0275element(8, "p-tag", 15);
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275element(10, "i", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 8)(18, "button", 20);
    \u0275\u0275listener("click", function ProductSelectorComponent_ng_template_6_Template_button_click_18_listener() {
      const prod_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(prod_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prod_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prod_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prod_r2.sku);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", prod_r2.size_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", prod_r2.colorName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", prod_r2.stock <= 0 ? "text-red-500" : "text-green-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", prod_r2.stock, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(16, 7, prod_r2.sale_price, "1.2-2"), " ");
  }
}
function ProductSelectorComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2, " No se encontraron variantes disponibles. ");
    \u0275\u0275elementEnd()();
  }
}
var ProductSelectorComponent = class _ProductSelectorComponent {
  constructor() {
    this.ref = inject(DynamicDialogRef);
    this.posService = inject(PosService);
    this.products = signal([]);
    this.loading = signal(false);
  }
  ngOnInit() {
    this.loadProducts("");
  }
  // Captura el input del buscador
  search(event) {
    const query = event.target.value;
    if (query.length > 2 || query.length === 0) {
      this.loadProducts(query);
    }
  }
  // Conectamos con el Backend
  loadProducts(query) {
    return __async(this, null, function* () {
      if (!query) {
        this.products.set([]);
        return;
      }
      this.loading.set(true);
      try {
        const res = yield this.posService.searchProductBySku(query);
        if (res && res.variants) {
          const flatVariants = [];
          Object.keys(res.variants).forEach((sizeName) => {
            const variantsOfSize = res.variants[sizeName];
            variantsOfSize.forEach((v) => {
              flatVariants.push(__spreadProps(__spreadValues({}, v), {
                name: res.name,
                // Nombre base del producto
                size_name: sizeName,
                // Nombre de la talla (la llave del objeto)
                // Si el precio de la variante es 0, usamos el basePrice del producto
                sale_price: v.price > 0 ? v.price : res.basePrice
              }));
            });
          });
          this.products.set(flatVariants);
        } else {
          this.products.set([]);
        }
      } catch (error) {
        console.error("Error cargando productos", error);
        this.products.set([]);
      } finally {
        this.loading.set(false);
      }
    });
  }
  select(product) {
    this.ref.close(product);
  }
  static {
    this.\u0275fac = function ProductSelectorComponent_Factory(t) {
      return new (t || _ProductSelectorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductSelectorComponent, selectors: [["app-product-selector"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "p-3"], [1, "p-input-icon-left", "w-full", "mb-3"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Escanee o escriba el SKU y presione Enter...", 1, "w-full", 3, "keyup.enter"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm", 3, "value", "rows", "paginator", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "text-center"], [1, "text-right"], [1, "cursor-pointer", 3, "click"], [1, "text-xs"], [1, "font-bold"], [1, "text-500", "text-xs"], [1, "flex", "flex-column", "gap-1"], ["severity", "warning", "styleClass", "text-xs", 3, "value"], [1, "text-xs", "font-medium", "text-600"], [1, "pi", "pi-palette", "mr-1"], [1, "text-center", "font-bold", 3, "ngClass"], [1, "text-right", "font-bold", "text-indigo-600"], ["pButton", "", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text", 3, "click"], ["colspan", "5", 1, "text-center", "p-4", "text-500"]], template: function ProductSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementStart(3, "input", 3);
        \u0275\u0275listener("keyup.enter", function ProductSelectorComponent_Template_input_keyup_enter_3_listener($event) {
          return ctx.loadProducts($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "p-table", 4);
        \u0275\u0275template(5, ProductSelectorComponent_ng_template_5_Template, 10, 0, "ng-template", 5)(6, ProductSelectorComponent_ng_template_6_Template, 19, 10, "ng-template", 6)(7, ProductSelectorComponent_ng_template_7_Template, 3, 0, "ng-template", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.products())("rows", 5)("paginator", true)("loading", ctx.loading());
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      DecimalPipe,
      FormsModule,
      TableModule,
      Table,
      PrimeTemplate,
      InputTextModule,
      InputText,
      ButtonModule,
      ButtonDirective,
      TagModule,
      Tag
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductSelectorComponent, { className: "ProductSelectorComponent" });
})();

// src/app/private/finance/sales/list/services/sales.service.ts
var SalesService = class _SalesService {
  constructor(apiService) {
    this.apiService = apiService;
    this.sales = [];
    this.sales$ = new BehaviorSubject(this.sales);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
    this.filterState = null;
    this.STORAGE_KEY = "sales_filter_state";
  }
  // Métodos de Estado
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
          console.error("Error parsing sales filter state", e);
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
    let url = `sales?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    return this.apiService.get(url).pipe(map((response) => {
      this.updateSales(response.data);
      this.updateTotalSales(response.paginate.total);
    }));
  }
  getList() {
    return this.sales$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  // 4. Helper para recargar manteniendo filtros
  reloadWithCurrentState() {
    const s = this.getFilterState();
    return this.callGetList(s?.limit ?? 10, s?.page ?? 1, s?.search ?? "");
  }
  create(data) {
    return this.apiService.post("sales", data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  delete(id) {
    return this.apiService.delete(`sales/${id}`).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  edit(id, data) {
    return this.apiService.patch(`sales/${id}`, data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  getOne(id) {
    return this.apiService.get(`sales/${id}`);
  }
  // --- NUEVAS FUNCIONES PARA CAMBIO DE MERCADERÍA ---
  searchByCode(code) {
    return this.apiService.get(`sales?page=1&limit=1&search=${code}`);
  }
  processExchange(payload) {
    return this.apiService.post("sales/exchange", payload).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  updateSales(value) {
    this.sales = value;
    this.sales$.next(this.sales);
  }
  updateTotalSales(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function SalesService_Factory(t) {
      return new (t || _SalesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SalesService, factory: _SalesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/finance/sales/list/pages/form/form.component.ts
function SaleFormComponent_Conditional_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "tr", 27)(2, "td", 28)(3, "input", 29);
    \u0275\u0275listener("wheel", function SaleFormComponent_Conditional_0_ng_container_20_Template_input_wheel_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 28)(5, "div", 30)(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function SaleFormComponent_Conditional_0_ng_container_20_Template_button_click_8_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openExchangeProduct(i_r4));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 28);
    \u0275\u0275element(10, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 34);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroupName", i_r4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = item_r5.get("description_full")) == null ? null : tmp_5_0.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isCanceled());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 4, (tmp_7_0 = item_r5.get("subtotal")) == null ? null : tmp_7_0.value, "1.2-2"), " ");
  }
}
function SaleFormComponent_Conditional_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "p-dropdown", 36);
    \u0275\u0275elementStart(2, "div", 37)(3, "span", 38);
    \u0275\u0275text(4, "S/");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function SaleFormComponent_Conditional_0_div_34_Template_button_click_6_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePayment(i_r7));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r7);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.paymentMethodsList);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.paymentsControls.length === 1);
  }
}
function SaleFormComponent_Conditional_0_span_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function SaleFormComponent_Conditional_0_span_39_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fixOverpayment());
    });
    \u0275\u0275text(4, " Ajustar Pago ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Falta: S/ ", \u0275\u0275pipeBind2(2, 1, ctx_r1.calculatedTotal - ctx_r1.calculatedPayments, "1.2-2"), " ");
  }
}
function SaleFormComponent_Conditional_0_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275text(2, " Correcto ");
    \u0275\u0275elementEnd();
  }
}
function SaleFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function SaleFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveSale());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-input-date", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span", 5);
    \u0275\u0275text(6, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "table", 7)(9, "thead", 8)(10, "tr")(11, "th", 9);
    \u0275\u0275text(12, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 9);
    \u0275\u0275text(14, "Desc.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 10);
    \u0275\u0275text(16, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 11);
    \u0275\u0275text(18, "Sub.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, SaleFormComponent_Conditional_0_ng_container_20_Template, 14, 7, "ng-container", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot", 13)(22, "tr")(23, "td", 14);
    \u0275\u0275text(24, " Total Venta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 15);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "span", 18);
    \u0275\u0275text(31, "Pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 19);
    \u0275\u0275listener("click", function SaleFormComponent_Conditional_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPaymentRow());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 20);
    \u0275\u0275template(34, SaleFormComponent_Conditional_0_div_34_Template, 7, 3, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 22)(36, "span", 23);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, SaleFormComponent_Conditional_0_span_39_Template, 5, 4, "span", 24)(40, SaleFormComponent_Conditional_0_span_40_Template, 3, 0, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "button", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.itemsControls);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 10, ctx_r1.calculatedTotal, "1.2-2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isCanceled());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.paymentsControls);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.calculatedTotal - ctx_r1.calculatedPayments > 0.1 ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total Pagado: S/ ", \u0275\u0275pipeBind2(38, 13, ctx_r1.calculatedPayments, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.calculatedTotal - ctx_r1.calculatedPayments > 0.1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calculatedTotal - ctx_r1.calculatedPayments <= 0.1 && ctx_r1.calculatedTotal - ctx_r1.calculatedPayments >= -0.1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isFormValid);
  }
}
var SaleFormComponent = class _SaleFormComponent {
  constructor(datePipe, dialogService, dynamicDialogConfig, dynamicDialogRef, formBuilder, messageService, salesService) {
    this.datePipe = datePipe;
    this.dialogService = dialogService;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.dynamicDialogRef = dynamicDialogRef;
    this.formBuilder = formBuilder;
    this.messageService = messageService;
    this.salesService = salesService;
    this.form = this.formBuilder.group({
      creationTime: [/* @__PURE__ */ new Date(), Validators.nullValidator],
      items: this.formBuilder.array([]),
      payments: this.formBuilder.array([])
      // Nuevo Array de Pagos
    });
    this.calculatedTotal = 0;
    this.calculatedPayments = 0;
    this.paymentMethodsList = ["CASH", "YAPE", "CARD"];
    this.isCanceled = signal(false);
  }
  ngOnInit() {
    if (this.dynamicDialogConfig.data.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.salesService.getOne(id).subscribe((response) => {
        this.isCanceled.set(response.status === "CANCELED");
        if (response.datetime_iso) {
          this.form.patchValue({
            creationTime: new Date(response.datetime_iso)
          });
        }
        this.initItems(response.items);
        this.initPayments(response.payments);
        this.recalculateTotals();
        if (this.isCanceled()) {
          this.form.disable();
        }
      });
    }
  }
  // --- ITEMS ---
  initItems(items) {
    const itemsArray = this.form.get("items");
    itemsArray.clear();
    items.forEach((item) => {
      const group = this.formBuilder.group({
        id: [item.id],
        product_name: [item.product_name],
        description_full: [item.description_full],
        quantity: [item.quantity, [Validators.required, Validators.min(1)]],
        // Agregado Validators
        unit_price: [item.unit_price, [Validators.required, Validators.min(0)]],
        subtotal: [item.subtotal],
        product_size_id: [null],
        color_id: [item.color_id]
      });
      const recalculate = () => {
        const qty = group.get("quantity")?.value || 0;
        const price = group.get("unit_price")?.value || 0;
        group.patchValue({ subtotal: qty * price }, { emitEvent: false });
        this.recalculateTotals();
      };
      group.get("unit_price")?.valueChanges.subscribe(recalculate);
      group.get("quantity")?.valueChanges.subscribe(recalculate);
      itemsArray.push(group);
    });
  }
  // --- PAGOS ---
  initPayments(payments) {
    const paymentsArray = this.form.get("payments");
    paymentsArray.clear();
    if (!payments || payments.length === 0) {
      this.addPaymentRow(this.calculatedTotal, "CASH");
      return;
    }
    payments.forEach((pay) => {
      this.addPaymentRow(pay.amount, pay.method);
    });
  }
  addPaymentRow(amount = 0, method = "CASH") {
    const paymentsArray = this.form.get("payments");
    const group = this.formBuilder.group({
      method: [method, Validators.required],
      amount: [amount, [Validators.required, Validators.min(0)]]
    });
    group.get("amount")?.valueChanges.subscribe(() => this.recalculateTotals());
    paymentsArray.push(group);
    this.recalculateTotals();
  }
  removePayment(index) {
    this.form.get("payments").removeAt(index);
    this.recalculateTotals();
  }
  // --- CÁLCULOS ---
  recalculateTotals() {
    const items = this.form.get("items").controls;
    this.calculatedTotal = items.reduce((acc, ctrl) => acc + (ctrl.get("subtotal")?.value || 0), 0);
    const payments = this.form.get("payments").controls;
    this.calculatedPayments = payments.reduce((acc, ctrl) => acc + (ctrl.get("amount")?.value || 0), 0);
  }
  // --- GETTERS ---
  get itemsControls() {
    return this.form.get("items").controls;
  }
  get paymentsControls() {
    return this.form.get("payments").controls;
  }
  // Validamos que formulario esté ok Y que los montos cuadren (con margen error decimal)
  get isFormValid() {
    const diff = Math.abs(this.calculatedTotal - this.calculatedPayments);
    return this.form.valid && diff < 0.1;
  }
  buttonSaveSale() {
    if (this.isFormValid) {
      const formValue = this.form.getRawValue();
      const id = this.dynamicDialogConfig.data.id;
      const payload = {
        id,
        code: this.dynamicDialogConfig.data.code,
        total: this.calculatedTotal,
        status: this.dynamicDialogConfig.data.status,
        creationTime: formatDateTime(formValue.creationTime, this.datePipe),
        items: formValue.items.map((i) => ({
          id: i.id,
          quantity: i.quantity,
          unit_price: i.unit_price,
          product_size_id: i.product_size_id,
          color_id: i.color_id
        })),
        payments: formValue.payments.map((p) => ({
          method: p.method,
          amount: p.amount
        }))
      };
      this.salesService.edit(id, payload).subscribe({
        next: () => this.dynamicDialogRef.close(true),
        error: () => {
        }
      });
    }
  }
  openExchangeProduct(index) {
    const ref = this.dialogService.open(ProductSelectorComponent, {
      header: "Seleccionar Reemplazo",
      width: "60vw"
    });
    ref.onClose.subscribe((res) => {
      if (res) {
        const itemsArray = this.form.get("items");
        const row = itemsArray.at(index);
        row.patchValue({
          product_size_id: res.product_size_id,
          color_id: res.color_id,
          product_name: res.name,
          // res tiene 'name', form tiene 'product_name'
          unit_price: res.sale_price,
          // res tiene 'sale_price', form tiene 'unit_price'
          description_full: `${res.name} (${res.size_name} | ${res.colorName})`,
          // Mantenemos la cantidad que ya estaba o la reseteamos a 1
          quantity: row.get("quantity")?.value || 1
        });
        const qty = row.get("quantity")?.value;
        const price = res.sale_price;
        row.get("subtotal")?.setValue(qty * price);
        this.recalculateTotals();
        this.messageService.add({
          severity: "success",
          summary: "Producto Actualizado",
          detail: "Se aplic\xF3 el cambio de mercader\xEDa localmente."
        });
      }
    });
  }
  fixOverpayment() {
    const payments = this.form.get("payments");
    if (payments.length === 1) {
      payments.at(0).patchValue({ amount: this.calculatedTotal });
    } else {
      const diff = this.calculatedPayments - this.calculatedTotal;
      const lastAmount = payments.at(payments.length - 1).get("amount")?.value;
      payments.at(payments.length - 1).patchValue({ amount: lastAmount - diff });
    }
    this.recalculateTotals();
  }
  static {
    this.\u0275fac = function SaleFormComponent_Factory(t) {
      return new (t || _SaleFormComponent)(\u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(DynamicDialogConfig), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(SalesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaleFormComponent, selectors: [["app-form"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DialogService, MessageService, DatePipe]), \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "col-12"], ["label", "Fecha", "for", "creationTime", "controlName", "creationTime"], [1, "block", "text-500", "font-bold", "mb-2", "text-sm", "uppercase"], ["formArrayName", "items", 1, "border-1", "border-200", "border-round-xl", "overflow-hidden"], [1, "w-full", "text-sm"], [1, "surface-100", "border-bottom-1", "border-200"], [1, "p-2", "text-left"], [1, "p-2", "text-right", "w-6rem"], [1, "p-2", "text-right"], [4, "ngFor", "ngForOf"], [1, "surface-50"], ["colspan", "3", 1, "p-2", "text-right", "font-bold"], [1, "p-2", "text-right", "font-black", "text-indigo-700"], [1, "col-12", "mb-3"], [1, "flex", "justify-content-between", "align-items-center", "mb-2"], [1, "text-500", "font-bold", "text-sm", "uppercase"], ["type", "button", "pButton", "", "icon", "pi pi-plus", "label", "Agregar Pago", 1, "p-button-text", "p-button-sm", "py-1", 3, "click", "disabled"], ["formArrayName", "payments", 1, "flex", "flex-column", "gap-2"], ["class", "flex gap-2 align-items-center", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-content-between", "mt-2", "p-2", "border-round", 3, "ngClass"], [1, "text-xs", "font-bold", "uppercase"], ["class", "text-xs font-bold", 4, "ngIf"], ["class", "text-xs font-bold flex align-items-center gap-1", 4, "ngIf"], ["type", "submit", "pButton", "", "label", "Guardar Todo", "autofocus", "", 1, "mt-4", "w-full", "p-button-primary", "font-bold", "shadow-2", 3, "disabled"], [1, "border-bottom-1", "surface-border", 3, "formGroupName"], [1, "p-2"], ["type", "number", "pInputText", "", "formControlName", "quantity", 1, "w-full", "text-center", "p-1", "h-2rem", "text-sm", "font-bold", 3, "wheel"], [1, "flex", "align-items-center", "gap-2"], [1, "font-bold", "text-xs"], ["type", "button", "pButton", "", "icon", "pi pi-sync", "pTooltip", "Cambiar por otro producto", 1, "p-button-text", "p-button-sm", "p-button-warning", "p-0", "h-1rem", "w-1rem", 3, "click", "disabled"], ["type", "number", "pInputText", "", "formControlName", "unit_price", 1, "w-full", "text-right", "p-1", "h-2rem", "text-sm"], [1, "p-2", "text-right", "font-bold"], [1, "flex", "gap-2", "align-items-center", 3, "formGroupName"], ["formControlName", "method", "styleClass", "w-full text-sm", 1, "w-full", 3, "options"], [1, "p-inputgroup", "w-8rem"], [1, "p-inputgroup-addon", "py-1", "px-2", "text-xs"], ["type", "number", "pInputText", "", "formControlName", "amount", 1, "text-right", "p-1", "text-sm", "font-bold"], ["type", "button", "pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-text", "p-button-rounded", 3, "click", "disabled"], [1, "text-xs", "font-bold"], ["type", "button", 1, "ml-2", "p-1", "text-xs", "p-button-secondary", "p-button-outlined", 3, "click"], [1, "text-xs", "font-bold", "flex", "align-items-center", "gap-1"], [1, "pi", "pi-check-circle"]], template: function SaleFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SaleFormComponent_Conditional_0_Template, 42, 16, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, SharedModule, InputText, Dropdown, ButtonDirective, InputDateComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaleFormComponent, { className: "SaleFormComponent" });
})();

// src/app/private/finance/sales/list/pages/list/list.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var SaleListComponent = class _SaleListComponent {
  constructor(dialogService, messageService, confirmationService, loadingService, salesService) {
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.salesService = salesService;
    this.columns = [
      {
        header: "C\xF3digo",
        field: "code",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Fecha",
        field: "date",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Cliente",
        field: "customer",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Total",
        field: "total",
        clickable: false,
        image: false,
        money: true
      },
      {
        header: "Estado",
        field: "status",
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
        icon: "pi pi-eye",
        outlined: true,
        pTooltip: "Ver detalle",
        tooltipPosition: "bottom",
        visible: (rowData) => rowData.status === "CANCELED",
        click: (rowData) => this.buttonEditSale(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-pencil",
        outlined: true,
        pTooltip: "Editar",
        tooltipPosition: "bottom",
        visible: (rowData) => rowData.status !== "CANCELED",
        click: (rowData) => this.buttonEditSale(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        visible: (rowData) => rowData.status !== "CANCELED",
        click: (rowData, event) => this.buttonDeleteSale(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.restoreFilters();
    this.getSales(this.limit, this.page, this.search);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.search = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getSales(this.limit, 1, this.search);
    });
  }
  ngOnDestroy() {
    if (this.saleModal) {
      this.saleModal.close();
    }
  }
  restoreFilters() {
    const savedState = this.salesService.getFilterState();
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
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
    this.salesService.clearFilterState();
    this.getSales(this.limit, 1, "");
  }
  getSales() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, search = this.search) {
      this.updatePage(page);
      this.salesService.callGetList(limit, page, search).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.limit = paginate.rows ?? 10;
      this.updatePage((paginate.page ?? 0) + 1);
      this.getSales(this.limit, this.page, this.search);
    });
  }
  get sales() {
    return this.salesService.getList();
  }
  get total() {
    return this.salesService.getTotal();
  }
  buttonEditSale(id) {
    this.saleModal = this.dialogService.open(SaleFormComponent, {
      data: { id },
      header: "Detalle venta",
      styleClass: "dialog-custom-form"
    });
    this.saleModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Detalle actualizado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  buttonDeleteSale(id, event) {
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
        this.salesService.delete(id).subscribe(() => {
          showSuccess(this.messageService, "La venta ha sido cancelada");
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
    this.\u0275fac = function SaleListComponent_Factory(t) {
      return new (t || _SaleListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(SalesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaleListComponent, selectors: [["app-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService, DialogService]), \u0275\u0275StandaloneFeature], decls: 13, vars: 17, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [1, "flex", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], ["routerLink", "/sales/pos", "pTooltip", "Ir al punto de venta (POS)", "tooltipPosition", "bottom", 3, "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function SaleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function SaleListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
        \u0275\u0275listener("click", function SaleListComponent_Template_p_button_click_4_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p-button", 6);
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "app-table-pagination", 8);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275pipe(10, "async");
        \u0275\u0275listener("paginateSelected", function SaleListComponent_Template_app_table_pagination_paginateSelected_8_listener($event) {
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
        \u0275\u0275property("data", (tmp_3_0 = \u0275\u0275pipeBind1(9, 11, ctx.sales)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : \u0275\u0275pureFunction0(15, _c0))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_7_0 = \u0275\u0275pipeBind1(10, 13, ctx.total)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(16, _c1));
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      RouterLink,
      SharedModule,
      Button,
      NgControlStatusGroup,
      TablePaginationComponent,
      InputSearchComponent,
      ToastModule,
      Toast,
      ConfirmDialogModule,
      ConfirmDialog
    ], styles: ["\n\n  .dialog-custom-form {\n  width: 30% !important;\n  height: 55rem !important;\n}\n  .dialog-custom-assign {\n  width: 15% !important;\n  height: 35rem !important;\n}\n@media (max-width: 480px) {\n    .dialog-custom-form {\n    width: 70% !important;\n    height: 35rem !important;\n  }\n    .dialog-custom-assign {\n    width: 70% !important;\n    height: 35rem !important;\n  }\n}\n/*# sourceMappingURL=list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaleListComponent, { className: "SaleListComponent" });
})();

// src/app/private/finance/sales/list/sales-list-routing.module.ts
var routes = [
  { path: "", component: SaleListComponent },
  { path: "", pathMatch: "full", redirectTo: "sales" }
];
var SalesListRoutingModule = class _SalesListRoutingModule {
  static {
    this.\u0275fac = function SalesListRoutingModule_Factory(t) {
      return new (t || _SalesListRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SalesListRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/finance/sales/list/sales-list.module.ts
var SalesListModule = class _SalesListModule {
  static {
    this.\u0275fac = function SalesListModule_Factory(t) {
      return new (t || _SalesListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SalesListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, SalesListRoutingModule] });
  }
};
export {
  SalesListModule
};
//# sourceMappingURL=sales-list.module-P3YU4UAQ.js.map

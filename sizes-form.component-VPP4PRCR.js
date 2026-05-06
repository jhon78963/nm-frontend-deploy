import {
  SizesCreateFormComponent,
  SizesSelectedService
} from "./chunk-6NZ6S5YI.js";
import {
  ToolbarModule
} from "./chunk-PAIW6DNN.js";
import {
  DialogService
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  ProductsService
} from "./chunk-OMIYSFQX.js";
import {
  InputFilterComponent,
  SharedModule
} from "./chunk-FOL26TWH.js";
import "./chunk-ACRAOC7V.js";
import "./chunk-TXRS3AUZ.js";
import "./chunk-H6LNU4BB.js";
import "./chunk-TNLOQWTB.js";
import "./chunk-KFVFK4CL.js";
import {
  showError,
  showSuccess
} from "./chunk-MEV3ATV3.js";
import {
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import "./chunk-4JQRHAYE.js";
import {
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import "./chunk-NOHFYFBO.js";
import "./chunk-3ZDI7NAM.js";
import "./chunk-5YEVHO5S.js";
import "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-F6S55RTJ.js";
import {
  MessageService,
  PrimeTemplate,
  Ripple,
  RippleModule
} from "./chunk-J33MWZEZ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  AsyncPipe,
  CommonModule,
  __async,
  catchError,
  forkJoin,
  of,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/products/services/productSizes.service.ts
var ProductSizesService = class _ProductSizesService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  add(productId, sizeId, data) {
    return this.apiService.post(`products/${productId}/size/${sizeId}`, data);
  }
  get(productId, sizeId) {
    return this.apiService.get(`products/${productId}/size/${sizeId}`);
  }
  remove(productId, sizeId) {
    return this.apiService.delete(`products/${productId}/size/${sizeId}`);
  }
  update(productId, sizeId, data) {
    return this.apiService.patch(`products/${productId}/size/${sizeId}`, data);
  }
  getProductSizeId(productId, sizeId) {
    return this.apiService.get(`products/${productId}/size/${sizeId}`);
  }
  static {
    this.\u0275fac = function ProductSizesService_Factory(t) {
      return new (t || _ProductSizesService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductSizesService, factory: _ProductSizesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/inventories/products/pages/form/sizes/sizes-form.component.ts
var _c0 = () => ["/inventories/products"];
var _c1 = () => [];
var _c2 = () => ({ "min-width": "50rem" });
function SizesFormComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 15);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "C\xF3digo de barras");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Precio de compra");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Precio de venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Precio de venta m\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th");
    \u0275\u0275elementEnd();
  }
}
function SizesFormComponent_ng_template_16_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SizesFormComponent_ng_template_16_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const size_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeSizeProductButton(size_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function SizesFormComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 17)(4, "span", 18);
    \u0275\u0275text(5, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 19)(8, "span", 18);
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 20)(12, "div", 21)(13, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SizesFormComponent_ng_template_16_Template_input_ngModelChange_13_listener($event) {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(size_r3.barcode, $event) || (size_r3.barcode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function SizesFormComponent_ng_template_16_Template_input_keyup_13_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectSize(size_r3));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td", 20)(15, "div", 21)(16, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SizesFormComponent_ng_template_16_Template_input_ngModelChange_16_listener($event) {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(size_r3.stock, $event) || (size_r3.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function SizesFormComponent_ng_template_16_Template_input_keyup_16_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectSize(size_r3));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 20)(18, "div", 21)(19, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SizesFormComponent_ng_template_16_Template_input_ngModelChange_19_listener($event) {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(size_r3.purchasePrice, $event) || (size_r3.purchasePrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function SizesFormComponent_ng_template_16_Template_input_keyup_19_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectSize(size_r3));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td", 20)(21, "div", 21)(22, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SizesFormComponent_ng_template_16_Template_input_ngModelChange_22_listener($event) {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(size_r3.salePrice, $event) || (size_r3.salePrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function SizesFormComponent_ng_template_16_Template_input_keyup_22_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectSize(size_r3));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 20)(24, "div", 21)(25, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SizesFormComponent_ng_template_16_Template_input_ngModelChange_25_listener($event) {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(size_r3.minSalePrice, $event) || (size_r3.minSalePrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function SizesFormComponent_ng_template_16_Template_input_keyup_25_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectSize(size_r3));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td")(27, "div", 23)(28, "button", 24);
    \u0275\u0275listener("click", function SizesFormComponent_ng_template_16_Template_button_click_28_listener() {
      const size_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(size_r3.isExists ? ctx_r3.editSizeProductButton(size_r3) : ctx_r3.saveSizeProductButton(size_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SizesFormComponent_ng_template_16_Conditional_29_Template, 1, 0, "button", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const size_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", size_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", size_r3.id, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", size_r3.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", size_r3.barcode);
    \u0275\u0275twoWayProperty("ngModel", size_r3.barcode);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", size_r3.stock);
    \u0275\u0275twoWayProperty("ngModel", size_r3.stock);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", size_r3.purchasePrice);
    \u0275\u0275twoWayProperty("ngModel", size_r3.purchasePrice);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", size_r3.salePrice);
    \u0275\u0275twoWayProperty("ngModel", size_r3.salePrice);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("value", size_r3.minSalePrice);
    \u0275\u0275twoWayProperty("ngModel", size_r3.minSalePrice);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", size_r3.isExists ? "pi pi-pencil" : "pi pi-save");
    \u0275\u0275advance();
    \u0275\u0275conditional(29, size_r3.isExists ? 29 : -1);
  }
}
var SizesFormComponent = class _SizesFormComponent {
  constructor(router, route, dialogService, messageService, productSizesService, productsService, sizesSelectedService) {
    this.router = router;
    this.route = route;
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.productSizesService = productSizesService;
    this.productsService = productsService;
    this.sizesSelectedService = sizesSelectedService;
    this.productId = 0;
    this.sizeTypeId = 0;
    this.filter = true;
    this.products = [];
    this.sizeTypes = [];
    this.selectedSizes = [];
    this.selectedSizeTypeIds = [1];
    this.cols = [];
    this.stepper = true;
    if (this.route.snapshot.paramMap.get("id")) {
      this.productId = Number(this.route.snapshot.paramMap.get("id"));
      this.stepper = this.router.url.includes("/step/");
    }
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  ngOnInit() {
    this.getSizes();
    this.getSizeTypes();
  }
  getSizeTypes() {
    this.sizesSelectedService.getSizeTypes().subscribe({
      next: (sizeTypes) => {
        this.sizeTypes = sizeTypes;
      }
    });
  }
  getSizes() {
    return __async(this, null, function* () {
      if (this.productId !== 0) {
        this.productsService.getOne(this.productId).subscribe({
          next: (product) => {
            this.filter = product.filter;
            this.selectedSizeTypeIds = product.sizeTypeId.length ? product.sizeTypeId : [1];
            this.sizesSelectedService.callGetList(this.productId, this.selectedSizeTypeIds).subscribe();
          }
        });
      }
    });
  }
  get sizes() {
    return this.sizesSelectedService.getList();
  }
  handleSizeTypeSelection(ids) {
    this.selectedSizeTypeIds = ids;
    this.sizesSelectedService.callGetList(this.productId, this.selectedSizeTypeIds).subscribe();
  }
  createSize() {
    const modal = this.dialogService.open(SizesCreateFormComponent, {
      data: {
        productId: this.productId,
        sizeTypeId: this.sizeTypeId || this.selectedSizeTypeIds
      },
      header: "Crear Talla",
      styleClass: "dialog-custom-form"
    });
    modal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Talla Creada.") : value?.error ? showError(this.messageService, "Hubo un error, intente nuevamente") : null;
      }
    });
  }
  selectSize(size) {
    const exists = this.selectedSizes.some((s) => s.id === size.id);
    if (!exists) {
      this.selectedSizes = [...this.selectedSizes, size];
    }
    const isEmpty = !size.barcode?.toString().trim() && !size.stock?.toString().trim() && !size.purchasePrice?.toString().trim() && !size.salePrice?.toString().trim() && !size.minSalePrice?.toString().trim();
    if (isEmpty) {
      this.selectedSizes = this.selectedSizes.filter((s) => s.id !== size.id);
    }
  }
  saveAllSelectedSizes() {
    const requests = this.selectedSizes.map((size) => {
      const productSizeSave = {
        barcode: size.barcode,
        stock: size.stock,
        purchasePrice: size.purchasePrice,
        salePrice: size.salePrice,
        minSalePrice: size.minSalePrice
      };
      return this.productSizesService.add(this.productId, size.id, productSizeSave).pipe(catchError(() => {
        return of(null);
      }));
    });
    forkJoin(requests).subscribe({
      next: () => {
        this.getSizes();
        this.selectedSizes = [];
      }
    });
  }
  deleteAllSelectedSizes() {
    const requests = this.selectedSizes.map((size) => {
      return this.productSizesService.remove(this.productId, size.id).pipe(catchError(() => {
        return of(null);
      }));
    });
    forkJoin(requests).subscribe({
      next: () => {
        this.getSizes();
        this.selectedSizes = [];
      }
    });
  }
  saveSizeProductButton(size) {
    const productSizeSave = {
      barcode: size.barcode,
      stock: size.stock,
      purchasePrice: size.purchasePrice,
      salePrice: size.salePrice,
      minSalePrice: size.minSalePrice
    };
    this.productSizesService.add(this.productId, size.id, productSizeSave).subscribe({
      next: () => {
        this.getSizes();
        this.selectedSizes = this.selectedSizes.filter((s) => s.id !== size.id);
      },
      error: () => this.getSizes()
    });
  }
  editSizeProductButton(size) {
    this.saveSizeProductButton(size);
  }
  removeSizeProductButton(size) {
    this.productSizesService.remove(this.productId, size.id).subscribe({
      next: () => {
        this.getSizes();
        this.selectedSizes = this.selectedSizes.filter((s) => s.id !== size.id);
      },
      error: () => this.getSizes()
    });
  }
  static {
    this.\u0275fac = function SizesFormComponent_Factory(t) {
      return new (t || _SizesFormComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProductSizesService), \u0275\u0275directiveInject(ProductsService), \u0275\u0275directiveInject(SizesSelectedService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizesFormComponent, selectors: [["app-sizes-form"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 17, vars: 15, consts: [["dt", ""], [1, "col-12", "mt-0"], [1, "w-full"], [1, "flex", "flex-column", "md:flex-row", "md:justify-content-between"], [1, "flex", "justify-content-center", "md:justify-content-start", "gap-2", "mb-3"], [3, "selectionChange", "collection", "selectedIds"], [1, "flex", "justify-content-center", "md:justify-content-end", "gap-2", "mb-3"], [1, "flex", "flex-wrap", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "label", "Nuevo", "icon", "pi pi-plus", "severity", "secondary", "size", "small", 1, "btn-menu", "w-9rem", 3, "click"], ["pButton", "", "pRipple", "", "label", "Guardar", "icon", "pi pi-save", "severity", "secondary", "size", "small", 1, "btn-menu", "w-9rem", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Remover", "icon", "pi pi-trash", "severity", "secondary", "size", "small", 1, "btn-menu", "w-9rem", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Regresar", "icon", "pi pi-arrow-left", "severity", "help", "size", "small", 1, "btn-menu-back", "w-9rem", 3, "routerLink"], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "selectionChange", "value", "tableStyle", "selection"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "3rem"], [3, "value"], [2, "width", "5%", "min-width", "10rem"], [1, "p-column-title"], [2, "width", "10%", "min-width", "10rem"], [2, "width", "14%", "min-width", "10rem"], [1, "bg-input-text"], ["type", "text", 1, "input-text", 3, "ngModelChange", "keyup", "value", "ngModel"], [1, "flex", "justify-content-end", "gap-2"], ["pButton", "", "pRipple", "", 1, "p-button-rounded", "p-menu", 3, "click", "icon"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-menu"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-menu", 3, "click"]], template: function SizesFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "app-input-filter", 5);
        \u0275\u0275listener("selectionChange", function SizesFormComponent_Template_app_input_filter_selectionChange_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleSizeTypeSelection($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "button", 8);
        \u0275\u0275listener("click", function SizesFormComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.createSize());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 9);
        \u0275\u0275listener("click", function SizesFormComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveAllSelectedSizes());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275listener("click", function SizesFormComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteAllSelectedSizes());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "button", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "p-table", 12, 0);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275twoWayListener("selectionChange", function SizesFormComponent_Template_p_table_selectionChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedSizes, $event) || (ctx.selectedSizes = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(15, SizesFormComponent_ng_template_15_Template, 18, 0, "ng-template", 13)(16, SizesFormComponent_ng_template_16_Template, 30, 15, "ng-template", 14);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_7_0;
        \u0275\u0275classMap(!ctx.stepper ? " card" : "");
        \u0275\u0275advance(5);
        \u0275\u0275property("collection", ctx.sizeTypes)("selectedIds", ctx.selectedSizeTypeIds);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.selectedSizes || !ctx.selectedSizes.length);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedSizes || !ctx.selectedSizes.length);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("value", (tmp_7_0 = \u0275\u0275pipeBind1(14, 10, ctx.sizes)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : \u0275\u0275pureFunction0(13, _c1))("tableStyle", \u0275\u0275pureFunction0(14, _c2));
        \u0275\u0275twoWayProperty("selection", ctx.selectedSizes);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      ToolbarModule,
      PrimeTemplate,
      TableModule,
      Table,
      TableCheckbox,
      TableHeaderCheckbox,
      ButtonModule,
      ButtonDirective,
      InputTextModule,
      RippleModule,
      Ripple,
      ReactiveFormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      FormsModule,
      NgModel,
      SharedModule,
      InputFilterComponent,
      RouterLink
    ], styles: ["\n\n  .p-toolbar {\n  padding: 0;\n  padding-left: 1.25rem;\n}\n  .btn-menu {\n  background-color: #dfe3e8;\n  border: 1px solid #dfe3e8;\n  color: #475569;\n  border-radius: 5px;\n  height: 39px;\n}\n  .btn-menu-back {\n  background-color: #ffb340;\n  border: 1px solid #ffb340;\n  color: #000;\n  border-radius: 5px;\n  height: 39px;\n}\n  .btn-selected {\n  background-color: #75787b;\n  color: #fff;\n}\n  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {\n  background: rgba(0, 0, 0, 0.2);\n  color: #475569;\n}\n.bg-input-text[_ngcontent-%COMP%]   input.input-text[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 62px;\n  border: none;\n  width: 100%;\n  height: 48px;\n  text-align: center;\n  padding: 1rem;\n}\n.bg-input-text[_ngcontent-%COMP%]   input.input-text[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n  .dialog-custom-form {\n  width: 30% !important;\n  height: auto !important;\n}\n  .dialog-custom-assign {\n  width: 15% !important;\n  height: auto !important;\n}\n@media (max-width: 480px) {\n    .dialog-custom-form {\n    width: 70% !important;\n    height: auto !important;\n  }\n    .dialog-custom-assign {\n    width: 70% !important;\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=sizes-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizesFormComponent, { className: "SizesFormComponent" });
})();
export {
  SizesFormComponent
};
//# sourceMappingURL=sizes-form.component-VPP4PRCR.js.map

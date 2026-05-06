import {
  GendersService
} from "./chunk-MP6NLDJ4.js";
import {
  DialogService
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  ProductsService
} from "./chunk-OMIYSFQX.js";
import {
  InputFilterComponent,
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
  showSuccess
} from "./chunk-MEV3ATV3.js";
import "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
import {
  Button
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
  FormControl,
  FormGroup,
  NgControlStatusGroup
} from "./chunk-F6S55RTJ.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-J33MWZEZ.js";
import {
  Router,
  RouterLink,
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
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/products/pages/list/products.component.ts
var _c0 = () => ["step/general"];
var _c1 = () => [];
var _c2 = () => [10, 20, 50];
var ProductListComponent = class _ProductListComponent {
  constructor(router, confirmationService, gendersService, loadingService, messageService, productsService) {
    this.router = router;
    this.confirmationService = confirmationService;
    this.gendersService = gendersService;
    this.loadingService = loadingService;
    this.messageService = messageService;
    this.productsService = productsService;
    this.columns = [
      {
        header: "#",
        field: "id",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "G\xE9nero",
        field: "gender",
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
        header: "Stock",
        field: "stock",
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
    this.name = "";
    this.callToAction = [
      {
        type: "button",
        size: "small",
        icon: "pi pi-pencil",
        outlined: true,
        pTooltip: "Editar",
        tooltipPosition: "bottom",
        click: (rowData) => this.editProductButton(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-tag",
        outlined: true,
        pTooltip: "Tallas",
        tooltipPosition: "bottom",
        click: (rowData) => this.sizeProductButton(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-palette",
        outlined: true,
        pTooltip: "Colores",
        tooltipPosition: "bottom",
        click: (rowData) => this.colorProductButton(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-shop",
        outlined: true,
        pTooltip: "Ecommerce",
        tooltipPosition: "bottom",
        click: (rowData) => this.ecommerceProductButton(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.deleteProductButton(rowData.id, event)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-history",
        outlined: true,
        pTooltip: "Historial",
        tooltipPosition: "bottom",
        click: (rowData) => this.historyProductButton(rowData.id)
      }
    ];
    this.genders = [];
    this.selectedGenderIds = [];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.restoreFilters();
    this.getProducts(this.limit, this.page, this.name, this.selectedGenderIds);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.name = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getProducts(this.limit, 1, this.name, this.selectedGenderIds);
    });
    this.gendersService.getAll().subscribe((genders) => {
      this.genders = genders;
    });
  }
  restoreFilters() {
    const savedState = this.productsService.getFilterState();
    if (savedState) {
      this.limit = savedState.limit;
      this.page = savedState.page;
      this.name = savedState.name;
      this.selectedGenderIds = savedState.genderId || [];
      if (this.name) {
        this.formGroup.get("search")?.setValue(this.name, { emitEvent: false });
      }
    }
  }
  selectFilter(genderId) {
    this.selectedGenderIds.push(genderId);
  }
  clearFilter() {
    this.name = "";
    this.limit = 10;
    this.selectedGenderIds = [];
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
    this.getProducts(this.limit, 1, "", []);
  }
  handleGenderSelection(ids) {
    this.selectedGenderIds = ids;
    this.loadingService.sendLoadingState(true);
    this.getProducts(this.limit, 1, this.name, this.selectedGenderIds);
  }
  getProducts() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.name, gender = this.selectedGenderIds) {
      this.updatePage(page);
      this.productsService.callGetList(limit, page, name, gender).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.limit = paginate.rows ?? 10;
      this.updatePage((paginate.page ?? 0) + 1);
      this.getProducts(this.limit, this.page, this.name, this.selectedGenderIds);
    });
  }
  get products() {
    return this.productsService.getList();
  }
  get total() {
    return this.productsService.getTotal();
  }
  addProductButton() {
    this.router.navigate(["/inventories/products/create/general"]);
  }
  editProductButton(id) {
    this.router.navigate([`/inventories/products/step/general/${id}`]);
  }
  sizeProductButton(id) {
    this.router.navigate([`/inventories/products/sizes/${id}`]);
  }
  colorProductButton(id) {
    this.router.navigate([`/inventories/products/colors/${id}`]);
  }
  ecommerceProductButton(id) {
    this.router.navigate([`/inventories/products/ecommerce/${id}`]);
  }
  historyProductButton(id) {
    this.router.navigate([`/inventories/products/history/${id}`]);
  }
  deleteProductButton(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar este producto?",
      header: "Eliminar producto",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.productsService.delete(id).subscribe({
          next: () => showSuccess(this.messageService, "El producto ha sido eliminado"),
          error: () => showError(this.messageService, "No se elemin\xF3 el producto, intentel\xF3 nuevamente")
        });
      },
      reject: () => {
      }
    });
  }
  updatePage(value) {
    this.page = value;
  }
  static {
    this.\u0275fac = function ProductListComponent_Factory(t) {
      return new (t || _ProductListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(GendersService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProductsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-products"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 16, vars: 21, consts: [[1, "card"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "gap-3", "mt-3", "w-full"], [1, "w-full", "md:w-4", "flex", "justify-content-start", "flex-order-2", "md:flex-order-1"], ["controlName", "search", 1, "w-full", 3, "clearFilter", "formGroup"], [1, "w-full", "md:w-auto", "flex", "flex-wrap", "justify-content-center", "gap-2", "flex-order-3", "md:flex-order-2"], [3, "selectionChange", "collection", "selectedIds"], [1, "w-full", "md:w-4", "flex", "justify-content-center", "md:justify-content-end", "flex-order-1", "md:flex-order-3", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], ["styleClass", "w-full md:w-auto", 3, "routerLink", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-input-search", 3);
        \u0275\u0275listener("clearFilter", function ProductListComponent_Template_app_input_search_clearFilter_3_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "app-input-filter", 5);
        \u0275\u0275listener("selectionChange", function ProductListComponent_Template_app_input_filter_selectionChange_5_listener($event) {
          return ctx.handleGenderSelection($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "p-button", 7);
        \u0275\u0275listener("click", function ProductListComponent_Template_p_button_click_7_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p-button", 9);
        \u0275\u0275element(10, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "app-table-pagination", 11);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275pipe(13, "async");
        \u0275\u0275listener("paginateSelected", function ProductListComponent_Template_app_table_pagination_paginateSelected_11_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "p-toast")(15, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_10_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(2);
        \u0275\u0275property("collection", ctx.genders)("selectedIds", ctx.selectedGenderIds);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c0))("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", (tmp_6_0 = \u0275\u0275pipeBind1(12, 14, ctx.products)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(19, _c1))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_10_0 = \u0275\u0275pipeBind1(13, 16, ctx.total)) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : 0)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(20, _c2));
      }
    }, dependencies: [CommonModule, AsyncPipe, ConfirmDialogModule, ConfirmDialog, Button, RouterModule, RouterLink, SharedModule, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, InputFilterComponent, ToastModule, Toast], styles: ["\n\n  .btn-menu {\n  background-color: #dfe3e8;\n  border: 1px solid #dfe3e8;\n  color: #475569;\n  border-radius: 5px;\n  height: 39px;\n}\n  .btn-selected {\n  background-color: #75787b;\n  color: #fff;\n}\n  .h-custom {\n  height: 37px;\n}\n/*# sourceMappingURL=products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent" });
})();
export {
  ProductListComponent
};
//# sourceMappingURL=products.component-HGKLVMKM.js.map

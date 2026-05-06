import {
  PurchaseService
} from "./chunk-ZCRV5PSW.js";
import {
  WarehousesService
} from "./chunk-Z5XV2SS3.js";
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
import {
  showError,
  showSuccess
} from "./chunk-MEV3ATV3.js";
import "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
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
import "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-J33MWZEZ.js";
import {
  Router,
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/purchase/pages/purchase-list/purchase-list.component.ts
var _c0 = () => [10, 20, 50];
var PurchaseListComponent = class _PurchaseListComponent {
  constructor(router, purchaseApi, messageService, confirmationService, loadingService, warehousesService) {
    this.router = router;
    this.purchaseApi = purchaseApi;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.warehousesService = warehousesService;
    this.columns = [
      { header: "ID", field: "id", clickable: false, image: false, money: false },
      {
        header: "Fecha doc.",
        field: "registeredAt",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Proveedor",
        field: "supplierName",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Almac\xE9n",
        field: "warehouseName",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Total",
        field: "totalSubtotal",
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
    this.purchases = [];
    this.total = 0;
    this.warehouses = [];
    this.statusOptions = [
      { label: "Todos", value: null },
      { label: "Activas", value: "ACTIVE" },
      { label: "Anuladas", value: "CANCELLED" }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null),
      warehouseId: new FormControl(null),
      status: new FormControl(null)
    });
    this.callToAction = [
      {
        type: "button",
        size: "small",
        icon: "pi pi-eye",
        outlined: true,
        pTooltip: "Ver detalle",
        tooltipPosition: "bottom",
        click: (row) => {
          void this.router.navigate(["/inventories/purchase", row.id]);
        }
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-times-circle",
        outlined: true,
        pTooltip: "Anular compra (revierte stock)",
        tooltipPosition: "bottom",
        visible: (row) => row.status === "ACTIVE",
        click: (row, event) => this.confirmCancel(row, event)
      }
    ];
  }
  ngOnInit() {
    this.warehousesService.getAll().subscribe({
      next: (rows) => {
        this.warehouses = rows ?? [];
      }
    });
    this.load();
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(500)).subscribe((v) => {
      this.search = (v ?? "").trim();
      this.page = 1;
      this.load();
    });
    this.formGroup.get("warehouseId")?.valueChanges.subscribe(() => {
      this.page = 1;
      this.load();
    });
    this.formGroup.get("status")?.valueChanges.subscribe(() => {
      this.page = 1;
      this.load();
    });
  }
  load() {
    this.loadingService.sendLoadingState(true);
    const wid = this.formGroup.get("warehouseId")?.value;
    const st = this.formGroup.get("status")?.value;
    this.purchaseApi.getList(this.limit, this.page, this.search, wid ?? null, st).subscribe({
      next: (res) => {
        this.purchases = res.data ?? [];
        this.total = res.paginate?.total ?? 0;
        this.loadingService.sendLoadingState(false);
      },
      error: () => {
        this.loadingService.sendLoadingState(false);
        showError(this.messageService, "No se pudo cargar el listado de compras.");
      }
    });
  }
  onPageSelected(paginate) {
    this.limit = paginate.rows ?? 10;
    this.page = (paginate.page ?? 0) + 1;
    this.load();
  }
  clearFilter() {
    this.search = "";
    this.page = 1;
    this.formGroup.patchValue({ search: "", warehouseId: null, status: null }, { emitEvent: false });
    this.load();
  }
  goRegister() {
    void this.router.navigate(["/inventories/purchase/register"]);
  }
  confirmCancel(row, event) {
    this.confirmationService.confirm({
      target: event?.target,
      message: `\xBFAnular la compra #${row.id}? Se revertir\xE1 el stock ingresado en inventario.`,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "S\xED, anular",
      rejectLabel: "No",
      accept: () => {
        this.purchaseApi.cancel(row.id, "Anulaci\xF3n desde listado de compras").subscribe({
          next: () => {
            showSuccess(this.messageService, "Compra anulada.");
            this.load();
          },
          error: (err) => {
            const msg = err?.error?.message ?? err?.error?.errors?.stock?.[0] ?? "No se pudo anular (revis\xE1 stock o permisos).";
            showError(this.messageService, String(msg));
          }
        });
      }
    });
  }
  static {
    this.\u0275fac = function PurchaseListComponent_Factory(t) {
      return new (t || _PurchaseListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(WarehousesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseListComponent, selectors: [["app-purchase-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService]), \u0275\u0275StandaloneFeature], decls: 21, vars: 15, consts: [[1, "card"], [3, "formGroup"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "gap-3", "mt-3", "w-full"], [1, "w-full", "md:w-4", "flex", "justify-content-start", "flex-order-2", "md:flex-order-1"], ["controlName", "search", 1, "w-full", 3, "clearFilter", "formGroup"], [1, "w-full", "md:flex-grow-1", "flex", "flex-wrap", "justify-content-center", "gap-2", "flex-order-3", "md:flex-order-2", "align-items-end"], [1, "flex", "flex-column", "gap-1", 2, "min-width", "10rem"], [1, "text-xs", "text-600"], ["formControlName", "warehouseId", "optionLabel", "name", "optionValue", "id", "placeholder", "Todos", "styleClass", "w-full", "appendTo", "body", 3, "options", "showClear"], ["formControlName", "status", "optionLabel", "label", "optionValue", "value", "placeholder", "Estado", "styleClass", "w-full", "appendTo", "body", 3, "options", "showClear"], [1, "w-full", "md:w-4", "flex", "justify-content-center", "md:justify-content-end", "flex-order-1", "md:flex-order-3", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], ["icon", "pi pi-plus", 3, "click"], [3, "paginateSelected", "data", "columns", "callToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function PurchaseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "app-input-search", 4);
        \u0275\u0275listener("clearFilter", function PurchaseListComponent_Template_app_input_search_clearFilter_4_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8, "Almac\xE9n");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "p-dropdown", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "span", 7);
        \u0275\u0275text(12, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "p-dropdown", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "p-button", 11);
        \u0275\u0275listener("click", function PurchaseListComponent_Template_p_button_click_15_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p-button", 13);
        \u0275\u0275listener("click", function PurchaseListComponent_Template_p_button_click_17_listener() {
          return ctx.goRegister();
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "app-table-pagination", 14);
        \u0275\u0275listener("paginateSelected", function PurchaseListComponent_Template_app_table_pagination_paginateSelected_18_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "p-toast")(20, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(5);
        \u0275\u0275property("options", ctx.warehouses)("showClear", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("options", ctx.statusOptions)("showClear", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(3);
        \u0275\u0275property("data", ctx.purchases)("columns", ctx.columns)("callToAction", ctx.callToAction)("total", ctx.total)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c0));
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      SharedModule,
      Dropdown,
      Button,
      TablePaginationComponent,
      InputSearchComponent,
      ToastModule,
      Toast,
      ConfirmDialogModule,
      ConfirmDialog,
      ButtonModule,
      DropdownModule
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=purchase-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseListComponent, { className: "PurchaseListComponent" });
})();
export {
  PurchaseListComponent
};
//# sourceMappingURL=purchase-list.component-HTQT2NZB.js.map

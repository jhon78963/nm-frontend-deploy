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
  showSuccess,
  showToastWarn
} from "./chunk-MEV3ATV3.js";
import "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
import {
  Button
} from "./chunk-AUVIAVMC.js";
import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  Toast,
  ToastModule
} from "./chunk-NOHFYFBO.js";
import "./chunk-3ZDI7NAM.js";
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
  Router
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
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/orders/services/orders.service.ts
var OrdersService = class _OrdersService {
  constructor(apiService) {
    this.apiService = apiService;
    this.orders = [];
    this.orders$ = new BehaviorSubject(this.orders);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
    this.filterState = null;
    this.STORAGE_KEY = "orders_filter_state";
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
          console.error("Error parsing orders filter state", e);
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
    let url = `orders?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateOrders(response.data);
      this.updateTotalOrders(response.paginate.total);
    }));
  }
  getList() {
    return this.orders$.asObservable();
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
    return this.apiService.post("orders", data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  delete(id) {
    return this.apiService.delete(`orders/${id}`).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  edit(id, data) {
    return this.apiService.patch(`orders/${id}`, data).pipe(switchMap(() => this.reloadWithCurrentState()));
  }
  getOne(id) {
    return this.apiService.get(`orders/${id}`);
  }
  updateOrders(value) {
    this.orders = value;
    this.orders$.next(this.orders);
  }
  updateTotalOrders(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function OrdersService_Factory(t) {
      return new (t || _OrdersService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdersService, factory: _OrdersService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/finance/orders/pages/list/list.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var OrderListComponent = class _OrderListComponent {
  constructor(messageService, confirmationService, loadingService, ordersService, router) {
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.ordersService = ordersService;
    this.router = router;
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
        header: "Tipo",
        field: "type",
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
        icon: "pi pi-pencil",
        outlined: true,
        pTooltip: "Editar",
        tooltipPosition: "bottom",
        click: (rowData) => this.buttonEditOrder(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.buttonDeleteOrder(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.restoreFilters();
    this.getOrders(this.limit, this.page, this.search);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.search = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getOrders(this.limit, 1, this.search);
    });
  }
  restoreFilters() {
    const savedState = this.ordersService.getFilterState();
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
    this.ordersService.clearFilterState();
    this.getOrders(this.limit, 1, "");
  }
  getOrders() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.search) {
      this.updatePage(page);
      this.ordersService.callGetList(limit, page, name).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.limit = paginate.rows ?? 10;
      this.updatePage((paginate.page ?? 0) + 1);
      this.getOrders(this.limit, this.page, this.search);
    });
  }
  get orders() {
    return this.ordersService.getList();
  }
  get total() {
    return this.ordersService.getTotal();
  }
  buttonCreateOrder() {
    this.router.navigate(["/finance/orders/register"]);
  }
  buttonEditOrder(id) {
    this.router.navigate(["/finance/orders/edit", id]);
  }
  buttonDeleteOrder(id, event) {
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
        this.ordersService.delete(id).subscribe(() => {
          showSuccess(this.messageService, "La orden ha sido cancelada");
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
    this.\u0275fac = function OrderListComponent_Factory(t) {
      return new (t || _OrderListComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(OrdersService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderListComponent, selectors: [["app-order-list"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService]), \u0275\u0275StandaloneFeature], decls: 13, vars: 17, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [1, "flex", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function OrderListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
        \u0275\u0275listener("click", function OrderListComponent_Template_p_button_click_4_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p-button", 6);
        \u0275\u0275listener("click", function OrderListComponent_Template_p_button_click_6_listener() {
          return ctx.buttonCreateOrder();
        });
        \u0275\u0275element(7, "i", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "app-table-pagination", 8);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275pipe(10, "async");
        \u0275\u0275listener("paginateSelected", function OrderListComponent_Template_app_table_pagination_paginateSelected_8_listener($event) {
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
        \u0275\u0275property("data", (tmp_3_0 = \u0275\u0275pipeBind1(9, 11, ctx.orders)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : \u0275\u0275pureFunction0(15, _c0))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_7_0 = \u0275\u0275pipeBind1(10, 13, ctx.total)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(16, _c1));
      }
    }, dependencies: [CommonModule, AsyncPipe, SharedModule, Button, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, ToastModule, Toast, ConfirmDialogModule, ConfirmDialog] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderListComponent, { className: "OrderListComponent" });
})();
export {
  OrderListComponent
};
//# sourceMappingURL=list.component-FF33MAXR.js.map

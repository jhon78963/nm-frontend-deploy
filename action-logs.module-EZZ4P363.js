import {
  InputSearchComponent,
  LoadingService,
  SharedModule,
  TablePaginationComponent
} from "./chunk-FOL26TWH.js";
import "./chunk-ACRAOC7V.js";
import "./chunk-TXRS3AUZ.js";
import "./chunk-H6LNU4BB.js";
import "./chunk-TNLOQWTB.js";
import "./chunk-KFVFK4CL.js";
import "./chunk-MEV3ATV3.js";
import "./chunk-Q7YSIWLQ.js";
import "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import "./chunk-4JQRHAYE.js";
import "./chunk-I5WDLL76.js";
import "./chunk-AUVIAVMC.js";
import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import "./chunk-NOHFYFBO.js";
import "./chunk-3ZDI7NAM.js";
import "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatusGroup,
  ReactiveFormsModule
} from "./chunk-F6S55RTJ.js";
import "./chunk-J33MWZEZ.js";
import {
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  debounceTime,
  map,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0
} from "./chunk-OI5KBWGW.js";

// src/app/private/administration/action-logs/services/action-logs.service.ts
var ActionLogsService = class _ActionLogsService {
  constructor(apiService) {
    this.apiService = apiService;
    this.logs = [];
    this.total = 0;
    this.logs$ = new BehaviorSubject(this.logs);
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, search = "") {
    let url = `user-action-logs?limit=${limit}&page=${page}`;
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }
    return this.apiService.get(url).pipe(debounceTime(400), map((res) => {
      this.logs = res.data;
      this.total = res.paginate.total;
      this.logs$.next(this.logs);
      this.total$.next(this.total);
    }));
  }
  getList() {
    return this.logs$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  static {
    this.\u0275fac = function ActionLogsService_Factory(t) {
      return new (t || _ActionLogsService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActionLogsService, factory: _ActionLogsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/administration/action-logs/pages/list/action-logs.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var ActionLogsListComponent = class _ActionLogsListComponent {
  constructor(actionLogsService, loadingService) {
    this.actionLogsService = actionLogsService;
    this.loadingService = loadingService;
    this.columns = [];
    this.limit = 10;
    this.page = 1;
    this.search = "";
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.columns = [
      { header: "#", field: "id", clickable: false, image: false, money: false },
      { header: "Fecha", field: "creationTime", clickable: false, image: false, money: false },
      { header: "Acci\xF3n", field: "action", clickable: false, image: false, money: false },
      { header: "Usuario", field: "userName", clickable: false, image: false, money: false },
      { header: "Sucursal", field: "warehouseId", clickable: false, image: false, money: false },
      { header: "IP", field: "ipAddress", clickable: false, image: false, money: false }
    ];
    this.load(this.limit, this.page, this.search);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(500)).subscribe((v) => {
      this.search = v ?? "";
      this.loadingService.sendLoadingState(true);
      this.load(this.limit, 1, this.search);
    });
  }
  clearFilter() {
    this.search = "";
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
  }
  load(limit = this.limit, page = this.page, q = this.search) {
    this.page = page;
    this.actionLogsService.callGetList(limit, page, q).subscribe();
    setTimeout(() => this.loadingService.sendLoadingState(false), 500);
  }
  get rows() {
    return this.actionLogsService.getList();
  }
  get total() {
    return this.actionLogsService.getTotal();
  }
  onPageSelected(event) {
    this.page = (event.page ?? 0) + 1;
    this.load(event.rows, this.page, this.search);
  }
  static {
    this.\u0275fac = function ActionLogsListComponent_Factory(t) {
      return new (t || _ActionLogsListComponent)(\u0275\u0275directiveInject(ActionLogsService), \u0275\u0275directiveInject(LoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionLogsListComponent, selectors: [["app-action-logs"]], decls: 6, vars: 12, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [3, "paginateSelected", "data", "columns", "total", "limit", "rowsPerPageOptions"]], template: function ActionLogsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function ActionLogsListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "app-table-pagination", 3);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275listener("paginateSelected", function ActionLogsListComponent_Template_app_table_pagination_paginateSelected_3_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance();
        \u0275\u0275property("data", (tmp_1_0 = \u0275\u0275pipeBind1(4, 6, ctx.rows)) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : \u0275\u0275pureFunction0(10, _c0))("columns", ctx.columns)("total", (tmp_3_0 = \u0275\u0275pipeBind1(5, 8, ctx.total)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(11, _c1));
      }
    }, dependencies: [NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, FormGroupDirective, AsyncPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionLogsListComponent, { className: "ActionLogsListComponent" });
})();

// src/app/private/administration/action-logs/action-logs-routing.module.ts
var routes = [{ path: "", component: ActionLogsListComponent }];
var ActionLogsRoutingModule = class _ActionLogsRoutingModule {
  static {
    this.\u0275fac = function ActionLogsRoutingModule_Factory(t) {
      return new (t || _ActionLogsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ActionLogsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/administration/action-logs/action-logs.module.ts
var ActionLogsModule = class _ActionLogsModule {
  static {
    this.\u0275fac = function ActionLogsModule_Factory(t) {
      return new (t || _ActionLogsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ActionLogsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      ActionLogsRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule
    ] });
  }
};
export {
  ActionLogsModule
};
//# sourceMappingURL=action-logs.module-EZZ4P363.js.map

import {
  ColorsCreateFormComponent,
  ColorsService
} from "./chunk-6OYOR6TO.js";
import {
  DialogService
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
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

// src/app/private/inventories/colors/pages/list/colors.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var ColorListComponent = class _ColorListComponent {
  constructor(dialogService, messageService, confirmationService, loadingService, colorsService) {
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.colorsService = colorsService;
    this.columns = [
      {
        header: "#",
        field: "id",
        clickable: false,
        image: false,
        money: false,
        color: false
      },
      {
        header: "Color",
        field: "description",
        clickable: false,
        image: false,
        money: false,
        color: false
      },
      {
        header: "Hash",
        field: "hash",
        clickable: false,
        image: false,
        money: false,
        color: true
      },
      {
        header: "Acci\xF3n",
        field: "button",
        clickable: false,
        image: false,
        money: false,
        color: false
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
        click: (rowData) => this.editColorButton(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.deleteColorButton(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.restoreFilters();
    this.getColors(this.limit, this.page, this.search);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.search = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getColors(this.limit, 1, this.search);
    });
  }
  ngOnDestroy() {
    if (this.colorModal) {
      this.colorModal.close();
    }
  }
  restoreFilters() {
    const savedState = this.colorsService.getFilterState();
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
    this.colorsService.clearFilterState();
    this.getColors(this.limit, 1, "");
  }
  getColors() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, search = this.search) {
      this.updatePage(page);
      this.colorsService.callGetList(limit, page, search).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.limit = paginate.rows ?? 10;
      this.updatePage((paginate.page ?? 0) + 1);
      this.getColors(this.limit, this.page, this.search);
    });
  }
  get colors() {
    return this.colorsService.getList();
  }
  get total() {
    return this.colorsService.getTotal();
  }
  addColorButton() {
    this.colorModal = this.dialogService.open(ColorsCreateFormComponent, {
      data: {},
      header: "Crear Color",
      styleClass: "dialog-custom-form"
    });
    this.colorModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Color Creado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  editColorButton(id) {
    this.colorModal = this.dialogService.open(ColorsCreateFormComponent, {
      data: { id },
      header: "Editar Color",
      styleClass: "dialog-custom-form"
    });
    this.colorModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Color actualizado.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  deleteColorButton(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar este color?",
      header: "Eliminar Color",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.colorsService.delete(id).subscribe(() => {
          showSuccess(this.messageService, "El color ha sido eliminada");
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
    this.\u0275fac = function ColorListComponent_Factory(t) {
      return new (t || _ColorListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(ColorsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorListComponent, selectors: [["app-colors"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 14, vars: 17, consts: [[1, "card"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "gap-3", "mt-3", "w-full"], [1, "w-full", "md:w-4", "flex", "justify-content-start", "flex-order-2", "md:flex-order-1"], ["controlName", "search", 1, "w-full", 3, "clearFilter", "formGroup"], [1, "w-full", "md:w-4", "flex", "justify-content-center", "md:justify-content-end", "flex-order-1", "md:flex-order-3", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function ColorListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-input-search", 3);
        \u0275\u0275listener("clearFilter", function ColorListComponent_Template_app_input_search_clearFilter_3_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "p-button", 5);
        \u0275\u0275listener("click", function ColorListComponent_Template_p_button_click_5_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(6, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-button", 7);
        \u0275\u0275listener("click", function ColorListComponent_Template_p_button_click_7_listener() {
          return ctx.addColorButton();
        });
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "app-table-pagination", 9);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275listener("paginateSelected", function ColorListComponent_Template_app_table_pagination_paginateSelected_9_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "p-toast")(13, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_7_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", (tmp_3_0 = \u0275\u0275pipeBind1(10, 11, ctx.colors)) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : \u0275\u0275pureFunction0(15, _c0))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_7_0 = \u0275\u0275pipeBind1(11, 13, ctx.total)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(16, _c1));
      }
    }, dependencies: [CommonModule, AsyncPipe, ToastModule, Toast, ConfirmDialogModule, ConfirmDialog, Button, SharedModule, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorListComponent, { className: "ColorListComponent" });
})();
export {
  ColorListComponent
};
//# sourceMappingURL=colors.component-XBZYRUIR.js.map

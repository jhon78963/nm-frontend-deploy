import {
  SizesCreateFormComponent,
  SizesSelectedService,
  SizesService
} from "./chunk-6NZ6S5YI.js";
import {
  DialogService
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
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

// src/app/private/inventories/sizes/pages/list/sizes.component.ts
var _c0 = () => [];
var _c1 = () => [10, 20, 50];
var SizeListComponent = class _SizeListComponent {
  constructor(dialogService, messageService, confirmationService, loadingService, sizesSelectedService, sizesService) {
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.sizesSelectedService = sizesSelectedService;
    this.sizesService = sizesService;
    this.columns = [
      {
        header: "#",
        field: "id",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Talla",
        field: "description",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Tipo de Talla",
        field: "sizeType",
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
    this.sizeTypes = [];
    this.selectedSizeTypeId = 1;
    this.callToAction = [
      {
        type: "button",
        size: "small",
        icon: "pi pi-pencil",
        outlined: true,
        pTooltip: "Editar",
        tooltipPosition: "bottom",
        click: (rowData) => this.editSizeButton(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.deleteSizeButton(rowData.id, event)
      }
    ];
    this.selectedSizes = [];
    this.selectedSizeTypeIds = [];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.restoreFilters();
    this.getSizes(this.limit, this.page, this.search, this.selectedSizeTypeIds);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.search = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getSizes(this.limit, 1, this.search, this.selectedSizeTypeIds);
    });
    this.getSizeTypes();
  }
  ngOnDestroy() {
    if (this.sizeModal) {
      this.sizeModal.close();
    }
  }
  restoreFilters() {
    const savedState = this.sizesService.getFilterState();
    if (savedState) {
      this.limit = savedState.limit;
      this.page = savedState.page;
      this.search = savedState.search;
      this.selectedSizeTypeIds = savedState.sizeTypeIds || [];
      if (this.search) {
        this.formGroup.get("search")?.setValue(this.search, { emitEvent: false });
      }
    }
  }
  clearFilter() {
    this.search = "";
    this.limit = 10;
    this.selectedSizeTypeIds = [];
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
    this.getSizes(this.limit, 1, "", []);
  }
  handleSizeTypeSelection(ids) {
    this.selectedSizeTypeIds = ids;
    this.getSizes(this.limit, 1, this.search, this.selectedSizeTypeIds);
  }
  getSizes() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.search, sizeTypeIds = this.selectedSizeTypeIds) {
      this.updatePage(page);
      this.sizesService.callGetList(limit, page, name, sizeTypeIds).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  getSizeTypes() {
    this.sizesSelectedService.getSizeTypes().subscribe({
      next: (sizeTypes) => {
        this.sizeTypes = sizeTypes;
      }
    });
  }
  selectFilter(sizeTypeId) {
    this.selectedSizeTypeId = sizeTypeId;
  }
  onPageSelected(paginate) {
    return __async(this, null, function* () {
      this.limit = paginate.rows ?? 10;
      this.updatePage((paginate.page ?? 0) + 1);
      this.getSizes(this.limit, this.page, this.search, this.selectedSizeTypeIds);
    });
  }
  get sizes() {
    return this.sizesService.getList();
  }
  get total() {
    return this.sizesService.getTotal();
  }
  addSizeButton() {
    this.sizeModal = this.dialogService.open(SizesCreateFormComponent, {
      data: {},
      header: "Crear Talla",
      styleClass: "dialog-custom-form"
    });
    this.sizeModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Talla Creada.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  editSizeButton(id) {
    this.sizeModal = this.dialogService.open(SizesCreateFormComponent, {
      data: { id },
      header: "Editar Talla",
      styleClass: "dialog-custom-form"
    });
    this.sizeModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? showSuccess(this.messageService, "Talla actualizada.") : value?.error ? showError(this.messageService, value?.error) : null;
      }
    });
  }
  deleteSizeButton(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar esta talla?",
      header: "Eliminar Talla",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "S\xED",
      rejectLabel: "No",
      accept: () => {
        this.sizesService.delete(id).subscribe(() => {
          showSuccess(this.messageService, "La talla ha sido eliminada");
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
    this.\u0275fac = function SizeListComponent_Factory(t) {
      return new (t || _SizeListComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService), \u0275\u0275directiveInject(SizesSelectedService), \u0275\u0275directiveInject(SizesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizeListComponent, selectors: [["app-sizes"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 16, vars: 19, consts: [[1, "card"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "gap-3", "mt-3", "w-full"], [1, "w-full", "md:w-4", "flex", "justify-content-start", "flex-order-2", "md:flex-order-1"], ["controlName", "search", 1, "w-full", 3, "clearFilter", "formGroup"], [1, "w-full", "md:w-auto", "flex", "flex-wrap", "justify-content-center", "gap-2", "flex-order-3", "md:flex-order-2"], [3, "selectionChange", "collection", "selectedIds"], [1, "w-full", "md:w-4", "flex", "justify-content-center", "md:justify-content-end", "flex-order-1", "md:flex-order-3", "gap-2"], ["severity", "secondary", 3, "click", "outlined"], [1, "pi", "pi-filter-slash", 2, "font-size", "1rem"], [3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "page", "rowsPerPageOptions"]], template: function SizeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-input-search", 3);
        \u0275\u0275listener("clearFilter", function SizeListComponent_Template_app_input_search_clearFilter_3_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "app-input-filter", 5);
        \u0275\u0275listener("selectionChange", function SizeListComponent_Template_app_input_filter_selectionChange_5_listener($event) {
          return ctx.handleSizeTypeSelection($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "p-button", 7);
        \u0275\u0275listener("click", function SizeListComponent_Template_p_button_click_7_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275element(8, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p-button", 9);
        \u0275\u0275listener("click", function SizeListComponent_Template_p_button_click_9_listener() {
          return ctx.addSizeButton();
        });
        \u0275\u0275element(10, "i", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "app-table-pagination", 11);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275pipe(13, "async");
        \u0275\u0275listener("paginateSelected", function SizeListComponent_Template_app_table_pagination_paginateSelected_11_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "p-toast")(15, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_9_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(2);
        \u0275\u0275property("collection", ctx.sizeTypes)("selectedIds", ctx.selectedSizeTypeIds);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", (tmp_5_0 = \u0275\u0275pipeBind1(12, 13, ctx.sizes)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : \u0275\u0275pureFunction0(17, _c0))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_9_0 = \u0275\u0275pipeBind1(13, 15, ctx.total)) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : 0)("limit", ctx.limit)("page", ctx.page)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c1));
      }
    }, dependencies: [CommonModule, AsyncPipe, ToastModule, Toast, ConfirmDialogModule, ConfirmDialog, Button, SharedModule, NgControlStatusGroup, TablePaginationComponent, InputSearchComponent, InputFilterComponent, RouterModule], styles: ["\n\n  .btn-menu {\n  background-color: #dfe3e8;\n  border: 1px solid #dfe3e8;\n  color: #475569;\n  border-radius: 5px;\n  height: 39px;\n}\n  .btn-selected {\n  background-color: #75787b;\n  color: #fff;\n}\n  .dialog-custom-form {\n  width: 30% !important;\n  height: auto !important;\n}\n  .dialog-custom-assign {\n  width: 15% !important;\n  height: auto !important;\n}\n@media (max-width: 480px) {\n    .dialog-custom-form {\n    width: 70% !important;\n    height: auto !important;\n  }\n    .dialog-custom-assign {\n    width: 70% !important;\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=sizes.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizeListComponent, { className: "SizeListComponent" });
})();
export {
  SizeListComponent
};
//# sourceMappingURL=sizes.component-3Q7ZKK57.js.map

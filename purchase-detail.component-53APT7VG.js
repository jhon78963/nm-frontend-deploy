import {
  Card,
  CardModule
} from "./chunk-CFQXVXGZ.js";
import {
  PurchaseService
} from "./chunk-ZCRV5PSW.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-PAIW6DNN.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-TXRS3AUZ.js";
import {
  showError,
  showSuccess
} from "./chunk-MEV3ATV3.js";
import {
  Table,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
import {
  Calendar,
  CalendarModule,
  InputNumber,
  InputNumberModule
} from "./chunk-EYJWJYX5.js";
import "./chunk-4JQRHAYE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  ButtonDirective,
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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  ConfirmationService,
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
  CommonModule,
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/purchase/pages/purchase-detail/purchase-detail.component.ts
var _c0 = () => ({ "min-width": "56rem" });
function PurchaseDetailComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "a", 28);
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function PurchaseDetailComponent_Conditional_2_Conditional_7_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCancel($event));
    });
    \u0275\u0275elementEnd();
  }
}
function PurchaseDetailComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 11);
    \u0275\u0275text(1, "Anulada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "dd", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.purchase.cancelledAt);
  }
}
function PurchaseDetailComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 11);
    \u0275\u0275text(1, "Motivo anulaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "dd", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.purchase.cancellationReason);
  }
}
function PurchaseDetailComponent_Conditional_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function PurchaseDetailComponent_Conditional_2_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveHeader());
    });
    \u0275\u0275elementEnd();
  }
}
function PurchaseDetailComponent_Conditional_2_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Compra no activa: el detalle es solo lectura. ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseDetailComponent_Conditional_2_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, " Pod\xE9s corregir precios, c\xF3digo de barras y cantidades por color, o eliminar una sola fila sin anular toda la compra. ");
    \u0275\u0275elementEnd();
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_48_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0394 stock talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Colores / cantidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 31);
    \u0275\u0275text(10, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PurchaseDetailComponent_Conditional_2_ng_template_48_Conditional_11_Template, 2, 0, "th", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(11, ctx_r1.purchase.status === "ACTIVE" ? 11 : -1);
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputNumber", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const cg_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const line_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("formGroup", cg_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_16_0 = line_r6.colorDeltas == null ? null : line_r6.colorDeltas[$index_r5] == null ? null : line_r6.colorDeltas[$index_r5].colorDescription) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "Color #" + ((tmp_16_0 = cg_r4.get("colorId")) == null ? null : tmp_16_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("min", 1)("useGrouping", false);
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 36);
    \u0275\u0275repeaterCreate(1, PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_8_For_2_Template, 4, 4, "li", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowIndex_r7 = \u0275\u0275nextContext().rowIndex;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.colorDeltaControls(rowIndex_r7));
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 4);
    \u0275\u0275text(2, "Cantidad (solo talla)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputNumber", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 1)("useGrouping", false);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lineColorsSummary(line_r6), " ");
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 38)(1, "div", 45);
    \u0275\u0275element(2, "input", 46);
    \u0275\u0275elementStart(3, "div", 47)(4, "span", 11);
    \u0275\u0275text(5, "Compra");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p-inputNumber", 48);
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-inputNumber", 49);
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11, "M\xEDn.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "p-inputNumber", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 51);
    \u0275\u0275listener("click", function PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_13_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const rowIndex_r7 = \u0275\u0275nextContext().rowIndex;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveLine(rowIndex_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 52);
    \u0275\u0275listener("click", function PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_13_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const rowIndex_r7 = \u0275\u0275nextContext().rowIndex;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteLine(rowIndex_r7, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("minFractionDigits", 2)("maxFractionDigits", 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("minFractionDigits", 2)("maxFractionDigits", 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("minFractionDigits", 2)("maxFractionDigits", 2);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isLineBusy(line_r6.id));
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.isLineBusy(line_r6.id));
  }
}
function PurchaseDetailComponent_Conditional_2_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275template(8, PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_8_Template, 3, 0, "ul", 36)(9, PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_9_Template, 6, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 37);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PurchaseDetailComponent_Conditional_2_ng_template_49_Conditional_13_Template, 15, 8, "td", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const line_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.rowIndex;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.lineEditAt(rowIndex_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_5_0 = line_r6.productName) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : line_r6.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = line_r6.sizeDescription) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : line_r6.sizeId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r6.sizeStockDelta);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, line_r6.hasColorBreakdown && ctx_r1.colorDeltaControls(rowIndex_r7).length ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, line_r6.subtotal, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ctx_r1.purchase.status === "ACTIVE" ? 13 : -1);
  }
}
function PurchaseDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-toolbar", 1)(1, "div", 2)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275template(7, PurchaseDetailComponent_Conditional_2_Conditional_7_Template, 2, 0);
    \u0275\u0275element(8, "a", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "p-card", 9)(12, "dl", 10)(13, "dt", 11);
    \u0275\u0275text(14, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dt", 11);
    \u0275\u0275text(18, "Fecha documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dt", 11);
    \u0275\u0275text(22, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dd", 13);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt", 11);
    \u0275\u0275text(27, "Registro sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd", 13);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, PurchaseDetailComponent_Conditional_2_Conditional_30_Template, 4, 1)(31, PurchaseDetailComponent_Conditional_2_Conditional_31_Template, 4, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 14)(33, "p-card", 15)(34, "form", 16)(35, "div", 17)(36, "label", 18);
    \u0275\u0275text(37, "Nota de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 17)(40, "label", 20);
    \u0275\u0275text(41, "Fecha registrada");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "p-calendar", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, PurchaseDetailComponent_Conditional_2_Conditional_43_Template, 1, 0, "button", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "p-card", 23);
    \u0275\u0275template(45, PurchaseDetailComponent_Conditional_2_Conditional_45_Template, 2, 0, "p", 24)(46, PurchaseDetailComponent_Conditional_2_Conditional_46_Template, 2, 0);
    \u0275\u0275elementStart(47, "p-table", 25);
    \u0275\u0275template(48, PurchaseDetailComponent_Conditional_2_ng_template_48_Template, 12, 1, "ng-template", 26)(49, PurchaseDetailComponent_Conditional_2_ng_template_49_Template, 14, 10, "ng-template", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Compra #", ctx_r1.purchase.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.purchase.supplierName, " \xB7 ", ctx_r1.purchase.warehouseName || "Almac\xE9n " + ctx_r1.purchase.warehouseId, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ctx_r1.purchase.status === "ACTIVE" ? 7 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.purchase.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.purchase.registeredAt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(25, 17, ctx_r1.purchase.totalSubtotal, "1.2-2"), " ", ctx_r1.purchase.currency, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.purchase.creationTime);
    \u0275\u0275advance();
    \u0275\u0275conditional(30, ctx_r1.purchase.cancelledAt ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(31, ctx_r1.purchase.cancellationReason ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.headerForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(43, ctx_r1.purchase.status === "ACTIVE" ? 43 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(45, ctx_r1.purchase.status !== "ACTIVE" ? 45 : 46);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.purchase.lines)("tableStyle", \u0275\u0275pureFunction0(20, _c0));
  }
}
function PurchaseDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Cargando\u2026");
    \u0275\u0275elementEnd();
  }
}
var PurchaseDetailComponent = class _PurchaseDetailComponent {
  constructor(route, router, fb, purchaseApi, messageService, confirmationService) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.purchaseApi = purchaseApi;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.purchase = null;
    this.loading = true;
    this.savingLineId = /* @__PURE__ */ new Set();
    this.headerForm = this.fb.group({
      documentNote: [""],
      registeredAt: [null]
    });
    this.linesForm = this.fb.array([]);
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!Number.isFinite(id) || id < 1) {
      void this.router.navigate(["/inventories/purchase"]);
      return;
    }
    this.loadPurchase(id);
  }
  loadPurchase(id) {
    this.loading = true;
    this.purchaseApi.getOne(id).subscribe({
      next: (p) => {
        this.applyPurchase(p);
        this.loading = false;
      },
      error: () => {
        showError(this.messageService, "No se encontr\xF3 la compra.");
        void this.router.navigate(["/inventories/purchase"]);
      }
    });
  }
  applyPurchase(p) {
    this.purchase = p;
    this.headerForm.patchValue({
      documentNote: p.documentNote ?? "",
      registeredAt: p.registeredAt ? /* @__PURE__ */ new Date(p.registeredAt + "T12:00:00") : null
    });
    if (p.status !== "ACTIVE") {
      this.headerForm.disable({ emitEvent: false });
    } else {
      this.headerForm.enable({ emitEvent: false });
    }
    this.rebuildLinesForm(p.lines ?? []);
  }
  rebuildLinesForm(lines) {
    this.linesForm.clear({ emitEvent: false });
    for (const line of lines) {
      this.linesForm.push(this.buildLineEditGroup(line));
    }
    if (this.purchase?.status !== "ACTIVE") {
      this.linesForm.disable({ emitEvent: false });
    } else {
      this.linesForm.enable({ emitEvent: false });
    }
  }
  buildLineEditGroup(line) {
    const deltas = line.colorDeltas ?? [];
    const sizeOnlyQty = !line.hasColorBreakdown || deltas.length === 0 ? line.sizeStockDelta : deltas[0]?.quantity ?? line.sizeStockDelta;
    return this.fb.group({
      id: [line.id],
      barcode: [line.barcode ?? ""],
      purchasePrice: [Number(line.purchasePrice) || 0],
      salePrice: [Number(line.salePrice) || 0],
      minSalePrice: [Number(line.minSalePrice) || 0],
      hasColorBreakdown: [line.hasColorBreakdown],
      sizeOnlyQuantity: [Math.max(1, Number(sizeOnlyQty) || 1), []],
      colorDeltas: this.fb.array(deltas.map((d) => this.fb.group({
        colorId: [d.colorId],
        quantity: [Math.max(1, Number(d.quantity) || 1)]
      })))
    });
  }
  lineEditAt(index) {
    return this.linesForm.at(index);
  }
  colorDeltaControls(lineIdx) {
    const arr = this.lineEditAt(lineIdx).get("colorDeltas");
    return arr.controls;
  }
  lineColorsSummary(line) {
    if (!line.hasColorBreakdown || !line.colorDeltas?.length) {
      return "\u2014 (solo talla)";
    }
    return line.colorDeltas.map((c) => `${c.colorDescription ?? String(c.colorId)}: ${c.quantity}`).join(", ");
  }
  saveHeader() {
    if (!this.purchase || this.purchase.status !== "ACTIVE") {
      return;
    }
    const v = this.headerForm.getRawValue();
    const reg = v.registeredAt instanceof Date ? v.registeredAt.toISOString().slice(0, 10) : null;
    this.purchaseApi.patchHeader(this.purchase.id, {
      documentNote: v.documentNote?.trim() || null,
      registeredAt: reg
    }).subscribe({
      next: () => showSuccess(this.messageService, "Datos guardados."),
      error: () => showError(this.messageService, "No se pudo guardar.")
    });
  }
  saveLine(index) {
    if (!this.purchase || this.purchase.status !== "ACTIVE") {
      return;
    }
    const line = this.purchase.lines[index];
    const g = this.lineEditAt(index);
    if (!line || !g) {
      return;
    }
    const raw = g.getRawValue();
    const body = {
      barcode: raw.barcode?.trim() || null,
      purchasePrice: Number(raw.purchasePrice) || 0,
      salePrice: Number(raw.salePrice) || 0,
      minSalePrice: Number(raw.minSalePrice) || 0
    };
    if (raw.hasColorBreakdown) {
      body.colorDeltas = (raw.colorDeltas ?? []).map((d) => ({
        colorId: Number(d.colorId),
        quantity: Math.max(1, Number(d.quantity) || 1)
      }));
    } else {
      body.sizeOnlyQuantity = Math.max(1, Number(raw.sizeOnlyQuantity) || 1);
    }
    this.savingLineId.add(line.id);
    this.purchaseApi.updateLine(this.purchase.id, line.id, body).subscribe({
      next: () => {
        this.savingLineId.delete(line.id);
        showSuccess(this.messageService, "L\xEDnea actualizada.");
        this.loadPurchase(this.purchase.id);
      },
      error: (err) => {
        this.savingLineId.delete(line.id);
        const msg = err?.error?.message ?? err?.error?.errors?.stock?.[0] ?? "No se pudo guardar la l\xEDnea.";
        showError(this.messageService, String(msg));
      }
    });
  }
  confirmDeleteLine(index, event) {
    if (!this.purchase || this.purchase.status !== "ACTIVE") {
      return;
    }
    const line = this.purchase.lines[index];
    if (!line) {
      return;
    }
    this.confirmationService.confirm({
      target: event?.target,
      message: "\xBFEliminar esta l\xEDnea? Se revertir\xE1 el stock ingresado solo de esta fila.",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "S\xED, eliminar",
      rejectLabel: "No",
      accept: () => {
        this.savingLineId.add(line.id);
        this.purchaseApi.deleteLine(this.purchase.id, line.id).subscribe({
          next: () => {
            this.savingLineId.delete(line.id);
            showSuccess(this.messageService, "L\xEDnea eliminada.");
            this.loadPurchase(this.purchase.id);
          },
          error: (err) => {
            this.savingLineId.delete(line.id);
            const msg = err?.error?.message ?? err?.error?.errors?.stock?.[0] ?? "No se pudo eliminar la l\xEDnea.";
            showError(this.messageService, String(msg));
          }
        });
      }
    });
  }
  isLineBusy(lineId) {
    return this.savingLineId.has(lineId);
  }
  confirmCancel(event) {
    if (!this.purchase || this.purchase.status !== "ACTIVE") {
      return;
    }
    this.confirmationService.confirm({
      target: event?.target,
      message: "\xBFAnular esta compra? El stock ingresado se revertir\xE1.",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "S\xED, anular",
      rejectLabel: "No",
      accept: () => {
        this.purchaseApi.cancel(this.purchase.id, "Anulaci\xF3n desde detalle de compra").subscribe({
          next: () => {
            showSuccess(this.messageService, "Compra anulada.");
            void this.router.navigate(["/inventories/purchase"]);
          },
          error: (err) => {
            const msg = err?.error?.message ?? err?.error?.errors?.stock?.[0] ?? "No se pudo anular.";
            showError(this.messageService, String(msg));
          }
        });
      }
    });
  }
  static {
    this.\u0275fac = function PurchaseDetailComponent_Factory(t) {
      return new (t || _PurchaseDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PurchaseService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseDetailComponent, selectors: [["app-purchase-detail"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService]), \u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "text-600", "p-4"], ["styleClass", "mb-3 border-round-md surface-card"], [1, "p-toolbar-group-start", "flex", "flex-column", "gap-1"], [1, "text-xl", "font-semibold"], [1, "text-600", "text-sm"], [1, "p-toolbar-group-end", "flex", "flex-wrap", "gap-2"], ["pButton", "", "label", "Volver al listado", "icon", "pi pi-list", "routerLink", "/inventories/purchase", 1, "p-button-text"], [1, "grid"], [1, "col-12", "lg:col-4"], ["header", "Resumen"], [1, "m-0", "text-sm"], [1, "text-600"], [1, "mt-0", "mb-2", "font-medium"], [1, "mt-0", "mb-2"], [1, "col-12", "lg:col-8"], ["header", "Nota / fecha (solo compras activas)"], [1, "flex", "flex-column", "gap-3", 3, "formGroup"], [1, "flex", "flex-column", "gap-2"], ["for", "docNote", 1, "text-sm", "font-medium"], ["pInputText", "", "id", "docNote", "formControlName", "documentNote", "maxlength", "500", 1, "w-full"], ["for", "regAt", 1, "text-sm", "font-medium"], ["id", "regAt", "formControlName", "registeredAt", "dateFormat", "yy-mm-dd", "styleClass", "w-full", 3, "showIcon"], ["pButton", "", "type", "button", "label", "Guardar cambios", "icon", "pi pi-save"], ["header", "Detalle de l\xEDneas", "styleClass", "mt-3"], [1, "text-600", "text-sm", "mt-0", "mb-3"], ["styleClass", "p-datatable-sm", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "label", "Registrar m\xE1s mercader\xEDa", "icon", "pi pi-plus", "routerLink", "/inventories/purchase/register", 1, "p-button-success", "p-button-outlined"], ["pButton", "", "type", "button", "label", "Anular compra", "icon", "pi pi-times-circle", 1, "p-button-danger", "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "label", "Guardar cambios", "icon", "pi pi-save", 3, "click"], [1, "text-right"], [1, "text-center", 2, "width", "10rem"], [3, "formGroup"], [1, "align-top"], [1, "text-sm", "align-top", 2, "min-width", "14rem"], [1, "list-none", "m-0", "p-0", "flex", "flex-column", "gap-2"], [1, "text-right", "font-medium", "align-top"], [1, "align-top", "text-center"], [1, "flex", "align-items-center", "gap-2", "flex-wrap", "border-1", "border-round", "p-2", "surface-ground", 3, "formGroup"], [1, "flex-1", "min-w-0", "font-medium"], ["formControlName", "quantity", "inputStyleClass", "w-5rem", 3, "min", "useGrouping"], [1, "flex", "align-items-center", "gap-2", "flex-wrap"], ["formControlName", "sizeOnlyQuantity", "inputStyleClass", "w-5rem", 3, "min", "useGrouping"], [1, "text-xs", "text-600", "mt-2"], [1, "flex", "flex-column", "gap-2", "align-items-stretch"], ["pInputText", "", "formControlName", "barcode", "placeholder", "Barcode", 1, "w-full", "text-sm"], [1, "flex", "flex-column", "gap-1", "text-xs"], ["formControlName", "purchasePrice", "mode", "decimal", "styleClass", "w-full", 3, "minFractionDigits", "maxFractionDigits"], ["formControlName", "salePrice", "mode", "decimal", "styleClass", "w-full", 3, "minFractionDigits", "maxFractionDigits"], ["formControlName", "minSalePrice", "mode", "decimal", "styleClass", "w-full", 3, "minFractionDigits", "maxFractionDigits"], ["pButton", "", "pRipple", "", "type", "button", "label", "Guardar l\xEDnea", "icon", "pi pi-check", 1, "p-button-sm", 3, "click", "loading"], ["pButton", "", "pRipple", "", "type", "button", "label", "Eliminar", "icon", "pi pi-trash", 1, "p-button-sm", "p-button-danger", "p-button-outlined", 3, "click", "loading"]], template: function PurchaseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
        \u0275\u0275template(2, PurchaseDetailComponent_Conditional_2_Template, 50, 21)(3, PurchaseDetailComponent_Conditional_3_Template, 2, 0, "p", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, !ctx.loading && ctx.purchase ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(3, ctx.loading ? 3 : -1);
      }
    }, dependencies: [
      CommonModule,
      DecimalPipe,
      RouterLink,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      ToolbarModule,
      Toolbar,
      PrimeTemplate,
      CardModule,
      Card,
      ButtonModule,
      ButtonDirective,
      TableModule,
      Table,
      InputTextModule,
      InputText,
      InputNumberModule,
      InputNumber,
      CalendarModule,
      Calendar,
      ToastModule,
      Toast,
      ConfirmDialogModule,
      ConfirmDialog,
      RippleModule,
      Ripple
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=purchase-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseDetailComponent, { className: "PurchaseDetailComponent" });
})();
export {
  PurchaseDetailComponent
};
//# sourceMappingURL=purchase-detail.component-53APT7VG.js.map

import {
  TagModule
} from "./chunk-HO5KCK4N.js";
import {
  CardModule
} from "./chunk-CFQXVXGZ.js";
import {
  ProductsService
} from "./chunk-OMIYSFQX.js";
import {
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import "./chunk-TC2MDCQP.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-J33MWZEZ.js";
import {
  ActivatedRoute
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OI5KBWGW.js";

// node_modules/primeng/fesm2022/primeng-timeline.mjs
var _c0 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "p-timeline p-component": true,
  "p-timeline-left": a0,
  "p-timeline-right": a1,
  "p-timeline-top": a2,
  "p-timeline-bottom": a3,
  "p-timeline-alternate": a4,
  "p-timeline-vertical": a5,
  "p-timeline-horizontal": a6
});
var _c1 = (a0) => ({
  $implicit: a0
});
function Timeline_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Timeline_div_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.markerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, event_r1));
  }
}
function Timeline_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "marker");
  }
}
function Timeline_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function Timeline_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, Timeline_div_1_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275template(4, Timeline_div_1_ng_container_4_Template, 2, 4, "ng-container", 7)(5, Timeline_div_1_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, Timeline_div_1_div_7_Template, 1, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275template(9, Timeline_div_1_ng_container_9_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const marker_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "event");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "opposite");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.oppositeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c1, event_r1));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "separator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.markerTemplate)("ngIfElse", marker_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !last_r3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c1, event_r1));
  }
}
var Timeline = class _Timeline {
  el;
  /**
   * An array of events to display.
   * @group Props
   */
  value;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
   * @group Props
   */
  align = "left";
  /**
   * Orientation of the timeline.
   * @group Props
   */
  layout = "vertical";
  templates;
  contentTemplate;
  oppositeTemplate;
  markerTemplate;
  constructor(el) {
    this.el = el;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "opposite":
          this.oppositeTemplate = item.template;
          break;
        case "marker":
          this.markerTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = function Timeline_Factory(t) {
    return new (t || _Timeline)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Timeline,
    selectors: [["p-timeline"]],
    contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      style: "style",
      styleClass: "styleClass",
      align: "align",
      layout: "layout"
    },
    decls: 2,
    vars: 15,
    consts: [["marker", ""], [3, "ngStyle", "ngClass"], ["class", "p-timeline-event", 4, "ngFor", "ngForOf"], [1, "p-timeline-event"], [1, "p-timeline-event-opposite"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-timeline-event-separator"], [4, "ngIf", "ngIfElse"], ["class", "p-timeline-event-connector", 4, "ngIf"], [1, "p-timeline-event-content"], [1, "p-timeline-event-marker"], [1, "p-timeline-event-connector"]],
    template: function Timeline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, Timeline_div_1_Template, 10, 15, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction7(7, _c0, ctx.align === "left", ctx.align === "right", ctx.align === "top", ctx.align === "bottom", ctx.align === "alternate", ctx.layout === "vertical", ctx.layout === "horizontal"));
        \u0275\u0275attribute("data-pc-name", "timeline")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.value);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem;min-width:100px}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "p-timeline",
      template: `
        <div
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                'p-timeline p-component': true,
                'p-timeline-left': align === 'left',
                'p-timeline-right': align === 'right',
                'p-timeline-top': align === 'top',
                'p-timeline-bottom': align === 'bottom',
                'p-timeline-alternate': align === 'alternate',
                'p-timeline-vertical': layout === 'vertical',
                'p-timeline-horizontal': layout === 'horizontal'
            }"
            [attr.data-pc-name]="'timeline'"
            [attr.data-pc-section]="'root'"
        >
            <div *ngFor="let event of value; let last = last" class="p-timeline-event" [attr.data-pc-section]="'event'">
                <div class="p-timeline-event-opposite" [attr.data-pc-section]="'opposite'">
                    <ng-container *ngTemplateOutlet="oppositeTemplate; context: { $implicit: event }"></ng-container>
                </div>
                <div class="p-timeline-event-separator" [attr.data-pc-section]="'separator'">
                    <ng-container *ngIf="markerTemplate; else marker">
                        <ng-container *ngTemplateOutlet="markerTemplate; context: { $implicit: event }"></ng-container>
                    </ng-container>
                    <ng-template #marker>
                        <div class="p-timeline-event-marker" [attr.data-pc-section]="'marker'"></div>
                    </ng-template>
                    <div *ngIf="!last" class="p-timeline-event-connector"></div>
                </div>
                <div class="p-timeline-event-content" [attr.data-pc-section]="'content'">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: event }"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem;min-width:100px}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    value: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TimelineModule = class _TimelineModule {
  static \u0275fac = function TimelineModule_Factory(t) {
    return new (t || _TimelineModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TimelineModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Timeline, SharedModule],
      declarations: [Timeline]
    }]
  }], null, null);
})();

// src/app/private/inventories/products/pages/form/products-history/products-history.component.ts
var _forTrack0 = ($index, $item) => $item.field;
var _c02 = (a0, a1, a2, a3) => ({ "bg-green-500": a0, "bg-blue-500": a1, "bg-red-500": a2, "bg-gray-500": a3 });
function ProductHistoryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando historial...");
    \u0275\u0275elementEnd()();
  }
}
function ProductHistoryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "i", 4);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No hay movimientos registrados para este producto.");
    \u0275\u0275elementEnd()();
  }
}
function ProductHistoryComponent_Conditional_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(3, _c02, event_r1.severity === "success", event_r1.severity === "info", event_r1.severity === "danger", event_r1.severity === "secondary"));
    \u0275\u0275advance();
    \u0275\u0275classMap(event_r1.icon);
  }
}
function ProductHistoryComponent_Conditional_3_ng_template_3_Conditional_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const change_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", change_r2.field, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", change_r2.from, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", change_r2.to, " ");
  }
}
function ProductHistoryComponent_Conditional_3_ng_template_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3, "Campo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5, "Antes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275text(7, "Ahora");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275repeaterCreate(9, ProductHistoryComponent_Conditional_3_ng_template_3_Conditional_13_For_10_Template, 7, 3, "div", 24, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275repeater(event_r3.changes);
  }
}
function ProductHistoryComponent_Conditional_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div")(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275element(6, "i", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 15)(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ProductHistoryComponent_Conditional_3_ng_template_3_Conditional_13_Template, 11, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r3.action_title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r3.user, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r3.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r3.time);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, event_r3.changes && event_r3.changes.length > 0 ? 13 : -1);
  }
}
function ProductHistoryComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p-timeline", 6);
    \u0275\u0275template(2, ProductHistoryComponent_Conditional_3_ng_template_2_Template, 2, 8, "ng-template", 7)(3, ProductHistoryComponent_Conditional_3_ng_template_3_Template, 14, 5, "ng-template", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.events());
  }
}
var ProductHistoryComponent = class _ProductHistoryComponent {
  constructor() {
    this.productsService = inject(ProductsService);
    this.route = inject(ActivatedRoute);
    this.events = signal([]);
    this.loading = signal(true);
  }
  ngOnInit() {
    const productId = this.route.snapshot.params["id"];
    if (productId) {
      this.loadHistory(productId);
    }
  }
  loadHistory(id) {
    this.loading.set(true);
    this.productsService.getHistory(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.events.set(res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function ProductHistoryComponent_Factory(t) {
      return new (t || _ProductHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductHistoryComponent, selectors: [["app-product-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "w-full", "h-full", 2, "min-height", "400px"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "p-6", "gap-3", "text-500"], [1, "pi", "pi-spin", "pi-spinner", "text-4xl"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "p-6", "gap-3", "text-400"], [1, "pi", "pi-history", "text-5xl", "opacity-50"], [1, "px-2", "py-4"], ["align", "left", "styleClass", "w-full", 3, "value"], ["pTemplate", "marker"], ["pTemplate", "content"], [1, "custom-marker", "shadow-2", 3, "ngClass"], [1, "surface-card", "border-1", "border-200", "border-round", "p-3", "mb-3", "shadow-1"], [1, "flex", "justify-content-between", "align-items-start", "mb-2"], [1, "block", "font-bold", "text-900", "text-sm"], [1, "text-xs", "text-500", "flex", "align-items-center", "gap-1", "mt-1"], [1, "pi", "pi-user"], [1, "text-right"], [1, "block", "text-xs", "font-bold", "text-700"], [1, "text-xs", "text-500"], [1, "surface-50", "border-round", "p-2", "mt-2"], [1, "grid", "grid-nogutter", "text-xs", "font-bold", "text-500", "mb-1", "px-2"], [1, "col-4"], [1, "col-4", "text-center"], [1, "col-4", "text-right"], [1, "flex", "flex-column", "gap-1"], [1, "grid", "grid-nogutter", "text-sm", "px-2", "py-1", "border-bottom-1", "surface-border"], [1, "col-4", "font-medium", "text-700"], [1, "col-4", "text-center", "text-red-400"], [1, "col-4", "text-right", "font-bold", "text-green-600"]], template: function ProductHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ProductHistoryComponent_Conditional_1_Template, 4, 0, "div", 1)(2, ProductHistoryComponent_Conditional_2_Template, 4, 0)(3, ProductHistoryComponent_Conditional_3_Template, 4, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.loading() ? 1 : ctx.events().length === 0 ? 2 : 3);
      }
    }, dependencies: [CommonModule, NgClass, TimelineModule, Timeline, PrimeTemplate, CardModule, ButtonModule, TagModule], styles: ["\n\n.custom-marker[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n  .p-timeline-event-content {\n  padding-bottom: 2rem;\n}\n  .p-timeline-event-opposite {\n  flex: 0;\n  padding: 0 !important;\n}\n/*# sourceMappingURL=products-history.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductHistoryComponent, { className: "ProductHistoryComponent" });
})();
export {
  ProductHistoryComponent
};
//# sourceMappingURL=products-history.component-62J5DGBN.js.map

import {
  ColorsCreateFormComponent
} from "./chunk-6OYOR6TO.js";
import {
  DialogService
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import "./chunk-FOL26TWH.js";
import {
  MessagesModule,
  ProgressBar,
  ProgressBarModule
} from "./chunk-ACRAOC7V.js";
import "./chunk-TXRS3AUZ.js";
import "./chunk-H6LNU4BB.js";
import "./chunk-TNLOQWTB.js";
import "./chunk-KFVFK4CL.js";
import {
  showError,
  showSuccess
} from "./chunk-MEV3ATV3.js";
import {
  SelectButton,
  SelectButtonModule,
  Table,
  TableCheckbox,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
import {
  InputNumberModule
} from "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-4JQRHAYE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  AutoFocus,
  AutoFocusModule,
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
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-LZI5VY5D.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule
} from "./chunk-F6S55RTJ.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler,
  MessageService,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  Ripple,
  RippleModule,
  TranslationKeys,
  zindexutils
} from "./chunk-J33MWZEZ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  InputFlags,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  catchError,
  computed,
  forkJoin,
  forwardRef,
  isPlatformBrowser,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OI5KBWGW.js";

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var _c0 = ["container"];
var _c1 = ["input"];
var _c2 = ["colorSelector"];
var _c3 = ["colorHandle"];
var _c4 = ["hue"];
var _c5 = ["hueHandle"];
var _c6 = (a0, a1) => ({
  "p-colorpicker p-component": true,
  "p-colorpicker-overlay": a0,
  "p-colorpicker-dragging": a1
});
var _c7 = (a0) => ({
  "p-disabled": a0
});
var _c8 = (a0, a1) => ({
  "p-colorpicker-panel": true,
  "p-colorpicker-overlay-panel": a0,
  "p-disabled": a1
});
var _c9 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c10 = (a0) => ({
  value: "visible",
  params: a0
});
function ColorPicker_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9, 1);
    \u0275\u0275listener("click", function ColorPicker_input_2_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputClick());
    })("keydown", function ColorPicker_input_2_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputKeydown($event));
    })("focus", function ColorPicker_input_2_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputFocus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.inputBgColor);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c7, ctx_r1.disabled))("disabled", ctx_r1.disabled)("autofocus", ctx_r1.autofocus);
    \u0275\u0275attribute("tabindex", ctx_r1.tabindex)("id", ctx_r1.inputId)("data-pc-section", "input")("aria-label", ctx_r1.ariaLabel);
  }
}
function ColorPicker_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ColorPicker_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function ColorPicker_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColorPicker_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12, 2);
    \u0275\u0275listener("touchstart", function ColorPicker_div_3_Template_div_touchstart_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorDragStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    })("mousedown", function ColorPicker_div_3_Template_div_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorMousedown($event));
    });
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275element(5, "div", 14, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15, 4);
    \u0275\u0275listener("mousedown", function ColorPicker_div_3_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueMousedown($event));
    })("touchstart", function ColorPicker_div_3_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueDragStart($event));
    })("touchmove", function ColorPicker_div_3_Template_div_touchmove_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrag($event));
    })("touchend", function ColorPicker_div_3_Template_div_touchend_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd());
    });
    \u0275\u0275element(9, "div", 16, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c8, !ctx_r1.inline, ctx_r1.disabled))("@overlayAnimation", \u0275\u0275pureFunction1(16, _c10, \u0275\u0275pureFunction2(13, _c9, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    \u0275\u0275attribute("data-pc-section", "panel");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "selector");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "color");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "colorHandle");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "hue");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-pc-section", "hueHandle");
  }
}
var COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPicker),
  multi: true
};
var ColorPicker = class _ColorPicker {
  document;
  platformId;
  el;
  renderer;
  cd;
  config;
  overlayService;
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
   * Whether to display as an overlay or not.
   * @group Props
   */
  inline;
  /**
   * Format to use in value binding.
   * @group Props
   */
  format = "hex";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   * @group Props
   */
  inputId;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {ColorPickerChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on panel is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  containerViewChild;
  inputViewChild;
  value = {
    h: 0,
    s: 100,
    b: 100
  };
  inputBgColor;
  shown;
  overlayVisible;
  defaultColor = "ff0000";
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  documentClickListener;
  documentResizeListener;
  documentMousemoveListener;
  documentMouseupListener;
  documentHueMoveListener;
  scrollHandler;
  selfClick;
  colorDragging;
  hueDragging;
  overlay;
  colorSelectorViewChild;
  colorHandleViewChild;
  hueViewChild;
  hueHandleViewChild;
  window;
  constructor(document, platformId, el, renderer, cd, config, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }
  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }
  set hue(element) {
    this.hueViewChild = element;
  }
  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }
  get ariaLabel() {
    return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
  }
  onHueMousedown(event) {
    if (this.disabled) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }
  onHueDragStart(event) {
    if (this.disabled) {
      return;
    }
    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }
  onColorDragStart(event) {
    if (this.disabled) {
      return;
    }
    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
  }
  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  onColorMousedown(event) {
    if (this.disabled) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }
  onDrag(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }
    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }
  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }
  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
    let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    let left = rect.left + this.document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  getValueToUpdate() {
    let val;
    switch (this.format) {
      case "hex":
        val = "#" + this.HSBtoHEX(this.value);
        break;
      case "rgb":
        val = this.HSBtoRGB(this.value);
        break;
      case "hsb":
        val = this.value;
        break;
    }
    return val;
  }
  updateModel() {
    this.onModelChange(this.getValueToUpdate());
    this.cd.markForCheck();
  }
  writeValue(value) {
    if (value) {
      switch (this.format) {
        case "hex":
          this.value = this.HEXtoHSB(value);
          break;
        case "rgb":
          this.value = this.RGBtoHSB(value);
          break;
        case "hsb":
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }
    setTimeout(() => {
      this.updateColorSelector();
      this.updateUI();
      this.cd.markForCheck();
    });
  }
  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
    }
  }
  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
    }
    this.inputBgColor = "#" + this.HSBtoHEX(this.value);
  }
  onInputFocus() {
    this.onModelTouched();
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.overlay = event.element;
          this.appendOverlay();
          if (this.autoZIndex) {
            zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          this.updateColorSelector();
          this.updateUI();
        }
        break;
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "visible":
        if (!this.inline) {
          this.onShow.emit({});
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        this.onHide.emit({});
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.appendChild(this.document.body, this.overlay);
      else
        DomHandler.appendChild(this.overlay, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
    }
  }
  alignOverlay() {
    if (this.appendTo)
      DomHandler.absolutePosition(this.overlay, this.inputViewChild?.nativeElement);
    else
      DomHandler.relativePosition(this.overlay, this.inputViewChild?.nativeElement);
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onInputClick() {
    this.selfClick = true;
    this.togglePanel();
  }
  togglePanel() {
    if (!this.overlayVisible)
      this.show();
    else
      this.hide();
  }
  onInputKeydown(event) {
    switch (event.code) {
      case "Space":
        this.togglePanel();
        event.preventDefault();
        break;
      case "Escape":
      case "Tab":
        this.hide();
        break;
      default:
        break;
    }
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", () => {
        if (!this.selfClick) {
          this.overlayVisible = false;
          this.unbindDocumentClickListener();
        }
        this.selfClick = false;
        this.cd.markForCheck();
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
        if (this.colorDragging) {
          this.pickColor(event);
        }
        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }
  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }
  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }
  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.containerViewChild?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }
  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }
  validateHEX(hex) {
    var len = 6 - hex.length;
    if (len > 0) {
      var o = [];
      for (var i = 0; i < len; i++) {
        o.push("0");
      }
      o.push(hex);
      hex = o.join("");
    }
    return hex;
  }
  HEXtoRGB(hex) {
    let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 65280) >> 8,
      b: hexValue & 255
    };
  }
  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }
  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }
  HSBtoRGB(hsb) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;
    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360)
        h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }
  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = "0" + hex[key];
      }
    }
    return hex.join("");
  }
  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }
  onOverlayHide() {
    this.unbindScrollListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentClickListener();
    this.overlay = null;
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static \u0275fac = function ColorPicker_Factory(t) {
    return new (t || _ColorPicker)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(PrimeNGConfig), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPicker,
    selectors: [["p-colorPicker"]],
    viewQuery: function ColorPicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
        \u0275\u0275viewQuery(_c4, 5);
        \u0275\u0275viewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorSelector = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hue = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueHandle = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      inline: [InputFlags.HasDecoratorInputTransform, "inline", "inline", booleanAttribute],
      format: "format",
      appendTo: "appendTo",
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      tabindex: "tabindex",
      inputId: "inputId",
      autoZIndex: [InputFlags.HasDecoratorInputTransform, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [InputFlags.HasDecoratorInputTransform, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autofocus: [InputFlags.HasDecoratorInputTransform, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([COLORPICKER_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 4,
    vars: 11,
    consts: [["container", ""], ["input", ""], ["colorSelector", ""], ["colorHandle", ""], ["hue", ""], ["hueHandle", ""], [3, "ngStyle", "ngClass"], ["type", "text", "class", "p-colorpicker-preview p-inputtext", "readonly", "readonly", "pAutoFocus", "", 3, "ngClass", "disabled", "backgroundColor", "autofocus", "click", "keydown", "focus", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["type", "text", "readonly", "readonly", "pAutoFocus", "", 1, "p-colorpicker-preview", "p-inputtext", 3, "click", "keydown", "focus", "ngClass", "disabled", "autofocus"], [3, "click", "ngClass"], [1, "p-colorpicker-content"], [1, "p-colorpicker-color-selector", 3, "touchstart", "touchmove", "touchend", "mousedown"], [1, "p-colorpicker-color"], [1, "p-colorpicker-color-handle"], [1, "p-colorpicker-hue", 3, "mousedown", "touchstart", "touchmove", "touchend"], [1, "p-colorpicker-hue-handle"]],
    template: function ColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6, 0);
        \u0275\u0275template(2, ColorPicker_input_2_Template, 2, 11, "input", 7)(3, ColorPicker_div_3_Template, 11, 18, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction2(8, _c6, !ctx.inline, ctx.colorDragging || ctx.hueDragging));
        \u0275\u0275attribute("data-pc-name", "colorpicker")("data-pc-section", "root");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, AutoFocus],
    styles: ["@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPicker, [{
    type: Component,
    args: [{
      selector: "p-colorPicker",
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{ 'p-colorpicker p-component': true, 'p-colorpicker-overlay': !inline, 'p-colorpicker-dragging': colorDragging || hueDragging }"
            [attr.data-pc-name]="'colorpicker'"
            [attr.data-pc-section]="'root'"
        >
            <input
                *ngIf="!inline"
                #input
                type="text"
                class="p-colorpicker-preview p-inputtext"
                [ngClass]="{ 'p-disabled': disabled }"
                readonly="readonly"
                [attr.tabindex]="tabindex"
                [disabled]="disabled"
                (click)="onInputClick()"
                (keydown)="onInputKeydown($event)"
                (focus)="onInputFocus()"
                [attr.id]="inputId"
                [style.backgroundColor]="inputBgColor"
                [attr.data-pc-section]="'input'"
                [attr.aria-label]="ariaLabel"
                pAutoFocus
                [autofocus]="autofocus"
            />
            <div
                *ngIf="inline || overlayVisible"
                [ngClass]="{ 'p-colorpicker-panel': true, 'p-colorpicker-overlay-panel': !inline, 'p-disabled': disabled }"
                (click)="onOverlayClick($event)"
                [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
                [@.disabled]="inline === true"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                [attr.data-pc-section]="'panel'"
            >
                <div class="p-colorpicker-content" [attr.data-pc-section]="'content'">
                    <div #colorSelector class="p-colorpicker-color-selector" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [attr.data-pc-section]="'selector'">
                        <div class="p-colorpicker-color" [attr.data-pc-section]="'color'">
                            <div #colorHandle class="p-colorpicker-color-handle" [attr.data-pc-section]="'colorHandle'"></div>
                        </div>
                    </div>
                    <div #hue class="p-colorpicker-hue" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [attr.data-pc-section]="'hue'">
                        <div #hueHandle class="p-colorpicker-hue-handle" [attr.data-pc-section]="'hueHandle'"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      providers: [COLORPICKER_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-colorpicker{display:inline-block}.p-colorpicker-dragging{cursor:pointer}.p-colorpicker-overlay{position:relative}.p-colorpicker-panel{position:relative;width:193px;height:166px}.p-colorpicker-overlay-panel{position:absolute;top:0;left:0}.p-colorpicker-preview{cursor:pointer}.p-colorpicker-panel .p-colorpicker-content{position:relative}.p-colorpicker-panel .p-colorpicker-color-selector{width:150px;height:150px;top:8px;left:8px;position:absolute}.p-colorpicker-panel .p-colorpicker-color{width:150px;height:150px}.p-colorpicker-panel .p-colorpicker-color-handle{position:absolute;top:0;left:150px;border-radius:100%;width:10px;height:10px;border-width:1px;border-style:solid;margin:-5px 0 0 -5px;cursor:pointer;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue{width:17px;height:150px;top:8px;left:167px;position:absolute;opacity:.85}.p-colorpicker-panel .p-colorpicker-hue-handle{position:absolute;top:150px;left:0;width:21px;margin-left:-2px;margin-top:-5px;height:10px;border-width:2px;border-style:solid;opacity:.85;cursor:pointer}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }],
    colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }],
    hue: [{
      type: ViewChild,
      args: ["hue"]
    }],
    hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(t) {
    return new (t || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule],
      exports: [ColorPicker],
      declarations: [ColorPicker]
    }]
  }], null, null);
})();

// src/app/private/inventories/products/services/productColors.service.ts
var ProductSizeColorsService = class _ProductSizeColorsService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  add(productSizeId, colorId, data) {
    return this.apiService.post(`product-size/${productSizeId}/color/${colorId}`, data);
  }
  remove(productSizeId, colorId) {
    return this.apiService.delete(`product-size/${productSizeId}/color/${colorId}`);
  }
  update(productSizeId, colorId, data) {
    return this.apiService.patch(`product-size/${productSizeId}/color/${colorId}`, data);
  }
  getSizes(productId, size) {
    let url = `colors/sizes?productId=${productId}`;
    if (size) {
      url += `&size=${size}`;
    }
    return this.apiService.get(url);
  }
  getColors(productId, sizeId) {
    return this.apiService.get(`colors/selected?productId=${productId}&sizeId=${sizeId}`);
  }
  static {
    this.\u0275fac = function ProductSizeColorsService_Factory(t) {
      return new (t || _ProductSizeColorsService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductSizeColorsService, factory: _ProductSizeColorsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/inventories/products/pages/form/colors/colors-form.component.ts
var _c02 = () => ["/inventories/products"];
var _c12 = () => ({ label: "Todos", value: "all" });
var _c22 = () => ({ label: "Stock", value: "active" });
var _c32 = () => ({ label: "Sin Stock", value: "inactive" });
var _c42 = (a0, a1, a2) => [a0, a1, a2];
var _c52 = (a0, a1) => ({ "bg-blue-50/30": a0, "opacity-60": a1 });
var _c62 = (a0) => ({ "background-color": a0, "border-radius": "6px", border: "1px solid #ddd", width: "1.8rem", height: "1.8rem" });
function ColorsFormComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "small", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.remainingStock() > 0 ? "text-blue-500" : "text-red-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.remainingStock() > 0 ? "Faltan: " + ctx_r0.remainingStock() : "Sobran: " + ctx_r0.remainingStock() * -1, " unidades ");
  }
}
function ColorsFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 21)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-progressBar", 24);
    \u0275\u0275template(6, ColorsFormComponent_Conditional_12_Conditional_6_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.isStockBalanced() ? "text-green-500" : "text-orange-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Asignado: ", ctx_r0.totalAssignedStock(), " / ", ctx_r0.selectedSize.stock, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.isStockBalanced() ? "pi-check-circle text-green-500" : "pi-exclamation-triangle text-orange-500");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.totalAssignedStock() / ctx_r0.selectedSize.stock * 100)("showValue", false)("color", ctx_r0.isStockBalanced() ? "#22C55E" : "#f59e0b");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.remainingStock() !== 0 ? 6 : -1);
  }
}
function ColorsFormComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" El stock total asignado (", ctx_r0.totalAssignedStock(), ") no coincide con el stock de la talla (", ctx_r0.selectedSize.stock, "). Ajusta los valores para poder guardar. ");
  }
}
function ColorsFormComponent_Conditional_21_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 33);
    \u0275\u0275elementStart(2, "th", 34);
    \u0275\u0275text(3, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 35);
    \u0275\u0275text(7, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th", 36);
    \u0275\u0275elementEnd();
  }
}
function ColorsFormComponent_Conditional_21_ng_template_4_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ColorsFormComponent_Conditional_21_ng_template_4_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const color_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeColorSizeProductButton(color_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r0.isStockBalanced());
  }
}
function ColorsFormComponent_Conditional_21_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37)(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 40);
    \u0275\u0275element(7, "div");
    \u0275\u0275elementStart(8, "div", 41)(9, "span", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "div", 44)(15, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ColorsFormComponent_Conditional_21_ng_template_4_Template_input_ngModelChange_15_listener($event) {
      const color_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(color_r4.stock, $event) || (color_r4.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ColorsFormComponent_Conditional_21_ng_template_4_Template_input_ngModelChange_15_listener() {
      const color_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onStockChange(color_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 46);
    \u0275\u0275text(17, "uds");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td", 47)(19, "div", 48)(20, "button", 49);
    \u0275\u0275listener("click", function ColorsFormComponent_Conditional_21_ng_template_4_Template_button_click_20_listener() {
      const color_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(color_r4.isExists ? ctx_r0.editColorSizeProductButton(color_r4) : ctx_r0.saveColorSizeProductButton(color_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ColorsFormComponent_Conditional_21_ng_template_4_Conditional_21_Template, 1, 1, "button", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c52, color_r4.isExists, !color_r4.isExists));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", color_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", color_r4.id, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(14, _c62, color_r4.hash));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(color_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(color_r4.hash);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", color_r4.stock);
    \u0275\u0275advance(5);
    \u0275\u0275property("severity", color_r4.isExists ? "secondary" : "success")("disabled", !ctx_r0.isStockBalanced());
    \u0275\u0275advance();
    \u0275\u0275conditional(21, color_r4.isExists ? 21 : -1);
  }
}
function ColorsFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "p-table", 30, 0);
    \u0275\u0275twoWayListener("selectionChange", function ColorsFormComponent_Conditional_21_Template_p_table_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedColors, $event) || (ctx_r0.selectedColors = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, ColorsFormComponent_Conditional_21_ng_template_3_Template, 9, 0, "ng-template", 31)(4, ColorsFormComponent_Conditional_21_ng_template_4_Template, 22, 16, "ng-template", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.filteredColors());
    \u0275\u0275twoWayProperty("selection", ctx_r0.selectedColors);
    \u0275\u0275property("scrollable", true);
  }
}
var ColorsFormComponent = class _ColorsFormComponent {
  constructor(router, route, dialogService, messageService, productSizeColorsService) {
    this.router = router;
    this.route = route;
    this.dialogService = dialogService;
    this.messageService = messageService;
    this.productSizeColorsService = productSizeColorsService;
    this.productId = 0;
    this.sizes = [];
    this.colors = signal([]);
    this.selectedColors = [];
    this.stepper = true;
    this.searchTerm = signal("");
    this.filterStatus = signal("all");
    this.totalAssignedStock = computed(() => {
      return this.colors().reduce((acc, color) => acc + (Number(color.stock) || 0), 0);
    });
    this.remainingStock = computed(() => {
      const limit = this.selectedSize?.stock || 0;
      return limit - this.totalAssignedStock();
    });
    this.isStockBalanced = computed(() => {
      return this.totalAssignedStock() === (this.selectedSize?.stock || 0);
    });
    this.filteredColors = computed(() => {
      const term = this.searchTerm().toLowerCase();
      const status = this.filterStatus();
      return this.colors().filter((c) => {
        const matchesSearch = c.description.toLowerCase().includes(term);
        const matchesStatus = status === "all" ? true : status === "active" ? c.isExists : !c.isExists;
        return matchesSearch && matchesStatus;
      }).sort((a, b) => (b.isExists ? 1 : 0) - (a.isExists ? 1 : 0));
    });
    this.formGroup = new FormGroup({
      size: new FormControl()
    });
    if (this.route.snapshot.paramMap.get("id")) {
      this.productId = Number(this.route.snapshot.paramMap.get("id"));
      this.stepper = this.router.url.includes("/step/");
    }
  }
  ngOnInit() {
    this.getSizes();
    this.loadColors();
    this.formGroup.get("size")?.valueChanges.subscribe((size) => {
      this.getSizes(size);
    });
  }
  loadColors() {
    const selectedSize = JSON.parse(localStorage.getItem("selectedSize"));
    if (selectedSize && selectedSize.productId == this.productId) {
      this.selectedSize = {
        id: selectedSize.id,
        productSizeId: selectedSize.productSizeId,
        description: selectedSize.description,
        stock: selectedSize.stock
      };
      this.getColors(this.selectedSize.id);
    } else {
      localStorage.removeItem("selectedSize");
    }
  }
  getSizes(size) {
    this.productSizeColorsService.getSizes(this.productId, size).subscribe({
      next: (sizes) => {
        this.sizes = sizes;
      }
    });
  }
  getColors(sizeId) {
    this.productSizeColorsService.getColors(this.productId, sizeId).subscribe({
      next: (colors) => {
        this.colors.set(colors);
      }
    });
  }
  getSelectedSize(event) {
    if (event.value) {
      event.value.productId = this.productId;
      localStorage.setItem("selectedSize", JSON.stringify(event.value));
      this.getColors(event.value.id);
    } else {
      this.messageService.clear();
      this.colors.set([]);
    }
  }
  resetFunction() {
    this.getSizes();
    this.formGroup.get("size")?.patchValue("");
  }
  selectColor(color) {
    const maxStock = this.selectedSize.stock;
    const totalSelected = this.selectedColors.reduce((acc, curr) => acc + Number(curr.stock || 0), 0);
    const colorExists = this.selectedColors.find((c) => c.id === color.id);
    const colorStock = Number(color.stock || 0);
    const isEmpty = !color.stock?.toString().trim();
    if (isEmpty) {
      this.selectedColors = this.selectedColors.filter((c) => c.id !== color.id);
      this.messageService.clear();
      return;
    }
    if (colorExists) {
      const totalExcludingCurrent = totalSelected - Number(colorExists.stock || 0);
      if (totalExcludingCurrent + colorStock <= maxStock) {
        colorExists.stock = colorStock;
        this.messageService.clear();
      } else {
        this.messageService.clear();
        this.messageService.add({
          severity: "warn",
          summary: "Stock",
          detail: `Stock m\xE1ximo alcanzado: ${this.selectedSize.stock}`
        });
      }
    } else {
      if (totalSelected + colorStock <= maxStock) {
        this.selectedColors = [...this.selectedColors, color];
        this.messageService.clear();
      } else {
        this.messageService.clear();
        this.messageService.add({
          severity: "warn",
          summary: "Stock",
          detail: `No se puede seleccionar m\xE1s tallas: stock maximo ${this.selectedSize.stock}`
        });
      }
    }
  }
  onStockChange(color) {
    this.colors.update((currentColors) => [...currentColors]);
    const isSelected = this.selectedColors.some((c) => c.id === color.id);
    if (color.stock > 0 && !isSelected) {
      this.selectedColors = [...this.selectedColors, color];
    } else if ((color.stock === 0 || !color.stock) && isSelected) {
      this.selectedColors = this.selectedColors.filter((c) => c.id !== color.id);
    }
  }
  createColor() {
    const modal = this.dialogService.open(ColorsCreateFormComponent, {
      data: {
        productId: this.productId
      },
      header: "Crear Color",
      styleClass: "dialog-custom-form"
    });
    modal.onClose.subscribe({
      next: (value) => {
        if (value?.success) {
          showSuccess(this.messageService, "Color Creado.");
          this.getSizes();
          this.loadColors();
        } else if (value?.error) {
          showError(this.messageService, "Hubo un error, intente nuevamente");
        }
      }
    });
  }
  saveAllSelectedColors() {
    const requests = this.selectedColors.map((color) => {
      const productSizeColorSave = {
        stock: color.stock
      };
      return this.productSizeColorsService.add(color.productSizeId, color.id, productSizeColorSave).pipe(catchError(() => {
        return of(null);
      }));
    });
    forkJoin(requests).subscribe({
      next: () => {
        this.loadColors();
        this.selectedColors = [];
      }
    });
  }
  deleteAllSelectedColors() {
    const requests = this.selectedColors.map((color) => {
      return this.productSizeColorsService.remove(color.productSizeId, color.id).pipe(catchError(() => {
        return of(null);
      }));
    });
    forkJoin(requests).subscribe({
      next: () => {
        this.loadColors();
        this.selectedColors = [];
      }
    });
  }
  saveColorSizeProductButton(color) {
    const productSizeColorSave = {
      stock: color.stock
    };
    this.productSizeColorsService.add(color.productSizeId, color.id, productSizeColorSave).subscribe({
      next: () => {
        this.loadColors();
        this.selectedColors = this.selectedColors.filter((c) => c.id !== color.id);
      },
      error: () => this.loadColors()
    });
  }
  editColorSizeProductButton(color) {
    this.saveColorSizeProductButton(color);
  }
  removeColorSizeProductButton(color) {
    this.productSizeColorsService.remove(color.productSizeId, color.id).subscribe({
      next: () => {
        this.loadColors();
        this.selectedColors = [];
      },
      error: () => this.loadColors()
    });
  }
  static {
    this.\u0275fac = function ColorsFormComponent_Factory(t) {
      return new (t || _ColorsFormComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProductSizeColorsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorsFormComponent, selectors: [["app-colors-form"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 22, vars: 23, consts: [["dt", ""], [1, "flex", "flex-wrap", "justify-content-center", "md:justify-content-end", "gap-2", "col-12"], ["pButton", "", "pRipple", "", "label", "Nuevo", "icon", "pi pi-plus", "severity", "secondary", "size", "small", 1, "btn-menu", "flex-grow-1", "md:flex-grow-0", "w-8rem", "md:w-9rem", 3, "click"], ["pButton", "", "pRipple", "", "label", "Guardar", "icon", "pi pi-save", "severity", "secondary", "size", "small", 1, "btn-menu", "flex-grow-1", "md:flex-grow-0", "w-8rem", "md:w-9rem", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Remover", "icon", "pi pi-trash", "severity", "secondary", "size", "small", 1, "btn-menu", "flex-grow-1", "md:flex-grow-0", "w-8rem", "md:w-9rem", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Regresar", "icon", "pi pi-arrow-left", "severity", "help", "size", "small", 1, "btn-menu-back", "flex-grow-1", "md:flex-grow-0", "w-8rem", "md:w-9rem", 3, "routerLink"], [1, "col-12", "mt-0", "p-2", "md:p-3"], [1, "grid", "grid-nogutter"], [1, "col-12", "lg:col-4", "lg:pr-4"], [1, "flex", "flex-column", "gap-4"], [1, "surface-card", "p-3", "border-round-xl", "shadow-1", "border-1", "border-100"], ["optionLabel", "description", "filterBy", "description", "placeholder", "Selecciona una talla", "styleClass", "w-full", 3, "ngModelChange", "onChange", "options", "filter", "showClear", "ngModel"], [1, "col-12", "lg:col-8", "mt-4", "lg:mt-0"], [1, "flex", "flex-column", "md:flex-row", "gap-3", "mb-3", "p-3", "bg-white", "border-round-xl", "shadow-1", "border-1", "border-100"], [1, "p-inputgroup", "flex-1"], [1, "p-inputgroup-addon"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Buscar color...", 3, "ngModelChange", "ngModel"], ["optionLabel", "label", "optionValue", "value", "styleClass", "white-space-nowrap text-center", 3, "ngModelChange", "options", "ngModel"], [1, "bg-red-50", "border-left-3", "border-red-500", "p-3", "mb-3", "border-round-right", "shadow-1"], [1, "surface-card", "border-round-xl", "shadow-1", "overflow-hidden"], [1, "flex", "align-items-center", "justify-content-between", "mb-2"], [1, "text-sm", "font-bold", 3, "ngClass"], [1, "pi", 3, "ngClass"], ["styleClass", "h-1rem shadow-1 mb-2", 3, "value", "showValue", "color"], [1, "text-center", "p-2", "border-round", "bg-gray-50"], [1, "text-xs", "font-bold", 3, "ngClass"], [1, "flex", "align-items-center"], [1, "pi", "pi-info-circle", "text-red-500", "mr-2", "text-xl"], [1, "text-red-700", "font-medium"], ["responsiveLayout", "scroll", "dataKey", "id", "scrollHeight", "280px", "styleClass", "p-datatable-sm", 3, "selectionChange", "value", "selection", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "width", "3rem"], [1, "hidden", "md:table-cell", 2, "width", "4rem"], [2, "width", "9rem"], [2, "width", "5rem"], [3, "ngClass"], [3, "value"], [1, "hidden", "md:table-cell", "text-xs", "text-500"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "flex-column", "overflow-hidden"], [1, "text-xs", "md:text-sm", "font-bold", "text-900", "truncate"], [1, "text-xs", "text-500"], [1, "p-inputgroup"], ["type", "number", "pInputText", "", "placeholder", "0", "min", "0", 1, "w-full", "text-center", "p-2", "text-sm", 3, "ngModelChange", "ngModel"], [1, "p-inputgroup-addon", "px-2", "text-xs"], [1, "px-1"], [1, "flex", "justify-content-end"], ["pButton", "", "icon", "pi pi-save", "size", "small", 1, "p-button-rounded", "p-button-text", "md:p-button-outlined", "p-0", "w-6", 3, "click", "severity", "disabled"], ["pButton", "", "icon", "pi pi-trash", "severity", "danger", "size", "small", 1, "p-button-rounded", "p-button-text", "md:p-button-outlined", "p-0", "w-6", 3, "disabled"], ["pButton", "", "icon", "pi pi-trash", "severity", "danger", "size", "small", 1, "p-button-rounded", "p-button-text", "md:p-button-outlined", "p-0", "w-6", 3, "click", "disabled"]], template: function ColorsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ColorsFormComponent_Template_button_click_2_listener() {
          return ctx.createColor();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("click", function ColorsFormComponent_Template_button_click_3_listener() {
          return ctx.saveAllSelectedColors();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275listener("click", function ColorsFormComponent_Template_button_click_4_listener() {
          return ctx.deleteAllSelectedColors();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "p-dropdown", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ColorsFormComponent_Template_p_dropdown_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedSize, $event) || (ctx.selectedSize = $event);
          return $event;
        });
        \u0275\u0275listener("onChange", function ColorsFormComponent_Template_p_dropdown_onChange_11_listener($event) {
          return ctx.getSelectedSize($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, ColorsFormComponent_Conditional_12_Template, 7, 8, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "span", 15);
        \u0275\u0275element(17, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 17);
        \u0275\u0275listener("ngModelChange", function ColorsFormComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.searchTerm.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "p-selectButton", 18);
        \u0275\u0275listener("ngModelChange", function ColorsFormComponent_Template_p_selectButton_ngModelChange_19_listener($event) {
          return ctx.filterStatus.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, ColorsFormComponent_Conditional_20_Template, 5, 2, "div", 19)(21, ColorsFormComponent_Conditional_21_Template, 5, 3, "div", 20);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(!ctx.stepper ? " card" : "");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.selectedColors || !ctx.selectedColors.length || !ctx.isStockBalanced());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.selectedColors || !ctx.selectedColors.length || !ctx.isStockBalanced());
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c02));
        \u0275\u0275advance(6);
        \u0275\u0275property("options", ctx.sizes)("filter", true)("showClear", true);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSize);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.selectedSize ? 12 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.searchTerm());
        \u0275\u0275advance();
        \u0275\u0275property("options", \u0275\u0275pureFunction3(19, _c42, \u0275\u0275pureFunction0(16, _c12), \u0275\u0275pureFunction0(17, _c22), \u0275\u0275pureFunction0(18, _c32)))("ngModel", ctx.filterStatus());
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.selectedSize && !ctx.isStockBalanced() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, ctx.colors().length > 0 ? 21 : -1);
      }
    }, dependencies: [
      ButtonModule,
      ButtonDirective,
      PrimeTemplate,
      CommonModule,
      NgClass,
      DropdownModule,
      Dropdown,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      MinValidator,
      NgModel,
      ReactiveFormsModule,
      TableModule,
      Table,
      TableCheckbox,
      InputTextModule,
      InputText,
      RippleModule,
      Ripple,
      ColorPickerModule,
      MessagesModule,
      RouterLink,
      SelectButtonModule,
      SelectButton,
      ProgressBarModule,
      ProgressBar,
      InputNumberModule
    ], styles: ["\n\n  .p-toolbar {\n  padding: 0;\n  padding-left: 1.25rem;\n}\n  .btn-menu {\n  background-color: #dfe3e8;\n  border: 1px solid #dfe3e8;\n  color: #475569;\n  border-radius: 5px;\n  height: 39px;\n}\n  .btn-menu-back {\n  background-color: #ffb340;\n  border: 1px solid #ffb340;\n  color: #000;\n  border-radius: 5px;\n  height: 39px;\n}\n  .btn-selected {\n  background-color: #75787b;\n  color: #fff;\n}\n  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {\n  background: rgba(0, 0, 0, 0.2);\n  color: #475569;\n}\n  .p-button.p-button-icon-only.p-button-rounded {\n  width: 35px !important;\n  height: 35px !important;\n}\n.bg-input-text[_ngcontent-%COMP%]   input.input-text[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 62px;\n  border: none;\n  width: 100%;\n  height: 48px;\n  text-align: center;\n  padding: 1rem;\n}\n.bg-input-text[_ngcontent-%COMP%]   input.input-text[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n  .dialog-custom-form {\n  width: 30% !important;\n  height: auto !important;\n}\n  .dialog-custom-assign {\n  width: 15% !important;\n  height: auto !important;\n}\n@media (max-width: 480px) {\n    .dialog-custom-form {\n    width: 70% !important;\n    height: auto !important;\n  }\n    .dialog-custom-assign {\n    width: 70% !important;\n    height: auto !important;\n  }\n}\n  .p-dropdown-header input {\n  font-size: 1rem;\n  color: #334155;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #cbd5e1;\n}\n  .p-dropdown-header input:focus-visible {\n  outline: none;\n}\n  .p-dropdown-header button {\n  color: #475569;\n  background: #f1f5f9;\n  border: 1px solid #f1f5f9;\n}\n  .p-dropdown-header button:hover {\n  background: #e2e8f0;\n  color: #334155;\n  border-color: #e2e8f0;\n}\n  .p-dropdown-header button:focus {\n  box-shadow: none;\n}\n  p-messages {\n  margin-top: -13px;\n}\n/*# sourceMappingURL=colors-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorsFormComponent, { className: "ColorsFormComponent" });
})();
export {
  ColorsFormComponent
};
//# sourceMappingURL=colors-form.component-77ORVQPA.js.map

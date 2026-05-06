import {
  WarehousesService
} from "./chunk-Z5XV2SS3.js";
import {
  StepsModule
} from "./chunk-6BGSZECH.js";
import {
  ProductSave
} from "./chunk-NSEHX36K.js";
import {
  KeyFilterModule
} from "./chunk-4PKLMTHZ.js";
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
  InputSelectComponent,
  InputTextComponent,
  SharedModule
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
import {
  ButtonDirective
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
  FormBuilder,
  FormGroupDirective,
  FormsModule,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  MessageService
} from "./chunk-J33MWZEZ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/products/pages/form/products/products-form.component.ts
var _c0 = () => ["/inventories/products"];
function ProductsFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function ProductsFormComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProductButton());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "button", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
    \u0275\u0275element(8, "app-input-select", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275element(10, "app-input-select", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "app-input-text", 11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.isValid);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.genders);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.warehouses);
  }
}
var ProductsFormComponent = class _ProductsFormComponent {
  constructor(formBuilder, gendersService, productsService, warehousesService, route, router) {
    this.formBuilder = formBuilder;
    this.gendersService = gendersService;
    this.productsService = productsService;
    this.warehousesService = warehousesService;
    this.route = route;
    this.router = router;
    this.productId = 0;
    this.genders = [];
    this.warehouses = [];
    this.form = this.formBuilder.group({
      id: [null],
      name: ["", Validators.required],
      genderId: [{ value: 1, disabled: false }, Validators.required],
      warehouseId: [{ value: 1, disabled: false }, Validators.required]
    });
    if (this.route.snapshot.paramMap.get("id")) {
      this.productId = Number(this.route.snapshot.paramMap.get("id"));
    }
  }
  ngOnInit() {
    this.gendersService.getAll().subscribe((genders) => {
      this.genders = genders;
    });
    this.warehousesService.getAll().subscribe((warehouses) => {
      this.warehouses = warehouses;
    });
    if (this.productId !== 0) {
      this.productsService.getOne(this.productId).subscribe({
        next: (product) => {
          this.form.patchValue(product);
        }
      });
    }
  }
  get isValid() {
    return this.form.valid;
  }
  saveProductButton() {
    const product = new ProductSave(this.form.value);
    if (product.id) {
      this.productsService.edit(product.id, product).subscribe({
        next: (resP) => {
          this.router.navigate([
            "/inventories/products/step/sizes",
            resP.productId
          ]);
        }
      });
    } else {
      this.productsService.create(product).subscribe({
        next: (resP) => {
          this.router.navigate([
            "/inventories/products/step/sizes",
            resP.productId
          ]);
        }
      });
    }
  }
  static {
    this.\u0275fac = function ProductsFormComponent_Factory(t) {
      return new (t || _ProductsFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(GendersService), \u0275\u0275directiveInject(ProductsService), \u0275\u0275directiveInject(WarehousesService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsFormComponent, selectors: [["app-products-form"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DialogService, MessageService]), \u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "col-12", "mt-0", 3, "formGroup"], [1, "w-full"], [1, "flex", "justify-content-center", "md:justify-content-end", "gap-2", "mb-3"], [1, "flex", "flex-wrap", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "label", "Guardar", "icon", "pi pi-save", "severity", "secondary", "size", "small", 1, "btn-menu", "w-9rem", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "label", "Regresar", "icon", "pi pi-arrow-left", "severity", "help", "size", "small", 1, "btn-menu-back", "w-9rem", 3, "routerLink"], [1, "p-fluid", "grid"], [1, "field", "col-12", "md:col-6"], ["placeholder", "Seleccione genero", "label", "Genero", "controlName", "genderId", "for", "gender", "id", "gender", "optionLabel", "description", "optionValue", "id", 3, "options"], ["placeholder", "Seleccione genero", "label", "Genero", "controlName", "warehouseId", "for", "warehouse", "id", "warehouse", "optionLabel", "name", "optionValue", "id", 3, "options"], [1, "field", "col-12"], ["placeholder", "Ingrese nombre", "label", "Nombre", "controlName", "name"]], template: function ProductsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductsFormComponent_Conditional_0_Template, 13, 6, "form", 0);
        \u0275\u0275element(1, "p-toast");
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      KeyFilterModule,
      SharedModule,
      ButtonDirective,
      InputSelectComponent,
      InputTextComponent,
      StepsModule,
      RouterLink,
      ToastModule,
      Toast
    ], styles: ["\n\n.w-custom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 1200px) {\n  .w-custom[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n.btn-menu[_ngcontent-%COMP%] {\n  background-color: #dfe3e8;\n  border: 1px solid #dfe3e8;\n  color: #475569;\n  border-radius: 5px;\n  height: 39px;\n}\n.btn-menu-back[_ngcontent-%COMP%] {\n  background-color: #ffb340;\n  border: 1px solid #ffb340;\n  color: #000;\n  border-radius: 5px;\n  height: 39px;\n}\n  .dialog-custom-form {\n  width: 30% !important;\n  height: auto !important;\n}\n  .dialog-custom-assign {\n  width: 15% !important;\n  height: auto !important;\n}\n@media (max-width: 480px) {\n    .dialog-custom-form {\n    width: 70% !important;\n    height: auto !important;\n  }\n    .dialog-custom-assign {\n    width: 70% !important;\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=products-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsFormComponent, { className: "ProductsFormComponent" });
})();
export {
  ProductsFormComponent
};
//# sourceMappingURL=products-form.component-MN6LOAXE.js.map

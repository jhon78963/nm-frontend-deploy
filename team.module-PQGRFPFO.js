import {
  TabViewModule,
  TreeModule
} from "./chunk-ZIDIS2DE.js";
import {
  Tag,
  TagModule
} from "./chunk-HO5KCK4N.js";
import {
  Divider,
  DividerModule
} from "./chunk-NXXA6G33.js";
import {
  Card,
  CardModule
} from "./chunk-CFQXVXGZ.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-ZBXOYZOJ.js";
import {
  WarehousesService
} from "./chunk-Z5XV2SS3.js";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef
} from "./chunk-GDRXT6YF.js";
import "./chunk-S5OQ6NBU.js";
import {
  InputSearchComponent,
  InputSelectComponent,
  InputTextComponent,
  InputTextarea,
  InputTextareaModule,
  LoadingService,
  SharedModule,
  TabMenuModule,
  TablePaginationComponent,
  TreeTableModule
} from "./chunk-FOL26TWH.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-ACRAOC7V.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-TXRS3AUZ.js";
import "./chunk-H6LNU4BB.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-TNLOQWTB.js";
import "./chunk-KFVFK4CL.js";
import "./chunk-MEV3ATV3.js";
import {
  SelectButton,
  SelectButtonModule,
  Table,
  TableModule
} from "./chunk-Q7YSIWLQ.js";
import {
  Calendar,
  CalendarModule,
  InputNumber,
  InputNumberModule
} from "./chunk-EYJWJYX5.js";
import "./chunk-FDK6GE2Y.js";
import {
  Dropdown,
  DropdownModule
} from "./chunk-4JQRHAYE.js";
import {
  InputTextModule
} from "./chunk-I5WDLL76.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-AUVIAVMC.js";
import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  Toast,
  ToastModule
} from "./chunk-NOHFYFBO.js";
import "./chunk-3ZDI7NAM.js";
import "./chunk-5YEVHO5S.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-IRTRWKZB.js";
import "./chunk-LZI5VY5D.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-F6S55RTJ.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-J33MWZEZ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-UPUIZKRS.js";
import "./chunk-NCIKOZG6.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DatePipe,
  NgIf,
  __async,
  __spreadValues,
  debounceTime,
  finalize,
  inject,
  map,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OI5KBWGW.js";

// src/app/private/directory/team/models/team.model.ts
var Team = class {
  constructor(team) {
    this.id = team.id;
    this.dni = team.dni;
    this.name = team.name;
    this.surname = team.surname;
    this.salary = team.salary;
    this.warehouseId = team.warehouseId;
    this.userId = team.userId;
    this.userEmail = team.userEmail;
  }
};

// src/app/private/directory/team/services/attendance.service.ts
var AttendanceService = class _AttendanceService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getAttendance(teamId, month, year) {
    return this.apiService.get(`attendance/${teamId}/?month=${month}&year=${year}`);
  }
  getDailySummary(dateYmd) {
    return this.apiService.get(`attendance/daily-summary?date=${encodeURIComponent(dateYmd)}`);
  }
  create(data) {
    return this.apiService.post("attendance", data);
  }
  static {
    this.\u0275fac = function AttendanceService_Factory(t) {
      return new (t || _AttendanceService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/directory/team/services/team.service.ts
var TeamService = class _TeamService {
  constructor(apiService) {
    this.apiService = apiService;
    this.team = [];
    this.total = 0;
    this.team$ = new BehaviorSubject(this.team);
    this.total$ = new BehaviorSubject(this.total);
  }
  callGetList(limit = 10, page = 1, name = "") {
    let url = `teams?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateTeam(response.data);
      this.updateTotalTeam(response.paginate.total);
    }));
  }
  getList() {
    return this.team$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  getOne(id) {
    return this.apiService.get(`teams/${id}`);
  }
  create(data) {
    return this.apiService.post("teams", data).pipe(switchMap((res) => this.callGetList().pipe(map(() => res))));
  }
  edit(id, data) {
    return this.apiService.patch(`teams/${id}`, data).pipe(switchMap(() => this.callGetList()));
  }
  delete(id) {
    return this.apiService.delete(`teams/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  updateTeam(value) {
    this.team = value;
    this.team$.next(this.team);
  }
  updateTotalTeam(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function TeamService_Factory(t) {
      return new (t || _TeamService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/directory/team/pages/attendance-form/attendance-form.component.ts
var _forTrack0 = ($index, $item) => $item.dateStr;
var _c0 = () => ({ minWidth: "16rem" });
var _c1 = () => ({ width: "100%", minWidth: "11rem" });
var _c2 = () => ({ width: "4.5rem" });
function AttendanceFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3, "\xB7");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.team.name, " ", ctx_r0.team.surname, "");
  }
}
function AttendanceFormComponent_For_172_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 64);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.valdeoWednesdayNth === 2 ? "Valdeo 2.\xBA mi\xE9." : "Valdeo 1.er mi\xE9.")("rounded", true);
  }
}
function AttendanceFormComponent_For_172_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "p-checkbox", 75);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_For_172_Conditional_5_Template_p_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.domingoTrabajoRecuperacion, $event) || (row_r4.domingoTrabajoRecuperacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AttendanceFormComponent_For_172_Conditional_5_Template_p_checkbox_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r3);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDomingoRecuperaChange(row_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275text(3, "Domingo trabajado (recup.)");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r4.domingoTrabajoRecuperacion);
    \u0275\u0275property("binary", true)("inputId", "dom-rec-" + row_r4.dateStr);
    \u0275\u0275advance();
    \u0275\u0275property("for", "dom-rec-" + row_r4.dateStr);
  }
}
function AttendanceFormComponent_For_172_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 66);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function AttendanceFormComponent_For_172_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-calendar", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_For_172_Conditional_13_Template_p_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.checkInTime, $event) || (row_r4.checkInTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AttendanceFormComponent_For_172_Conditional_13_Template_p_calendar_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTimeChange(row_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r4.checkInTime);
    \u0275\u0275property("timeOnly", true)("showIcon", true)("inputStyle", \u0275\u0275pureFunction0(4, _c2));
  }
}
function AttendanceFormComponent_For_172_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AttendanceFormComponent_For_172_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ideal salida: ", row_r4.targetExitTimeStr, "");
  }
}
function AttendanceFormComponent_For_172_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-calendar", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_For_172_Conditional_16_Template_p_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.checkOutTime, $event) || (row_r4.checkOutTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AttendanceFormComponent_For_172_Conditional_16_Template_p_calendar_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTimeChange(row_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, AttendanceFormComponent_For_172_Conditional_16_Conditional_1_Template, 2, 1, "small", 79);
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r4.checkOutTime);
    \u0275\u0275property("timeOnly", true)("showIcon", true)("inputStyle", \u0275\u0275pureFunction0(5, _c2));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, row_r4.targetExitTimeStr ? 1 : -1);
  }
}
function AttendanceFormComponent_For_172_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AttendanceFormComponent_For_172_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.delayMinutes);
  }
}
function AttendanceFormComponent_For_172_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function AttendanceFormComponent_For_172_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 73);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function AttendanceFormComponent_For_172_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 81);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function AttendanceFormComponent_For_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AttendanceFormComponent_For_172_Conditional_4_Template, 1, 2, "p-tag", 64)(5, AttendanceFormComponent_For_172_Conditional_5_Template, 4, 4, "div", 65)(6, AttendanceFormComponent_For_172_Conditional_6_Template, 1, 1, "p-tag", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 67);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "p-dropdown", 68);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_For_172_Template_p_dropdown_ngModelChange_11_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.status, $event) || (row_r4.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function AttendanceFormComponent_For_172_Template_p_dropdown_onChange_11_listener() {
      const row_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStatusChange(row_r4));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, AttendanceFormComponent_For_172_Conditional_13_Template, 1, 5, "p-calendar", 69)(14, AttendanceFormComponent_For_172_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, AttendanceFormComponent_For_172_Conditional_16_Template, 2, 6)(17, AttendanceFormComponent_For_172_Conditional_17_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, AttendanceFormComponent_For_172_Conditional_19_Template, 2, 1, "span", 70)(20, AttendanceFormComponent_For_172_Conditional_20_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "textarea", 71);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_For_172_Template_textarea_ngModelChange_22_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.note, $event) || (row_r4.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 72);
    \u0275\u0275template(24, AttendanceFormComponent_For_172_Conditional_24_Template, 1, 1, "p-tag", 73)(25, AttendanceFormComponent_For_172_Conditional_25_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "button", 74);
    \u0275\u0275listener("click", function AttendanceFormComponent_For_172_Template_button_click_27_listener() {
      const row_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveRow(row_r4));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("row-sunday", row_r4.isSunday)("row-valdeo", row_r4.isValdeo)("row-domingo-recupera", row_r4.isSunday && (row_r4.domingoTrabajoRecuperacion || ctx_r0.showTimesFor(row_r4)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.day);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, row_r4.isValdeo ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, row_r4.isSunday ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, row_r4.isSunday && (row_r4.domingoTrabajoRecuperacion || ctx_r0.showTimesFor(row_r4)) ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.weekdayLabel);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c1));
    \u0275\u0275property("options", ctx_r0.statusOptions);
    \u0275\u0275twoWayProperty("ngModel", row_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ctx_r0.showTimesFor(row_r4) ? 13 : 14);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(16, ctx_r0.showTimesFor(row_r4) ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(19, row_r4.delayMinutes > 0 ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", row_r4.note);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(24, row_r4.hasRecord ? 24 : 25);
    \u0275\u0275advance(3);
    \u0275\u0275property("loading", row_r4.saving)("label", row_r4.saving ? "" : "Guardar");
  }
}
var MONTH_NAMES_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
var WEEKDAY_SHORT_ES = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
var AttendanceFormComponent = class _AttendanceFormComponent {
  constructor() {
    this.attendanceService = inject(AttendanceService);
    this.teamService = inject(TeamService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.datePipe = inject(DatePipe);
    this.messageService = inject(MessageService);
    this.teamId = 0;
    this.team = null;
    this.viewMonth = (/* @__PURE__ */ new Date()).getMonth();
    this.viewYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.monthRows = [];
    this.attendanceCache = {};
    this.loadedMonthKey = "";
    this.domingoRecuperaMap = {};
    this.stats = {
      puntual: 0,
      tolerancia: 0,
      tarde: 0,
      falta: 0,
      descanso: 0,
      vacaciones: 0,
      recuperacion: 0,
      valdeo: 0,
      domingosEnPeriodo: 0,
      domingoTrabajoRecuperacion: 0
    };
    this.quincenaView = "full";
    this.quincenaOptions = [
      { label: "Mes completo", value: "full" },
      { label: "1\xAA quincena (1\u201315)", value: "q1" },
      { label: "2\xAA quincena (16\u2013fin)", value: "q2" }
    ];
    this.valdeoWednesdayNth = 1;
    this.valdeoNthOptions = [
      { label: "Valdeo: 1.er mi\xE9rcoles", value: 1 },
      { label: "Valdeo: 2.\xBA mi\xE9rcoles", value: 2 }
    ];
    this.statusOptions = [
      { label: "Presente (puntual)", value: "PUNTUAL" },
      { label: "Presente (tolerancia 8:00\u20138:10)", value: "TOLERANCIA" },
      { label: "Tardanza", value: "TARDE" },
      { label: "Falta", value: "FALTA" },
      { label: "Descanso", value: "DESCANSO" },
      { label: "Vacaciones", value: "VACACIONES" },
      { label: "D\xEDa recuperado", value: "RECUPERACION" },
      { label: "Valdeo (mensual)", value: "VALDEO" }
    ];
    this.SHIFT_DURATION_MINUTES = 11 * 60 + 30;
    this.debtNotePattern = /\s*\[Debe:[^\]]+\]/g;
  }
  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const raw = params.get("teamId");
      const id = raw ? Number(raw) : 0;
      if (!id || Number.isNaN(id)) {
        this.messageService.add({
          severity: "error",
          summary: "Ruta inv\xE1lida",
          detail: "No se indic\xF3 un colaborador."
        });
        return;
      }
      const changed = this.teamId !== id;
      this.teamId = id;
      if (changed) {
        this.resetMonthToCurrent();
        this.loadedMonthKey = "";
        this.attendanceCache = {};
      }
      this.loadTeam();
      this.loadAttendanceMonth();
    });
  }
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
  get monthTitle() {
    return `${MONTH_NAMES_ES[this.viewMonth]} ${this.viewYear}`;
  }
  get visibleMonthRows() {
    const { start, end } = this.quincenaDayRange();
    return this.monthRows.filter((r) => r.day >= start && r.day <= end);
  }
  get quincenaLabel() {
    if (this.quincenaView === "q1") {
      return "1\xAA quincena (d\xEDas 1\u201315)";
    }
    if (this.quincenaView === "q2") {
      const last = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
      return `2\xAA quincena (d\xEDas 16\u2013${last})`;
    }
    return "Mes completo";
  }
  quincenaDayRange() {
    const last = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    if (this.quincenaView === "q1") {
      return { start: 1, end: 15 };
    }
    if (this.quincenaView === "q2") {
      return { start: 16, end: last };
    }
    return { start: 1, end: last };
  }
  onQuincenaViewChange() {
    const raw = this.quincenaView;
    this.quincenaView = raw === "q1" || raw === "q2" || raw === "full" ? raw : "full";
    this.saveQuincenaViewForMonth();
    this.recalcStatsFromCache();
  }
  onDomingoRecuperaChange(row) {
    const map2 = __spreadValues({}, this.domingoRecuperaMap);
    if (row.domingoTrabajoRecuperacion) {
      map2[row.dateStr] = true;
    } else {
      delete map2[row.dateStr];
    }
    this.domingoRecuperaMap = map2;
    localStorage.setItem(this.domingoRecuperaStorageKey(), JSON.stringify(this.domingoRecuperaMap));
    this.recalcStatsFromCache();
  }
  goBack() {
    void this.router.navigate(["/directory/team"]);
  }
  prevMonth() {
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear--;
    } else {
      this.viewMonth--;
    }
    this.loadValdeoNthForMonth();
    this.loadAttendanceMonth();
  }
  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear++;
    } else {
      this.viewMonth++;
    }
    this.loadValdeoNthForMonth();
    this.loadAttendanceMonth();
  }
  onValdeoNthChange() {
    this.valdeoWednesdayNth = Number(this.valdeoWednesdayNth) === 2 ? 2 : 1;
    this.saveValdeoNthForMonth();
    this.buildMonthRows();
  }
  onStatusChange(row) {
    if (row.isSunday && row.status !== "DESCANSO" && row.status !== "VACACIONES") {
      this.messageService.add({
        severity: "info",
        summary: "Domingo",
        detail: "Los domingos suelen registrarse como descanso fijo.",
        life: 2500
      });
    }
    this.calculateDelayForRow(row, false);
  }
  onTimeChange(row) {
    this.calculateDelayForRow(row, true);
  }
  saveRow(row) {
    this.calculateDelayForRow(row, true);
    const timeInStr = row.checkInTime ? this.datePipe.transform(row.checkInTime, "HH:mm") : null;
    const timeOutStr = row.checkOutTime ? this.datePipe.transform(row.checkOutTime, "HH:mm") : null;
    const payload = {
      team_id: this.teamId,
      date: row.dateStr,
      status: row.status,
      check_in_time: timeInStr,
      check_out_time: timeOutStr,
      delay_minutes: row.delayMinutes,
      notes: row.note
    };
    row.saving = true;
    this.attendanceService.create(payload).subscribe({
      next: (res) => {
        row.saving = false;
        if (res?.data) {
          this.attendanceCache[row.dateStr] = res.data;
          this.applyRecordToRow(row, res.data);
          this.recalcStatsFromCache();
          this.messageService.add({
            severity: "success",
            summary: "Guardado",
            detail: `${row.dateStr} actualizado.`,
            life: 2e3
          });
        } else {
          this.loadedMonthKey = "";
          this.loadAttendanceMonth();
        }
      },
      error: (err) => {
        row.saving = false;
        console.error(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "No se pudo guardar la asistencia."
        });
      }
    });
  }
  showTimesFor(row) {
    return row.status === "PUNTUAL" || row.status === "TARDE" || row.status === "TOLERANCIA" || row.status === "RECUPERACION";
  }
  loadTeam() {
    this.teamService.getOne(this.teamId).subscribe({
      next: (t) => this.team = new Team(t),
      error: () => {
        this.messageService.add({
          severity: "warn",
          summary: "Colaborador",
          detail: "No se pudo cargar el nombre del colaborador."
        });
      }
    });
  }
  resetMonthToCurrent() {
    const n = /* @__PURE__ */ new Date();
    this.viewMonth = n.getMonth();
    this.viewYear = n.getFullYear();
  }
  loadAttendanceMonth() {
    this.loadValdeoNthForMonth();
    this.loadQuincenaViewForMonth();
    this.domingoRecuperaMap = this.readDomingoRecuperaMap();
    const key = `${this.viewYear}-${this.viewMonth}`;
    if (this.loadedMonthKey === key) {
      this.buildMonthRows();
      this.recalcStatsFromCache();
      return;
    }
    this.attendanceService.getAttendance(this.teamId, this.viewMonth + 1, this.viewYear).subscribe({
      next: (res) => {
        this.attendanceCache = res?.data ?? {};
        this.loadedMonthKey = key;
        this.buildMonthRows();
        this.recalcStatsFromCache();
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "No se pudo cargar el mes."
        });
      }
    });
  }
  buildMonthRows() {
    const lastDay = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    const valdeoDate = this.nthWednesdayOfMonth(this.viewYear, this.viewMonth, this.valdeoWednesdayNth);
    const valdeoStr = this.datePipe.transform(valdeoDate, "yyyy-MM-dd");
    const domingoMap = this.readDomingoRecuperaMap();
    this.domingoRecuperaMap = domingoMap;
    const rows = [];
    for (let d = 1; d <= lastDay; d++) {
      const date = new Date(this.viewYear, this.viewMonth, d);
      const dateStr = this.datePipe.transform(date, "yyyy-MM-dd");
      const wd = date.getDay();
      const isSunday = wd === 0;
      const isValdeo = dateStr === valdeoStr;
      let record = this.attendanceCache[dateStr];
      if (!record) {
        record = this.attendanceCache[dateStr + " 00:00:00"];
      }
      const row = {
        dateStr,
        day: d,
        weekdayLabel: WEEKDAY_SHORT_ES[wd],
        weekday: wd,
        isSunday,
        isValdeo,
        domingoTrabajoRecuperacion: !!domingoMap[dateStr],
        status: "PUNTUAL",
        checkInTime: null,
        checkOutTime: null,
        delayMinutes: 0,
        owedMinutes: 0,
        note: "",
        saving: false,
        targetExitTimeStr: "",
        hasRecord: false
      };
      this.applyRecordToRow(row, record);
      rows.push(row);
    }
    this.monthRows = rows;
  }
  applyRecordToRow(row, record) {
    if (!record) {
      row.hasRecord = false;
      if (row.isSunday) {
        row.status = "DESCANSO";
        row.checkInTime = null;
        row.checkOutTime = null;
      } else {
        row.status = "PUNTUAL";
        row.checkInTime = this.defaultMorning();
        row.checkOutTime = null;
      }
      row.note = "";
      row.delayMinutes = 0;
      row.owedMinutes = 0;
      row.targetExitTimeStr = "";
      this.calculateDelayForRow(row, false);
      return;
    }
    row.hasRecord = true;
    row.status = record.status;
    row.note = record.notes || "";
    row.checkInTime = record.check_in_time ? this.parseTimeString(record.check_in_time) : null;
    row.checkOutTime = record.check_out_time ? this.parseTimeString(record.check_out_time) : null;
    row.delayMinutes = record.delay_minutes || 0;
    this.calculateDelayForRow(row, false);
  }
  recalcStatsFromCache() {
    const { start, end } = this.quincenaDayRange();
    this.stats = {
      puntual: 0,
      tolerancia: 0,
      tarde: 0,
      falta: 0,
      descanso: 0,
      vacaciones: 0,
      recuperacion: 0,
      valdeo: 0,
      domingosEnPeriodo: 0,
      domingoTrabajoRecuperacion: 0
    };
    for (let d = start; d <= end; d++) {
      const dt = new Date(this.viewYear, this.viewMonth, d);
      if (dt.getDay() === 0) {
        this.stats.domingosEnPeriodo++;
      }
    }
    for (const key of Object.keys(this.attendanceCache)) {
      const dayKey = key.includes(" ") ? key.slice(0, 10) : key;
      if (!this.dateStrInVisibleMonth(dayKey)) {
        continue;
      }
      const dom = this.dayOfMonthFromDateStr(dayKey);
      if (dom < start || dom > end) {
        continue;
      }
      const rec = this.attendanceCache[key];
      const st = rec?.status;
      if (st === "PUNTUAL") {
        this.stats.puntual++;
      } else if (st === "TOLERANCIA") {
        this.stats.tolerancia++;
      } else if (st === "TARDE") {
        this.stats.tarde++;
      } else if (st === "FALTA") {
        this.stats.falta++;
      } else if (st === "DESCANSO") {
        this.stats.descanso++;
      } else if (st === "VACACIONES") {
        this.stats.vacaciones++;
      } else if (st === "RECUPERACION") {
        this.stats.recuperacion++;
      } else if (st === "VALDEO") {
        this.stats.valdeo++;
      }
    }
    for (let d = start; d <= end; d++) {
      const dt = new Date(this.viewYear, this.viewMonth, d);
      if (dt.getDay() !== 0) {
        continue;
      }
      const ds = this.datePipe.transform(dt, "yyyy-MM-dd");
      const flagged = !!this.domingoRecuperaMap[ds];
      let rec = this.attendanceCache[ds];
      if (!rec) {
        rec = this.attendanceCache[ds + " 00:00:00"];
      }
      const worked = rec && ["PUNTUAL", "TARDE", "TOLERANCIA", "RECUPERACION"].includes(rec.status);
      if (flagged || worked) {
        this.stats.domingoTrabajoRecuperacion++;
      }
    }
  }
  dayOfMonthFromDateStr(dateStr) {
    return Number(dateStr.slice(8, 10));
  }
  dateStrInVisibleMonth(dateStr) {
    const parts = dateStr.split("-");
    if (parts.length < 3) {
      return false;
    }
    const y = Number(parts[0]);
    const m = Number(parts[1]);
    return y === this.viewYear && m === this.viewMonth + 1;
  }
  nthWednesdayOfMonth(year, month, nth) {
    let count = 0;
    for (let d = 1; d <= 31; d++) {
      const dt = new Date(year, month, d);
      if (dt.getMonth() !== month) {
        break;
      }
      if (dt.getDay() === 3) {
        count++;
        if (count === nth) {
          return dt;
        }
      }
    }
    return new Date(year, month, 1);
  }
  valdeoNthStorageKey() {
    return `nm-valdeo-nth-${this.viewYear}-${String(this.viewMonth + 1).padStart(2, "0")}`;
  }
  loadValdeoNthForMonth() {
    const raw = localStorage.getItem(this.valdeoNthStorageKey());
    this.valdeoWednesdayNth = raw === "2" ? 2 : 1;
  }
  saveValdeoNthForMonth() {
    localStorage.setItem(this.valdeoNthStorageKey(), String(this.valdeoWednesdayNth));
  }
  domingoRecuperaStorageKey() {
    return `nm-domingo-recupera-${this.teamId}-${this.viewYear}-${String(this.viewMonth + 1).padStart(2, "0")}`;
  }
  readDomingoRecuperaMap() {
    try {
      const raw = localStorage.getItem(this.domingoRecuperaStorageKey());
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }
  quincenaViewStorageKey() {
    return `nm-quincena-view-${this.teamId}-${this.viewYear}-${String(this.viewMonth + 1).padStart(2, "0")}`;
  }
  loadQuincenaViewForMonth() {
    const raw = localStorage.getItem(this.quincenaViewStorageKey());
    this.quincenaView = raw === "q1" || raw === "q2" || raw === "full" ? raw : "full";
  }
  saveQuincenaViewForMonth() {
    localStorage.setItem(this.quincenaViewStorageKey(), this.quincenaView);
  }
  defaultMorning() {
    const t = /* @__PURE__ */ new Date();
    t.setHours(8, 0, 0, 0);
    return t;
  }
  /**
   * @param autoStatusFromTime si es true, ajusta PUNTUAL / TOLERANCIA / TARDE según 8:00 y ventana de 10 min (al cambiar hora o al guardar).
   */
  calculateDelayForRow(row, autoStatusFromTime = true) {
    row.targetExitTimeStr = "";
    row.owedMinutes = 0;
    const usesEntryRules = row.status === "PUNTUAL" || row.status === "TARDE" || row.status === "TOLERANCIA";
    if (row.checkInTime && usesEntryRules) {
      const entryTime = new Date(row.checkInTime);
      const limit = new Date(entryTime);
      limit.setHours(8, 0, 0, 0);
      const toleranceEnd = new Date(limit);
      toleranceEnd.setMinutes(toleranceEnd.getMinutes() + 10);
      if (entryTime <= limit) {
        row.delayMinutes = 0;
        if (autoStatusFromTime) {
          row.status = "PUNTUAL";
        }
      } else if (entryTime <= toleranceEnd) {
        row.delayMinutes = Math.floor((entryTime.getTime() - limit.getTime()) / 6e4);
        if (autoStatusFromTime) {
          row.status = "TOLERANCIA";
        }
      } else {
        row.delayMinutes = Math.floor((entryTime.getTime() - limit.getTime()) / 6e4);
        if (autoStatusFromTime) {
          row.status = "TARDE";
        }
      }
    } else if (!row.checkInTime && usesEntryRules) {
      row.delayMinutes = 0;
    } else if (!usesEntryRules) {
      row.delayMinutes = 0;
    }
    const usesShiftExit = row.status === "PUNTUAL" || row.status === "TARDE" || row.status === "TOLERANCIA" || row.status === "RECUPERACION";
    if (row.checkInTime && usesShiftExit) {
      const entryTime = new Date(row.checkInTime);
      const targetExitTime = new Date(entryTime.getTime() + this.SHIFT_DURATION_MINUTES * 6e4);
      row.targetExitTimeStr = this.datePipe.transform(targetExitTime, "h:mm a") || "";
      if (row.checkOutTime) {
        const actualExitTime = new Date(row.checkOutTime);
        if (actualExitTime < targetExitTime) {
          const diffMs = targetExitTime.getTime() - actualExitTime.getTime();
          row.owedMinutes = Math.floor(diffMs / 6e4);
        }
      }
    }
    this.syncOwedMinutesNote(row);
  }
  /** Convierte minutos totales a texto legible (ej. 257 → «4 h 17 min»). */
  formatOwedHuman(totalMinutes) {
    const n = Math.max(0, Math.floor(totalMinutes));
    if (n === 0) {
      return "";
    }
    const h = Math.floor(n / 60);
    const m = n % 60;
    if (h === 0) {
      return `${m} min`;
    }
    if (m === 0) {
      return `${h} h`;
    }
    return `${h} h ${m} min`;
  }
  goPayments() {
    void this.router.navigate(["/directory/team/pagos", this.teamId]);
  }
  /** Quita y vuelve a escribir el sufijo [Debe: …] según horas actuales. */
  syncOwedMinutesNote(row) {
    const base = (row.note || "").replace(this.debtNotePattern, "").trimEnd();
    if (row.owedMinutes > 0) {
      const debt = this.formatOwedHuman(row.owedMinutes);
      row.note = base ? `${base} [Debe: ${debt}]` : `[Debe: ${debt}]`;
    } else {
      row.note = base;
    }
  }
  parseTimeString(timeStr) {
    const date = /* @__PURE__ */ new Date();
    const normalized = timeStr.length > 5 ? timeStr.slice(0, 5) : timeStr;
    const [hours, minutes] = normalized.split(":");
    date.setHours(+hours, +minutes || 0, 0, 0);
    return date;
  }
  static {
    this.\u0275fac = function AttendanceFormComponent_Factory(t) {
      return new (t || _AttendanceFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceFormComponent, selectors: [["app-attendance-form"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe, MessageService]), \u0275\u0275StandaloneFeature], decls: 173, vars: 20, consts: [["position", "top-right"], [1, "p-3", "md:p-4"], [1, "attendance-toolbar", "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "gap-3", "p-3", "mb-4"], [1, "flex", "align-items-center", "gap-2", "flex-wrap"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", "label", "Equipo", 1, "p-button-text", "p-button-secondary", 3, "click"], [1, "text-300", "hidden", "md:inline"], [1, "text-xl", "md:text-2xl", "font-bold", "text-900", "m-0"], [1, "text-600", "m-0", "mt-1", "text-sm"], [1, "flex", "align-items-center", "gap-2"], ["pButton", "", "type", "button", "icon", "pi pi-wallet", "label", "Pagos", "pTooltip", "Ir al registro de pagos del mismo mes", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-chevron-left", "pTooltip", "Mes anterior", 1, "p-button-outlined", 3, "click"], [1, "font-bold", "text-900", "min-w-max", "text-center", "px-2"], ["pButton", "", "type", "button", "icon", "pi pi-chevron-right", "pTooltip", "Mes siguiente", 1, "p-button-outlined", 3, "click"], [1, "surface-card", "border-round", "p-3", "mb-4", "flex", "flex-column", "md:flex-row", "md:align-items-center", "gap-3"], [1, "font-semibold", "text-900", "whitespace-nowrap"], ["optionLabel", "label", "optionValue", "value", "appendTo", "body", "placeholder", "Cu\xE1l mi\xE9rcoles es Valdeo", 3, "ngModelChange", "options", "ngModel"], [1, "text-600", "md:ml-2"], [1, "surface-card", "border-round", "p-3", "mb-4", "flex", "flex-column", "lg:flex-row", "lg:align-items-center", "gap-3"], ["optionLabel", "label", "optionValue", "value", "styleClass", "flex-wrap", 3, "ngModelChange", "options", "ngModel"], [1, "text-xs", "text-600", "mb-2", "m-0"], [1, "grid", "mb-4"], [1, "col-6", "md:col-2"], [1, "stat-card", "surface-card", "p-3", "h-full"], [1, "stat-label"], [1, "stat-value", "text-green-600"], [1, "stat-value", "text-cyan-600"], [1, "stat-value", "text-orange-600"], [1, "stat-value", "text-red-600"], [1, "stat-value", "text-blue-600"], [1, "stat-value", "text-teal-600"], [1, "stat-value", "text-indigo-600"], [1, "col-12", "md:col-4"], [1, "stat-card", "surface-card", "p-3", "flex", "align-items-center", "gap-3", "h-full"], [1, "pi", "pi-calendar", "text-3xl", "text-blue-500"], [1, "stat-value", "text-blue-500", "m-0"], [1, "text-600"], [1, "pi", "pi-replay", "text-3xl", "text-purple-500"], [1, "stat-value", "text-purple-600", "m-0"], [1, "pi", "pi-sun", "text-3xl", "text-400"], [1, "stat-value", "text-600", "m-0"], [1, "col-12"], [1, "legend", "surface-card", "p-3", "h-full", "flex", "align-items-center"], [1, "legend-dot", "bg-green-500"], [1, "legend-dot", "bg-cyan-500"], [1, "legend-dot", "bg-orange-400"], [1, "legend-dot", "bg-red-500"], [1, "legend-dot", "bg-blue-400"], [1, "legend-dot", "bg-teal-500"], [1, "legend-dot", "bg-indigo-500"], [1, "legend-dot", "bg-purple-500"], [1, "month-table-wrap", "shadow-1"], [1, "overflow-auto", 2, "max-height", "min(70vh, 720px)"], [1, "month-table"], [2, "min-width", "7.5rem"], [2, "width", "3rem"], [2, "min-width", "12rem"], [2, "min-width", "7rem"], [2, "min-width", "5rem"], [2, "width", "6rem"], [2, "width", "7rem"], [3, "row-sunday", "row-valdeo", "row-domingo-recupera"], [1, "font-semibold", "text-900"], [1, "mx-2"], [1, "day-num"], ["severity", "info", "styleClass", "text-xs block mt-1 w-fit", 3, "value", "rounded"], [1, "flex", "align-items-center", "gap-2", "mt-2", "flex-wrap", "surface-100", "border-round", "p-2"], ["severity", "success", "value", "Recuperaci\xF3n", "styleClass", "text-xs mt-1 block w-fit", 3, "rounded"], [1, "text-600", "font-medium"], ["optionLabel", "label", "optionValue", "value", "appendTo", "body", "placeholder", "Estado", 3, "ngModelChange", "onChange", "options", "ngModel"], ["hourFormat", "24", "icon", "pi pi-clock", "appendTo", "body", 3, "ngModel", "timeOnly", "showIcon", "inputStyle"], [1, "font-bold", "text-orange-600"], ["pInputTextarea", "", "rows", "2", "placeholder", "Observaci\xF3n\u2026", 1, "w-full", "text-sm", 3, "ngModelChange", "ngModel"], [1, "text-center"], ["severity", "success", "value", "S\xED", 3, "rounded"], ["pButton", "", "type", "button", "icon", "pi pi-save", "pTooltip", "Guardar este d\xEDa", "tooltipPosition", "left", 1, "p-button-sm", "w-full", 3, "click", "loading", "label"], [3, "ngModelChange", "ngModel", "binary", "inputId"], [1, "text-xs", "cursor-pointer", "m-0", "line-height-2", 3, "for"], ["hourFormat", "24", "icon", "pi pi-clock", "appendTo", "body", 3, "ngModelChange", "ngModel", "timeOnly", "showIcon", "inputStyle"], [1, "text-400", "text-sm"], [1, "block", "text-600", "mt-1"], [1, "text-500"], ["severity", "secondary", "value", "No", 3, "rounded"]], template: function AttendanceFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "p-toast", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        \u0275\u0275listener("click", function AttendanceFormComponent_Template_button_click_4_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "h1", 6);
        \u0275\u0275text(9, " Asistencia mensual ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275template(11, AttendanceFormComponent_Conditional_11_Template, 4, 2);
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "Vista completa del mes: registra y revisa sin abrir el calendario d\xEDa a d\xEDa.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 8)(15, "button", 9);
        \u0275\u0275listener("click", function AttendanceFormComponent_Template_button_click_15_listener() {
          return ctx.goPayments();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function AttendanceFormComponent_Template_button_click_16_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function AttendanceFormComponent_Template_button_click_19_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 13)(21, "span", 14);
        \u0275\u0275text(22, "Valdeo (mi\xE9rcoles del mes)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p-dropdown", 15);
        \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_Template_p_dropdown_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.valdeoWednesdayNth, $event) || (ctx.valdeoWednesdayNth = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AttendanceFormComponent_Template_p_dropdown_ngModelChange_23_listener() {
          return ctx.onValdeoNthChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "small", 16);
        \u0275\u0275text(25, "La fila del mi\xE9rcoles elegido se resalta en la tabla.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 17)(27, "span", 14);
        \u0275\u0275text(28, "Pago quincenal (indicadores)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p-selectButton", 18);
        \u0275\u0275twoWayListener("ngModelChange", function AttendanceFormComponent_Template_p_selectButton_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.quincenaView, $event) || (ctx.quincenaView = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AttendanceFormComponent_Template_p_selectButton_ngModelChange_29_listener() {
          return ctx.onQuincenaViewChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p", 19);
        \u0275\u0275text(31, " Resumen seg\xFAn registros guardados en ");
        \u0275\u0275elementStart(32, "strong");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, ". Entrada ");
        \u0275\u0275elementStart(35, "strong");
        \u0275\u0275text(36, "hasta las 8:00");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " = puntual; entre ");
        \u0275\u0275elementStart(38, "strong");
        \u0275\u0275text(39, "8:01 y 8:10");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " = tolerancia; desde ");
        \u0275\u0275elementStart(41, "strong");
        \u0275\u0275text(42, "8:11");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " = tardanza. En ");
        \u0275\u0275elementStart(44, "strong");
        \u0275\u0275text(45, "D\xEDa recuperado");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " puedes registrar entrada y salida; el texto ");
        \u0275\u0275elementStart(47, "strong");
        \u0275\u0275text(48, "[Debe: X h Y min]");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " en observaci\xF3n se actualiza al cambiar las horas. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 20)(51, "div", 21)(52, "div", 22)(53, "div", 23);
        \u0275\u0275text(54, "Puntuales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 24);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 21)(58, "div", 22)(59, "div", 23);
        \u0275\u0275text(60, "Tolerancia (8:00\u20138:10)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 25);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 21)(64, "div", 22)(65, "div", 23);
        \u0275\u0275text(66, "Tardanzas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 26);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 21)(70, "div", 22)(71, "div", 23);
        \u0275\u0275text(72, "Faltas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 27);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 21)(76, "div", 22)(77, "div", 23);
        \u0275\u0275text(78, "Descansos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 28);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "div", 21)(82, "div", 22)(83, "div", 23);
        \u0275\u0275text(84, "Recuperados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 29);
        \u0275\u0275text(86);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 21)(88, "div", 22)(89, "div", 23);
        \u0275\u0275text(90, "Valdeo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 30);
        \u0275\u0275text(92);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "div", 20)(94, "div", 31)(95, "div", 32);
        \u0275\u0275element(96, "i", 33);
        \u0275\u0275elementStart(97, "div")(98, "div", 23);
        \u0275\u0275text(99, "Domingos en periodo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 34);
        \u0275\u0275text(101);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "small", 35);
        \u0275\u0275text(103, "D\xEDas domingo calendario en el rango");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(104, "div", 31)(105, "div", 32);
        \u0275\u0275element(106, "i", 36);
        \u0275\u0275elementStart(107, "div")(108, "div", 23);
        \u0275\u0275text(109, "Domingo trabajado (recup.)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 37);
        \u0275\u0275text(111);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "small", 35);
        \u0275\u0275text(113, "Casilla en la columna D\xEDa o asistencia laboral en domingo");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(114, "div", 31)(115, "div", 32);
        \u0275\u0275element(116, "i", 38);
        \u0275\u0275elementStart(117, "div")(118, "div", 23);
        \u0275\u0275text(119, "Vacaciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 39);
        \u0275\u0275text(121);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(122, "div", 40)(123, "div", 41)(124, "span");
        \u0275\u0275element(125, "span", 42);
        \u0275\u0275text(126, " Puntual");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "span");
        \u0275\u0275element(128, "span", 43);
        \u0275\u0275text(129, " Tolerancia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "span");
        \u0275\u0275element(131, "span", 44);
        \u0275\u0275text(132, " Tarde");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "span");
        \u0275\u0275element(134, "span", 45);
        \u0275\u0275text(135, " Falta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "span");
        \u0275\u0275element(137, "span", 46);
        \u0275\u0275text(138, " Descanso");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "span");
        \u0275\u0275element(140, "span", 47);
        \u0275\u0275text(141, " Recuperado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "span");
        \u0275\u0275element(143, "span", 48);
        \u0275\u0275text(144, " Valdeo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "span");
        \u0275\u0275element(146, "span", 49);
        \u0275\u0275text(147, " Domingo recuperaci\xF3n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(148, "div", 50)(149, "div", 51)(150, "table", 52)(151, "thead")(152, "tr")(153, "th", 53);
        \u0275\u0275text(154, "D\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "th", 54);
        \u0275\u0275text(156, "Sem.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "th", 55);
        \u0275\u0275text(158, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "th", 56);
        \u0275\u0275text(160, "Entrada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "th", 56);
        \u0275\u0275text(162, "Salida");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "th", 57);
        \u0275\u0275text(164, "Tarde (min)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "th", 55);
        \u0275\u0275text(166, "Observaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "th", 58);
        \u0275\u0275text(168, "Servidor");
        \u0275\u0275elementEnd();
        \u0275\u0275element(169, "th", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "tbody");
        \u0275\u0275repeaterCreate(171, AttendanceFormComponent_For_172_Template, 28, 23, "tr", 60, _forTrack0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.team ? 11 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.monthTitle);
        \u0275\u0275advance(5);
        \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c0));
        \u0275\u0275property("options", ctx.valdeoNthOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.valdeoWednesdayNth);
        \u0275\u0275advance(6);
        \u0275\u0275property("options", ctx.quincenaOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.quincenaView);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.quincenaLabel);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.stats.puntual);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats.tolerancia);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats.tarde);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats.falta);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats.descanso);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats.recuperacion);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats.valdeo);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ctx.stats.domingosEnPeriodo, " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.stats.domingoTrabajoRecuperacion, " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.stats.vacaciones);
        \u0275\u0275advance(50);
        \u0275\u0275repeater(ctx.visibleMonthRows);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      CalendarModule,
      Calendar,
      ButtonDirective,
      DropdownModule,
      Dropdown,
      InputTextareaModule,
      InputTextarea,
      InputNumberModule,
      ButtonModule,
      CheckboxModule,
      Checkbox,
      SelectButtonModule,
      SelectButton,
      TagModule,
      Tag,
      ToastModule,
      Toast,
      TooltipModule,
      Tooltip
    ], styles: ["\n\n.attendance-toolbar[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: var(--surface-card, #fff);\n  border: 1px solid var(--surface-border, #e5e7eb);\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid var(--surface-border, #e5e7eb);\n  transition: box-shadow 0.2s ease, transform 0.15s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-color-secondary, #64748b);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.month-table-wrap[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid var(--surface-border, #e5e7eb);\n  overflow: hidden;\n  background: var(--surface-card, #fff);\n}\n.month-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.month-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--surface-100, #f1f5f9);\n  padding: 0.75rem 0.5rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-color-secondary, #475569);\n  border-bottom: 2px solid var(--surface-border, #e2e8f0);\n}\n.month-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--surface-border, #f1f5f9);\n  transition: background 0.15s ease;\n}\n.month-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--surface-50, #f8fafc);\n}\n.month-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-sunday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(59, 130, 246, 0.06),\n      transparent);\n}\n.month-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-valdeo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(99, 102, 241, 0.08),\n      transparent);\n}\n.month-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-domingo-recupera[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(168, 85, 247, 0.09),\n      transparent);\n}\n.month-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.4rem;\n  vertical-align: middle;\n}\n.day-num[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--text-color, #0f172a);\n}\n.badge-pill[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.45rem;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  font-size: 0.75rem;\n  color: var(--text-color-secondary, #64748b);\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 0.35rem;\n  vertical-align: middle;\n}\n@media (max-width: 960px) {\n  .month-table-wrap[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .month-table[_ngcontent-%COMP%] {\n    min-width: 720px;\n  }\n}\n/*# sourceMappingURL=attendance-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceFormComponent, { className: "AttendanceFormComponent" });
})();

// src/app/private/directory/team/pages/form/team-form.component.ts
function TeamFormComponent_Conditional_0_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, " Al crear un colaborador se genera un usuario con rol ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Vendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " para iniciar sesi\xF3n; recibir\xE1s el correo y la contrase\xF1a temporal al guardar. ");
    \u0275\u0275elementEnd();
  }
}
function TeamFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("ngSubmit", function TeamFormComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonSaveTeam());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "app-input-text", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "app-input-text", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "app-input-text", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 3);
    \u0275\u0275element(9, "app-input-text", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 3);
    \u0275\u0275element(11, "app-input-select", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, TeamFormComponent_Conditional_0_p_12_Template, 5, 0, "p", 9);
    \u0275\u0275element(13, "button", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(11);
    \u0275\u0275property("options", ctx_r1.warehouses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEdit);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isValid);
  }
}
var TeamFormComponent = class _TeamFormComponent {
  get isEdit() {
    return !!this.dynamicDialogConfig.data?.id;
  }
  constructor(formBuilder, teamService, warehousesService, dynamicDialogRef, dynamicDialogConfig) {
    this.formBuilder = formBuilder;
    this.teamService = teamService;
    this.warehousesService = warehousesService;
    this.dynamicDialogRef = dynamicDialogRef;
    this.dynamicDialogConfig = dynamicDialogConfig;
    this.warehouses = [];
    this.form = this.formBuilder.group({
      dni: ["", [Validators.required, Validators.pattern(/^\d{8}$/)]],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      salary: [""],
      warehouseId: [null, Validators.required]
    });
  }
  ngOnInit() {
    const tenantId = this.tenantIdFromSession();
    this.warehousesService.getAll(tenantId).subscribe((warehouses) => {
      this.warehouses = warehouses;
    });
    if (this.dynamicDialogConfig.data?.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.teamService.getOne(id).subscribe((response) => {
        this.form.patchValue({
          dni: String(response.dni),
          name: response.name,
          surname: response.surname,
          salary: response.salary === null || response.salary === void 0 ? "" : String(response.salary),
          warehouseId: response.warehouseId
        });
      });
    }
  }
  tenantIdFromSession() {
    try {
      const raw = localStorage.getItem("user");
      if (!raw) {
        return void 0;
      }
      const u = JSON.parse(raw);
      const t = u?.tenantId;
      return typeof t === "number" ? t : void 0;
    } catch {
      return void 0;
    }
  }
  get isValid() {
    return this.form.valid;
  }
  buildPayload() {
    const v = this.form.getRawValue();
    const salaryRaw = v.salary?.trim();
    return {
      dni: v.dni.replace(/\D/g, "").slice(0, 8),
      name: v.name.trim(),
      surname: v.surname.trim(),
      salary: salaryRaw === "" || salaryRaw === void 0 ? null : Number(salaryRaw),
      warehouseId: Number(v.warehouseId)
    };
  }
  buttonSaveTeam() {
    if (!this.form.valid) {
      return;
    }
    const payload = this.buildPayload();
    if (this.dynamicDialogConfig.data?.id) {
      const id = this.dynamicDialogConfig.data.id;
      this.teamService.edit(id, payload).subscribe({
        next: () => this.dynamicDialogRef.close({ success: true }),
        error: () => this.dynamicDialogRef.close({
          error: "No se pudo actualizar el colaborador."
        })
      });
    } else {
      this.teamService.create(payload).subscribe({
        next: (res) => this.dynamicDialogRef.close({ success: true, login: res.login }),
        error: () => this.dynamicDialogRef.close({
          error: "No se pudo crear el colaborador."
        })
      });
    }
  }
  static {
    this.\u0275fac = function TeamFormComponent_Factory(t) {
      return new (t || _TeamFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(WarehousesService), \u0275\u0275directiveInject(DynamicDialogRef), \u0275\u0275directiveInject(DynamicDialogConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamFormComponent, selectors: [["app-team-form"]], decls: 1, vars: 1, consts: [[3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "p-fluid", "p-formgrid", "grid"], [1, "col-12"], ["placeholder", "8 d\xEDgitos", "label", "DNI", "controlName", "dni"], ["placeholder", "Nombres", "label", "Nombres", "controlName", "name"], ["placeholder", "Apellidos", "label", "Apellidos", "controlName", "surname"], ["placeholder", "Opcional", "label", "Salario", "controlName", "salary"], ["placeholder", "Seleccione tienda", "label", "Tienda (sucursal)", "controlName", "warehouseId", "for", "warehouse", "id", "warehouse", "optionLabel", "name", "optionValue", "id", 3, "options"], ["class", "col-12 text-600 text-sm m-0", 4, "ngIf"], ["type", "submit", "pButton", "", "label", "Guardar", 1, "mt-3", 3, "disabled"], [1, "col-12", "text-600", "text-sm", "m-0"]], template: function TeamFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TeamFormComponent_Conditional_0_Template, 14, 4, "form", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.form ? 0 : -1);
      }
    }, dependencies: [NgIf, ButtonDirective, \u0275NgNoValidate, NgControlStatusGroup, InputSelectComponent, InputTextComponent, FormGroupDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamFormComponent, { className: "TeamFormComponent" });
})();

// src/app/private/directory/team/pages/team-daily-attendance-dialog/team-daily-attendance-dialog.component.ts
var _forTrack02 = ($index, $item) => $item.teamId;
function TeamDailyAttendanceDialogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner", 13);
  }
}
function TeamDailyAttendanceDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "No hay colaboradoras registradas o no se pudo cargar el listado.");
    \u0275\u0275elementEnd();
  }
}
function TeamDailyAttendanceDialogComponent_Conditional_22_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 19);
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.statusText(row_r1.attendance.status))("severity", ctx_r1.severityFor(row_r1.attendance.status))("rounded", true);
  }
}
function TeamDailyAttendanceDialogComponent_Conditional_22_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 21);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function TeamDailyAttendanceDialogComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TeamDailyAttendanceDialogComponent_Conditional_22_For_2_Conditional_4_Template, 1, 3, "p-tag", 19)(5, TeamDailyAttendanceDialogComponent_Conditional_22_For_2_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", row_r1.name, " ", row_r1.surname, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(4, row_r1.attendance ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.summaryLine(row_r1));
  }
}
function TeamDailyAttendanceDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, TeamDailyAttendanceDialogComponent_Conditional_22_For_2_Template, 8, 4, "div", 16, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rows);
  }
}
var TeamDailyAttendanceDialogComponent = class _TeamDailyAttendanceDialogComponent {
  constructor() {
    this.attendanceService = inject(AttendanceService);
    this.datePipe = inject(DatePipe);
    this.ref = inject(DynamicDialogRef);
    this.selectedDate = /* @__PURE__ */ new Date();
    this.loading = false;
    this.rows = [];
    this.dateStr = "";
  }
  ngOnInit() {
    this.syncDateStr();
    this.loadSummary();
  }
  onDateChange() {
    this.syncDateStr();
    this.loadSummary();
  }
  goToday() {
    this.selectedDate = /* @__PURE__ */ new Date();
    this.syncDateStr();
    this.loadSummary();
  }
  severityFor(status) {
    if (!status) {
      return "secondary";
    }
    const m = {
      PUNTUAL: "success",
      TOLERANCIA: "info",
      TARDE: "warning",
      FALTA: "danger",
      DESCANSO: "info",
      VACACIONES: "secondary",
      RECUPERACION: "success",
      VALDEO: "info"
    };
    return m[status] ?? "secondary";
  }
  statusText(status) {
    const labels = {
      PUNTUAL: "Puntual",
      TOLERANCIA: "Presente (tolerancia)",
      TARDE: "Tarde",
      FALTA: "Falta",
      DESCANSO: "Descanso",
      VACACIONES: "Vacaciones",
      RECUPERACION: "D\xEDa recuperado",
      VALDEO: "Valdeo"
    };
    return labels[status] ?? status;
  }
  summaryLine(row) {
    const fullName = `${row.name} ${row.surname}`.trim();
    if (!row.attendance) {
      return `${fullName}: sin registro de asistencia.`;
    }
    const a = row.attendance;
    const parts = [this.statusText(a.status)];
    if (a.check_in_time) {
      parts.push(`entrada ${a.check_in_time}`);
    }
    if (a.check_out_time) {
      parts.push(`salida ${a.check_out_time}`);
    }
    if (a.delay_minutes > 0) {
      parts.push(`+${a.delay_minutes} min vs 8:00`);
    }
    return `${fullName}: ${parts.join(" \xB7 ")}.`;
  }
  syncDateStr() {
    this.dateStr = this.datePipe.transform(this.selectedDate, "yyyy-MM-dd") ?? "";
  }
  loadSummary() {
    if (!this.dateStr) {
      return;
    }
    this.loading = true;
    this.attendanceService.getDailySummary(this.dateStr).subscribe({
      next: (res) => {
        this.rows = res?.data ?? [];
        this.loading = false;
      },
      error: () => {
        this.rows = [];
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function TeamDailyAttendanceDialogComponent_Factory(t) {
      return new (t || _TeamDailyAttendanceDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamDailyAttendanceDialogComponent, selectors: [["app-team-daily-attendance-dialog"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 23, vars: 10, consts: [[1, "daily-dialog", "grid", "m-0"], [1, "col-12", "lg:col-5"], [1, "surface-card", "border-round", "p-3", "shadow-1", "h-full"], [1, "mt-0", "mb-2", "text-lg", "font-semibold", "text-900"], [1, "text-sm", "text-600", "mt-0", "mb-3"], ["dateFormat", "dd/mm/yy", "styleClass", "w-full large-day-calendar", 3, "ngModelChange", "onSelect", "ngModel", "inline", "showWeek"], [1, "mt-3"], ["pButton", "", "type", "button", "label", "Ir a hoy", "icon", "pi pi-calendar", 1, "p-button-outlined", "w-full", 3, "click"], [1, "text-xs", "text-600", "mt-3", "mb-0"], [1, "col-12", "lg:col-7"], [1, "surface-card", "border-round", "p-3", "shadow-1", "h-full", "flex", "flex-column", 2, "min-height", "420px"], [1, "flex", "justify-content-between", "align-items-center", "mb-3", "gap-2", "flex-wrap"], [1, "m-0", "text-lg", "font-semibold", "text-900"], ["strokeWidth", "4", "styleClass", "w-3rem h-3rem"], [1, "text-600"], [1, "daily-list", "flex", "flex-column", "gap-2", "overflow-auto", "flex-1", "pr-1"], [1, "daily-row", "border-round", "p-3", "surface-ground", "border-1", "border-200", "hover:surface-hover", "transition-colors", "transition-duration-150"], [1, "flex", "justify-content-between", "align-items-start", "gap-2", "flex-wrap"], [1, "font-semibold", "text-900"], [3, "value", "severity", "rounded"], [1, "m-0", "mt-2", "text-sm", "text-700", "line-height-3"], ["value", "Sin registro", "severity", "secondary", 3, "rounded"]], template: function TeamDailyAttendanceDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        \u0275\u0275text(4, "Elegir d\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, " Toca una fecha para ver c\xF3mo marc\xF3 cada colaboradora. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p-calendar", 5);
        \u0275\u0275twoWayListener("ngModelChange", function TeamDailyAttendanceDialogComponent_Template_p_calendar_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
          return $event;
        });
        \u0275\u0275listener("onSelect", function TeamDailyAttendanceDialogComponent_Template_p_calendar_onSelect_7_listener() {
          return ctx.onDateChange();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
        \u0275\u0275listener("click", function TeamDailyAttendanceDialogComponent_Template_button_click_9_listener() {
          return ctx.goToday();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, " Fecha seleccionada: ");
        \u0275\u0275elementStart(12, "strong");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h3", 12);
        \u0275\u0275text(19, "Resumen del equipo");
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, TeamDailyAttendanceDialogComponent_Conditional_20_Template, 1, 0, "p-progressSpinner", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, TeamDailyAttendanceDialogComponent_Conditional_21_Template, 2, 0, "p", 14)(22, TeamDailyAttendanceDialogComponent_Conditional_22_Template, 3, 0, "div", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
        \u0275\u0275property("inline", true)("showWeek", true);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, ctx.selectedDate, "EEEE, d MMM y"));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(20, ctx.loading ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(21, !ctx.loading && ctx.rows.length === 0 ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(22, !ctx.loading && ctx.rows.length > 0 ? 22 : -1);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
      FormsModule,
      NgControlStatus,
      NgModel,
      CalendarModule,
      Calendar,
      ButtonDirective,
      ButtonModule,
      ProgressSpinnerModule,
      ProgressSpinner,
      TagModule,
      Tag
    ], styles: ["\n\n.daily-dialog[_ngcontent-%COMP%] {\n  max-height: min(85vh, 900px);\n}\n.daily-list[_ngcontent-%COMP%] {\n  max-height: min(58vh, 560px);\n}\n[_nghost-%COMP%]     .large-day-calendar .p-datepicker {\n  width: 100%;\n}\n[_nghost-%COMP%]     .large-day-calendar .p-datepicker table {\n  font-size: 1rem;\n}\n[_nghost-%COMP%]     .large-day-calendar .p-datepicker .p-datepicker-calendar td > span {\n  width: 2.35rem;\n  height: 2.35rem;\n}\n.daily-row[_ngcontent-%COMP%] {\n  border-style: solid;\n}\n/*# sourceMappingURL=team-daily-attendance-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamDailyAttendanceDialogComponent, { className: "TeamDailyAttendanceDialogComponent" });
})();

// src/app/private/directory/team/pages/list/team.component.ts
var _c02 = () => [];
var _c12 = () => [10, 20, 50];
var _c22 = (a0) => ["/directory/team/pagos", a0];
function TeamListComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 8);
  }
  if (rf & 2) {
    const teamRows_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true)("routerLink", \u0275\u0275pureFunction1(2, _c22, teamRows_r1[0].id));
  }
}
function TeamListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeamListComponent_Conditional_5_Conditional_0_Template, 1, 4, "p-button", 8);
  }
  if (rf & 2) {
    \u0275\u0275conditional(0, ctx.length > 0 ? 0 : -1);
  }
}
var TeamListComponent = class _TeamListComponent {
  constructor(router, dialogService, teamService, messageService, confirmationService, loadingService) {
    this.router = router;
    this.dialogService = dialogService;
    this.teamService = teamService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.loadingService = loadingService;
    this.columns = [];
    this.data = [];
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
        click: (rowData) => this.buttonEditTeam(rowData.id)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-calendar",
        outlined: true,
        pTooltip: "Asistencia",
        tooltipPosition: "bottom",
        click: (rowData) => this.buttonAttendanceTeam(rowData)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-wallet",
        outlined: true,
        pTooltip: "Pagos y descuentos",
        tooltipPosition: "bottom",
        click: (rowData) => this.buttonPayrollTeam(rowData)
      },
      {
        type: "button",
        size: "small",
        icon: "pi pi-trash",
        outlined: true,
        pTooltip: "Eliminar",
        tooltipPosition: "bottom",
        click: (rowData, event) => this.buttonDeleteTeam(rowData.id, event)
      }
    ];
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }
  ngOnInit() {
    this.columns = [
      {
        header: "#",
        field: "id",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Nombres",
        field: "name",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Apellidos",
        field: "surname",
        clickable: false,
        image: false,
        money: false
      },
      {
        header: "Salario",
        field: "salary",
        clickable: false,
        image: false,
        money: false
      },
      {
        field: "button",
        header: "Acci\xF3n",
        clickable: false,
        image: false,
        money: false
      }
    ];
    this.getTeam(this.limit, this.page, this.name);
    this.formGroup.get("search")?.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      this.name = value ? value : "";
      this.loadingService.sendLoadingState(true);
      this.getTeam(this.limit, this.page, this.name);
    });
  }
  ngOnDestroy() {
    this.teamModal?.close();
    this.dailySummaryDialog?.close();
  }
  openTeamDailySummary() {
    this.dailySummaryDialog = this.dialogService.open(TeamDailyAttendanceDialogComponent, {
      header: "Asistencia del equipo por d\xEDa",
      width: "min(960px, 98vw)",
      maximizable: true,
      contentStyle: { overflow: "auto" }
    });
  }
  clearFilter() {
    this.name = "";
    this.loadingService.sendLoadingState(true);
    this.formGroup.get("search")?.setValue("");
  }
  updatePage(value) {
    this.page = value;
  }
  getTeam() {
    return __async(this, arguments, function* (limit = this.limit, page = this.page, name = this.name) {
      this.updatePage(page);
      this.teamService.callGetList(limit, page, name).subscribe();
      setTimeout(() => {
        this.loadingService.sendLoadingState(false);
      }, 600);
    });
  }
  get team() {
    return this.teamService.getList();
  }
  get total() {
    return this.teamService.getTotal();
  }
  onPageSelected(event) {
    return __async(this, null, function* () {
      this.updatePage((event.page ?? 0) + 1);
      this.getTeam(event.rows, this.page);
    });
  }
  buttonAddTeam() {
    this.teamModal = this.dialogService.open(TeamFormComponent, {
      data: {},
      header: "Crear"
    });
    this.teamModal.onClose.subscribe({
      next: (value) => {
        if (value?.success && value?.login) {
          const L = value.login;
          this.showSuccess(`Colaborador creado. Usuario vendedora: ${L.email} \xB7 contrase\xF1a temporal: ${L.temporaryPassword}`, 2e4);
        } else if (value?.success) {
          this.showSuccess("Colaborador creado.");
        } else if (value?.error) {
          this.showError(value.error);
        }
      }
    });
  }
  buttonEditTeam(id) {
    this.teamModal = this.dialogService.open(TeamFormComponent, {
      data: {
        id
      },
      header: "Editar"
    });
    this.teamModal.onClose.subscribe({
      next: (value) => {
        value && value?.success ? this.showSuccess("Colaborador actualizado.") : value?.error ? this.showError(value?.error) : null;
      }
    });
  }
  buttonAttendanceTeam(rowData) {
    void this.router.navigate(["/directory/team/asistencia", rowData.id]);
  }
  buttonPayrollTeam(rowData) {
    void this.router.navigate(["/directory/team/pagos", rowData.id]);
  }
  buttonDeleteTeam(id, event) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Deseas eliminar este colaborador?",
      header: "Eliminar colaborador",
      icon: "pi pi-info-circle",
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Si",
      rejectLabel: "No",
      accept: () => {
        this.teamService.delete(id).subscribe(() => {
          this.showSuccess("El colaborador ha sido eliminado");
        });
      },
      reject: () => {
      }
    });
  }
  showSuccess(message, life = 3e3) {
    this.messageService.add({
      severity: "success",
      summary: "Confirmado",
      detail: message,
      life
    });
  }
  showError(message) {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3e3
    });
  }
  static {
    this.\u0275fac = function TeamListComponent_Factory(t) {
      return new (t || _TeamListComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(TeamService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(LoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamListComponent, selectors: [["app-team"]], standalone: true, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService, DialogService]), \u0275\u0275StandaloneFeature], decls: 14, vars: 19, consts: [[1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mt-3", "gap-3"], ["controlName", "search", 1, "w-full", "md:w-3", 3, "clearFilter", "formGroup"], [1, "flex", "align-items-center", "gap-2", "flex-shrink-0"], ["type", "button", "icon", "pi pi-calendar-plus", "pTooltip", "Resumen diario de todas las colaboradoras", "tooltipPosition", "bottom", 3, "click", "outlined"], ["type", "button", 3, "click", "outlined"], [1, "pi", "pi-plus", 2, "font-size", "1rem"], [3, "paginateSelected", "data", "columns", "callToAction", "cellToAction", "total", "limit", "rowsPerPageOptions"], ["type", "button", "icon", "pi pi-wallet", "pTooltip", "Pagos de la primera colaboradora en esta p\xE1gina (usa el \xEDcono de cartera en cada fila para elegir otra)", "tooltipPosition", "bottom", 3, "outlined", "routerLink"]], template: function TeamListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-input-search", 2);
        \u0275\u0275listener("clearFilter", function TeamListComponent_Template_app_input_search_clearFilter_2_listener() {
          return ctx.clearFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
        \u0275\u0275listener("click", function TeamListComponent_Template_p_button_click_4_listener() {
          return ctx.openTeamDailySummary();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, TeamListComponent_Conditional_5_Template, 1, 1);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "p-button", 5);
        \u0275\u0275listener("click", function TeamListComponent_Template_p_button_click_7_listener() {
          return ctx.buttonAddTeam();
        });
        \u0275\u0275element(8, "i", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "app-table-pagination", 7);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275listener("paginateSelected", function TeamListComponent_Template_app_table_pagination_paginateSelected_9_listener($event) {
          return ctx.onPageSelected($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "p-toast")(13, "p-confirmDialog");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_8_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.formGroup);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, (tmp_2_0 = \u0275\u0275pipeBind1(6, 11, ctx.team)) ? 5 : -1, tmp_2_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("outlined", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("data", (tmp_4_0 = \u0275\u0275pipeBind1(10, 13, ctx.team)) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : \u0275\u0275pureFunction0(17, _c02))("columns", ctx.columns)("callToAction", ctx.callToAction)("cellToAction", ctx.cellToAction)("total", (tmp_8_0 = \u0275\u0275pipeBind1(11, 15, ctx.total)) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 0)("limit", ctx.limit)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c12));
      }
    }, dependencies: [CommonModule, AsyncPipe, FormsModule, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, ConfirmDialogModule, ConfirmDialog, Button, ToastModule, Toast, SharedModule, TablePaginationComponent, InputSearchComponent, TooltipModule, Tooltip, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamListComponent, { className: "TeamListComponent" });
})();

// src/app/private/directory/team/services/team-payroll.service.ts
var TeamPayrollService = class _TeamPayrollService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getPayroll(teamId, month, year, period) {
    const q = new URLSearchParams({
      team_id: String(teamId),
      month: String(month),
      year: String(year),
      period
    });
    return this.apiService.get(`payments/payroll?${q.toString()}`);
  }
  registerPayment(payload) {
    const formData = new FormData();
    formData.append("team_id", String(payload.teamId));
    formData.append("type", payload.type);
    formData.append("amount", String(payload.amount));
    formData.append("date", payload.date);
    formData.append("description", payload.description ?? "");
    formData.append("payment_method", payload.payment_method);
    formData.append("sync_cash_movement", payload.sync_cash_movement ? "1" : "0");
    if (payload.image) {
      formData.append("image", payload.image);
    }
    return this.apiService.post("payments", formData);
  }
  static {
    this.\u0275fac = function TeamPayrollService_Factory(t) {
      return new (t || _TeamPayrollService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamPayrollService, factory: _TeamPayrollService.\u0275fac, providedIn: "root" });
  }
};

// src/app/private/directory/team/pages/team-payroll/team-payroll.component.ts
var _c03 = () => [12, 20, 31];
var _c13 = () => ({ "min-width": "100%" });
function TeamPayrollComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3, "\xB7");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.team.name, " ", ctx_r0.team.surname, "");
  }
}
function TeamPayrollComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "p-progressSpinner", 19);
    \u0275\u0275elementEnd();
  }
}
function TeamPayrollComponent_Conditional_27_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 95);
    \u0275\u0275element(2, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 97);
    \u0275\u0275text(5, "Registrar movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7, "Adelanto o pago quincenal");
    \u0275\u0275elementEnd()()();
  }
}
function TeamPayrollComponent_Conditional_27_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "small", 99);
    \u0275\u0275element(2, "i", 100);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 101);
    \u0275\u0275listener("click", function TeamPayrollComponent_Conditional_27_Conditional_40_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      \u0275\u0275nextContext();
      const payVoucher_r4 = \u0275\u0275reference(39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearVoucher(payVoucher_r4));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.paymentVoucherFile.name, "");
  }
}
function TeamPayrollComponent_Conditional_27_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", line_r5, " ");
  }
}
function TeamPayrollComponent_Conditional_27_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "span", 103);
    \u0275\u0275text(2, "Salario y tarifa");
    \u0275\u0275elementEnd()();
  }
}
function TeamPayrollComponent_Conditional_27_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "span", 103);
    \u0275\u0275text(2, "Asistencia");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-tag", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.data.calendar.periodLabel);
  }
}
function TeamPayrollComponent_Conditional_27_Conditional_228_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1, " No hay registros con entrada y salida en este per\xEDodo. ");
    \u0275\u0275elementEnd();
  }
}
function TeamPayrollComponent_Conditional_27_Conditional_229_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 108);
    \u0275\u0275text(6, "Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 108);
    \u0275\u0275text(8, "Salida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 108);
    \u0275\u0275text(10, "Retraso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 108);
    \u0275\u0275text(12, "Sal. ant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 108);
    \u0275\u0275text(14, "Lleg. tempr.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 108);
    \u0275\u0275text(16, "Sal. tarde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 108);
    \u0275\u0275text(18, "Saldo d\xEDa");
    \u0275\u0275elementEnd()();
  }
}
function TeamPayrollComponent_Conditional_27_Conditional_229_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "p-tag", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 111);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 111);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 112);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 112);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 112);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 112);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 112);
    \u0275\u0275element(21, "p-tag", 113);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatFechaCorta(row_r6.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6.status)("severity", ctx_r0.statusTagSeverity(row_r6.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.checkIn, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.checkOut, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.minutosOGuion(row_r6.deudaEntradaTardeMinutos), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.minutosOGuion(row_r6.deudaSalidaAnticipadaMinutos), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.minutosOGuion(row_r6.favorLlegadaTempranaMinutos), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.minutosOGuion(row_r6.favorSalidaTardeMinutos), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.formatoSaldoCelda(row_r6))("severity", ctx_r0.saldoTagSeverity(row_r6.saldoNetoSentido));
  }
}
function TeamPayrollComponent_Conditional_27_Conditional_229_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 106);
    \u0275\u0275template(1, TeamPayrollComponent_Conditional_27_Conditional_229_ng_template_1_Template, 19, 0, "ng-template", 23)(2, TeamPayrollComponent_Conditional_27_Conditional_229_ng_template_2_Template, 22, 12, "ng-template", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.data.attendanceVista.deudaPorDia)("paginator", true)("rows", 12)("rowsPerPageOptions", \u0275\u0275pureFunction0(5, _c03))("tableStyle", \u0275\u0275pureFunction0(6, _c13));
  }
}
function TeamPayrollComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "p-card", 22);
    \u0275\u0275template(3, TeamPayrollComponent_Conditional_27_ng_template_3_Template, 8, 0, "ng-template", 23);
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, " Queda en la n\xF3mina del colaborador. Marca ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "\xABEn caja administrativa\xBB");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " para que tambi\xE9n aparezca en Finanzas \u2192 Caja \u2192 Gastos administrativos (voucher opcional, mismo servicio de archivos que en gastos). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 25)(10, "div")(11, "span", 26);
    \u0275\u0275text(12, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-dropdown", 27);
    \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_p_dropdown_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentForm.type, $event) || (ctx_r0.paymentForm.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_p_dropdown_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPaymentTypeChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28)(15, "div", 29)(16, "span", 26);
    \u0275\u0275text(17, "Monto (S/)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-inputNumber", 30);
    \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_p_inputNumber_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentForm.amount, $event) || (ctx_r0.paymentForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 29)(20, "span", 26);
    \u0275\u0275text(21, "Medio de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-dropdown", 31);
    \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_p_dropdown_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentForm.payment_method, $event) || (ctx_r0.paymentForm.payment_method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div")(24, "span", 26);
    \u0275\u0275text(25, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-calendar", 32);
    \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_p_calendar_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentForm.date, $event) || (ctx_r0.paymentForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "span", 26);
    \u0275\u0275text(29, "Nota (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentForm.description, $event) || (ctx_r0.paymentForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 34)(32, "p-checkbox", 35);
    \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Conditional_27_Template_p_checkbox_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentForm.sync_cash_movement, $event) || (ctx_r0.paymentForm.sync_cash_movement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 36);
    \u0275\u0275text(34, "Registrar tambi\xE9n como gasto administrativo (caja)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "span", 26);
    \u0275\u0275text(37, "Voucher (opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p-fileUpload", 37, 0);
    \u0275\u0275listener("onSelect", function TeamPayrollComponent_Conditional_27_Template_p_fileUpload_onSelect_38_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onVoucherSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, TeamPayrollComponent_Conditional_27_Conditional_40_Template, 5, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 39);
    \u0275\u0275listener("click", function TeamPayrollComponent_Conditional_27_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const payVoucher_r4 = \u0275\u0275reference(39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitPayment(payVoucher_r4));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 40)(43, "div", 41)(44, "div", 42);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 43);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 44);
    \u0275\u0275text(49, " Este es el \xFAnico total de referencia: incluye asistencia (ausencias y tiempo no cumplido) y los movimientos del \xE1mbito. Detalle l\xEDnea a l\xEDnea debajo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(50, TeamPayrollComponent_Conditional_27_For_51_Template, 2, 1, "p", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(52, "p", 46);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "p-card");
    \u0275\u0275template(55, TeamPayrollComponent_Conditional_27_ng_template_55_Template, 3, 0, "ng-template", 23);
    \u0275\u0275elementStart(56, "ul", 47)(57, "li", 48)(58, "span", 49);
    \u0275\u0275text(59, "Salario mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 50);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "li", 48)(63, "span", 49);
    \u0275\u0275text(64, "D\xEDas del mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 50);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "li", 48)(68, "span", 49);
    \u0275\u0275text(69, "Valor d\xEDa (sueldo \xF7 d\xEDas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 50);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "li", 51)(73, "span", 49);
    \u0275\u0275text(74, "Referencia media quincena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 50);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(77, "div", 52)(78, "div", 53)(79, "p-card", 54);
    \u0275\u0275template(80, TeamPayrollComponent_Conditional_27_ng_template_80_Template, 4, 1, "ng-template", 23);
    \u0275\u0275elementStart(81, "p", 24)(82, "strong");
    \u0275\u0275text(83, "Falta");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, " y ");
    \u0275\u0275elementStart(85, "strong");
    \u0275\u0275text(86, "Valdeo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, " descuentan un d\xEDa cada uno; la ");
    \u0275\u0275elementStart(88, "strong");
    \u0275\u0275text(89, "tardanza");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, " (despu\xE9s de 8:10) y salir antes de 19:30 descuentan en dinero seg\xFAn los minutos frente a una jornada de referencia de ");
    \u0275\u0275elementStart(91, "strong");
    \u0275\u0275text(92, "11 h 30 min");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " (8:00\u201319:30). La recuperaci\xF3n resta ausencias, no minutos. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 28)(95, "div", 55)(96, "div", 56)(97, "div", 57);
    \u0275\u0275text(98, "Faltas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 58);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "div", 55)(102, "div", 56)(103, "div", 57);
    \u0275\u0275text(104, "Valdeo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 59);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 55)(108, "div", 56)(109, "div", 57);
    \u0275\u0275text(110, "Recuperaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 60);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "div", 55)(114, "div", 56)(115, "div", 57);
    \u0275\u0275text(116, "Total equiv.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 61);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 62);
    \u0275\u0275text(120, "Faltas + Valdeo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "div", 55)(122, "div", 56)(123, "div", 57);
    \u0275\u0275text(124, "A descontar (d\xEDas)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 63);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 62);
    \u0275\u0275text(128, "Tras recuperar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(129, "div", 55)(130, "div", 56)(131, "div", 57);
    \u0275\u0275text(132, "D\xEDas c/ retraso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 64);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "div", 62);
    \u0275\u0275text(136, "Entrada despu\xE9s 8:10");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(137, "div", 65)(138, "div", 56)(139, "div", 57);
    \u0275\u0275text(140, "Descuento asistencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div", 61);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 62);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(145, "p-divider");
    \u0275\u0275elementStart(146, "div", 66);
    \u0275\u0275text(147, "Balance de tiempo (transparente)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "p", 67)(149, "strong");
    \u0275\u0275text(150, "Debe:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, " retraso despu\xE9s de las ");
    \u0275\u0275elementStart(152, "strong");
    \u0275\u0275text(153, "8:11");
    \u0275\u0275elementEnd();
    \u0275\u0275text(154, " (10 min de tolerancia tras las 8:00) y salida antes de las ");
    \u0275\u0275elementStart(155, "strong");
    \u0275\u0275text(156, "19:30");
    \u0275\u0275elementEnd();
    \u0275\u0275text(157, " (cierre oficial). ");
    \u0275\u0275elementStart(158, "strong");
    \u0275\u0275text(159, "A favor:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(160, " llegada antes de las 8:00 y salida despu\xE9s de las 19:30. ");
    \u0275\u0275elementStart(161, "span", 68);
    \u0275\u0275text(162, "Ej. 07:54 \u2192 19:35: +6 min por llegar antes de las 8:00 y +5 min por salir despu\xE9s de las 19:30 (saldo neto del d\xEDa +11 min a favor).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "span", 68);
    \u0275\u0275text(164, "\xC1mbito: ");
    \u0275\u0275elementStart(165, "strong");
    \u0275\u0275text(166);
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "div", 69)(169, "span", 70);
    \u0275\u0275text(170);
    \u0275\u0275elementEnd();
    \u0275\u0275element(171, "p-tag", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "div", 72);
    \u0275\u0275text(173, " Debe (bruto) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "div", 52)(175, "div", 73)(176, "div", 56)(177, "div", 57);
    \u0275\u0275text(178, "Retraso entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "div", 63);
    \u0275\u0275text(180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "div", 62);
    \u0275\u0275text(182);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(183, "div", 73)(184, "div", 56)(185, "div", 57);
    \u0275\u0275text(186, "Salida anticipada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "div", 74);
    \u0275\u0275text(188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "div", 62);
    \u0275\u0275text(190);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(191, "div", 73)(192, "div", 56)(193, "div", 57);
    \u0275\u0275text(194, "Suma debe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "div", 61);
    \u0275\u0275text(196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "div", 62);
    \u0275\u0275text(198);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(199, "div", 72);
    \u0275\u0275text(200, " A favor (bruto) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "div", 52)(202, "div", 73)(203, "div", 56)(204, "div", 57);
    \u0275\u0275text(205, "Llegada temprana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "div", 75);
    \u0275\u0275text(207);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "div", 62);
    \u0275\u0275text(209);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(210, "div", 73)(211, "div", 56)(212, "div", 57);
    \u0275\u0275text(213, "Salida tarde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(214, "div", 76);
    \u0275\u0275text(215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "div", 62);
    \u0275\u0275text(217);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(218, "div", 73)(219, "div", 56)(220, "div", 57);
    \u0275\u0275text(221, "Suma a favor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "div", 77);
    \u0275\u0275text(223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "div", 62);
    \u0275\u0275text(225);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(226, "div", 66);
    \u0275\u0275text(227, " Detalle por d\xEDa (entrada y salida registradas) ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(228, TeamPayrollComponent_Conditional_27_Conditional_228_Template, 2, 0, "p", 78)(229, TeamPayrollComponent_Conditional_27_Conditional_229_Template, 3, 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(230, "div", 52)(231, "div", 53)(232, "p-card", 79)(233, "p", 24);
    \u0275\u0275text(234, " Estos valores sirven para el ");
    \u0275\u0275elementStart(235, "strong");
    \u0275\u0275text(236, "descuento por asistencia del mes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(237, " y el cuadro de cierre, independientemente del filtro de quincena de arriba. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "div", 28)(239, "div", 80)(240, "div", 56)(241, "div", 57);
    \u0275\u0275text(242, "Faltas a descontar (mes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "div", 81);
    \u0275\u0275text(244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(245, "div", 80)(246, "div", 56)(247, "div", 57);
    \u0275\u0275text(248, "Descuento asistencia (mes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "div", 81);
    \u0275\u0275text(250);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "div", 82);
    \u0275\u0275text(252);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(253, "div", 83)(254, "div", 56)(255, "div", 57);
    \u0275\u0275text(256, "Balance tiempo (mes completo)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "div", 84);
    \u0275\u0275text(258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(259, "div", 62);
    \u0275\u0275text(260);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(261, "div", 28)(262, "div", 85)(263, "p-card", 86)(264, "p", 87)(265, "strong");
    \u0275\u0275text(266, "Adelanto");
    \u0275\u0275elementEnd();
    \u0275\u0275text(267, " (ADVANCE), ");
    \u0275\u0275elementStart(268, "strong");
    \u0275\u0275text(269, "pago quincenal");
    \u0275\u0275elementEnd();
    \u0275\u0275text(270, " (PAYMENT) y ");
    \u0275\u0275elementStart(271, "strong");
    \u0275\u0275text(272, "descuentos");
    \u0275\u0275elementEnd();
    \u0275\u0275text(273, " manuales (DEDUCTION) registrados con fecha en este mes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(274, "ul", 47)(275, "li", 48)(276, "span", 49);
    \u0275\u0275text(277, "Adelantos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "span", 88);
    \u0275\u0275text(279);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(280, "li", 48)(281, "span", 49);
    \u0275\u0275text(282, "Pagos (quincenales u otros)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "span", 89);
    \u0275\u0275text(284);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(285, "li", 51)(286, "span", 49);
    \u0275\u0275text(287, "Descuentos manuales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "span", 90);
    \u0275\u0275text(289);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(290, "div", 85)(291, "p-card", 91)(292, "p", 87);
    \u0275\u0275text(293, " Filtrado por ");
    \u0275\u0275elementStart(294, "strong");
    \u0275\u0275text(295, "fecha del movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275text(296);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(297, "ul", 47)(298, "li", 48)(299, "span", 49);
    \u0275\u0275text(300, "Adelantos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(301, "span", 50);
    \u0275\u0275text(302);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(303, "li", 48)(304, "span", 49);
    \u0275\u0275text(305, "Pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(306, "span", 50);
    \u0275\u0275text(307);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(308, "li", 48)(309, "span", 49);
    \u0275\u0275text(310, "Descuentos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(311, "span", 50);
    \u0275\u0275text(312);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(313, "p-divider");
    \u0275\u0275elementStart(314, "div", 92)(315, "div", 93)(316, "strong");
    \u0275\u0275text(317, "1.\xAA quincena:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(319, "div")(320, "strong");
    \u0275\u0275text(321, "2.\xAA quincena:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(322);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("options", ctx_r0.paymentTypeOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentForm.type);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentForm.amount);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r0.paymentMethodOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentForm.payment_method);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentForm.date);
    \u0275\u0275property("showTime", true)("showIcon", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentForm.description);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentForm.sync_cash_movement);
    \u0275\u0275property("binary", true)("disabled", ctx_r0.paymentForm.type === "DEDUCTION");
    \u0275\u0275advance(8);
    \u0275\u0275conditional(40, ctx_r0.paymentVoucherFile ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r0.savingPayment);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.heroTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.heroAmount), "");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.heroBreakdownLines);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.estimates.nota, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.team.salary), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.data.calendar.daysInMonth);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.rates.dailyRate), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.rates.halfMonthReference), "");
    \u0275\u0275advance(24);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.falta, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.valdeo, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.recuperacion, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.faltasEquivalentes, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.faltasADescontar, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.diasConRetraso || 0, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" S/ ", ctx_r0.money(ctx_r0.data.attendanceVista.descuentoPorFaltas), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Aus. S/ ", ctx_r0.money(ctx_r0.data.attendanceVista.descuentoPorAusencias || 0), " \xB7 Tiempo S/ ", ctx_r0.money(ctx_r0.data.attendanceVista.descuentoPorTiempoNoCumplido || 0), " ");
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r0.data.calendar.periodLabel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.saldoNetoResumen(ctx_r0.data.attendanceVista));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.data.attendanceVista.saldoTiempoNetoSentido === "favor" ? "A favor" : ctx_r0.data.attendanceVista.saldoTiempoNetoSentido === "debe" ? "A deber" : "Equilibrado")("severity", ctx_r0.saldoTagSeverity(ctx_r0.data.attendanceVista.saldoTiempoNetoSentido));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r0.splitTimeLabel(ctx_r0.data.attendanceVista.deudaEntradaTarde), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.deudaEntradaTardeMinutos, " min ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.splitTimeLabel(ctx_r0.data.attendanceVista.deudaSalidaAnticipada), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.deudaSalidaAnticipadaMinutos, " min (antes de 19:30) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.splitTimeLabel(ctx_r0.data.attendanceVista.deudaTiempo), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.deudaTiempoTotalMinutos, " min ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r0.splitTimeLabel(ctx_r0.data.attendanceVista.favorLlegadaTemprana), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.favorLlegadaTempranaTotalMinutos, " min (antes de 8:00) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.splitTimeLabel(ctx_r0.data.attendanceVista.favorSalidaTarde), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.favorSalidaTardeTotalMinutos, " min (despu\xE9s de 19:30) ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.splitTimeLabel(ctx_r0.minutesToBlock(ctx_r0.data.attendanceVista.favorTiempoTotalMinutos)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceVista.favorTiempoTotalMinutos, " min ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(228, ctx_r0.data.attendanceVista.deudaPorDia.length === 0 ? 228 : 229);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.attendanceMesCompleto.faltasADescontar, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" S/ ", ctx_r0.money(ctx_r0.data.attendanceMesCompleto.descuentoPorFaltas), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Aus. S/ ", ctx_r0.money(ctx_r0.data.attendanceMesCompleto.descuentoPorAusencias || 0), " \xB7 Tiempo S/ ", ctx_r0.money(ctx_r0.data.attendanceMesCompleto.descuentoPorTiempoNoCumplido || 0), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.saldoNetoResumen(ctx_r0.data.attendanceMesCompleto), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" Debe ", ctx_r0.data.attendanceMesCompleto.deudaTiempoTotalMinutos, " min \xB7 A favor ", ctx_r0.data.attendanceMesCompleto.favorTiempoTotalMinutos, " min \xB7 Neto ", ctx_r0.data.attendanceMesCompleto.saldoTiempoNetoMinutos, " min (", ctx_r0.data.attendanceMesCompleto.saldoTiempoNetoSentido, ") ");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.movementsMonth.advances), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.movementsMonth.payments), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.movementsMonth.deductions), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r0.vistaMovimientosCardTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" dentro de ", ctx_r0.data.calendar.periodLabel, ". ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.movementsVistaPeriodo.advances), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.movementsVistaPeriodo.payments), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", ctx_r0.money(ctx_r0.data.movementsVistaPeriodo.deductions), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" adelantos S/ ", ctx_r0.money(ctx_r0.data.movementsQuincena1.advances), ", pagos S/ ", ctx_r0.money(ctx_r0.data.movementsQuincena1.payments), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" adelantos S/ ", ctx_r0.money(ctx_r0.data.movementsQuincena2.advances), ", pagos S/ ", ctx_r0.money(ctx_r0.data.movementsQuincena2.payments), " ");
  }
}
var MONTH_NAMES_ES2 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
var TeamPayrollComponent = class _TeamPayrollComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.teamService = inject(TeamService);
    this.payrollService = inject(TeamPayrollService);
    this.messageService = inject(MessageService);
    this.datePipe = inject(DatePipe);
    this.teamId = 0;
    this.team = null;
    this.viewMonth = (/* @__PURE__ */ new Date()).getMonth();
    this.viewYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.period = "full";
    this.loading = false;
    this.data = null;
    this.periodOptions = [
      { label: "Mes completo", value: "full" },
      { label: "1.\xAA quincena (1\u201315)", value: "q1" },
      { label: "2.\xAA quincena (16\u2013fin)", value: "q2" }
    ];
    this.savingPayment = false;
    this.paymentForm = {
      type: "PAYMENT",
      amount: null,
      date: /* @__PURE__ */ new Date(),
      description: "",
      payment_method: "CASH",
      sync_cash_movement: true
    };
    this.paymentVoucherFile = null;
    this.paymentTypeOptions = [
      {
        label: "Pago quincenal (cierre)",
        value: "PAYMENT"
      },
      { label: "Adelanto", value: "ADVANCE" },
      { label: "Descuento manual", value: "DEDUCTION" }
    ];
    this.paymentMethodOptions = [
      { label: "Efectivo", value: "CASH" },
      { label: "Yape/Plin", value: "YAPE" },
      { label: "Tarjeta", value: "CARD" },
      { label: "Transferencia", value: "TRANSFER" }
    ];
  }
  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const raw = params.get("teamId");
      const id = raw ? Number(raw) : 0;
      if (!id || Number.isNaN(id)) {
        this.messageService.add({
          severity: "error",
          summary: "Ruta inv\xE1lida",
          detail: "No se indic\xF3 un colaborador."
        });
        return;
      }
      const changed = this.teamId !== id;
      this.teamId = id;
      if (changed) {
        const n = /* @__PURE__ */ new Date();
        this.viewMonth = n.getMonth();
        this.viewYear = n.getFullYear();
        this.period = "full";
      }
      this.loadTeam();
      this.loadPayroll();
    });
  }
  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
  get monthTitle() {
    return `${MONTH_NAMES_ES2[this.viewMonth]} ${this.viewYear}`;
  }
  get vistaMovimientosCardTitle() {
    if (this.period === "q1") {
      return "Movimientos en 1.\xAA quincena";
    }
    if (this.period === "q2") {
      return "Movimientos en 2.\xAA quincena";
    }
    return "Movimientos en el per\xEDodo seleccionado";
  }
  goBack() {
    void this.router.navigate(["/directory/team"]);
  }
  goAttendance() {
    void this.router.navigate(["/directory/team/asistencia", this.teamId]);
  }
  prevMonth() {
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear--;
    } else {
      this.viewMonth--;
    }
    this.loadPayroll();
  }
  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear++;
    } else {
      this.viewMonth++;
    }
    this.loadPayroll();
  }
  onPeriodChange() {
    const v = this.period;
    this.period = v === "q1" || v === "q2" || v === "full" ? v : "full";
    this.loadPayroll();
  }
  get heroTitle() {
    const liq = this.data?.liquidacionPeriodo;
    if (!liq) {
      return "Restante estimado \xB7 fin de mes";
    }
    if (liq.period === "full") {
      return "Restante estimado \xB7 cierre de mes";
    }
    return `Restante estimado \xB7 cierre ${liq.fechaCierreLegible}`;
  }
  get heroAmount() {
    const liq = this.data?.liquidacionPeriodo?.restanteEstimadoAlCierre;
    if (liq !== void 0 && liq !== null) {
      return liq;
    }
    return this.data?.estimates.estimadoAPagarFinMes ?? 0;
  }
  get heroBreakdownLines() {
    const liq = this.data?.liquidacionPeriodo;
    const att = this.data?.attendanceVista;
    if (!liq || !att) {
      return [];
    }
    const descAus = liq.descuentoPorAusenciasEnAmbito ?? att.descuentoPorAusencias ?? 0;
    const descTiempo = liq.descuentoPorTiempoNoCumplidoEnAmbito ?? att.descuentoPorTiempoNoCumplido ?? 0;
    return [
      `Proporci\xF3n del salario en el \xE1mbito (${liq.diasEnPeriodo} d\xEDa(s)): S/ ${this.money(liq.proporcionSalarioPeriodo)}`,
      `Descuento por ausencias (Falta/Valdeo): \u2212 S/ ${this.money(descAus)}`,
      `Descuento por tiempo no cumplido (retraso/salida ant., prorrateo 11 h 30 min): \u2212 S/ ${this.money(descTiempo)}`,
      `Tras descuentos de asistencia: S/ ${this.money(liq.netoTrasFaltasPeriodo)}`,
      `Movimientos del per\xEDodo (adelantos \xB7 pagos \xB7 desc. manual): \u2212 S/ ${this.money(liq.adelantosPeriodo + liq.pagosRegistradosPeriodo + liq.descuentosManualesPeriodo)}`
    ];
  }
  onPaymentTypeChange() {
    if (this.paymentForm.type === "DEDUCTION") {
      this.paymentForm.sync_cash_movement = false;
    } else {
      this.paymentForm.sync_cash_movement = true;
    }
  }
  onVoucherSelect(event) {
    this.paymentVoucherFile = event.files?.[0] ?? null;
  }
  clearVoucher(upload) {
    this.paymentVoucherFile = null;
    upload.clear();
  }
  submitPayment(voucherUpload) {
    if (!this.teamId || !this.paymentForm.amount || this.paymentForm.amount <= 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Datos incompletos",
        detail: "Indica un monto v\xE1lido."
      });
      return;
    }
    const dateStr = this.datePipe.transform(this.paymentForm.date, "yyyy-MM-dd HH:mm:ss");
    this.savingPayment = true;
    this.payrollService.registerPayment({
      teamId: this.teamId,
      type: this.paymentForm.type,
      amount: this.paymentForm.amount,
      date: dateStr,
      description: this.paymentForm.description,
      payment_method: this.paymentForm.payment_method,
      sync_cash_movement: this.paymentForm.sync_cash_movement,
      image: this.paymentVoucherFile
    }).pipe(finalize(() => this.savingPayment = false)).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Registrado",
          detail: "Movimiento de n\xF3mina guardado" + (this.paymentForm.sync_cash_movement ? " y reflejado en gastos administrativos." : ".")
        });
        this.resetPaymentForm(voucherUpload);
        this.loadPayroll();
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "No se pudo registrar el movimiento."
        });
      }
    });
  }
  resetPaymentForm(voucherUpload) {
    this.paymentForm = {
      type: "PAYMENT",
      amount: null,
      date: /* @__PURE__ */ new Date(),
      description: "",
      payment_method: "CASH",
      sync_cash_movement: true
    };
    this.paymentVoucherFile = null;
    voucherUpload.clear();
  }
  money(n) {
    const x = Number(n ?? 0);
    return new Intl.NumberFormat("es-PE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(x);
  }
  minutesToBlock(total) {
    const n = Math.max(0, Math.floor(total));
    return {
      days: Math.floor(n / 1440),
      hours: Math.floor(n % 1440 / 60),
      minutes: n % 60
    };
  }
  splitTimeLabel(block) {
    if (!block) {
      return "\u2014";
    }
    const { days, hours, minutes } = block;
    const parts = [];
    if (days > 0) {
      parts.push(`${days} d\xEDa${days === 1 ? "" : "s"}`);
    }
    if (hours > 0) {
      parts.push(`${hours} h`);
    }
    if (minutes > 0) {
      parts.push(`${minutes} min`);
    }
    if (parts.length === 0) {
      return "0 min";
    }
    return parts.join(" \xB7 ");
  }
  formatFechaCorta(ymd) {
    const p = ymd.split("-").map(Number);
    if (p.length !== 3 || p.some((n) => Number.isNaN(n))) {
      return ymd;
    }
    const [y, m, d] = p;
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString("es-PE", {
      weekday: "short",
      day: "numeric",
      month: "short"
    });
  }
  minutosOGuion(n) {
    return n > 0 ? `${n} min` : "\u2014";
  }
  saldoNetoResumen(slice) {
    const n = slice.saldoTiempoNetoMinutos;
    const mag = this.splitTimeLabel(slice.saldoTiempoNetoMagnitud);
    if (n === 0) {
      return "Saldo neto del per\xEDodo: equilibrado (0).";
    }
    if (n > 0) {
      return `Saldo neto del per\xEDodo: +${mag} a favor del colaborador (${n} min).`;
    }
    return `Saldo neto del per\xEDodo: \u2212${mag} neto a deber (${Math.abs(n)} min).`;
  }
  saldoTagSeverity(s) {
    if (s === "favor") {
      return "success";
    }
    if (s === "debe") {
      return "danger";
    }
    return "secondary";
  }
  formatoSaldoCelda(row) {
    if (row.saldoNetoMinutos === 0) {
      return "0";
    }
    const sign = row.saldoNetoMinutos > 0 ? "+" : "\u2212";
    return `${sign}${Math.abs(row.saldoNetoMinutos)} min`;
  }
  statusTagSeverity(status) {
    const map2 = {
      PUNTUAL: "success",
      TARDE: "warning",
      TOLERANCIA: "info",
      RECUPERACION: "secondary"
    };
    return map2[status] ?? "secondary";
  }
  loadTeam() {
    this.teamService.getOne(this.teamId).subscribe({
      next: (t) => {
        this.team = new Team(this.normalizeTeamPayload(t));
      },
      error: () => {
        this.messageService.add({
          severity: "warn",
          summary: "Colaborador",
          detail: "No se pudo cargar el perfil."
        });
      }
    });
  }
  normalizeTeamPayload(t) {
    const o = t;
    return {
      id: Number(o["id"]),
      dni: o["dni"] ?? "",
      name: String(o["name"] ?? ""),
      surname: String(o["surname"] ?? ""),
      salary: o["salary"] ?? null,
      warehouseId: Number(o["warehouseId"] ?? o["warehouse_id"] ?? 0),
      userId: o["userId"] ?? o["user_id"],
      userEmail: o["userEmail"] ?? o["user_email"]
    };
  }
  loadPayroll() {
    this.loading = true;
    this.payrollService.getPayroll(this.teamId, this.viewMonth + 1, this.viewYear, this.period).pipe(finalize(() => this.loading = false)).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.data = res.data;
        } else {
          this.data = null;
          this.messageService.add({
            severity: "warn",
            summary: "Pagos",
            detail: "Respuesta sin datos."
          });
        }
      },
      error: (err) => {
        console.error(err);
        this.data = null;
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "No se pudo cargar la vista de pagos."
        });
      }
    });
  }
  static {
    this.\u0275fac = function TeamPayrollComponent_Factory(t) {
      return new (t || _TeamPayrollComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamPayrollComponent, selectors: [["app-team-payroll"]], standalone: true, features: [\u0275\u0275ProvidersFeature([MessageService, DatePipe]), \u0275\u0275StandaloneFeature], decls: 28, vars: 5, consts: [["payVoucher", ""], ["position", "top-right"], [1, "p-3", "md:p-4"], [1, "payroll-toolbar", "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "gap-3", "p-3", "mb-4"], [1, "flex", "align-items-center", "gap-2", "flex-wrap"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", "label", "Equipo", 1, "p-button-text", "p-button-secondary", 3, "click"], [1, "text-300", "hidden", "md:inline"], [1, "text-xl", "md:text-2xl", "font-bold", "text-900", "m-0"], [1, "text-600", "m-0", "mt-1", "text-sm"], ["pButton", "", "type", "button", "icon", "pi pi-calendar", "label", "Asistencia", "pTooltip", "Ir al registro de asistencia del mismo mes", 1, "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-chevron-left", "pTooltip", "Mes anterior", 1, "p-button-outlined", 3, "click"], [1, "font-bold", "text-900", "min-w-max", "text-center", "px-2"], ["pButton", "", "type", "button", "icon", "pi pi-chevron-right", "pTooltip", "Mes siguiente", 1, "p-button-outlined", 3, "click"], [1, "surface-card", "border-round", "p-3", "mb-4", "flex", "flex-column", "lg:flex-row", "lg:align-items-center", "gap-3"], [1, "font-semibold", "text-900", "whitespace-nowrap"], ["optionLabel", "label", "optionValue", "value", "styleClass", "flex-wrap", 3, "ngModelChange", "options", "ngModel"], [1, "flex", "justify-content-center", "py-6"], [1, "font-semibold", "text-900"], [1, "mx-2"], ["strokeWidth", "4", "styleClass", "w-4rem h-4rem"], [1, "grid", "mb-4"], [1, "col-12", "xl:col-5"], ["styleClass", "shadow-1 border-round-xl h-full payment-register-card"], ["pTemplate", "header"], [1, "text-600", "text-sm", "mt-0", "mb-3"], [1, "flex", "flex-column", "gap-3"], [1, "block", "font-semibold", "text-900", "mb-2"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", "placeholder", "Tipo de movimiento", 3, "ngModelChange", "options", "ngModel"], [1, "grid"], [1, "col-12", "sm:col-6"], ["mode", "currency", "currency", "PEN", "locale", "es-PE", "styleClass", "w-full", 3, "ngModelChange", "ngModel"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "options", "ngModel"], ["hourFormat", "12", "dateFormat", "dd/mm/yy", "appendTo", "body", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "showTime", "showIcon"], ["pInputTextarea", "", "rows", "2", "placeholder", "Ej. pago 2.\xAA quincena mayo", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "align-items-center", "gap-2"], ["inputId", "syncCash", 3, "ngModelChange", "ngModel", "binary", "disabled"], ["for", "syncCash", 1, "m-0", "text-sm", "cursor-pointer"], ["mode", "basic", "chooseLabel", "Adjuntar comprobante", "accept", "image/*,application/pdf", "maxFileSize", "5000000", "styleClass", "w-full", 3, "onSelect"], [1, "flex", "align-items-center", "gap-2", "mt-2"], ["pButton", "", "type", "button", "label", "Guardar movimiento", "icon", "pi pi-check", 1, "w-full", "font-bold", 3, "click", "loading"], [1, "col-12", "xl:col-7"], [1, "hero-estimate", "flex", "flex-column", "justify-content-center"], [1, "hero-label"], [1, "hero-value"], [1, "m-0", "mt-2", "text-sm", "opacity-95", "font-semibold"], [1, "m-0", "mt-2", "text-sm", "opacity-90", "line-height-3", 2, "max-width", "44rem"], [1, "m-0", "mt-3", "text-xs", "opacity-75", "line-height-3", 2, "max-width", "42rem"], [1, "list-none", "p-0", "m-0", "text-sm"], [1, "flex", "justify-content-between", "py-2", "border-bottom-1", "surface-border"], [1, "text-600"], [1, "font-semibold"], [1, "flex", "justify-content-between", "py-2"], [1, "grid", "mb-3"], [1, "col-12"], ["styleClass", "h-full shadow-1 border-round-xl"], [1, "col-6", "sm:col-4", "md:col-2"], [1, "metric-tile"], [1, "label"], [1, "value", "text-red-600"], [1, "value", "text-indigo-600"], [1, "value", "text-green-600"], [1, "value", "text-900"], [1, "hint"], [1, "value", "text-orange-700"], [1, "value", "text-amber-700"], [1, "col-12", "sm:col-6", "md:col-4"], [1, "slice-title", "mb-2"], [1, "text-600", "text-sm", "m-0", "mb-2"], [1, "block", "mt-1"], [1, "surface-100", "border-round", "p-3", "mb-3", "flex", "flex-column", "sm:flex-row", "sm:align-items-center", "sm:justify-content-between", "gap-2"], [1, "text-900", "font-semibold", "text-sm"], ["styleClass", "text-xs font-bold", 3, "value", "severity"], [1, "text-xs", "font-bold", "text-500", "uppercase", "mb-2"], [1, "col-12", "sm:col-4"], [1, "value", "text-purple-700"], [1, "value", "text-green-700"], [1, "value", "text-teal-700"], [1, "value", "text-green-800"], [1, "text-600", "text-sm", "m-0"], ["header", "Mes completo (cierre)", "styleClass", "shadow-1 border-round-xl"], [1, "col-6", "md:col-3"], [1, "value"], [1, "hint", "text-xs"], [1, "col-12", "md:col-6"], [1, "value", "text-900", "text-sm", "line-height-3"], [1, "col-12", "lg:col-6"], ["header", "Movimientos del mes (todos los d\xEDas)", "styleClass", "shadow-1 border-round-xl h-full"], [1, "text-600", "text-sm", "mt-0", "mb-2"], [1, "font-semibold", "text-orange-700"], [1, "font-semibold", "text-blue-700"], [1, "font-semibold", "text-red-700"], ["styleClass", "shadow-1 border-round-xl h-full", 3, "header"], [1, "text-xs", "text-600"], [1, "mb-1"], [1, "px-3", "pt-3", "pb-0", "flex", "align-items-start", "gap-2"], [1, "inline-flex", "align-items-center", "justify-content-center", "border-circle", "bg-primary", "text-white", "text-lg", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-wallet"], [1, "text-xs", "font-bold", "text-500", "uppercase", "block"], [1, "text-lg", "font-bold", "text-900"], [1, "text-green-700", "font-semibold"], [1, "pi", "pi-check"], ["pButton", "", "type", "button", "label", "Quitar", 1, "p-button-text", "p-button-sm", "p-0", 3, "click"], [1, "px-3", "pt-3", "pb-0"], [1, "text-xs", "font-bold", "text-500", "uppercase"], [1, "px-3", "pt-3", "pb-0", "flex", "align-items-center", "gap-2", "flex-wrap"], ["severity", "info", "styleClass", "text-xs", 3, "value"], ["styleClass", "p-datatable-sm p-datatable-striped debt-table", 3, "value", "paginator", "rows", "rowsPerPageOptions", "tableStyle"], ["pTemplate", "body"], [1, "text-right"], [1, "text-500", "text-xs", "block"], ["styleClass", "text-xs", 3, "value", "severity"], [1, "text-right", "font-mono", "text-sm"], [1, "text-right", "text-sm"], ["styleClass", "text-xs font-semibold", 3, "value", "severity"]], template: function TeamPayrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "p-toast", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "button", 5);
        \u0275\u0275listener("click", function TeamPayrollComponent_Template_button_click_4_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 6);
        \u0275\u0275text(6, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "h1", 7);
        \u0275\u0275text(9, " Pagos al colaborador ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275template(11, TeamPayrollComponent_Conditional_11_Template, 4, 2);
        \u0275\u0275text(12, " Descuentos por ausencias (Falta/Valdeo) y por ");
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "tiempo no cumplido");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " (retraso tras tolerancia, salida anticipada), balance de tiempo informativo y movimientos del mes. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 4)(17, "button", 9);
        \u0275\u0275listener("click", function TeamPayrollComponent_Template_button_click_17_listener() {
          return ctx.goAttendance();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275listener("click", function TeamPayrollComponent_Template_button_click_18_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 11);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275listener("click", function TeamPayrollComponent_Template_button_click_21_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 13)(23, "span", 14);
        \u0275\u0275text(24, "\xC1mbito del resumen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p-selectButton", 15);
        \u0275\u0275twoWayListener("ngModelChange", function TeamPayrollComponent_Template_p_selectButton_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function TeamPayrollComponent_Template_p_selectButton_ngModelChange_25_listener() {
          return ctx.onPeriodChange();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, TeamPayrollComponent_Conditional_26_Template, 2, 0, "div", 16)(27, TeamPayrollComponent_Conditional_27_Template, 323, 68);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.team ? 11 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.monthTitle);
        \u0275\u0275advance(5);
        \u0275\u0275property("options", ctx.periodOptions);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, ctx.loading ? 26 : ctx.data ? 27 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      ButtonModule,
      ButtonDirective,
      PrimeTemplate,
      CalendarModule,
      Calendar,
      CardModule,
      Card,
      CheckboxModule,
      Checkbox,
      DividerModule,
      Divider,
      DropdownModule,
      Dropdown,
      FileUploadModule,
      FileUpload,
      InputNumberModule,
      InputNumber,
      InputTextModule,
      InputTextareaModule,
      InputTextarea,
      ProgressSpinnerModule,
      ProgressSpinner,
      SelectButtonModule,
      SelectButton,
      TagModule,
      Tag,
      TableModule,
      Table,
      ToastModule,
      Toast,
      TooltipModule,
      Tooltip
    ], styles: ["\n\n.payment-register-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-border, #e5e7eb);\n}\n.payroll-toolbar[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: var(--surface-card, #fff);\n  border: 1px solid var(--surface-border, #e5e7eb);\n}\n.hero-estimate[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color, #6366f1) 0%,\n      color-mix(in srgb, var(--primary-color, #6366f1) 75%, #312e81) 100%);\n  color: #fff;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.25);\n  margin-bottom: 2rem;\n}\n.hero-estimate[_ngcontent-%COMP%]   .hero-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  opacity: 0.9;\n}\n.hero-estimate[_ngcontent-%COMP%]   .hero-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n}\n.metric-tile[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid var(--surface-border, #e2e8f0);\n  background: var(--surface-card, #fff);\n  padding: 1rem 1.1rem;\n  height: 100%;\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n}\n.metric-tile[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);\n}\n.metric-tile[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-color-secondary, #64748b);\n}\n.metric-tile[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--text-color, #0f172a);\n}\n.metric-tile[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary, #64748b);\n  margin-top: 0.35rem;\n}\n.slice-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-color, #0f172a);\n}\n[_nghost-%COMP%]     .debt-table.p-datatable .p-datatable-thead > tr > th {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-color-secondary, #64748b);\n}\n[_nghost-%COMP%]     .debt-table.p-datatable .p-datatable-tbody > tr > td {\n  vertical-align: top;\n  padding-top: 0.65rem;\n  padding-bottom: 0.65rem;\n}\n/*# sourceMappingURL=team-payroll.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamPayrollComponent, { className: "TeamPayrollComponent" });
})();

// src/app/private/directory/team/team-routing.module.ts
var routes = [
  { path: "", component: TeamListComponent, title: "Equipo" },
  {
    path: "asistencia/:teamId",
    component: AttendanceFormComponent,
    title: "Asistencia",
    data: { breadcrumb: "Asistencia" }
  },
  {
    path: "pagos/:teamId",
    component: TeamPayrollComponent,
    title: "Pagos",
    data: { breadcrumb: "Pagos" }
  }
];
var TeamRoutingModule = class _TeamRoutingModule {
  static {
    this.\u0275fac = function TeamRoutingModule_Factory(t) {
      return new (t || _TeamRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TeamRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// src/app/private/directory/team/team.module.ts
var TeamModule = class _TeamModule {
  static {
    this.\u0275fac = function TeamModule_Factory(t) {
      return new (t || _TeamModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TeamModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DialogService, DatePipe], imports: [
      CommonModule,
      TeamRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      ToastModule,
      ConfirmDialogModule,
      TabViewModule,
      TreeModule,
      TreeTableModule,
      TabMenuModule
    ] });
  }
};
export {
  TeamModule
};
//# sourceMappingURL=team.module-PQGRFPFO.js.map

import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  BehaviorSubject,
  inject,
  map,
  switchMap,
  ɵɵdefineInjectable
} from "./chunk-OI5KBWGW.js";

// src/app/private/finance/cash-movements/services/cash-movements.service.ts
var CashflowService = class _CashflowService {
  constructor() {
    this.apiService = inject(ApiService);
    this.apiUrl = "cash-flow";
    this.reportSubject = new BehaviorSubject({
      lists: { sales: [], incomes: [], expenses: [] },
      summary: { opening_balance: 100, final_balance: 0 }
    });
    this.report$ = this.reportSubject.asObservable();
    this.adminExpensesSubject = new BehaviorSubject([]);
    this.adminExpenses$ = this.adminExpensesSubject.asObservable();
  }
  // --- MÉTODOS DE TIENDA (DIARIO) ---
  loadDailyReport(date, filters = []) {
    const activeFilters = filters.length > 0 ? filters : ["CASH", "YAPE", "CARD"];
    const filterParams = activeFilters.map((f) => `filters[]=${f}`).join("&");
    const url = `${this.apiUrl}/daily?date=${date}&${filterParams}`;
    return this.apiService.get(url).pipe(map((response) => {
      if (response && response.data) {
        this.reportSubject.next(response.data);
      }
    }));
  }
  // --- MÉTODOS ADMINISTRATIVOS (MENSUAL) ---
  loadMonthlyAdminExpenses(month) {
    const url = `${this.apiUrl}/admin/monthly?month=${month}`;
    return this.apiService.get(url).pipe(map((response) => {
      if (response.success) {
        this.adminExpensesSubject.next(response.data.expenses);
      }
    }));
  }
  registerSummaryMovement(movement) {
    return this.apiService.post(this.apiUrl, movement);
  }
  /**
   * Registra movimiento y refresca la vista correspondiente
   */
  registerMovement(data, file, currentDate) {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("category", data.category);
    formData.append("amount", data.amount.toString());
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("payment_method", data.payment_method);
    if (file)
      formData.append("image", file);
    return this.apiService.post(this.apiUrl, formData).pipe(switchMap(() => {
      if (data.category === "ADMINISTRATIVE") {
        const month = currentDate.substring(0, 7);
        return this.loadMonthlyAdminExpenses(month);
      } else {
        return this.loadDailyReport(currentDate);
      }
    }));
  }
  updateMovement(id, data, file, currentDate) {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("type", data.type);
    formData.append("category", data.category);
    formData.append("amount", data.amount.toString());
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("payment_method", data.payment_method);
    if (file) {
      formData.append("image", file);
    }
    return this.apiService.post(`${this.apiUrl}/${id}`, formData).pipe(switchMap(() => {
      const month = currentDate.substring(0, 7);
      return this.loadMonthlyAdminExpenses(month);
    }));
  }
  // Getters para los observables
  getReport() {
    return this.report$;
  }
  getAdminExpenses() {
    return this.adminExpenses$;
  }
  static {
    this.\u0275fac = function CashflowService_Factory(t) {
      return new (t || _CashflowService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CashflowService, factory: _CashflowService.\u0275fac, providedIn: "root" });
  }
};

export {
  CashflowService
};
//# sourceMappingURL=chunk-MIMKYK2H.js.map

import {
  ApiService
} from "./chunk-TC2MDCQP.js";
import {
  BehaviorSubject,
  debounceTime,
  map,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-OI5KBWGW.js";

// src/app/private/inventories/products/services/products.service.ts
var ProductsService = class _ProductsService {
  constructor(apiService) {
    this.apiService = apiService;
    this.products = [];
    this.products$ = new BehaviorSubject(this.products);
    this.total = 0;
    this.total$ = new BehaviorSubject(this.total);
    this.filterState = null;
    this.STORAGE_KEY = "products_filter_state";
  }
  // 1. Guardar en memoria Y en SessionStorage
  setFilterState(limit, page, name, genderId) {
    this.filterState = { limit, page, name, genderId };
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.filterState));
  }
  // 2. Recuperar: Si no está en memoria, buscar en SessionStorage
  getFilterState() {
    if (!this.filterState) {
      const saved = sessionStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          this.filterState = JSON.parse(saved);
        } catch (e) {
          console.error("Error parsing filter state", e);
          return null;
        }
      }
    }
    return this.filterState;
  }
  // 3. Limpiar todo
  clearFilterState() {
    this.filterState = null;
    sessionStorage.removeItem(this.STORAGE_KEY);
  }
  callGetList(limit = 10, page = 1, name = "", genderId = []) {
    this.setFilterState(limit, page, name, genderId);
    let url = `products?limit=${limit}&page=${page}`;
    if (name) {
      url += `&search=${name}`;
    }
    if (genderId && genderId.length > 0) {
      url += `&genderId=${genderId}`;
    }
    return this.apiService.get(url).pipe(debounceTime(600), map((response) => {
      this.updateProducts(response.data);
      this.updateTotalProducts(response.paginate.total);
    }));
  }
  getList() {
    return this.products$.asObservable();
  }
  getTotal() {
    return this.total$.asObservable();
  }
  create(data) {
    return this.apiService.post("products", data);
  }
  delete(id) {
    return this.apiService.delete(`products/${id}`).pipe(switchMap(() => this.callGetList()));
  }
  edit(id, data) {
    return this.apiService.patch(`products/${id}`, data);
  }
  getOne(id) {
    return this.apiService.get(`products/${id}`);
  }
  getHistory(id) {
    return this.apiService.get(`products/${id}/history`);
  }
  updateProducts(value) {
    this.products = value;
    this.products$.next(this.products);
  }
  updateTotalProducts(value) {
    this.total = value;
    this.total$.next(this.total);
  }
  static {
    this.\u0275fac = function ProductsService_Factory(t) {
      return new (t || _ProductsService)(\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductsService, factory: _ProductsService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductsService
};
//# sourceMappingURL=chunk-OMIYSFQX.js.map

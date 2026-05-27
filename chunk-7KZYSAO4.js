import{b as A}from"./chunk-PQG5MP3N.js";import{Ab as h,F as P,Ia as S,J as x,L as E,Pb as R,Rb as y,Tb as w,a as k,b as v,ba as I,d,fb as _,m,pa as c,ua as C}from"./chunk-E7LU6J2I.js";var F=`
  @page {
    margin: 0;
    size: 80mm auto;
  }

  #pos-ticket-print-host,
  #pos-ticket-print-host .receipt-print {
    width: 80mm;
    max-width: 80mm;
    min-width: 80mm;
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #000000;
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  #pos-ticket-print-host .receipt-print {
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
    font-size: 12px;
    font-weight: 900;
  }
`,M="pos-printing-ticket",O="pos-ticket-print-host";function $(s){return s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,"")}function z(s){let a=$(s.trim()),t=a.match(/<style[^>]*>[\s\S]*?<\/style>/gi)??[],e=a.match(/<body[^>]*>([\s\S]*?)<\/body>/i);return{styles:t.join(`
`),body:e?.[1]?.trim()??a}}var H=`<script>
window.addEventListener('load', function () {
  setTimeout(function () { window.focus(); window.print(); }, 400);
});
<\/script>`;function f(s,a=!1){let t=$(s.trim()),e='<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">',r=`<style id="pos-receipt-print-isolation">${F}</style>`,i=a?H:"";if(/<html[\s>]/i.test(t)){let o=t;return/<\/head>/i.test(o)?o=o.replace(/<\/head>/i,`${e}${r}</head>`):o=o.replace(/<html([^>]*)>/i,`<html$1><head>${e}${r}</head>`),i&&/<\/body>/i.test(o)&&(o=o.replace(/<\/body>/i,`${i}</body>`)),o}return`<!DOCTYPE html>
<html lang="es">
<head>
  ${e}
  <title>Ticket</title>
  ${r}
</head>
<body>
  <div class="receipt-print">${t}</div>
  ${i}
</body>
</html>`}var V=`
  @page {
    margin: 0;
    size: 80mm auto;
  }

  @media print {
    html,
    body {
      width: 80mm !important;
      max-width: 80mm !important;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
    }

    body.${M} > *:not(#${O}) {
      display: none !important;
    }

    body.${M} #${O} {
      display: block !important;
      position: static !important;
      width: 80mm !important;
      max-width: 80mm !important;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
    }
  }
`;function N(s){let{styles:a,body:t}=z(s);return`
    <style>${F}${a}</style>
    <div class="receipt-print">${t}</div>
  `}var D=`
  .receipt-preview-toolbar {
    position: sticky;
    top: 0;
    z-index: 9999;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: #1e293b;
    color: #f8fafc;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
    font-size: 13px;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.25);
  }

  .receipt-preview-toolbar__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .receipt-preview-toolbar button {
    border: 0;
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }

  .receipt-preview-toolbar button.primary {
    background: #2563eb;
    color: #ffffff;
  }

  .receipt-preview-toolbar button.secondary {
    background: #e2e8f0;
    color: #0f172a;
  }

  @media print {
    .receipt-preview-toolbar {
      display: none !important;
    }
  }
`,L=`
<div class="receipt-preview-toolbar">
  <span>Vista previa del ticket</span>
  <div class="receipt-preview-toolbar__actions">
    <button type="button" class="primary" onclick="window.focus(); window.print();">Imprimir / PDF</button>
    <button type="button" class="secondary" onclick="window.close();">Cerrar</button>
  </div>
</div>`;function W(s){let a=f(s,!1);return/<body[^>]*>/i.test(a)?a.replace(/<body([^>]*)>/i,`<body$1>${L}`).replace(/<style id="pos-receipt-print-isolation">/i,`<style id="pos-receipt-print-isolation">${D}`):f(`${L}<div class="receipt-print">${s}</div>`,!1)}var b=(()=>{class s{constructor(){this.htmlContent=""}static prepareForPrint(t,e=!1){return f(t,e)}static buildHostMarkup(t){return N(t)}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-print-receipt"]],inputs:{htmlContent:"htmlContent"},standalone:!0,features:[_],decls:1,vars:1,consts:[[1,"receipt-print",3,"innerHTML"]],template:function(e,r){e&1&&S(0,"div",0),e&2&&C("innerHTML",r.htmlContent,I)},dependencies:[R],styles:["[_nghost-%COMP%]{display:none!important;position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.receipt-print[_ngcontent-%COMP%]{width:80mm;max-width:80mm;margin:0 auto;font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont;font-size:12px;color:#000;background:#fff}@media print{[_nghost-%COMP%]{display:block!important;position:static;width:80mm;height:auto;overflow:visible}.receipt-print[_ngcontent-%COMP%]{width:80mm!important;max-width:80mm!important}}"]})}}return s})();var U={BOLETA:"B001",FACTURA:"F001"},rt=(()=>{class s{constructor(){this.apiService=x(A),this.cart=c([]),this.currentCustomer=c(null),this.modalState=c({isOpen:!1,product:null,isEditing:!1}),this.toastMessage=c(null),this.paymentMethod=c("EFECTIVO"),this.isLoading=c(!1),this.documentType=c("TICKET_INTERNO"),this.serie=h(()=>{let t=this.documentType();return t==="TICKET_INTERNO"?"":U[t]??""}),this.lastSaleIdForReprint=c(null),this.grandTotal=h(()=>this.cart().reduce((t,e)=>t+e.total,0)),this.totalItems=h(()=>this.cart().reduce((t,e)=>t+e.quantity,0))}searchProductBySku(t){return d(this,null,function*(){this.isLoading.set(!0);try{return yield m(this.apiService.get("pos/products",{params:new y().set("sku",t)}))}catch(e){if(e instanceof w)switch(e.status){case 404:this.showToast("Producto no encontrado o c\xF3digo incorrecto");break;case 403:{let r=e.error?.message??e.error?.error,i=Array.isArray(r)?r[0]:r;this.showToast((typeof i=="string"&&i.trim()?i:null)??"No tienes permisos o un almac\xE9n asignado para este producto");break}case 500:this.showToast("Error interno del servidor al buscar el producto");break;default:this.showToast("Error de red o conexi\xF3n")}else this.showToast("Error de red o conexi\xF3n");return}finally{this.isLoading.set(!1)}})}searchCustomerByDni(t){return d(this,null,function*(){this.isLoading.set(!0);try{let e=yield m(this.apiService.get("pos/customers",{params:new y().set("dni",t)}));return e?(this.currentCustomer.set(e),this.showToast("Cliente encontrado"),!0):!1}catch{return this.showToast("Cliente no encontrado / Error API"),!1}finally{this.isLoading.set(!1)}})}processCheckoutWithPayments(t){return d(this,null,function*(){if(this.cart().length===0)return this.showToast("El carrito est\xE1 vac\xEDo");if(!Array.isArray(t)||t.length<1)return this.showToast("Debe registrar al menos un m\xE9todo de pago");this.isLoading.set(!0);let e={document_type:this.documentType(),serie:this.serie()||void 0,customer:{id:this.currentCustomer()?.id},total:this.grandTotal(),payments:t,items:this.cart().map(r=>({name:r.name,quantity:r.quantity,unitPrice:r.unitPrice,total:r.total,size:r.size,color:{product_size_id:r.color.product_size_id,color_id:r.color.color_id,colorName:r.color.colorName,hex:r.color.hex,inventory:r.color.inventory}}))};try{let r=yield m(this.apiService.post("pos/checkout",e));if(r?.success)this.clearCart(),this.lastSaleIdForReprint.set(r.sale_id),this.showToast(`Venta ${r.sale_id} Exitosa!`,4e3),this.isMobileBrowser()?this.showToast("Toca \xABImprimir ticket\xBB para imprimir el comprobante.",6e3):yield this.printTicket(r.sale_id);else{let i=r?.message??r?.error,o=Array.isArray(i)?i[0]:i;this.showToast(typeof o=="string"&&o.trim()?o.trim():"La venta no pudo ser procesada")}}catch(r){let i="Error al procesar venta";if(r instanceof w){let o=r.error?.message||r.error?.error,n=Array.isArray(o)?o[0]:o;if(typeof n=="string"&&n.trim()){this.showToast(n.trim());return}}this.showToast(i)}finally{this.isLoading.set(!1)}})}processCheckout(){return d(this,null,function*(){if(this.cart().length===0)return this.showToast("El carrito est\xE1 vac\xEDo");let t=this.paymentMethod(),e="CASH";t==="YAPE/PLIN"&&(e="YAPE"),t==="TRANSFERENCIA"&&(e="CARD");let r=[{method:e,amount:this.grandTotal()}];return this.processCheckoutWithPayments(r)})}addItem(t){this.cart.update(e=>[...e,t]),this.showToast("Producto Agregado")}updateItem(t){this.cart.update(e=>e.map(r=>r.cartId===t.cartId?t:r)),this.showToast("\xCDtem Actualizado")}removeItem(t){this.cart.update(e=>e.filter(r=>r.cartId!==t))}clearCart(){this.cart.set([]),this.currentCustomer.set(null),this.paymentMethod.set("EFECTIVO"),this.documentType.set("TICKET_INTERNO"),this.modalState.set({isOpen:!1,product:null,isEditing:!1}),this.toastMessage.set(null),this.isLoading.set(!1),this.lastSaleIdForReprint.set(null)}updateQuantity(t,e){this.cart.update(r=>r.map(i=>{if(i.cartId===t){let o=i.quantity+e;if(o<=0)return i;let n=i.color.inventory?.available_quantity??0;return o>n?(this.showToast(`Stock m\xE1x: ${n}`),i):v(k({},i),{quantity:o,total:o*i.unitPrice})}return i}))}openAddModal(t){this.modalState.set({isOpen:!0,product:t,isEditing:!1})}openEditModal(t){this.searchProductBySku(t.sku).then(e=>{e&&this.modalState.set({isOpen:!0,product:e,isEditing:!0,editingCartItem:t})})}closeModal(){this.modalState.set({isOpen:!1,product:null,isEditing:!1})}showToast(t,e=2500){this.toastMessage.set(t),setTimeout(()=>this.toastMessage.set(null),e)}setPaymentMethod(t){this.paymentMethod.set(t)}printTicket(t,e){return d(this,null,function*(){if(e?.userGesture){yield this.printTicketWithUserGesture(t);return}try{let r=yield m(this.apiService.getHtml(`pos/sales/${t}/ticket`)),i=b.prepareForPrint(r,!1);yield this.printViaFullscreenIframe(i)}catch(r){console.warn("No se pudo imprimir el ticket de venta",r),this.showToast("Venta registrada. Toca \xABImprimir ticket\xBB para reintentar.")}})}reprintLastTicket(){return d(this,null,function*(){let t=this.lastSaleIdForReprint();t!=null&&(yield this.printTicket(t,{userGesture:!0}))})}printTicketWithUserGesture(t){return d(this,null,function*(){let e=window.open("","_blank");if(!e){this.showToast("Permite ventanas emergentes o vuelve a tocar \xABImprimir ticket\xBB.");return}e.document.open(),e.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;padding:16px">Cargando ticket...</body></html>'),e.document.close();try{let r=yield m(this.apiService.getHtml(`pos/sales/${t}/ticket`)),i=b.prepareForPrint(r,!0);e.document.open(),e.document.write(i),e.document.close()}catch(r){e.close(),console.warn("No se pudo imprimir el ticket de venta",r),this.showToast("No se pudo cargar el ticket. Reintenta.")}})}isMobileBrowser(){return/Android|webOS|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)}printViaFullscreenIframe(t){return new Promise(e=>{this.teardownPrintSession();let r=[],i=()=>{Array.from(document.body.children).forEach(p=>{let l=p;l.id!=="pos-ticket-print-frame"&&(r.push({node:l,display:l.style.display}),l.style.setProperty("display","none","important"))}),document.body.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("background","#ffffff","important"),document.documentElement.style.setProperty("background","#ffffff","important")},o=()=>{r.forEach(({node:p,display:l})=>{p.style.display=l}),document.body.style.removeProperty("overflow"),document.body.style.removeProperty("background"),document.documentElement.style.removeProperty("background")},n=document.createElement("iframe");n.id="pos-ticket-print-frame",n.setAttribute("title","Ticket de venta"),n.setAttribute("style",["position:fixed","inset:0","width:100%","height:100%","border:0","margin:0","padding:0","z-index:2147483647","background:#ffffff"].join(";")),i(),document.body.appendChild(n);let B=new Blob([t],{type:"text/html;charset=utf-8"}),g=URL.createObjectURL(B),T=!1,u=()=>{T||(T=!0,URL.revokeObjectURL(g),n.remove(),o(),e())};n.onerror=()=>{this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),u()},n.onload=()=>{let p=n.contentWindow;if(!p){this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),u();return}p.addEventListener("afterprint",u,{once:!0}),requestAnimationFrame(()=>{setTimeout(()=>{try{p.focus(),p.print()}catch{this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),u();return}setTimeout(u,15e3)},500)})},n.src=g})}teardownPrintSession(){document.getElementById("pos-ticket-print-frame")?.remove(),document.getElementById("pos-ticket-print-host")?.remove(),document.body.classList.remove("pos-printing-ticket")}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=P({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{f as a,W as b,b as c,rt as d};

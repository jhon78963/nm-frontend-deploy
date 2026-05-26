import{b as _}from"./chunk-PQG5MP3N.js";import{Ab as u,F as P,Ia as S,J as v,L as E,Pb as M,Rb as f,Tb as y,a as b,b as k,ba as I,d as p,fb as A,m,pa as a,ua as C}from"./chunk-E7LU6J2I.js";var O=`
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
`,x="pos-printing-ticket",R="pos-ticket-print-host";function L(s){return s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,"")}function B(s){let d=L(s.trim()),t=d.match(/<style[^>]*>[\s\S]*?<\/style>/gi)??[],e=d.match(/<body[^>]*>([\s\S]*?)<\/body>/i);return{styles:t.join(`
`),body:e?.[1]?.trim()??d}}var H=`<script>
window.addEventListener('load', function () {
  setTimeout(function () { window.focus(); window.print(); }, 400);
});
<\/script>`;function F(s,d=!1){let t=L(s.trim()),e='<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">',r=`<style id="pos-receipt-print-isolation">${O}</style>`,i=d?H:"";if(/<html[\s>]/i.test(t)){let o=t;return/<\/head>/i.test(o)?o=o.replace(/<\/head>/i,`${e}${r}</head>`):o=o.replace(/<html([^>]*)>/i,`<html$1><head>${e}${r}</head>`),i&&/<\/body>/i.test(o)&&(o=o.replace(/<\/body>/i,`${i}</body>`)),o}return`<!DOCTYPE html>
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
</html>`}var U=`
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

    body.${x} > *:not(#${R}) {
      display: none !important;
    }

    body.${x} #${R} {
      display: block !important;
      position: static !important;
      width: 80mm !important;
      max-width: 80mm !important;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
    }
  }
`;function N(s){let{styles:d,body:t}=B(s);return`
    <style>${O}${d}</style>
    <div class="receipt-print">${t}</div>
  `}var g=(()=>{class s{constructor(){this.htmlContent=""}static prepareForPrint(t,e=!1){return F(t,e)}static buildHostMarkup(t){return N(t)}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275cmp=E({type:s,selectors:[["app-print-receipt"]],inputs:{htmlContent:"htmlContent"},standalone:!0,features:[A],decls:1,vars:1,consts:[[1,"receipt-print",3,"innerHTML"]],template:function(e,r){e&1&&S(0,"div",0),e&2&&C("innerHTML",r.htmlContent,I)},dependencies:[M],styles:["[_nghost-%COMP%]{display:none!important;position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.receipt-print[_ngcontent-%COMP%]{width:80mm;max-width:80mm;margin:0 auto;font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont;font-size:12px;color:#000;background:#fff}@media print{[_nghost-%COMP%]{display:block!important;position:static;width:80mm;height:auto;overflow:visible}.receipt-print[_ngcontent-%COMP%]{width:80mm!important;max-width:80mm!important}}"]})}}return s})();var D={BOLETA:"B001",FACTURA:"F001"},Z=(()=>{class s{constructor(){this.apiService=v(_),this.cart=a([]),this.currentCustomer=a(null),this.modalState=a({isOpen:!1,product:null,isEditing:!1}),this.toastMessage=a(null),this.paymentMethod=a("EFECTIVO"),this.isLoading=a(!1),this.documentType=a("TICKET_INTERNO"),this.serie=u(()=>{let t=this.documentType();return t==="TICKET_INTERNO"?"":D[t]??""}),this.lastSaleIdForReprint=a(null),this.grandTotal=u(()=>this.cart().reduce((t,e)=>t+e.total,0)),this.totalItems=u(()=>this.cart().reduce((t,e)=>t+e.quantity,0))}searchProductBySku(t){return p(this,null,function*(){this.isLoading.set(!0);try{return yield m(this.apiService.get("pos/products",{params:new f().set("sku",t)}))}catch(e){if(e instanceof y)switch(e.status){case 404:this.showToast("Producto no encontrado o c\xF3digo incorrecto");break;case 403:{let r=e.error?.message??e.error?.error,i=Array.isArray(r)?r[0]:r;this.showToast((typeof i=="string"&&i.trim()?i:null)??"No tienes permisos o un almac\xE9n asignado para este producto");break}case 500:this.showToast("Error interno del servidor al buscar el producto");break;default:this.showToast("Error de red o conexi\xF3n")}else this.showToast("Error de red o conexi\xF3n");return}finally{this.isLoading.set(!1)}})}searchCustomerByDni(t){return p(this,null,function*(){this.isLoading.set(!0);try{let e=yield m(this.apiService.get("pos/customers",{params:new f().set("dni",t)}));return e?(this.currentCustomer.set(e),this.showToast("Cliente encontrado"),!0):!1}catch{return this.showToast("Cliente no encontrado / Error API"),!1}finally{this.isLoading.set(!1)}})}processCheckoutWithPayments(t){return p(this,null,function*(){if(this.cart().length===0)return this.showToast("El carrito est\xE1 vac\xEDo");if(!Array.isArray(t)||t.length<1)return this.showToast("Debe registrar al menos un m\xE9todo de pago");this.isLoading.set(!0);let e={document_type:this.documentType(),serie:this.serie()||void 0,customer:{id:this.currentCustomer()?.id},total:this.grandTotal(),payments:t,items:this.cart().map(r=>({name:r.name,quantity:r.quantity,unitPrice:r.unitPrice,total:r.total,size:r.size,color:{product_size_id:r.color.product_size_id,color_id:r.color.color_id,colorName:r.color.colorName,hex:r.color.hex,inventory:r.color.inventory}}))};try{let r=yield m(this.apiService.post("pos/checkout",e));if(r?.success)this.clearCart(),this.lastSaleIdForReprint.set(r.sale_id),this.showToast(`Venta ${r.sale_id} Exitosa!`,4e3),this.isMobileBrowser()?this.showToast("Toca \xABImprimir ticket\xBB para imprimir el comprobante.",6e3):yield this.printTicket(r.sale_id);else{let i=r?.message??r?.error,o=Array.isArray(i)?i[0]:i;this.showToast(typeof o=="string"&&o.trim()?o.trim():"La venta no pudo ser procesada")}}catch(r){let i="Error al procesar venta";if(r instanceof y){let o=r.error?.message||r.error?.error,n=Array.isArray(o)?o[0]:o;if(typeof n=="string"&&n.trim()){this.showToast(n.trim());return}}this.showToast(i)}finally{this.isLoading.set(!1)}})}processCheckout(){return p(this,null,function*(){if(this.cart().length===0)return this.showToast("El carrito est\xE1 vac\xEDo");let t=this.paymentMethod(),e="CASH";t==="YAPE/PLIN"&&(e="YAPE"),t==="TRANSFERENCIA"&&(e="CARD");let r=[{method:e,amount:this.grandTotal()}];return this.processCheckoutWithPayments(r)})}addItem(t){this.cart.update(e=>[...e,t]),this.showToast("Producto Agregado")}updateItem(t){this.cart.update(e=>e.map(r=>r.cartId===t.cartId?t:r)),this.showToast("\xCDtem Actualizado")}removeItem(t){this.cart.update(e=>e.filter(r=>r.cartId!==t))}clearCart(){this.cart.set([]),this.currentCustomer.set(null),this.paymentMethod.set("EFECTIVO"),this.documentType.set("TICKET_INTERNO"),this.modalState.set({isOpen:!1,product:null,isEditing:!1}),this.toastMessage.set(null),this.isLoading.set(!1),this.lastSaleIdForReprint.set(null)}updateQuantity(t,e){this.cart.update(r=>r.map(i=>{if(i.cartId===t){let o=i.quantity+e;if(o<=0)return i;let n=i.color.inventory?.available_quantity??0;return o>n?(this.showToast(`Stock m\xE1x: ${n}`),i):k(b({},i),{quantity:o,total:o*i.unitPrice})}return i}))}openAddModal(t){this.modalState.set({isOpen:!0,product:t,isEditing:!1})}openEditModal(t){this.searchProductBySku(t.sku).then(e=>{e&&this.modalState.set({isOpen:!0,product:e,isEditing:!0,editingCartItem:t})})}closeModal(){this.modalState.set({isOpen:!1,product:null,isEditing:!1})}showToast(t,e=2500){this.toastMessage.set(t),setTimeout(()=>this.toastMessage.set(null),e)}setPaymentMethod(t){this.paymentMethod.set(t)}printTicket(t,e){return p(this,null,function*(){if(e?.userGesture){yield this.printTicketWithUserGesture(t);return}try{let r=yield m(this.apiService.getHtml(`pos/sales/${t}/ticket`)),i=g.prepareForPrint(r,!1);yield this.printViaFullscreenIframe(i)}catch(r){console.warn("No se pudo imprimir el ticket de venta",r),this.showToast("Venta registrada. Toca \xABImprimir ticket\xBB para reintentar.")}})}reprintLastTicket(){return p(this,null,function*(){let t=this.lastSaleIdForReprint();t!=null&&(yield this.printTicket(t,{userGesture:!0}))})}printTicketWithUserGesture(t){return p(this,null,function*(){let e=window.open("","_blank");if(!e){this.showToast("Permite ventanas emergentes o vuelve a tocar \xABImprimir ticket\xBB.");return}e.document.open(),e.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;padding:16px">Cargando ticket...</body></html>'),e.document.close();try{let r=yield m(this.apiService.getHtml(`pos/sales/${t}/ticket`)),i=g.prepareForPrint(r,!0);e.document.open(),e.document.write(i),e.document.close()}catch(r){e.close(),console.warn("No se pudo imprimir el ticket de venta",r),this.showToast("No se pudo cargar el ticket. Reintenta.")}})}isMobileBrowser(){return/Android|webOS|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)}printViaFullscreenIframe(t){return new Promise(e=>{this.teardownPrintSession();let r=[],i=()=>{Array.from(document.body.children).forEach(c=>{let l=c;l.id!=="pos-ticket-print-frame"&&(r.push({node:l,display:l.style.display}),l.style.setProperty("display","none","important"))}),document.body.style.setProperty("overflow","hidden","important"),document.body.style.setProperty("background","#ffffff","important"),document.documentElement.style.setProperty("background","#ffffff","important")},o=()=>{r.forEach(({node:c,display:l})=>{c.style.display=l}),document.body.style.removeProperty("overflow"),document.body.style.removeProperty("background"),document.documentElement.style.removeProperty("background")},n=document.createElement("iframe");n.id="pos-ticket-print-frame",n.setAttribute("title","Ticket de venta"),n.setAttribute("style",["position:fixed","inset:0","width:100%","height:100%","border:0","margin:0","padding:0","z-index:2147483647","background:#ffffff"].join(";")),i(),document.body.appendChild(n);let $=new Blob([t],{type:"text/html;charset=utf-8"}),w=URL.createObjectURL($),T=!1,h=()=>{T||(T=!0,URL.revokeObjectURL(w),n.remove(),o(),e())};n.onerror=()=>{this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),h()},n.onload=()=>{let c=n.contentWindow;if(!c){this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),h();return}c.addEventListener("afterprint",h,{once:!0}),requestAnimationFrame(()=>{setTimeout(()=>{try{c.focus(),c.print()}catch{this.showToast("Toca \xABImprimir ticket\xBB para reintentar."),h();return}setTimeout(h,15e3)},500)})},n.src=w})}teardownPrintSession(){document.getElementById("pos-ticket-print-frame")?.remove(),document.getElementById("pos-ticket-print-host")?.remove(),document.body.classList.remove("pos-printing-ticket")}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=P({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{g as a,Z as b};

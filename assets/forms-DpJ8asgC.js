function y(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function f(e,t){o(e),e.classList.add("field-error");const r=document.createElement("p");r.className="error-msg",r.textContent=t,e.insertAdjacentElement("afterend",r)}function o(e){var t;e.classList.remove("field-error"),(t=e.parentElement.querySelector(".error-msg"))==null||t.remove()}function a(e,t,r){return t?(o(e),!0):(f(e,r),!1)}document.querySelectorAll("input, textarea, select").forEach(e=>{e.addEventListener("input",()=>o(e))});const g=document.getElementById("contact-form");g&&g.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("contact-name"),r=document.getElementById("contact-email"),c=document.getElementById("contact-company"),m=document.getElementById("contact-message"),d=document.getElementById("consent");let n=!0;if(n=a(t,t.value.trim().length>1,"Please enter your full name.")&&n,n=a(r,y(r.value),"Please enter a valid work email address.")&&n,n=a(c,c.value.trim().length>1,"Please enter your company name.")&&n,n=a(m,m.value.trim().length>10,"Please enter a message (min 10 chars).")&&n,!d.checked){const u=d.closest("div");u.classList.add("ring-1","ring-error","rounded"),setTimeout(()=>u.classList.remove("ring-1","ring-error","rounded"),3e3),n=!1}if(!n)return;const i=document.getElementById("contact-form-card");i&&(i.innerHTML=`
        <div class="flex flex-col items-center justify-center py-xl px-lg text-center gap-md min-h-[400px]">
          <div class="w-16 h-16 rounded-full bg-[#E6F4EA] flex items-center justify-center">
            <span class="material-symbols-outlined text-[#1B5E20]" style="font-size:40px">check_circle</span>
          </div>
          <h3 class="text-headline-md font-headline-md text-primary">Inquiry Received</h3>
          <p class="text-body-lg text-secondary max-w-sm">
            Thank you, <strong class="text-primary">${t.value}</strong>.<br>
            Our governance team will reply to
            <strong class="text-primary">${r.value}</strong>
            within one business day.
          </p>
        </div>
      `)});const s=document.getElementById("demo-name"),l=document.getElementById("demo-email");s&&s.addEventListener("blur",()=>a(s,s.value.trim().length>1,"Please enter your name."));l&&l.addEventListener("blur",()=>a(l,y(l.value),"Please enter a valid work email."));

var link=document.querySelector(".contacts-button"),popup=document.querySelector(".modal-login"),close=popup.querySelector(".modal-close"),form=popup.querySelector(".feedback"),login=popup.querySelector("[name=name]"),email=popup.querySelector("[name=e-mail]"),text=popup.querySelector("[name=text-email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,email.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&email.value&&text.value?isStorageSupport&&localStorage.setItem("name",login.value):(e.preventDefault(),popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});

document.querySelectorAll("nav a").forEach(a=>{
  if(a.href===location.href) a.classList.add("active")
});

window.addEventListener("load",()=>{
  document.querySelectorAll(".fade").forEach(el=>{
    el.classList.add("show")
  });
});

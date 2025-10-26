document.addEventListener('DOMContentLoaded', function(){
  const announce = document.querySelector('[data-announcement]');
  if(announce){ setTimeout(()=>announce.style.display='none', 5000); }
});

const b=document.querySelector('.menu'),n=document.querySelector('.nav');
if(b&&n){b.addEventListener('click',()=>{let o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o));});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false');}));}

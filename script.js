    window.addEventListener('load', function(){
      const wrap = document.getElementById('loaderWrap');
      // small delay so spinner is visible briefly
      setTimeout(()=>{ wrap.classList.add('hidden'); wrap.setAttribute('aria-hidden','true'); }, 500);
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          history.replaceState(null,'',href);
        }
      });
    });

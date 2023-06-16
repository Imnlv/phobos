$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
  });


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffSet = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset - animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight )) {
          animItem.classList.add('_active');
        } else {
          if(!animItem.classList.contains('_anim_no_hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
}


const rippleButton = document.querySelector(".ripple-button");

function mousePositionToCustomProp(event, element) {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
}

rippleButton.addEventListener("click", (e) => {
  mousePositionToCustomProp(e, rippleButton);
  rippleButton.classList.add("pulse");
  rippleButton.addEventListener(
    "animationend",
    () => {
      rippleButton.classList.remove("pulse");
    },
    { once: true }
  );
});

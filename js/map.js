document.addEventListener('DOMContentLoaded', () => {
    // console.log('Swiper:', typeof Swiper);

    new Swiper('.category.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    });

    new Swiper('.bottom-box.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('footer .tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('map');
  if (!container) return;

  const center = new kakao.maps.LatLng(48.8606, 2.3376);

  const map = new kakao.maps.Map(container, {
    center,
    level: 4,
  });

  new kakao.maps.Marker({
    map,
    position: center,
  });
});



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

// document.addEventListener('DOMContentLoaded', () => {
// function initKakaoMap() {
//   const container = document.getElementById('map');
//   if (!container) return;

//   const options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3
//   };

//   new kakao.maps.Map(container, options);
// }

// });


// // document.addEventListener('DOMContentLoaded', () => {
// //   const container = document.getElementById('map');
// //   new kakao.maps.Map(container, {
// //     center: new kakao.maps.LatLng(33.450701, 126.570667),
// //     level: 3
// //   });
// // });


document.addEventListener('DOMContentLoaded', () => {
  if (!window.kakao || !kakao.maps) return;

  const container = document.getElementById('mapContainer');
  if (!container) return;

  const map = new kakao.maps.Map(container, {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  });

  window.kakaoMap = map;

  setTimeout(() => {
    kakao.maps.event.trigger(map, 'resize');
  }, 300);
});


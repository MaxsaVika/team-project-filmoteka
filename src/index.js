import './sass/index.scss';
import './js/api-movie-service';

const sidebar = document.querySelector('.sidebar');

window.addEventListener('resize', function () {
  if (window.innerWidth > 1090) {
    sidebar.classList.remove('collapse');
  } else {
    sidebar.classList.add('collapse');
  }
});

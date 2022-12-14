import { MovieApiService } from '../api-movie-service';
import { createMarkupMovies } from '../create-markup-movies';
import { slickLoader } from '../loader';
import { closeSignInForm } from '../submit-form';
import initPagination from '../helpers/pagination';

const films = document.querySelector('.main-films');
const pageTitle = document.querySelector('.main-header');
const videos = document.querySelector('.videos');
const pageSubTitle = document.querySelector('.most-watched');

const categoryMovie = new MovieApiService();

export default async function onClickCategory(event) {
  const element = event.target.closest('li[data-id]');
  document.querySelector('.footer').classList.add('visually-hidden');

  const id = element.dataset.id;
  let startPage = 1;

  document
    .querySelector('.wrapper-playlist_btn')
    .classList.add('visually-hidden');

  videos.innerHTML = '';
  films.innerHTML = '';
  pageTitle.classList.remove('main-header__search-info');
  pageTitle.classList.remove('main-header__search-accent');
  pageTitle.textContent = element.firstElementChild.textContent;
  pageSubTitle.classList.add('visually-hidden');
  closeSignInForm();
  slickLoader();

  const trending = await categoryMovie.fetchMoviesForGenres(id, startPage);
  SlickLoader.disable();
  const { page, results, total_results: totalItems } = trending;
  console.log(trending);
  const pagination = initPagination({
    page,
    itemsPerPage: results.length,
    totalItems: totalItems > 10000 ? 10000 : totalItems,
  });
  createMarkupMovies(trending.results, videos);
  document.querySelector('.footer').classList.remove('visually-hidden');

  pagination.on('afterMove', async ({ page }) => {
    slickLoader();
    const trending = await categoryMovie.fetchMoviesForGenres(id, page);
    SlickLoader.disable();

    films.innerHTML = '';
    pageSubTitle.classList.add('visually-hidden');
    videos.innerHTML = '';
    pageTitle.classList.remove('main-header__search-info');
    pageTitle.classList.remove('main-header__search-accent');
    pageTitle.textContent = element.firstElementChild.textContent;
    createMarkupMovies(trending.results, videos);
  });
}

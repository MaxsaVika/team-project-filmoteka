import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { refs } from './js/common/refs';

import './sass/index.scss';

import { openModalOn, onCloseModal } from './js/modal-our-team';

import {
  onBackdropClick,
  onPushEsc,
  onModalCloseBtn,
} from './js/modal-close-btn';

import loadMostWatchedList from './js/handlers/load-most-watched-list';
import loadDiscoverCards from './js/load-discover-cards';

import handlerInput from './js/handlers/handler-search';
// import loadPlayList from './js/load-playlist';

import { authUser } from './js/submit-form';
// import './js/create-markup-playlist';

import './js/load-playlist';


import { onModalShowInfoCard } from './js/on-modal-show-infocard';

// import { onOpenSelect } from './js/load-select-card';

// import { onClickForSelector } from './js/create-select-menu';

import debounce from 'lodash.debounce';
import './js/helpers/resize-window';
import './js/helpers/resize-sidebar';

import './js/render-pages';

// const refs = {
//   categoryList: document.querySelector('[data-list ="render"]'),
//   mainContainer: document.querySelector('.main-container'),
//   videos: document.querySelector('.videos'),
//   sidebar: document.querySelector('.sidebar'),
//   films: document.querySelector('.main-films'),
//   pageTitle: document.querySelector('.main-header'),
//   logo: document.querySelector('.logo-expand'),
//   discover: document.querySelector('[data-name="discover"]'),
//   trending: document.querySelector('[data-name="trending"]'),
//   playlist: document.querySelector('[data-name="playlist"]'),
//   openModal: document.querySelector('[data-action="open-modal"]'),

//   backdrop: document.querySelector('[data-modal]'),

//   pageSubTitle: document.querySelector('.most-watched'),
//   searchBar: document.querySelector('.search-bar'),
//   overlay: document.querySelector('.overlay'),
//   modalCardMovie: document.querySelector('.modal_movie_card'),
//   pageSubTitle: document.querySelector('.most-watched'),
//   modalCloseBtn: document.querySelector('.close-btn-card'),

// }
// titleElem: () => document.querySelector('.select-title'),


// refs.playlist.addEventListener('click', loadPlayList);

refs.modalCloseBtn.addEventListener('click', onModalCloseBtn);
refs.openModal.addEventListener('click', openModalOn);
refs.closeModalBtn.addEventListener('click', onCloseModal);

refs.backdrop.addEventListener('click', onBackdropClick);
refs.logo.addEventListener('click', loadMostWatchedList);
// refs.playlist.addEventListener('click', loadPlayList);

addEventListener('DOMContentLoaded', loadDiscoverCards);

refs.videos.addEventListener('click', onModalShowInfoCard);
refs.films.addEventListener('click', onModalShowInfoCard);

// titleElem.addEventListener('click', onClickForSelector);

const DEBOUNCE_DELAY = 750;

refs.searchBar.addEventListener(
  'input',
  debounce(handlerInput, DEBOUNCE_DELAY)
);

refs.overlay.addEventListener('click', onBackdropClick);

document.addEventListener('keydown', onPushEsc);


authUser();

refs.discover.addEventListener('click', function () {
  location.reload();
});

refs.logo.addEventListener('click', function () {
  location.reload();
});

// const selectionMenu = () => document.querySelector('.video-selection');
// selectionMenu().addEventListener('click', onOpenSelect);

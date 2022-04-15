import { 
  useState, useEffect, useContext, 
  useRef, useCallback, lazy, memo,
  useReducer } from 'react';
import { 
  Route, Link, 
  useLocation, Redirect,
  Switch, useRoute } from 'wouter';
import { Helmet } from 'react-helmet';
import { Logo } from 'components/logo/index';
import { Gif } from 'components/gif/index';
import { Header } from 'components/header/index';
import { ListOfGifs } from 'components/list-of-gifs/index';
import { Category } from 'components/category/index';
import { SearchForm } from 'components/searchForm/index';
import { useForm } from 'components/searchForm/hook';
// import { Trending } from 'components/trending/trending';
import { LazyTrending } from 'components/trending/index';
import { Fav } from 'components/fav/index';
import { Login } from 'components/login/index';
// import { Register } from 'components/register/register-formik';
import { Register } from 'components/register/index';
import { ModalPortal } from 'components/modal/index';
import { getGifs } from 'services/getGifs';
import { getTrendingTerms } from 'services/getTrendingTerms';
import { getSingleGif } from 'services/getSingleGif';
import { loginService } from 'services/login';
import { registerService } from 'services/register';
import { addFavService } from 'services/addFav';
import { deleteFavService } from 'services/deleteFav';
import { getFavsService } from 'services/getFavs';
import { API_KEY, API_URL, ENDPOINT } from 'services/settings';
// import { Home } from 'pages/home/index';
import { Detail } from 'pages/detail/index';
import { SearchResults } from 'pages/search-results/index';
import { LoginPage } from 'pages/login/index';
import { RegisterPage } from 'pages/register/index';
import { ErrorPage } from 'pages/error/index';
import { useGifs } from 'hooks/useGifs';
import { useGlobalGifs } from 'hooks/useGlobalGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import { useSingleGif } from 'hooks/useSingleGif';
import { useUser } from 'hooks/useUser';
// import { useSEO } from 'hooks/useSEO';
import { StaticContext } from 'context/static-context';
import { GifsContextProvider, GifsContext } from 'context/gifs-context';
import { UserContextProvider, UserContext } from 'context/user-context';
import debounce from 'just-debounce-it';

const Home = lazy(
  () => import('pages/home/index').then(module => ({default: module.Home}))
);

const Trending = lazy(
  () => import('components/trending/trending').then(module => ({default: module.Trending}))
);

export {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  memo,
  useReducer,
  Route,
  Link,
  useLocation,
  Redirect,
  Switch,
  useRoute,
  Helmet,
  Logo,
  Gif,
  Header,
  ListOfGifs,
  Category,
  SearchForm,
  useForm,
  Trending,
  LazyTrending,
  Fav,
  Login,
  Register,
  ModalPortal,
  getGifs,
  getTrendingTerms,
  getSingleGif,
  loginService,
  registerService,
  addFavService,
  deleteFavService,
  getFavsService,
  // useSEO,
  API_KEY,
  API_URL,
  ENDPOINT,
  Home,
  Detail,
  SearchResults,
  LoginPage,
  RegisterPage,
  ErrorPage,
  useGifs,
  useGlobalGifs,
  useNearScreen,
  useSingleGif,
  useUser,
  StaticContext,
  GifsContext,
  GifsContextProvider,
  UserContext,
  UserContextProvider,
  debounce
};
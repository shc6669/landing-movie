<template>
    <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
        <!--begin::Post-->
        <div class="content flex-row-fluid" id="kt_content">
            <!--begin::Search vertical-->
            <div class="d-flex flex-column flex-lg-row">
                <!--begin::Aside-->
                <div class="flex-column flex-lg-row-auto w-100 w-lg-250px w-xxl-325px mb-8 mb-lg-0 me-lg-9 me-5">
                    <!--begin::Form-->
                    <form action="#">
                        <!--begin::Card-->
                        <div class="card">
                            <!--begin::Body-->
                            <div class="card-body">
                                <!--begin:Search-->
                                <div class="position-relative">
                                    <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                    <span class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                    <input type="text" class="form-control form-control-solid ps-10" name="search" value="" placeholder="Search" />
                                </div>
                                <!--end:Search-->
                                <!--begin::Border-->
                                <div class="separator separator-dashed my-8"></div>
                                <!--end::Border-->
                                <!--begin::Input group-->
                                <div class="mb-5" data-kt-menu="true" id="genres">
                                    <label class="fs-6 form-label fw-bolder text-dark">Genres</label>
                                    <!--begin::Select-->
                                    <select class="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#genres" data-allow-clear="true">
                                        <option value=""></option>
                                        <option v-for="genre in genres" :key="genre.index" :value="genre.id">{{genre.name}}</option>
                                    </select>
                                    <!--end::Select-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-5">
                                    <label class="fs-6 form-label fw-bolder text-dark">Vote Number Range</label>
                                    <!--begin::Dialer-->
                                    <div class="position-relative" data-kt-dialer="true" data-kt-dialer-min="1000" data-kt-dialer-max="50000" data-kt-dialer-step="1000">
                                        <!--begin::Decrease control-->
                                        <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                            <!--begin::Svg Icon | path: icons/duotune/general/gen042.svg-->
                                            <span class="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                                                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                        </button>
                                        <!--end::Decrease control-->
                                        <!--begin::Input control-->
                                        <input type="text" class="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Vote Number Range" name="managerange" />
                                        <!--end::Input control-->
                                        <!--begin::Increase control-->
                                        <button type="button" class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                            <!--begin::Svg Icon | path: icons/duotune/general/gen041.svg-->
                                            <span class="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                                                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                                                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                                                </svg>
                                            </span>
                                            <!--end::Svg Icon-->
                                        </button>
                                        <!--end::Increase control-->
                                    </div>
                                    <!--end::Dialer-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Action-->
                                <div class="d-flex align-items-center justify-content-end">
                                    <a href="#" class="btn btn-active-light-primary btn-color-gray-400 me-3">Discard</a>
                                    <a href="#" class="btn btn-primary">Search</a>
                                </div>
                                <!--end::Action-->
                            </div>
                            <!--end::Body-->
                        </div>
                        <!--end::Card-->
                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Aside-->
                <!--begin::Layout-->
                <div class="flex-lg-row-fluid">
                    <!--begin::Toolbar-->
                    <div class="d-flex flex-wrap flex-stack pb-7">
                        <!--begin::Controls-->
                        <div class="d-flex flex-wrap my-1">
                            <!--begin::Tab nav-->
                            <ul class="nav nav-pills me-6 mb-2 mb-sm-0">
                                <li class="nav-item m-0">
                                    <a class="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active" data-bs-toggle="tab" href="#kt_project_users_card_pane">
                                        <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg-->
                                        <span class="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                                                </g>
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </a>
                                </li>
                                <li class="nav-item m-0">
                                    <a class="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary" data-bs-toggle="tab" href="#kt_project_users_table_pane">
                                        <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                                        <span class="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                                                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    </a>
                                </li>
                            </ul>
                            <!--end::Tab nav-->
                            <!--begin::Actions-->
                            <div class="d-flex my-0">
                                <!--begin::Select-->
                                <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Filter" class="form-select form-select-transparent form-select-sm w-150px me-5">
                                    <option value="1">Recently Updated</option>
                                    <option value="2">Last Month</option>
                                    <option value="3">Last Quarter</option>
                                    <option value="4">Last Year</option>
                                </select>
                                <!--end::Select-->
                                <!--begin::Select-->
                                <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Export" class="form-select form-select-transparent form-select-sm w-100px">
                                    <option value="1">Excel</option>
                                    <option value="1">PDF</option>
                                    <option value="2">Print</option>
                                </select>
                                <!--end::Select-->
                            </div>
                            <!--end::Actions-->
                        </div>
                        <!--end::Controls-->
                    </div>
                    <!--end::Toolbar-->
                    <!--begin::Tab Content-->
                    <div class="tab-content">
                        <!--begin::Tab pane-->
                        <div id="kt_project_users_card_pane" class="tab-pane fade show active">
                            <!--begin::Row-->
                            <div class="row g-6 g-xl-9">
                                <!--begin::Col-->
                                <div class="col-md-6 col-xl-12 col-xxl-6" v-for="(movie) in movies" :key="movie.index">
                                    <!--begin::Card-->
                                    <div class="card">
                                        <!--begin::Card body-->
                                        <div class="card-body d-flex flex-center flex-column pt-12 p-9">
                                            <!--begin::Poster-->
                                            <router-link :to="{name: 'detail', params: {slug: movie.id}}" class="text-gray-800 text-hover-primary mb-1">
                                                <img :src="imageBaseUrl+movie.poster_path" class="mw-lg-150px me-3" :alt="movie.title" />
                                            </router-link>
                                            <!--end::Poster-->
                                            <!--begin::Title-->
                                            <router-link :to="{name: 'detail', params: {slug: movie.id}}" class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0">
                                                {{movie.title}}
                                            </router-link>
                                            <!--end::Title-->
                                            <!--begin::Release Date-->
                                            <div class="fw-bold text-gray-400 mb-6">
                                                {{convertDate(movie.release_date)}}
                                            </div>
                                            <!--end::Release Date-->
                                            <!--begin::Info-->
                                            <div class="d-flex flex-center flex-wrap">
                                                <!--begin::Stats-->
                                                <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div class="fs-6 fw-bolder text-gray-700 text-center">{{movie.vote_count}}</div>
                                                    <div class="fw-bold text-gray-400">
                                                        <span class="badge badge-light-info fw-bolder px-4 py-3">
                                                            Vote Count
                                                        </span>
                                                    </div>
                                                </div>
                                                <!--end::Stats-->
                                                <!--begin::Stats-->
                                                <div class="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                                    <div class="fs-6 fw-bolder text-gray-700 text-center">{{movie.popularity}}</div>
                                                    <div class="fw-bold text-gray-400">
                                                        <span class="badge badge-light-success fw-bolder px-4 py-3">
                                                            Movie Popularity
                                                        </span>
                                                    </div>
                                                </div>
                                                <!--end::Stats-->
                                            </div>
                                            <!--end::Info-->
                                        </div>
                                        <!--end::Card body-->
                                    </div>
                                    <!--end::Card-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->
                            <!--begin::Pagination-->
                            <VuePagination v-if="movies" :total-records="totalRecords" :total-pages="totalPages" :current-page="page" @pagechanged="onPageChange" />
                            <!--end::Pagination-->
                        </div>
                        <!--end::Tab pane-->
                        <!--begin::Tab pane-->
                        <div id="kt_project_users_table_pane" class="tab-pane fade">
                            <!--begin::Card-->
                            <div class="card card-flush">
                                <!--begin::Card body-->
                                <div class="card-body pt-0">
                                    <!--begin::Table container-->
                                    <div class="table-responsive">
                                        <!--begin::Table-->
                                        <table id="kt_project_users_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder">
                                            <!--begin::Head-->
                                            <thead class="fs-7 text-gray-400 text-uppercase">
                                                <tr>
                                                    <th class="w-10px pe-2">
                                                        <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                            <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_customers_table .form-check-input" value="1" />
                                                        </div>
                                                    </th>
                                                    <th class="min-w-250px">Poster</th>
                                                    <th class="min-w-150px">Title</th>
                                                    <th class="min-w-90px">Vote Count</th>
                                                    <th class="min-w-90px">Movie Popularity</th>
                                                    <th class="min-w-50px text-end">Details</th>
                                                </tr>
                                            </thead>
                                            <!--end::Head-->
                                            <!--begin::Body-->
                                            <tbody class="fs-6">
                                                <tr v-for="(movie, index) in movies" :key="movie.index">
                                                    <!--begin::Checkbox-->
                                                    <td>
                                                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input class="form-check-input" type="checkbox" :value="index+1" />
                                                        </div>
                                                    </td>
                                                    <!--end::Checkbox-->
                                                    <!--begin::Poster-->
                                                    <td>
                                                        <router-link :to="{name: 'detail', params: {slug: movie.id}}" class="text-gray-800 text-hover-primary mb-1">
                                                            <img :src="imageBaseUrl+movie.poster_path" class="mw-lg-150px me-3" :alt="movie.title" />
                                                        </router-link>
                                                    </td>
                                                    <!--end::Poster-->
                                                    <!--begin::Title-->
                                                    <td>
                                                        <router-link :to="{name: 'detail', params: {slug: movie.id}}" class="text-gray-600 text-hover-primary mb-1">
                                                            {{movie.title}}
                                                        </router-link>
                                                    </td>
                                                    <!--end::Title-->
                                                    <td>
                                                        <span class="badge badge-light-info fw-bolder px-4 py-3">
                                                            {{movie.vote_count}}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span class="badge badge-light-success fw-bolder px-4 py-3">
                                                            {{movie.popularity}}
                                                        </span>
                                                    </td>
                                                    <td class="text-end">
                                                        <router-link :to="{name: 'detail', params: {slug: movie.id}}" class="btn btn-light btn-sm">
                                                            View
                                                        </router-link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <!--end::Body-->
                                        </table>
                                        <!--end::Table-->
                                    </div>
                                    <!--end::Table container-->
                                    <!--begin::Pagination-->
                                    <VuePagination v-if="movies" :total-pages="totalPages" :total-records="totalRecords" :current-page="page" @pagechanged="onPageChange" />
                                    <!--end::Pagination-->
                                </div>
                                <!--end::Card body-->
                            </div>
                            <!--end::Card-->
                        </div>
                        <!--end::Tab pane-->
                    </div>
                    <!--end::Tab Content-->
                </div>
                <!--end::Layout-->
            </div>
            <!--begin::Search vertical-->
        </div>
        <!--end::Post-->
    </div>
</template>

<script>
import {APP_API_BASE} from '../../../config/config'
import moment from 'moment'
import VuePagination from '../../Plugins/Pagination'

export default {
    name: 'Main-Container-Landing',
    components: {
        VuePagination
    },
    data() {
        return {
            imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
            genres: [],
            movies: [],
            page: 1,
            totalPages: 0,
            totalRecords: 0,
        }
    },
    created() {
        this.moment = moment
        this.fetchMovies()
        this.fetchGenres()
    },
    methods: {
        convertDate(value) {
            return moment(value).format('LL')
        },
        fetchMovies() {
            const paramsHeader = {
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            let urlMovies = `${APP_API_BASE}/discover/movie`
            this.axios.get(
                urlMovies, {
                params: {
                    api_key: process.env.VUE_APP_API_KEY,
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    include_adult: false,
                    include_video: false,
                    page: this.page,
                    with_watch_monetization_types: 'flatrate'
                }}, {
                paramsHeader
            })
            .then(response => {
                this.movies = response.data.results
                this.totalPages = response.data.total_pages
                this.totalRecords = response.data.total_results
            })
        },
        fetchGenres() {
            const paramsHeader = {
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            let urlGenres = `${APP_API_BASE}/genre/movie/list`
            this.axios.get(
                urlGenres, {
                params: {
                    api_key: process.env.VUE_APP_API_KEY,
                    language: 'en-US'
                }}, {
                paramsHeader
            })
            .then(response => {
                this.genres = response.data.genres
            })
        },
        onPageChange(page) {
            this.page = page
            this.fetchMovies()
        }
    }
}
</script>
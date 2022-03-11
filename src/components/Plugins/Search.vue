<template>
    <!--begin::Search-->
    <div id="kt_header_search" class="d-flex align-items-center w-lg-225px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="lg" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
        <!--begin::Tablet and mobile search toggle-->
        <div data-kt-search-element="toggle" class="d-flex d-lg-none align-items-center">
            <div class="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px">
                <!--begin::Svg Icon | path: icons/duotune/general/gen004.svg-->
                <span class="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black" />
                        <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </div>
        </div>
        <!--end::Tablet and mobile search toggle-->
        <!--begin::Form-->
        <form data-kt-search-element="form" class="d-none d-lg-block w-100 mb-5 mb-lg-0 position-relative" autocomplete="off">
            <!--begin::Hidden input(Added to disable form autocomplete)-->
            <input type="hidden" />
            <!--end::Hidden input-->
            <!--begin::Icon-->
            <!--begin::Svg Icon | path: icons/duotune/general/gen004.svg-->
            <span class="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black" />
                    <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black" />
                </svg>
            </span>
            <!--end::Svg Icon-->
            <!--end::Icon-->
            <!--begin::Input-->
            <input type="text" class="form-control bg-transparent ps-13 fs-7 h-40px" name="search" v-model="searchKeywords" placeholder="Quick Search" @keyup="searchQueryKeywords" data-kt-search-element="input" />
            <!--end::Input-->
            <!--begin::Spinner-->
            <span class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                <span class="spinner-border h-15px w-15px align-middle text-gray-400"></span>
            </span>
            <!--end::Spinner-->
            <!--begin::Reset-->
            <span class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </span>
            <!--end::Reset-->
        </form>
        <!--end::Form-->
        <!--begin::Menu-->
        <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden">
            <!--begin::Wrapper-->
            <div data-kt-search-element="wrapper">
                <!--begin::Recently viewed-->
                <div data-kt-search-element="results" class="d-none">
                    <!--begin::Items-->
                    <div class="scroll-y mh-200px mh-lg-350px">
                        <!--begin::Category title-->
                        <h3 class="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Query results</h3>
                        <!--end::Category title-->
                        <!--begin::Item-->
                        <router-link v-for="result in results" :key="result.index" :to="{name: 'detail', params: {slug: result.id}}" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                            <!--begin::Poster-->
                            <div class="symbol symbol-40px me-4">
                                <img :src="imageBaseUrl+result.poster_path" :alt="result.title" />
                            </div>
                            <!--end::Poster-->
                            <!--begin::Title-->
                            <div class="d-flex flex-column justify-content-start fw-bold">
                                <span class="fs-6 fw-bold">
                                    {{result.title}}
                                </span>
                            </div>
                            <!--end::Title-->
                        </router-link>
                        <!--end::Item-->
                    </div>
                    <!--end::Items-->
                </div>
                <!--end::Recently viewed-->
                <!--begin::Recently viewed-->
                <div data-kt-search-element="main">
                    <!--begin::Heading-->
                    <div class="d-flex flex-stack fw-bold mb-5">
                        <!--begin::Label-->
                        <span class="text-muted fs-6 me-2">Recently Searched</span>
                        <!--end::Label-->
                    </div>
                    <!--end::Heading-->
                </div>
                <!--end::Recently viewed-->
                <!--begin::Empty-->
                <div data-kt-search-element="empty" class="text-center d-none">
                    <!--begin::Icon-->
                    <div class="pt-10 pb-10">
                        <!--begin::Svg Icon | path: icons/duotune/files/fil024.svg-->
                        <span class="svg-icon svg-icon-4x opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="black" />
                                <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="black" />
                                <rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="black" />
                                <path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="black" />
                            </svg>
                        </span>
                        <!--end::Svg Icon-->
                    </div>
                    <!--end::Icon-->
                    <!--begin::Message-->
                    <div class="pb-15 fw-bold">
                        <h3 class="text-gray-600 fs-5 mb-2">No result found</h3>
                        <div class="text-muted fs-7">Please try again with a different query</div>
                    </div>
                    <!--end::Message-->
                </div>
                <!--end::Empty-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Menu-->
    </div>
    <!--end::Search-->
</template>

<script>
import {APP_API_BASE} from '../../config/config'

export default {
    name: 'Search',
    data() {
        return {
            imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
            results: [],
            searchKeywords: '',
        }
    },
    methods: {
        searchQueryKeywords() {
            this.results = []
            const paramsHeader = {
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            let urlSearch = `${APP_API_BASE}/search/movie`
            this.axios.get(
                urlSearch, {
                params: {
                    api_key: process.env.VUE_APP_API_KEY,
                    query: this.searchKeywords
                }}, {
                    paramsHeader
            })
            .then(response => {
                this.results = response.data.results
                this.showSearch = true
            })
        }
    }
}
</script>
<template>
    <div class="card">
        <!--begin::Body-->
        <div class="card-body p-lg-17">
            <!--begin::Detail-->
            <div class="mb-18">
                <!--begin::Wrapper-->
                <div class="mb-10">
                    <!--begin::Top-->
                    <div class="text-center mb-15">
                        <!--begin::Title-->
                        <h3 class="fs-2hx text-dark mb-5">
                            <a :href="detail.homepage" target="_blank" class="text-dark fw-bolder text-hover-primary text-dark lh-base">
                                {{detail.title}}
                            </a>
                        </h3>
                        <!--end::Title-->
                        <!--begin::Text-->
                        <div class="fs-5 text-muted fw-bold">
                            Released on : {{convertDate(detail.release_date)}}
                            <br>
                            Duration : {{convertTime(detail.runtime)}}
                            <br>
                            Revenue : ${{detail.revenue}}
                            <br>
                            <br>
                            <div class="fs-2 fw-bold text-muted text-uppercase text-center mb-3">
                                <span class="lh-1 text-gray-700">
                                    Spoken Languages
                                </span>
                            </div>
                            <div class="fs-3 fw-bold text-muted text-uppercase text-center">
                                <span v-for="(language, index) in detail.spoken_languages" :key="language.index" class="link-primary fs-4 fw-bolder">
                                    <span v-if="index != 0" class="fs-1 lh-1 text-gray-700">, </span>
                                    <span>
                                        {{language.name}}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <!--end::Text-->
                    </div>
                    <!--end::Top-->
                    <!--begin::Overlay-->
                    <div class="overlay">
                        <!--begin::Backdrop Image-->
                        <a :href="detail.homepage" target="_blank" class="text-dark fw-bolder text-hover-primary text-dark lh-base">
                            <img class="w-100 card-rounded" :src="imageBaseUrl+detail.backdrop_path" :alt="detail.title" />
                        </a>
                        <!--end::Backdrop Image-->
                    </div>
                    <!--end::Container-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Description-->
                <div class="fs-5 fw-bold text-gray-600">
                    <!--begin::Text-->
                    <p class="mb-8">
                        {{detail.overview}}
                    </p>
                    <!--end::Text-->
                </div>
                <!--end::Description-->
            </div>
            <!--end::Detail-->
            <!--begin::Statistics-->
            <div class="card bg-light mb-18">
                <!--begin::Body-->
                <div class="card-body py-15">
                    <!--begin::Wrapper-->
                    <div class="d-flex flex-center">
                        <!--begin::Items-->
                        <div class="d-flex justify-content-between mb-10 mx-auto w-xl-900px">
                            <!--begin::Item-->
                            <div class="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                <!--begin::Content-->
                                <div class="text-center">
                                    <!--begin::Symbol-->
                                    <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen030.svg-->
                                    <span class="svg-icon svg-icon-2tx svg-icon-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="black"/>
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                    <!--end::Symbol-->
                                    <!--begin::Text-->
                                    <div class="mt-1">
                                        <!--begin::Animation-->
                                        <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                            <div class="min-w-70px" data-kt-countup="true" :data-kt-countup-value="detail.vote_count">0</div>
                                        </div>
                                        <!--end::Animation-->
                                        <!--begin::Label-->
                                        <span class="text-gray-600 fw-bold fs-5 lh-0">Vote Count</span>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Text-->
                                </div>
                                <!--end::Content-->
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                <!--begin::Content-->
                                <div class="text-center">
                                    <!--begin::Symbol-->
                                    <!--begin::Svg Icon | path: icons/duotune/graphs/gra008.svg-->
                                    <span class="svg-icon svg-icon-2tx svg-icon-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="black" />
                                            <path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="black" />
                                            <path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="black" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                    <!--end::Symbol-->
                                    <!--begin::Text-->
                                    <div class="mt-1">
                                        <!--begin::Animation-->
                                        <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                            <div class="min-w-100px" data-kt-countup="true" :data-kt-countup-value="detail.vote_average">0</div>
                                        </div>
                                        <!--end::Animation-->
                                        <!--begin::Label-->
                                        <span class="text-gray-600 fw-bold fs-5 lh-0">Vote Average</span>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Text-->
                                </div>
                                <!--end::Content-->
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div class="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                <!--begin::Content-->
                                <div class="text-center">
                                    <!--begin::Symbol-->
                                    <!--begin::Svg Icon | path: assets/media/icons/duotune/abstract/abs024.svg-->
                                        <span class="svg-icon svg-icon-2tx svg-icon-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path opacity="0.3" d="M7.16973 20.95C6.26973 21.55 5.16972 20.75 5.46972 19.75L7.36973 14.05L2.46972 10.55C1.56972 9.95005 2.06973 8.55005 3.06973 8.55005H20.8697C21.9697 8.55005 22.3697 9.95005 21.4697 10.55L7.16973 20.95Z" fill="black"/>
                                                <path d="M11.0697 2.75L7.46973 13.95L16.9697 20.85C17.8697 21.45 18.9697 20.65 18.6697 19.65L13.1697 2.75C12.7697 1.75 11.3697 1.75 11.0697 2.75Z" fill="black"/>
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                    <!--end::Symbol-->
                                    <!--begin::Text-->
                                    <div class="mt-1">
                                        <!--begin::Animation-->
                                        <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                            <div class="min-w-70px" data-kt-countup="true" :data-kt-countup-value="detail.popularity">0</div>
                                            +
                                        </div>
                                        <!--end::Animation-->
                                        <!--begin::Label-->
                                        <span class="text-gray-600 fw-bold fs-5 lh-0">Popularity</span>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Text-->
                                </div>
                                <!--end::Content-->
                            </div>
                            <!--end::Item-->
                        </div>
                        <!--end::Items-->
                    </div>
                    <!--end::Wrapper-->
                    <!--begin::Genres-->
                    <div class="fs-2 fw-bold text-muted text-uppercase text-center mb-3">
                        <span class="fs-1 lh-1 text-gray-700">Genres</span>
                    </div>
                    <div class="fs-2 fw-bold text-muted text-center">
                        <span v-for="(genre, index) in detail.genres" :key="genre.index" class="link-primary fs-4 fw-bolder">
                            <span v-if="index != 0" class="fs-1 lh-1 text-gray-700">, </span>
                            <span>
                                {{genre.name}}
                            </span>
                        </span>
                    </div>
                    <!--end::Genres-->
                </div>
                <!--end::Body-->
            </div>
            <!--end::Statistics-->
            <!--begin::Section-->
            <div class="mb-16">
                <!--begin::Top-->
                <div class="text-center mb-12">
                    <!--begin::Title-->
                    <h3 class="fs-2hx text-dark mb-5">Production Companies</h3>
                    <!--end::Title-->
                </div>
                <!--end::Top-->
                <!--begin::Row-->
                <div class="row g-10">
                    <!--begin::Col-->
                    <div class="col-md-4" v-for="company in detail.production_companies" :key="company.index">
                        <!--begin::Production Companies post-->
                        <div class="card-xl-stretch me-md-6">
                            <!--begin::Overlay-->
                            <a class="d-block overlay mb-4" href="javascript:void(0)">
                                <!--begin::Image-->
                                <div class="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-contain card-rounded min-h-175px" :style="{'background-image':'url('+imageBaseUrl+company.logo_path+')'}"></div>
                                <!--end::Image-->
                                <!--begin::Overlay-->
                                <div class="overlay-layer bg-dark card-rounded bg-opacity-25"></div>
                                <!--end::Overlay-->
                            </a>
                            <!--end::Overlay-->
                            <!--begin::Body-->
                            <div class="m-0">
                                <!--begin::Author-->
                                <a href="javascript:void(0)" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">
                                    {{company.name}}
                                </a>
                                <!--end::Author-->
                                <!--begin::Content-->
                                <div class="fs-6 fw-bolder">
                                    <!--begin::Country-->
                                    <span class="text-muted"> Country: {{company.origin_country}}</span>
                                    <!--end::Country-->
                                </div>
                                <!--end::Content-->
                            </div>
                            <!--end::Body-->
                        </div>
                        <!--end::Production Companies post-->
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Row-->
            </div>
            <!--end::Section-->
        </div>
        <!--end::Body-->
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Detail Card',
    props: ['detail'],
    data() {
        return {
            imageBaseUrl: 'https://image.tmdb.org/t/p/w500'
        }
    },
    created() {
        this.moment = moment
    },
    methods: {
        convertDate(value) {
            return moment(value).format('LL')
        },
        convertTime(value) {
            let num = value
            let hours = (num / 60)
            let rhours = Math.floor(hours)
            let minutes = (hours - rhours) * 60
            let rminutes = Math.round(minutes)
            return rhours + " hour, " + rminutes + " minute"
        }
    }
}
</script>
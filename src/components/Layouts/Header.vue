<template>
    <!--begin::Header-->
    <div id="kt_header" class="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
        <!--begin::Container-->
        <div class="container-xxl d-flex flex-grow-1 flex-stack">
            <!--begin::Header Logo-->
            <div class="d-flex align-items-center me-5">
                <!--begin::Heaeder menu toggle-->
                <div class="d-lg-none btn btn-icon btn-active-color-primary w-30px h-30px ms-n2 me-3" id="kt_header_menu_toggle">
                    <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
                    <span class="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                            <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                        </svg>
                    </span>
                    <!--end::Svg Icon-->
                </div>
                <!--end::Heaeder menu toggle-->
                <a>
                    <img alt="Logo" src="@/assets/media/logos/logo-landing-dark.svg" class="h-20px h-lg-30px" />
                </a>
            </div>
            <!--end::Header Logo-->
            <!--begin::Topbar-->
            <div class="d-flex align-items-center">
                <!--begin::Topbar-->
                <div class="d-flex align-items-center flex-shrink-0">
                    <Search v-if="$route.meta.reuse" />
                </div>
                <!--end::Topbar-->
            </div>
            <!--end::Topbar-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Header-->
</template>

<script>
import Search from '../Plugins/Search'

export default {
    name: 'Header',
    components: {
        Search
    }
}
</script>
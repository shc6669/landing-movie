<template>
    <div class="toolbar py-5 py-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container-xxl py-5">
            <!--begin::Row-->
            <div class="row gy-0 gx-10">
                <div class="col-xl-8">
                    <!--begin::Engage widget 2-->
                    <div class="card card-xl-stretch bg-body border-0 mb-5 mb-xl-0">
                        <!--begin::Body-->
                        <div class="card-body d-flex flex-column flex-lg-row flex-stack p-lg-15">
                            <!--begin::Info-->
                            <div class="d-flex flex-column justify-content-center align-items-center align-items-lg-start me-10 text-center text-lg-start">
                                <!--begin::Title-->
                                <h3 class="fs-2hx line-height-lg mb-5">
                                    <span class="fw-bold">Movies Portal</span>
                                    <br />
                                    <span class="fw-bolder">for Movie Lovers</span>
                                </h3>
                                <!--end::Title-->
                                <div class="fs-4 text-muted mb-7">
                                    Long before you sit down to put the pen
                                    <br />
                                    need to make sure you breathe
                                </div>
                            </div>
                            <!--end::Info-->
                            <!--begin::Illustration-->
                            <img src="assets/media/illustrations/sketchy-1/13-dark.png" alt="Ilustrations" class="mw-200px mw-lg-350px mt-lg-n10" />
                            <!--end::Illustration-->
                        </div>
                        <!--end::Body-->
                    </div>
                    <!--end::Engage widget 2-->
                </div>
                <div class="col-xl-4">
                    <!--begin::Mixed Widget 16-->
                    <div class="card card-xl-stretch bg-body border-0">
                        <!--begin::Body-->
                        <div class="card-body pt-5 mb-xl-9 position-relative">
                            <!--begin::Heading-->
                            <div class="d-flex flex-stack">
                                <!--begin::Title-->
                                <h4 class="fw-bolder text-gray-800 m-0">Movies Database</h4>
                                <!--end::Title-->
                            </div>
                            <!--end::Heading-->
                            <!--begin::Chart-->
                            <div class="d-flex flex-center mb-5 mb-xxl-0">
                                <div id="kt_charts_mixed_widget_16_chart" style="height: 260px"></div>
                            </div>
                            <!--end::Chart-->
                            <!--begin::Content-->
                            <div class="text-center position-absolute bottom-0 start-50 translate-middle-x w-100 mb-10">
                                <!--begin::Text-->
                                <p class="fw-bold fs-4 text-gray-400 mb-7 px-5">
                                    Long before you sit down to put the
                                    <br />
                                    make sure you breathe
                                </p>
                                <!--end::Text-->
                            </div>
                            <!--end::Content-->
                        </div>
                        <!--end::Body-->
                    </div>
                    <!--end::Mixed Widget 16-->
                </div>
            </div>
            <!--end::Row-->
        </div>
    <!--end::Container-->
    </div>
</template>

<script>
export default {
    name: 'Toolbar-Landing'
}
</script>
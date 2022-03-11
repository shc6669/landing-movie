<template>
    <div>
        <Breadcrumb :detail="movieDetail" />

        <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
            <!--begin::Post-->
            <div class="content flex-row-fluid" id="kt_content">
                <!--begin::Detail card-->
                <DetailCard :detail="movieDetail" />
                <!--end::Detail card-->
            </div>
            <!--end::Post-->
        </div>
    </div>
</template>

<script>
import {APP_API_BASE} from '../../config/config'
import Breadcrumb from '../Layouts/Breadcrumb'
import DetailCard from '../Layouts/Details/DetailCard'

export default {
    name: 'Detail-Page',
    props: ['slug'],
    components: {
        Breadcrumb,
        DetailCard
    },
    data() {
        return {
            movieDetail: ''
        }
    },
    created() {
        this.fetchMovieDetails()
    },
    methods: {
        fetchMovieDetails() {
            const paramsHeader = {
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            let urlMovieDetail = `${APP_API_BASE}/movie/${this.slug}`
            this.axios.get(
                urlMovieDetail, {
                params: {
                    api_key: process.env.VUE_APP_API_KEY,
                    language: 'en-US'
                }}, {
                paramsHeader
            })
            .then(response => {
                this.movieDetail = response.data
            })
        }
    }
}
</script>
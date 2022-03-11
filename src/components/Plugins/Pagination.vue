<template>
    <div class="d-flex flex-stack flex-wrap pt-10">
        <div class="fs-6 fw-bold text-gray-700" :like="totalRecords">Showing 1 to 10 of {{totalRecords}} entries</div>
        <!--begin::Pages-->
        <ul class="pagination">
            <li class="page-item previous" v-if="!isInFirstPage">
                <a href="javascript:void(0)" class="page-link" aria-label="Previous" @click.prevent="onClickPreviousPage" :class="isInFirstPage ? 'disabled' : ''" :disabled="isInFirstPage">
                    <i class="previous"></i>
                </a>
            </li>
            <li v-for="page in pages" :key="page.index" class="page-item" :class="{'active' : isPageActive(page.name)}">
                <a href="javascript:void(0)" @click.prevent="onClickPage(page.name)" disabled="page.isDisabled" class="page-link">
                    {{page.name}}
                </a>
            </li>
            <li class="page-item next" v-if="!isInLastPage">
                <a href="javascript:void(0)" class="page-link" aria-label="Next" @click.prevent="onClickNextPage" :class="isInLastPage ? 'disabled' : ''" :disabled="isInLastPage">
                    <i class="next"></i>
                </a>
            </li>
        </ul>
        <!--end::Pages-->
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        totalRecords: {
            type: Number,
            required: true
        }
    },
    computed: {
        isInFirstPage() {
            return this.currentPage === 1
        },
        isInLastPage() {
            if(this.totalPages === 0) {
                return true
            }

            return this.currentPage === this.totalPages
        },
        startPage() {
            // When on the first page
            if(this.currentPage === 1) {
                return 1
            }
            // When on the last page
            if(this.totalPages < this.maxVisibleButtons) {
                return 1
            }
            if(this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons + 1
            }

            // When in between
            return this.currentPage - 1
        },
        endPage() {
            if(this.totalPages === 0) {
                return 1
            }
            if(this.totalPages < this.maxVisibleButtons) {
                return this.totalPages
            }

            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
        },
        pages() {
            const range = []
            for (let i = this.startPage; i <= this.endPage; i++) {
                range.push({
                name: i,
                isDisabled: i === this.currentPage
                })
            }
            return range
        }
    },
    methods : {
        onClickFirstPage () {
            if(this.isInFirstPage) {
                return false
            }
            this.$emit('pagechanged', 1)
        },
        onClickPreviousPage () {
            if(this.isInFirstPage) {
                return false
            }
            this.$emit('pagechanged', this.currentPage - 1)
        },
        onClickPage (page) {
            this.$emit('pagechanged', page)
        },
        onClickNextPage () {
            if(this.isInLastPage) {
                return false
            }
            this.$emit('pagechanged', this.currentPage + 1)
        },
        onClickLastPage () {
            if(this.isInLastPage) {
                return false
            }
            this.$emit('pagechanged', this.totalPages)
        },
        isPageActive (page) {
            return this.currentPage === page
        }
    }
}
</script>

<style scoped>
.page-item a.disabled {
    color: #ccc;
    cursor: no-drop;
}
button[disabled], html input[disabled] {
    cursor: default;
    color: lightgray;
}
</style>
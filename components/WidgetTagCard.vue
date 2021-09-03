<template>
    <div class="sidebar-widget tag-card">
        <h3 class="title">Oznake</h3>
        <ul>
            <li v-for="(tag, index) in tags" :key="index"  class="tag-item">
                <a class="tag-link" href="#">{{ tag.tagName }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        mounted() {
            this.$store.dispatch('getTags')
        },

        computed: {
            ...mapState(['tags'])
        }
    };
</script>
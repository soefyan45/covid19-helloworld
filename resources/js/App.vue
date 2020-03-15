<template>
    <div class="main-wrapper container">
        <app-header/>
        <app-nav/>
        <app-sidebar/>
        <router-view>

        </router-view>
        <app-footer/>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'
    import Header from './components/Front/Headers.vue'
    import Nav from './components/Front/Nav.vue'
    import Sidebar from './components/Front/Sidebar.vue'
    import Footer from './components/Front/Footer.vue'
    export default {
        data() {
            return {
                pageAdmin : '',
            }
        },
        computed: {
            ...mapState(['token']),
            ...mapGetters(['isAuth']),
        },
        components: {
            'app-header'    : Header,
            'app-nav'       : Nav,
            'app-sidebar'   : Sidebar,
            'app-footer'    : Footer,
        }
    }
</script>
<style>
</style>
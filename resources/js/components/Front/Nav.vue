<template>
    <div>
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar">
            <a href="index.html" class="navbar-brand sidebar-gone-hide">COVID-19</a>
            <a href="#" class="nav-link sidebar-gone-show" data-toggle="sidebar"><i class="fas fa-bars"></i></a>
            <form class="form-inline ml-auto">

            </form>
        </nav>
        <nav class="navbar navbar-secondary navbar-expand-lg">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item" :class="[currentPage.includes('home') ? activeClass:'']">
                        <router-link :to="'/'" tag="a" @click.native="runGetData()" class="nav-link" exact><i class="fas fa-fire"></i><span>Dashboard</span></router-link>
                    </li>
                    <li class="nav-item" :class="[currentPage.includes('about') ? activeClass:'']">
                        <router-link :to="'/tentang-kami'" tag="a"  @click.native="runGetData1()" class="nav-link" exact><i class="fas fa-fire"></i><span>Tentang Kami</span></router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex'
    export default {

        name: "Nav",
        data(){
            return{
                activeClass :'active',
                thisNone   : 'none',
                thisBlock   : 'block',

            };
        },
        mounted() {

        },
        computed:{
            currentPage()
            {
                return this.$route.name;
            },

        },

        methods: {
            ...mapActions('kawalCovid', ['getDataKawal']),
            ...mapActions('kawalCovidDunia', ['getDataKawalDunia']),
            runGetData()
            {
                document.getElementById("Brk").classList.remove('sidebar-show');
                document.getElementById("Brk").classList.add('sidebar-gone');
                //this.Indexarticle();
                //alert('pesan')
                //this.getDataKawal()
                //this.getDataKawalDunia()
            },
            runGetData1()
            {
                document.getElementById("Brk").classList.remove('sidebar-show');
                document.getElementById("Brk").classList.add('sidebar-gone');
                //this.Indexarticle();
                //alert('pesan')
                //this.getDataKawal()
                //this.getDataKawalDunia()
            }


        }
    }
</script>

<style scoped>

</style>
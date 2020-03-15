<template>
    <div>
        <div class="main-content">
            <section class="section">
                <div class="section-header">
                    <h1>Kawal informasi seputar COVID-19</h1>
                </div>
                <div class="section-body">
                    <h2 class="section-title">Data Kawal Covid-19</h2>
                    <p class="section-lead">Situs ini merupakan sumber informasi inisiatif sukarela warganet Indonesia pro-data, terdiri dari praktisi kesehatan, akademisi & profesional. .Jumlah Kasus di Indonesia Saat Ini. Last Update <b style="color:#ff1d6b;">{{dataKawallastUpdatedAt}}</b></p>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="card card-statistic-2 bg-warning">
                                <div class="card-icon">
                                    <i class="fas fa-stethoscope"></i>
                                </div>
                                <div class="card-wrap">
                                    <div class="card-header">
                                        <h4 style="color: white">Terkonfirmasi</h4>
                                    </div>
                                    <div class="card-body">
                                        <h4>
                                            {{dataKawalTerkomfirm}}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="card card-statistic-2 bg-alert">
                                <div class="card-icon">
                                    <i class="fas fa-syringe"></i>
                                </div>
                                <div class="card-wrap">
                                    <div class="card-header">
                                        <h4 style="color: white">Perawatan</h4>
                                    </div>
                                    <div class="card-body">
                                        <h4>{{dataKawalDirawat}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="card card-statistic-2 bg-healt">
                                <div class="card-icon">
                                    <i class="fas fa-heartbeat"></i>
                                </div>
                                <div class="card-wrap">
                                    <div class="card-header">
                                        <h4 style="color: white">Sembuh</h4>
                                    </div>
                                    <div class="card-body">
                                        <h4>{{dataKawalSembuh}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <div class="card card-statistic-2 bg-dead">
                                <div class="card-icon">
                                    <i class="fas fa-user-alt-slash"></i>
                                </div>
                                <div class="card-wrap">
                                    <div class="card-header">
                                        <h4 style="color: white">Meninggal</h4>
                                    </div>
                                    <div class="card-body">
                                        <h4>{{dataKawalMeninggal}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Kasus Covid-19 Di Dunia</h4>
                                    <div class="card-header-action">
                                        <p>Confirmed : <b style="color: #ff6c2e;">{{dataKawalWorldCountConfirm}}</b>, Recovered : <b style="color: #3affa6;">{{dataKawalWorldCountRecovered}}</b>, Deaths : <b style="color: #ff1d6b">{{dataKawalWorldCountDeaths}}</b>:: Lastupdate <b>{{dataKawalWorldCountlastUpdate}}</b></p>
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="table-responsive table-invoice">
                                        <table class="table table-striped">
                                            <tbody>
                                            <tr style="background: #708a8c">
                                                <th style="color: white">Negara</th>
                                                <th style="color: white">Provinsi</th>
                                                <th style="color: white">Terkonfirmasi</th>
                                                <th style="color: white">Dirawat</th>
                                                <th style="color: white">Sembuh</th>
                                                <th style="color: white">Meninggal</th>
                                            </tr>
                                            <tr v-for="dataCovidDunia in dataKawaldunia">
                                                <td><a href="#">{{dataCovidDunia.countryRegion}}</a></td>
                                                <td>{{dataCovidDunia.provinceState}}</td>
                                                <td class="font-weight-600">{{dataCovidDunia.confirmed}}</td>
                                                <td>{{dataCovidDunia.active}}</td>
                                                <td>{{dataCovidDunia.recovered}}</td>
                                                <td>{{dataCovidDunia.deaths}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <footer class="main-footer">
            <div class="footer-left">
                Copyright &copy; 2020 <div class="bullet"></div> Develop By <a href="https://helloworld.my.id/">S Soefyan</a>
            </div>
            <div class="footer-right">
                Design By <a href="https://nauval.in/">MNA</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex'
    export default {
        name: "home",

        created(){
            this.getDataKawal()
            this.getDataKawalDunia()
            this.getDataKawalDuniaCount()
        },
        data() {
            return {
                data:{


                },
            };
        },
        computed:{
            ...mapState('kawalCovid', {
                dataKawalTerkomfirm   : state => state.dataKawalTerkomfirm,
                dataKawalSembuh       : state => state.dataKawalSembuh,
                dataKawalMeninggal    : state => state.dataKawalMeninggal,
                dataKawalDirawat      : state => state.dataKawalDirawat,
                dataKawallastUpdatedAt: state => state.dataKawallastUpdatedAt,
                dataKawaldunia        : state => state.dataKawalWorld,


            }),
            ...mapState('kawalCovidDunia', {
                dataKawaldunia        : state => state.dataKawalWorld,
                //
                dataKawalWorldCountConfirm   : state => state.dataKawalWorldCountConfirm,
                dataKawalWorldCountRecovered : state => state.dataKawalWorldCountRecovered,
                dataKawalWorldCountDeaths    : state => state.dataKawalWorldCountDeaths,
                dataKawalWorldCountlastUpdate: state => state.dataKawalWorldCountlastUpdate,
            }),
        },
        methods: {
            ...mapActions('kawalCovid', ['getDataKawal']),
            ...mapActions('kawalCovidDunia', ['getDataKawalDunia','getDataKawalDuniaCount']),
        }
    }
</script>

<style scoped>
    .bg-warning{
        background: #ffcc39;
    }
    .bg-alert{
        background: #ff6c2e;
    }
    .bg-healt{
        background: #3affa6;
    }
    .bg-dead{
        background: #ff1d6b;
    }
    .color-font-info{
        color: #fafaf2;
    }
</style>
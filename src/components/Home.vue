<template>
    <main id="main-container">
    <div class="block-content block-content-full">
        <div v-if="loggedIn" class="content pull-right">
            <div data-toggle="popover" title="" data-placement="left" data-content=" Tàu lượn"  style="cursor: pointer"  @click="logout"><i class="fa fa-paper-plane-o text-city fa-4x"></i> </div>
        </div>
    <div class="row">
        <div class="col-lg-6 col-sm-offset-3">
            <!-- Content Grid -->
            <div class="content-grid">
                <div class="row">
                    <div class="col-xs-12  animated bounceIn">
                        <div class="push-30 h1 font-w700  block-title text-gray-darker text-center">Bạn muốn giở trò gì ?</div>

                        <!-- END Author of the Month -->

                        <!-- Mini Stats -->
                        <router-link to="/magic-quote" class="block block-link-hover3">
                            <table class="block-table text-center">
                                <tbody>
                                <tr>
                                    <td style="width: 50%;">
                                        <div class="push-30 push-30-t animated flip">
                                            <i class="fa fa-quote-right fa-4x text-amethyst-light"></i>
                                        </div>
                                    </td>
                                    <td class="bg-gray-lighter" style="width: 50%;">
                                        <div class="h1 text-amethyst-light font-w700">MAGIC QUOTE</div>
                                        <div class="h5 text-muted push-5-t">by Shaun</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </router-link>
                        <router-link to="/crazy-react" class="block block-link-hover3">
                            <table class="block-table text-center">
                                <tbody>
                                <tr>
                                    <td style="width: 50%;">
                                        <div class="push-30 push-30-t animated flip">
                                            <i class="si si-emoticon-smile fa-4x text-city"></i>
                                        </div>
                                    </td>
                                    <td class="bg-gray-lighter" style="width: 50%;">
                                        <div class="h1 font-w700 text-city">CRAZY REACT</div>
                                        <div class="h5 text-muted push-5-t">by Shaun</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </router-link>
                        <!-- END Mini Stats -->
                    </div>
                </div>
            </div>
            <!-- END Content Grid -->
        </div>
    </div>
    </div>
    </main>
</template>

<script>
    export default {
        name: "Home",
        methods : {
            logout(){
                localStorage.removeItem('token');
                this.$router.push('/login');
            }
        },
        computed : {
            loggedIn(){
                return localStorage.getItem('token') != undefined
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="content overflow-hidden" @submit.prevent="sendQuote()">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <!-- Login Block -->
                <div class="block block-themed animated fadeIn">
                    <div class="block-header bg-primary">
                        <ul class="block-options">
                            <li>
                                <a href="base_pages_register.html" data-toggle="tooltip" data-placement="left" title=""
                                   data-original-title="Đăng Ký"><i class="si si-plus"></i></a>
                            </li>
                        </ul>
                        <h3 class="block-title">Shaun</h3>
                    </div>
                    <div class="block-content block-content-full block-content-narrow">
                        <!-- Login Title -->
                        <h1 class="h2 font-w600 push-30-t push-5">Shaun Skype Quote</h1>
                        <!-- END Login Title -->

                        <!-- Login Form -->
                        <!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) -->
                        <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                        <form class="js-validation-login form-horizontal push-30-t push-50" >
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary">
                                        <input v-model="data.msg" class="form-control" type="text" id="message">
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.conversation" class="form-control" type="text"
                                               id="stc">
                                        <label for="stc">Send To Converstation</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.clientmessageid" class="form-control" type="text"
                                               id="clientmessageid">
                                        <label for="clientmessageid">Client Message ID</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.author" class="form-control" type="text"
                                               id="author">
                                        <label for="author">Author ID: </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.authorname" class="form-control" type="text"
                                               id="authorname">
                                        <label for="authorname">Author Name</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.imdisplayname" class="form-control" type="text"
                                               id="imdpn">
                                        <label for="imdpn">IMDISPLAYNAME(Bullshit field)</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.timestamp" class="form-control" type="text"
                                               id="tp">
                                        <label for="tp">Timestamp</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary ">
                                        <input v-model="data.token" class="form-control" type="text"
                                               id="tk">
                                        <label for="tk">Token</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label class="css-input switch switch-sm switch-primary">
                                        <input type="checkbox" id="login-remember-me"
                                               name="login-remember-me"><span></span> I am hacker?
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <button class="btn btn-primary push-10-r"  type="submit">Fuck</button>
                                </div>
                            </div>
                        </form>
                        <!-- END Login Form -->
                    </div>
                </div>
                <!-- END Login Block -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                data: {
                    msg: '',
                    clientmessageid: '',
                    author: '',
                    conversation: '',
                    imdisplayname: '',
                    authorname: '',
                    timestamp: '',
                    time_format: '11/14/2018 00:00 AM',
                    token: ''
                }
            }
        },
        methods: {
            sendQuote() {
                var that = this;
                this.$store.dispatch('login', this.data);
            }
        }
    }
</script>

<style scoped>

</style>
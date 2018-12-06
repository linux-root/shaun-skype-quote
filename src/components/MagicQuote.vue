<template>
    <div class="content overflow-hidden animated tada" @submit.prevent="sendQuote()">
        <div class="pull-left">
            <router-link style="cursor: pointer" to="/"><i class="si si-arrow-left text-primary fa-4x"></i> </router-link>
        </div>

        <div v-if="loggedIn" class="content pull-right">
            <div data-toggle="popover" title="" data-placement="left" data-content=" Tàu lượn"  style="cursor: pointer"  @click="logout"><i class="fa fa-paper-plane-o text-city fa-4x"></i> </div>
        </div>

        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <!-- Login Block -->

                <div class="block block-themed animated fadeIn">
                    <div class="block-header bg-primary">
                        <h3 class="block-title">Shaun Magic Quote</h3>
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
                            <label for="material-select">Select To Converstation</label>
                            <select v-model="data.conversation" class="form-control" id="material-select" name="material-select" size="1">
                                <option>...</option>
                                <option v-for="conv in conversations"  :value="conv.id">{{getConversationName(conv)}}</option>
                            </select>

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
                                        <input id="tp" v-model="data.datetime" class="form-control" type="text"/>
                                        <label for="tp">Timestamp</label>
                                    </div>
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
        name: "MagicQuote",
        data() {
            return {
                data: {
                    msg: '',
                    author: '',
                    conversation: '',
                    imdisplayname: '',
                    authorname: '',
                    datetime: null,
                    time_format: '11/14/2018 00:00 AM',
                }
            }
        },
        computed: {
            conversations : function () {
                return this.$store.state.conversations
            },
            loggedIn(){
                return localStorage.getItem('token') != undefined
            }
        },
        methods: {
            sendQuote() {
                this.data.timestamp = this.data.datetime === null ? new Date().getMilliseconds() + 210 : this.data.datetime;
                this.$store.dispatch('fuck', this.data);
            },
            getConversationName(conversation){
                if(conversation.threadProperties != null){
                    return conversation.threadProperties.topic
                } else {
                    return conversation.id
                }
            },
            logout(){
                    localStorage.removeItem('token');
                    this.$router.push('/login');
            }
        },
        created : function () {
            this.$store.dispatch('fetchConversations');
        }
    }
</script>

<style scoped>

</style>
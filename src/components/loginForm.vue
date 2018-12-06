<template>
    <div class="content overflow-hidden" @submit.prevent="doLogin()">
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <!-- Login Block -->
                <div class="block block-themed animated bounceIn">
                    <div class="block-header bg-primary">
                        <ul class="block-options">
                            <li>
                                <p style="cursor: pointer" v-on:click="howToLogin()">Đéo biết làm thế nào?</p>
                            </li>
                        </ul>
                        <h3 class="block-title">Đăng nhập</h3>
                    </div>
                    <div class="block-content block-content-full block-content-narrow">
                        <!-- Login Title -->
                        <h1 class="h2 font-w600 push-30-t push-5">SHAUN SKYPE</h1>
                        <p>Vui lòng đăng nhập.</p>

                        <form class="js-validation-login form-horizontal push-30-t push-50" >
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary">
                                        <input v-model="token.registrationToken" class="form-control" type="text" id="registration-token">
                                        <label for="registration-token">Registration Token</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary">
                                        <input v-model="token.syncState" class="form-control" type="text" id="syncState">
                                        <label for="syncState">syncState</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label class="css-input switch switch-sm switch-primary">
                                        <input v-model="hacker" type="checkbox" id="hacker-checking-me"
                                               name="hacker-checking-me"><span></span>I am hacker
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <button class="btn btn-primary push-10-r"  type="submit">Access</button>
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
        name: "loginForm",
        data() {
            return {
                token: {},
                hacker: false
            }
        },
        methods: {
            doLogin() {
                if(this.hacker){
                    this.$swal('fuck you Hacker')
                } else {
                    this.$store.dispatch('login', this.token);
                }
            },
            howToLogin(){
                this.$swal(
                     "Tip",
                    '"Thế thì tìm hiểu tại sao..."',
                    "error",{button: 'Ok, fine'}
                )
            }
        }
    }
</script>

<style scoped>

</style>
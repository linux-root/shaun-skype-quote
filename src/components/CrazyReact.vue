<template>
    <div class="content overflow-hidden animated tada" @submit.prevent="react()">
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
                        <h3 class="block-title">Shaun Crazy React</h3>
                    </div>
                    <div class="block-content block-content-full block-content-narrow">
                        <!-- Login Title -->
                        <h1 class="h2 font-w600 push-30-t push-5">Crazy React</h1>
                        <!-- END Login Title -->

                        <!-- Login Form -->
                        <!-- jQuery Validation (.js-validation-login class is initialized in js/pages/base_pages_login.js) -->
                        <!-- For more examples you can check out https://github.com/jzaefferer/jquery-validation -->
                        <form class="js-validation-login form-horizontal push-30-t push-50" >
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="form-material form-material-primary">
                                        <input v-model="data.emoticons" class="form-control" type="text" id="message">
                                        <label for="message">React</label>
                                    </div>
                                </div>
                            </div>

                            <label for="material-select">Conversation</label>
                            <select v-model="data.conversation" @change="updateMessages()" class="form-control" id="material-select" name="material-select" size="1">
                                <option>...</option>
                                <option v-for="conv in conversations"  :value="conv">{{getConversationName(conv)}}</option>
                            </select>
                            <label for="message-select">Message</label>
                            <select v-model="data.message" class="form-control" id="message-select" name="message-select" size="5">
                                <option v-for="message in data.messages"  :value="message">{{message.content}}</option>
                            </select>

                            <br/>
                            <div class="form-group">
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <button class="btn btn-primary push-10-r"  type="submit">React</button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <button class="btn btn-danger push-10-r" @click="remove()" type="button">Remove</button>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4">
                                    <button class="btn btn-success push-10-r" @click="rush()" type="button">Rush</button>
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
    import axios from 'axios'
    import {HEADER_WITH_SAVED_TOKEN} from '../store/actions'
    export default {
        name: "MagicQuote",
        data() {
            return {
                data: {
                    emoticons : '',
                    conversation: {},
                    message: {},
                    messages : []
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
            react() {
                let emoticonList = this.data.emoticons.split(',')
                console.log(this.data.conversation)
                let conversationId = this.data.conversation.id
                let messageId = this.data.message.id
                emoticonList.forEach(e => {
                    let payload  = {
                        conversationId : conversationId,
                        messageId : messageId,
                        emoticon : e
                    }
                    this.$store.dispatch('react', payload);
                })
            },
            getConversationName(conversation){
                if(conversation.threadProperties != null){
                    return conversation.threadProperties.topic
                } else {
                    return conversation.id
                }
            },
            remove(){
                let emoticonList = this.data.emoticons.split(',')
                console.log(this.data.conversation)
                let conversationId = this.data.conversation.id
                let messageId = this.data.message.id
                emoticonList.forEach(e => {
                    let payload  = {
                        conversationId : conversationId,
                        messageId : messageId,
                        emoticon : e
                    }
                    this.$store.dispatch('removeReact', payload);
                })
            },
            updateMessages(){
                console.log('update message')
                const baseURL = 'https://bn2-client-s.gateway.messenger.live.com/v1/users/ME/conversations'
                const conversationId = this.data.conversation.id
                const messageURL = `${baseURL}/${conversationId}/messages?startTime=1&pageSize=20&view=msnp24Equivalent`
                const requestOption = {
                method: 'GET',
                    headers: HEADER_WITH_SAVED_TOKEN(),
                    url: messageURL
                }
                let that = this
                axios(requestOption).then(response => {
                    that.data.messages = response.data.messages
                })
            },
            rush(){
                this.react()
                this.remove()
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
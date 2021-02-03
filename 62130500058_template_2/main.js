const app = {
    data() {
        return {
            msg: 'Hello Vue',
            shown: true,
            url:"http://www.sit.kmutt.ac.th",
        }
    },
    // created() {
    //     console.log('message is ' + this.msg)
    // },
    // updated() {
    //     console.log('message is chaged to ' + this.msg)
    // },

}
mountedApp = Vue.createApp(app).mount('#app')

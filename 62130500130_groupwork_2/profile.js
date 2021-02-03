    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
                ,shown: true,
                url :'https://www.youtube.com/?gl=TH&hl=th&app=desktop',
                img :"./images/2.jpg",
                name : 'Poonpipat Suvanarawat'
                ,faculty: 'Information Technology',
                Article:'99'
                ,Followers:'1.1 M',
                Ratings:'10.0'
            }
        }
    
    }
   var mountedApp = Vue.createApp(app).mount('#app')
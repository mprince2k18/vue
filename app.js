new Vue({
  el : '#vue-app',
  data: {
    name:'PRINCE',
    email:'mprince2k16@gmail.com',
    age: 26,
    x:0,
    y:0,
  },
  methods:{
    greet:function(time){
      return "Good " + time + ' ' + this.name;
    },

    add: function(inc){
      this.age += inc;
    },

    subtract: function(dec){
      this.age -= dec;
    },

    objectxy:function(event){
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    }


  }
});

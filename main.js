Vue.component('color-picker', {
  data: function() {
    return {
      defaultColor: '#000000',
      presets: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
    }
  },
  computed: {

  }
})

new Vue({
  el: '.colorpicker',
  data: {
    defaultColor: '#000000',
    presets: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
  },
  methods: {
    getColor: function(color) {
      this.defaultColor = color;
    }
  }
})

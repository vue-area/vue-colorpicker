<template>
  <div class="colorpicker">
    <span class="color" :style="{backgroundColor: defaultColor}"></span>
    <div class="pop-container">
      <div class="arrow">
      </div>
      <ul>
        <li v-for="color in presets" 
        :style="{backgroundColor: color}"
        @click="getColor(color)">
        </li>
      </ul>
    </div>
  </div>  
</template>
<style>
  .colorpicker{
    position: relative;
    display: inline-block;
  }
  .colorpicker .color{
    display: inline-block;
    width:16px;
    height:16px;
    cursor: pointer;
  }  
  .colorpicker ul,
  .colorpicker li{
    list-style: none;
    padding: 0; 
    margin: 0;
  }
  .colorpicker ul{
    display: block;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);
    width: 104px;
  }
  .colorpicker li{
    display: inline-block;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.15);    
    width:20px;
    height:20px;
    float:left;
    margin: 3px;
    border-radius: 3px;
    cursor: pointer;
  }
  .colorpicker:hover .pop-container{
    display: block;
  }  
  .pop-container{
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
  }
  .pop-container::before{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top:-5px;
    left:0;
    border-color: transparent;
    border-style: solid;
    border-width: 0 5px 5px;
    border-bottom-color: #ccc;    
  }
  .pop-container::after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top:-4px;
    left:0;    
    border-color: transparent;
    border-style: solid;
    border-width: 0 5px 5px;
    border-bottom-color: #fff;    
  }  
</style>
<script>
var defaultColors = function(){
  return ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];
}
module.exports = {
  props: {
    defaultColor: {
      type: String,
      required: false,
      default: '#000000'
    },
    presets: {
      type: Array,
      required: false,
      default: defaultColors
    }
  },
  methods: {
    getColor: function(color) {
      this.defaultColor = color;
    }
  }  
}
</script>
import Vue from 'vue'
import Lifa from './lifa.vue'
let div = document.createElement('div')
div.id = 'app'
div.textContent = 'webpack'

document.body.appendChild(div)
new Vue({
    el: '#app',
    render: (h) => h(Lifa)
})
import Vue from 'vue'
// import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Página de Contato</p>'}
const SemPagina = {template: '<p>Essa página não existe!</p>'}

const rotas = {
	'/': Home,
	'/contato': Contato
}

new Vue({
  el: '#app',
  data:{
  	rotaAtual: window.location.pathname
  },
  computed:{
  	exibeComponete(){
  		return rotas[this.rotaAtual] || SemPagina
  	}
  },
  render (h) { return h(this.exibeComponete) }
})

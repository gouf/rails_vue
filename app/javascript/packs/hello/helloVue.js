Vue.component('hello', {
  template: '<h1>Hello</h1>'
})

$(function() {
  new Vue({
    el: '#hello'
  })
})

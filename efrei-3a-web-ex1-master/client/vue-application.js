const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')

Vue.component('hello-world', {
  data: function () {
    return {
      message: ', World'
    }
  },
  template: `<p>Hello{{ message }}!</p>`
})

Vue.component('number-days', {
  data: function () {
    let date = new Date()
    let month = date.getMonth()
    let year = date.getFullYear()

    numberDays = new Date(year, month, 0).getDate();

    return {
      numberD: numberDays
    }
  },

  template: `<p>Number of Day {{numberD}}!</p>`
})

Vue.component('days-month', {
  data: function () {
    let date = new Date()
    let month = date.getMonth()
    let year = date.getFullYear()
    numberDays = new Date(year, month, 0).getDate();
    let i = 0;

    let table = new Array(numberDays);
    for (i; i < numberDays; i++) {
      table[i] = i + 1
    }

    return {
      numberD: numberDays,
      monthTable: table
    }

  },

  template: `<ul>
            <li v-for="day in monthTable">
                <p>{{ monthTable}}</p>
              
            </li>
            </ul>`
})

var app = new Vue({
  el: '#app',
  data: {
  },

  methods: {
  },

  components: { HelloOtherWorld }
})

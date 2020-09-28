const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')

Vue.component('days-of-month',{

  data: function() {
    return{
      principalMonths: ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    }
  },

  props: ['selectedMonth','selectedYear','Holiday'],

  computed:{
    days: function(){
      var numberDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
      var firstDay = new Date(this.selectedYear, this.selectedMonth - 1, 0).getDay();
      var principalDays=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      var daysTable = [];

      for (var i = 1; i <= numberDays; i++){
        daysTable.push(i.toString() +" : " + principalDays[firstDay]);
        firstDay = (firstDay + 1) % 7;
      }

      return daysTable; 
    },

    months: function(){
      monthsTable = [];
      for (var i=1; i < 13; i++){
        months.push(i);
      }

      return monthsTable;
    },

    years: function(){
      years = []
      for (var i=1990; i <2030; i++){
        years.push(i);
      }

      return years;
    },

    currentMonth: function(){

      return this.principalMonths[this.selectedMonth - 1];
    },
  },

  template: `
    <div>
      <h3> {{currentMonth}} </h3>
      <ul>
          <li v-for="day in days">
              {{day}}
          </li>
      </ul>
    </div>
  `
});

Vue.component('days-of-year',{
  props: ['year'],
  computed:{
    Holidays: function(){
      fetch('https://date.nager.at/api/v2/PublicHolidays/2020/FR', {mode: 'no-cors'})
      .then(response => response.json())
      .then(function (data) {
          console.log('data', data);

          return data;
      })
    }
  },

  template: `
    <div class="calendar">
      <h2>{{year}}</h2>
      <days-of-month v-for="index in 12" v-bind:key="index" :selectedMonth="index" :selectedYear="year" :Holiday="Holidays" class="month"></days-of-month>
    </div>
  `
})


var app = new Vue({
  el: '#app',
  data:{
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  },

  computed:{
    currentDays: function() {

      return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    },
  }
})
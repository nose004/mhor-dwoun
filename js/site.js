// call this from the developer console and you can control both instances
var calendars = {};

$(document).ready( function() {

  // assuming you've got the appropriate language files,
  // clndr will respect whatever moment's language is set to.
  // moment.lang('ru');

  // here's some magic to make sure the dates are happening this month.
  var thisMonth = moment().format('YYYY-MM');

  var eventArray = [
    // { startDate: thisMonth + '-10', endDate: thisMonth + '-14', title: 'Multi-Day Event' },
    // { startDate: thisMonth + '-21', endDate: thisMonth + '-23', title: 'Another Multi-Day Event' }
  ];

  // the order of the click handlers is predictable.
  // direct click action callbacks come first: click, nextMonth, previousMonth, nextYear, previousYear, or today.
  // then onMonthChange (if the month changed).
  // finally onYearChange (if the year changed).

  calendars.clndr1 = $('.cal1').clndr({
    events: eventArray,
    constraints: {
      startDate: '2017-08-10',
      endDate: '2017-08-24'
    },
    clickEvents: {
      click: function(target) {
        console.log(target);
        // if you turn the `constraints` option on, try this out:
        if($(target.element).hasClass('inactive')) {
          console.log('not a valid datepicker date.');
        } else {
          console.log('VALID datepicker date.');
        }
      },
      nextMonth: function() {
        console.log('next month.');
      },
      previousMonth: function() {
        console.log('previous month.');
      },
      onMonthChange: function() {
        console.log('month changed.');
      },
      nextYear: function() {
        console.log('next year.');
      },
      previousYear: function() {
        console.log('previous year.');
      },
      onYearChange: function() {
        console.log('year changed.');
      }
    },
    multiDayEvents: {
      startDate: 'startDate',
      endDate: 'endDate'
    },
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: false
  });

  // calendars.clndr2 = $('.cal2').clndr({
  //   template: $('#template-calendar').html(),
  //   events: eventArray,
  //   multiDayEvents: {
  //     startDate: 'startDate',
  //     endDate: 'endDate'
  //   },
  //   startWithMonth: moment().add('month', 1),
  //   clickEvents: {
  //     click: function(target) {
  //       console.log(target);
  //     }
  //   },
  //   forceSixRows: true
  // });

  // bind both clndrs to the left and right arrow keys
  $(document).keydown( function(e) {
    if(e.keyCode == 37) {
      // left arrow
      calendars.clndr1.back();
      // calendars.clndr2.back();
    }
    if(e.keyCode == 39) {
      // right arrow
      calendars.clndr1.forward();
      // calendars.clndr2.forward();
    }
  });


  var availabilities = [
      'sankaku',
      'maru',
      'sankaku',
      'maru',
      'maru',
      'batsu',
      'batsu',
      'maru',
      'maru',
      'maru',
      'sankaku',
      'maru',
      'maru',
      'maru',
      'maru'
  ];


  for (var i=10; i<25; i++) {
    var availability = availabilities[i-10];
    switch (availability) {
        case 'maru':
          $(".calendar-day-2017-08-" + i).append("<div class='calendar-day-content'><div class='maru'>○</div></div>");
          $(".calendar-day-2017-08-" + i).css({"background-color": "LightGreen"});
          $(".calendar-day-2017-08-" + i).hover(function(e) {
              $(this).css("background-color",e.type === "mouseenter"?"white":"LightGreen")
          });
          break;
        case 'batsu':
          $(".calendar-day-2017-08-" + i).append("<div class='calendar-day-content'><div class='batsu'>×</div></div>");
          $(".calendar-day-2017-08-" + i).css({"background-color": "LightPink"});
          $(".calendar-day-2017-08-" + i).hover(function(e) {
              $(this).css("background-color",e.type === "mouseenter"?"white":"LightPink")
          });
          break;
        case 'sankaku':
          $(".calendar-day-2017-08-" + i).append("<div class='calendar-day-content'><div class='sankaku'>△</div></div>");
          $(".calendar-day-2017-08-" + i).css({"background-color": "LightYellow"});
          $(".calendar-day-2017-08-" + i).hover(function(e) {
              $(this).css("background-color",e.type === "mouseenter"?"white":"LightYellow")
          });
          break;
    }
  }


});
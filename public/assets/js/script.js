(function ($) {
    $(function () {
  
      $(window).resize(agResize);
      agResize();
  
      function agResize() {
  

      
        
        $('#js-countdown').TimeCircles({
          ref_date: new Date(2019, 0, 22, 0, 0, 0, 0),
          start: true,
          refresh_interval: 0.1,
          count_past_zero: false,
          circle_bg_color: '#DEDEDE',
          use_background: true,
          fg_width: 0.05,
          bg_width: 0.50,
          time: {
            Days: {show: true, text: 'Days', color: '#1ABC9C'},
            Hours: {show: true, text: 'Hours', color: '#1ABC9C'},
            Minutes: {show: true, text: 'Minutes', color: '#0CE6C3'},
            Seconds: {show: true, text: 'Seconds', color: '#0CE6C3'}
          }
        }).rebuild();
      }
    
  
    });
  })(jQuery);


(function( $ ){
    $.fn.mClick = function( timeout, clickTimes, callback ) {  

        return this.each(function() {

            var $this = $(this);
            var times = 0;
            var time = null;

            $this.click(function(){
                var d;
                var now;
            
                if(time){
                    now = (new Date()).getTime();
                    d = now - time;
                    time = now;

                    if(d > timeout){
                        console.log('时间间隔过大')
                        time = now + d;
                        times = 1;
                    }else{
                        addTimes(callback)
                    }
                    
                    function addTimes(callback){
                        if(times){
                            times ++;
                        }else{
                            times = 1;
                        }

                        if(times >= clickTimes){
                            times = 0;
                            time = null;
                            callback();
                        }
                    }

                } else {
                    now = (new Date()).getTime();
                    time = now;
                    times = 1
                }
                console.log($this, time, times)
            });
        });
    };
})( jQuery );

//////////// for example///////////////////
//
//    $('.btn').mClick(800, 3, function(){
//        console.log('被点击了3次');
//    }).css('color', 'red');
//
////////////////////////////////////////////
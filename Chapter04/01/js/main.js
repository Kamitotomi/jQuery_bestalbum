$(function () {
    // body...
    var duration = 300;


    $('#buttons1 button:nth-child(-n+4)')
        .on('mouseover', function () {
            // body...
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b',
                color: 'fff'
            }, duration);
        })

        .on('mouseout', function () {
            // body...
            $(this).stop(true).animate({
                backgroundColor: 'fff',
                color: '#ebc000'
            }, duration);
        });

        $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
            .on('mouseover', function(){
                $(this).stop(true).animate({
                    borderWidth: '12px',
                    color: '#ae5e9b'
                }, duration, 'easeOutSine');
            })
            .on('mouseout', function(){
                // body...
                $(this).stop(true).animate({
                    borderWidth: '0px',
                    color: '#ebc000'
                }, duration, 'easeOutSine');
            });
});
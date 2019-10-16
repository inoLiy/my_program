require(['config'], function () {
    require(['jquery'], function () {
        details_render();
        
    });
});
function details_render(){
    const phpurl = 'http://10.31.155.77/work/my_program/yhd/php/'
    const $mBox = $('.mBox');
    const $price = $('.number');
    const $proImg = $('.proImg');
    
    $.ajax({
        url: phpurl + 'details.php',
        dataType: 'json',
    }).done(function(details){
        let dt = '';
        let ft = '';
        let sum ='';
        let prc ='';
        let img = '';

        img= `
        <img id="J_prodImg" width="360" height="360" alt="${details[0].title}" src="${details[0].sp.split(',')[0]}"> 
        `
        $proImg.append(img);
        dt =`
            <b class="">
                <img width="50" height="50" class="detail_main_pic_class"
                    alt="${details[0].title}"
            `
        ft =`</b>`
        for(let i = 0 ; i<details[0].sp.split(',').length;i++){
            sum +=dt+`
                src="${details[0].sp.split(',')[i]}">
            `+ft;

            
        }

        $mBox.html(sum);
        prc = `<span id="current_price">￥${details[0].price}</span>`
        $price.html(prc);
    })
}
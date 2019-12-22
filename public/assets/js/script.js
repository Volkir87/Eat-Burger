// jquery code goes here

$("#add_button").on('click',function(){
    addBurger();
})


$(".devour").on('click',function(){
    devourBurger($(this));
})

function addBurger(){
    let burgName = $("#name_input").val();
    let obj = {name: burgName};
    $.ajax({
        url: 'api/post',
        method: 'POST',
        data: obj,
        dataType: 'json'
    })
}

function devourBurger(object){
    let id = object.attr('id');
    console.log('id = ', id);
    let obj = {id: id};
    $.ajax({
        url: 'api/devour',
        method: 'PUT',
        data: obj,
        dataType: 'json'
    })
}
// jquery code goes here

$("#add_button").on('click',function(){
    addBurger();
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
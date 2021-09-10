
$('#press-it').on('click',function(evt){
    
    const $newLi =  $('#cool-inputs').val();
    if(!($newLi)){
        alert('You forgot your skill!? Believe in yourself!!!!')
        return;
    };
   const template = `<button class="remove btn-xs btn-danger ">X</button><li>${$newLi}</li>`
    console.log(template);

    $('#awe-induced').append(template);
});

// $('.remove').on('click','button',function(evt) {
//     $(this).closest('.skill-tree').fadeout(2000)
//     $(this).remove();
// });
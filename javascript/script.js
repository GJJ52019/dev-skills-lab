
$('#press-it').on('click',function(evt){
    
    const $newLi =  $('#cool-inputs').val();
    if(!($newLi)){
        alert('You forgot your skill!? Believe in yourself!!!!')
        return;
    };
   const template = `<tr>
   <td><button class="rmv btn-xs btn-danger ">X</button>${$newLi}</td>
   </tr>`
    console.log(template);

    $('tbody').append(template);
});

$('#radical-skills tbody').on('click','td',function(evt) {
    // $(this).closest('.skill-tree').fadeout(2000)
    console.log(this);
    $(this).remove();
});
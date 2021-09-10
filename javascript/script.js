//starting with a on click for the add skill button

//get the button id press-it use .on
//.on() needs 'click' then a function placeholder
//++++ i want to know how to use the enter key aswell for input+++++++
//++++ also want to try and use the => for practice +++++++++++++++++

$('#press-it').on('click',function(evt){
    // create a placeholder variable for the inputs value
    const $newLi =  $('#cool-inputs').val();
    // if for if pushed while blank 
    //??????????????????? maybe we disable the button until first input?????????
    if(!($newLi)){
        alert('You forgot your skill!? Believe in yourself!!!!')
        return;
    };

    // following the jquery2 lab we set up a template intake variable for what we want to add to the table
    // after li failed to work the way i intended i switched to table
   const template = `<tr>
   <td><button class="rmv btn-xs btn-danger ">X</button>${$newLi}</td>
   </tr>`
    //console.log(template); //test case

    //appends the new template
    $('tbody').append(template);
    //clears the input box
    $('#cool-inputs').val("")
});


//need to remove the line choosen
// way this works is it targets the parent selected first in this case #radical skills then pass the parent that the button is located in
//without indicating td in the .on method it deletes the whole list
//this is because it bubbles up from where the button is located all the way up to tbody
$('#radical-skills tbody').on('click','td',function(evt) {
    //console.log(this); //test case
    $(this).remove();
});
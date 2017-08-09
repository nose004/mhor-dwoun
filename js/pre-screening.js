$(".btn-primary", "#collapseOne").click(function() {

    var selectedBodyPart = $('input[name=radio]:checked', '#collapseOne').val();
    if (typeof selectedBodyPart === "undefined") {
        return;
    }

    renderCollapseTwo(selectedBodyPart);
    $("#collapseOne").collapse('hide');
    $("#collapseTwo").collapse('show');
});





// rendering function
function renderCollapseTwo(bodyPart) {

    var content = '<div class="container"><div class="row justify-content-start">';
    content += "<div class='col-12'>Please choose your symptom.<br/></div>";

    switch (bodyPart) {

        case "Head":

            content += ''
                + '<div class="col-xs-3"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Head","Anxiety")\'>Anxiety</button></div>'
                + '<div class="col-xs-4"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Head","Bleeding")\'>Bleeding</button></div>'
                + '<div class="col-xs-4"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Head","Confusion")\'>Confusion</button></div>'
                + '<div class="col-xs-7"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Head","Difficulty sleeping")\'>Difficulty sleeping</button></div>'
                + '<div class="col-xs-4"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Head","Headache")\'>Headache</button></div>'
                + '<div class="col-xs-3"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Head","...")\'>...</button></div>';

            break;

        case "Neck":

            content += ''
                + '<div class="col-xs-3"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Neck","Pain")\'>Pain</button></div>'
                + '<div class="col-xs-4"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Neck","Blood")\'>Blood</button></div>'
                + '<div class="col-xs-3"><button type="button" class="btn btn-primary" onclick=\'renderCollapseThree("Neck","...")\'>...</button></div>';

            break;

        default:



            break;


    }

    content += '</div></div>';

    $(".card-block", "#collapseTwo").html(content);
}



function renderCollapseThree(bodyPart, symptom) {

    var content = '';
    content += '<div class="container"><div class="row justify-content-start">';
    // content += '<div class="col-12">Please answer some questionnaire here.</div>';

    switch (symptom) {

        case 'Headache':

            content += '<div class="col-xs-12 col-lg-4"><div class="radio">' +
                '<p>How bad is your headache?</p>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> wakes you up at night</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> about the same time of day</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> None of the above</label></div>' +
                '</div></div><br/>';

            content += '<div class="col-xs-12 col-lg-4"><div class="radio">' +
                '<p>How would you describe your headache?</p>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> sharp or stabbing</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> dull or achy</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> burning or stinging</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> pressure or fullness</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> throbbing</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> None of the above</label></div>' +
                '</div></div><br/>';

            content += '<div class="col-xs-12 col-lg-4"><div class="radio">' +
                '<p>How severe is your headache?</p>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> mild</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> moderate</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> severe</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> None of the above</label></div>' +
                '</div></div><br/>';

            content += '<div class="col-xs-12 col-lg-4"><div class="radio">' +
                '<p>On which side of your body is your headache located?</p>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> front</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> back</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> left side</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> right side</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> one side only</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> both sides</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> None of the above</label></div>' +
                '</div></div><br/>';

            content += '<div class="col-xs-12 col-lg-4"><div class="radio">' +
                '<p>Headache</p>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> better with rest</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> None of the above</label></div>' +
                '</div></div><br/>';

            break;

        default:

            content += '<div class="col-xs-12 col-lg-4"><div class="radio">' +
                '<p>Do you feel hunger?</p>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> Yes</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> No</label></div>' +
                '<div class="col-12"><label><input type="radio" name="radio" id="q1" value="1"> None of the above</label></div>' +
                '</div></div><br/>';

            break;

    }

    content += '</div></div>';

    content += '<div style="text-align: right; padding-right: 10px;">' +
        '<button type="button" class="btn btn-primary">Next</button>' +
        '</div>';

    $(".card-block", "#collapseThree").html(content);

    $("#collapseTwo").collapse('hide');
    $("#collapseThree").collapse('show');

    $(".btn-primary", "#collapseThree").click(function() {

        $(location).attr('href', 'p-reservation.html')

    });
}
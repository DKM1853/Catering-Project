var survey_options = document.getElementById('survey_options');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove-fields');


function myfunction() {
        let c = 1;
    var newrow = document.createElement('input');
    newrow.setAttribute('type', 'text');
    newrow.setAttribute('name', 'survey_options[]');
    newrow.setAttribute('class', 'survey-options form-style mt-2');
    newrow.setAttribute('placeholder', 'Menu Item-' + (c + 1));
    survey_options.appendChild(newrow);
}
function removefunction() {
    var input_tags = survey_options.getElementsByTagName('input');
    if (input_tags.length > 2) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    }
}
$(document).ready(function() {

    $('#submit-button').on('click', postData);

    getData();
});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });
}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            $('.person-container').empty();
            for(var i=0; i<data.length; i++) {
                $('.person-container').append('<div>' +
                  '<span><strong>Name: </strong>' + data[i].name + ' </span><br>' +
                  '<span><strong>Address: </strong>' + data[i].address + ' </span><br>' +
                  '<span><strong>City: </strong>' + data[i].city + ' </span><br>' +
                  '<span><strong>State: </strong>' + data[i].state + ' </span><br>' +
                  '<span><strong>Zip-code: </strong>' + data[i].zip_code + ' </span></div><br>');


                //  '</div><p>name: ' + data[i].name + '</p>');
                //$('.person-container').append('<p>address: ' + data[i].address + '</p>' );
                //$('.person-container').append('<p>city: ' + data[i].city + '</p>');
                //$('.person-container').append('<p>state: ' + data[i].state + '</p>');
                //$('.person-container').append('<p>zip code: ' + data[i].zip_code + '</p>');
                console.log(data);
            }
        }
    });
}

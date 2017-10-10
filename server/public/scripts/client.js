console.log('script sourced!');
$(document).ready(readyNow);
var averageSalary = 0;
function readyNow() {
    console.log('ready!');
    $('form').on('submit', function (event) {
        event.preventDefault();
        addToForm();
        averageSalary += parseInt($('[name="annualSalary"]').val());
        console.log('averageSalary', $('[name="annualSalary"]').val());
        $('#averageMonthly').text('$' + calculateAverageSalary());
        $('form').trigger('reset');
    });
}

function addToForm() {
    console.log($('form').serializeArray());
    //var monthlyCost = Math.round($('[name="annualSalary"]').val() / 12);
    $('tbody').append('<tr>');
    $('tbody').append('<td>' + $('[name="firstName"]').val() + '</td>');
    $('tbody').append('<td>' + $('[name="lastName"]').val() + '</td>');
    $('tbody').append('<td>' + $('[name="idNumber"]').val() + '</td>');
    $('tbody').append('<td>' + $('[name="jobTitle"]').val() + '</td>');
    $('tbody').append('<td>' + $('[name="annualSalary"]').val() + '</td>');

}

function calculateAverageSalary() {
    // Calculate the monthly average
    var averageMonthly = Math.round(averageSalary / 12);
    return averageMonthly;
}

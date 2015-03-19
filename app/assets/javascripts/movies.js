// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
    $('movie_rating').rating();
    //$('rating').rating('select',3)
    $("#movie_release").datepicker({
        minDate: new Date(),
        maxDate: new Date(),
        dateFormat: "dd-mm-yy"
    });

    $("#movie_trailerdate").datepicker();

    $("#sortable").sortable({
        update: function (event, ui) {
            var list = [];
            var changed_list = $("#sortable").sortable('toArray');

            for (var i = 0; i < changed_list.length; i++) {
                list.push({id: changed_list[i], order_no: i})
                console.log(changed_list[i], i)

            }
            $.ajax({
                dataType: 'json',
                url: '/movies/sort',
                method: "POST",
                data: {changed_orders: list},
                beforeSend: function () {
                    console.log('sending')
                },
                complete: function () {
                    console.log('sent')
                }

            });
        }
    });

});
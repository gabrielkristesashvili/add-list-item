$(document).ready(function () {

        $('#add-container').on('click', 'button', function () {
                var value = $('#add-container input').val()
                if (value !== "") {


                        var html = '<div class="item">'
                                + value +
                                '<div class="remove"> X\
                        </div >' +
                                '</div > '
                        $('#places-container').append(html);
                }
                $('#add-container input').val('')

        });
        $('#places-container').on('click', '.remove', function () {
                $(this).parent().remove();
        });

        $('.clear').on('click', function () {
                $('#places-container').empty();
        });

});
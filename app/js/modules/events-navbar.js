$(document).on('click', '.btn-logout', function (e) {
    $.ajax({
        url: 'php/user-modules/user-logout.php',
        type: 'GET',
        data: {
            logout: 1
        },
        success: function (response) {
            console.log(response);
        }
    });
});
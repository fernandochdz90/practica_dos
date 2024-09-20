// Función para generar el RFC basado en nombre y fecha
$('#generarRFC').on('click', function() {
    var nombre = $('#nombre').val().toUpperCase();
    var apellidoPaterno = $('#apellidoPaterno').val().toUpperCase();
    var apellidoMaterno = $('#apellidoMaterno').val().toUpperCase();
    var fechaNacimiento = $('#fechaNacimiento').val().split('-'); // [AAAA, MM, DD]

    if (nombre && apellidoPaterno && apellidoMaterno && fechaNacimiento.length === 3) {
        var rfc = apellidoPaterno.substring(0, 2) + apellidoMaterno.charAt(0) + nombre.charAt(0) + fechaNacimiento[0].substring(2, 4) + fechaNacimiento[1] + fechaNacimiento[2];
        // Usar .val() en lugar de .text()
        $('#resultadoRFC').val(rfc);
    } else {
        $('#resultadoRFC').val('Por favor, llena todos los campos correctamente.');
    }
});

// Función AJAX para consultar la API
$('#consultarAPI').on('click', function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/7',
        method: 'GET',
        success: function(data) {
            var nombre = data.name;
            var email = data.email;
            $('#resultadoAPI').html('Nombre: ' + nombre + '<br>Correo: ' + email);
        },
        error: function() {
            $('#resultadoAPI').text('Error al consultar la API.');
        }
    });
});

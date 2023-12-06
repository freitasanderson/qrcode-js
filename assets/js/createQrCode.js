function createQrCode()
{   
    $('#qrcode').empty()
    $('#qrcode').css('background-color','#dadada')
    $('#qrcode').css('filter','drop-shadow(0px 2px 3px #cccccc)')


    var userInput = $('#valor').val()
    var corClara = $('#corClara').val()
    var corEscura = $('#corEscura').val()


    var qrcode = new QRCode("qrcode", {
        text: userInput,
        width: 256,
        height: 256,
        colorDark: corEscura,
        colorLight: corClara,
        correctLevel : QRCode.CorrectLevel.H
    });
}
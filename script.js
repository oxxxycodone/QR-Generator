function generateQR(){
    const text = QRText.value.trim(); // Получаем значение из input и удаляем пробелы

    if(text.length > 0){
        QRImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(text);
        imgBox.classList.add('show-img');
    } else {
        alert('Please enter text or link!');
    }
}
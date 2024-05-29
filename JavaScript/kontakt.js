document.querySelector('form').addEventListener('submit', function(event) {
    // Verhindert das Absenden des Formulars
    event.preventDefault();

    // Zugriff auf die Formularelemente
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Überprüft, ob alle Felder ausgefüllt sind
    if (name === '' || email === '' || message === '') {
        alert('Fehler, Sie müssen alle Felder ausfüllen.');
    } else {
        alert('Ihre Nachricht wurde gesendet. Sie wird so schnell wie möglich beantworten.');
        // Hier können Sie den Code hinzufügen, um die Nachricht tatsächlich zu senden
    }
});

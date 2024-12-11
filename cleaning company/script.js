// Обработчик для отправки контактной формы
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Предотвращаем стандартное поведение формы

    // Получаем значения полей формы
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Проверка, что все поля заполнены
    if (!name || !email || !message) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Отправляем данные формы (можно интегрировать с сервером для реальной отправки)
    console.log("Сообщение отправлено: ", { name, email, message });

    // Показываем сообщение об успешной отправке
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    
    // Очищаем форму после отправки
    document.getElementById("contact-form").reset();
});

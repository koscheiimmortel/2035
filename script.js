// script.js

document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const tasksList = document.getElementById('tasks-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        const taskTitleInput = document.getElementById('task-title');
        const taskDescriptionInput = document.getElementById('task-description');

        const taskTitle = taskTitleInput.value.trim(); //Убираем пробелы спереди и сзади
        const taskDescription = taskDescriptionInput.value.trim();

        if (taskTitle === '') {
            alert('Пожалуйста, введите название задачи.');
            return; // Прерываем выполнение функции, если название пустое
        }

        // Создаем карточку задачи
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');

        // Создаем заголовок задачи
        const taskHeading = document.createElement('h3');
        taskHeading.textContent = taskTitle;

        // Создаем описание задачи (если оно есть)
        const taskParagraph = document.createElement('p');
        taskParagraph.textContent = taskDescription;

        // Создаем кнопку "Удалить"
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function() {
            taskCard.remove(); //Удаляем карточку
        });

        // Добавляем элементы в карточку
        taskCard.appendChild(taskHeading);
        if (taskDescription !== '') {
            taskCard.appendChild(taskParagraph);
        }
        taskCard.appendChild(deleteButton);

        // Добавляем карточку в список задач
        tasksList.appendChild(taskCard);

        // Очищаем поля формы
        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
    });
});
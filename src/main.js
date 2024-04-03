import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// const refs = {
//     btnCalendar: document.querySelector(".btn-not-visual"),
//     svgCalendar: document.querySelector(".icon-calendar"),
//     calendar: document.querySelector(".flatpickr-calendar")
// }

// refs.svgCalendar.addEventListener("click", (handleCalendar) => {
//     refs.btnCalendar.click()
// }
// )

// refs.btnCalendar.addEventListener("click", () => handleBtnCalendar(".your-datepicker-selector"));

// function handleBtnCalendar(datetimePicker) {
//     if (refs.calendar === true) {
        
//     flatpickr(datetimePicker, {
//         enableTime: true,
//         time_24hr: true,
//         defaultDate: new Date(),
//         minuteIncrement: 1,
//         onClose(selectedDates) {
//             userSelectedDate = selectedDates[0];
//             validateSelectedDate();
//         }
//     })
        
//         }
// }

// const svgCalendar = document.querySelector(".icon-calendar");
// const calendarContainer = document.getElementById("calendarContainer");

// // Добавляем обработчик события клика на иконку календаря
// svgCalendar.addEventListener("click", () => {
//   // Проверяем видимость календаря
//   if (calendarContainer.classList.contains("visible")) {
//     calendarContainer.classList.remove("visible"); // Скрываем календарь
//   } else {
//     // Показываем календарь
//     calendarContainer.classList.add("visible");
    
//     // Инициализируем Flatpickr в режиме inline
//     flatpickr(calendarContainer, {
//       inline: true,
//       enableTime: false,
//       dateFormat: "d.m.Y",
//       defaultDate: "today",
//       onClose(selectedDates) {
//         console.log(selectedDates);
//       }
//     });
//   }
// });

// refs.svgCalendar.addEventListener("click", () => {
//     toggleCalendar();
// });

// refs.btnCalendar.addEventListener("click", () => {
//     toggleCalendar();
// });

// function toggleCalendar() {
//     if (refs.calendar.style.display === "none") {
//         // Показать календарь
//         flatpickr(".your-datepicker-selector", {
//             enableTime: true,
//             time_24hr: true,
//             defaultDate: new Date(),
//             minuteIncrement: 1,
//             onClose(selectedDates) {
//                 userSelectedDate = selectedDates[0];
//                 validateSelectedDate();
//             }
//         });
//         refs.calendar.style.display = "block";
//     } else {
//         // Скрыть календарь
//         refs.calendar.style.display = "none";
//     }
// }

// Обработчик события клика на иконку календаря
document.querySelector(".icon-calendar").addEventListener("click", toggleCalendar);

// Обработчик события клика на кнопку, которая отвечает за отображение календаря
document.querySelector(".btn-not-visual").addEventListener("click", toggleCalendar);


function toggleCalendar() {
    // Получаем ссылку на контейнер, в который будем встроен календарь
    const calendarContainer = document.getElementById("calendarContainer");

    // Проверяем, видим ли элемент
    if (calendarContainer.style.display === "none" || calendarContainer.style.display === "") {
        // Если не видим, отображаем календарь
        calendarContainer.style.display = "block";

        // Инициализируем Flatpickr в режиме inline в контейнере "calendarContainer"
        flatpickr(calendarContainer, {
            inline: true, // Режим inline для отображения календаря
            enableTime: true, // Включение времени
            time_24hr: true, // Формат времени 24 часа
            defaultDate: new Date(), // Установка текущей даты по умолчанию
            minuteIncrement: 1, // Инкремент минут
            onClose(selectedDates) {
                // Обработчик закрытия календаря
                console.log(selectedDates);
            }
        });
    } else {
        // Если видим, скрываем календарь
       
        calendarContainer.style.display = "none";
    }
}
// function toggleCalendar() {
//     console.log("Клик по кнопке или иконке календаря");

//     const calendarContainer = document.getElementById("calendarContainer");
//     console.log("Текущее значение display:", calendarContainer.style.display);

//     if (calendarContainer.style.display === "none" || calendarContainer.style.display === "") {
//         calendarContainer.style.display = "block";
//         console.log("Установлено значение display: block");
//     } else {
//         calendarContainer.style.display = "none";
//         console.log("Установлено значение display: none");
//     }
// }


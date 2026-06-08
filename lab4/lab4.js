'use strict';


/**
 * Класс, представляющий книгу
 */
class Book {
    #price;
    _pubYear;

    /**
     * Создает экземпляр книги.
     * @param {string} title - Название книги
     * @param {number} pubYear - Год публикации (защищенное свойство)
     * @param {number} price - Цена книги (приватное свойство)
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * Геттер для названия книги.
     * @returns {string} Название книги.
     */
    get title() {
        return this._title;
    }

    /**
     * Сеттер для названия книги. Не позволяет установить пустую строку.
     * @param {string} value - Новое название книги.
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Название книги не должно быть пустой строкой");
        }
        this._title = value;
    }

    /**
     * Геттер для защищенного года публикации.
     * @returns {number} Год публикации.
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Сеттер для защищенного года публикации. Должен быть положительным числом.
     * @param {number} value - Новое значение года.
     */
    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    /**
     * Геттер для приватной цены книги.
     * @returns {number} Цена книги.
     */
    get price() {
        return this.#price;
    }

    /**
     * Сеттер для приватной цены книги. Должна быть положительным числом.
     * @param {number} value - Новая цена.
     */
    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Цена книги должна быть положительным числом");
        }
        this.#price = value;
    }

    /**
     * Выводит в консоль название и цену книги (задание 1).
     */
    show() {
        console.log(`Книга: "${this.title}", Цена: ${this.price} руб.`);
    }

    /**
     * Статический метод для сравнения книг по году публикации (задание 3).
     * @param {Book} bookA - Первая книга.
     * @param {Book} bookB - Вторая книга.
     * @returns {number} Разница между годами публикаций.
     */
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

// Демонстрация работы Заданий 1, 2, 3 в консоли:
console.log("--- Задания 1, 2, 3: Класс Book ---");
const myBook = new Book("Чистый код", 2008, 1500);
myBook.show(); // Выведет: Книга: "Чистый код", Цена: 1500 руб.

// Проверка геттеров/сеттеров и изменения свойств
myBook.title = "Совершенный код";
myBook.price = 1800;
console.log(`Измененное название: ${myBook.title}, измененная цена: ${myBook.price}`);

// Пример сортировки через статический метод compare
const books = [
    new Book("Книга С", 2020, 500),
    new Book("Книга А", 2010, 400),
    new Book("Книга Б", 2015, 600)
];

books.sort(Book.compare);

console.log("Отсортированные книги по году публикации:");
books.forEach(book =>
    console.log(`${book.title} — ${book.pubYear} год`)
);
// ==========================================
// Задание 4: Функция isEmpty(obj)
// ==========================================

/**
 * Проверяет, является ли объект абсолютно пустым (включая символьные и неперечисляемые свойства).
 * @param {Object} obj - Объект для проверки.
 * @returns {boolean} true, если свойств нет; false, если есть хотя бы одно.
 */
function isEmpty(obj) {
    // Reflect.ownKeys возвращает ВСЕ свойства объекта: обычные, символьные и скрытые (non-enumerable)
    return Reflect.ownKeys(obj).length === 0;
}

// Демонстрация работы Задания 4:
console.log("\n--- Задание 4: isEmpty ---");
console.log(isEmpty({})); // true
console.log(isEmpty({ [Symbol()]: true })); // false (нашел символ)
console.log(isEmpty(Object.defineProperty({}, 'name', { value: 'John' }))); // false (нашел скрытое свойство)


// ==========================================
// Задание 5: Методы addClass и removeClass
// ==========================================

/**
 * Объект со списком CSS-классов и методами для управления ими.
 */
let styleObj = {
    className: 'open menu',

    /**
     * Добавляет класс в строку className, если его там еще нет.
     * @param {string} cls - Имя добавляемого класса.
     * @returns {Object} Текущий объект для поддержки цепочки вызовов.
     */
    addClass(cls) {
        // Разделяем строку на массив по пробелам, отсекая лишние пробелы через filter
        let classes = this.className.split(' ').filter(c => c !== '');
        if (!classes.includes(cls)) {
            classes.push(cls);
        }
        this.className = classes.join(' ');
        return this;
    },

    /**
     * Удаляет класс из строки className, если он там есть.
     * @param {string} cls - Имя удаляемого класса.
     * @returns {Object} Текущий объект.
     */
    removeClass(cls) {
        let classes = this.className.split(' ').filter(c => c !== '');
        this.className = classes.filter(c => c !== cls).join(' ');
        return this;
    }
};

// Демонстрация работы Задания 5:
console.log("\n--- Задание 5: Управление классами ---");
styleObj.addClass('new').addClass('open'); // 'open' дублироваться не будет
console.log(`После добавления: "${styleObj.className}"`); // "open menu new"
styleObj.removeClass('menu');
console.log(`После удаления: "${styleObj.className}"`); // "open new"


// ==========================================
// Задание 6: Сериализация в JSON
// ==========================================

console.log("\n--- Задание 6: JSON ---");
let testObj = {
    name: "Джон",
    age: 30,
    skills: {
        html: true,
        js: true
    }
};

// Преобразуем в JSON с отступом в 2 пробела (параметр отступа — это третий аргумент)
let jsonString = JSON.stringify(testObj, null, 2);
console.log("Преобразованный JSON:\n" + jsonString);

// Декодируем обратно
let obj2 = JSON.parse(jsonString);

// Проверка равенства объектов. В JS сравнение через == или === сравнивает ссылки на объекты в памяти.
// Для сравнения их содержимого переведем оба объекта в плоские JSON-строки без отступов.
let areEqual = JSON.stringify(testObj) === JSON.stringify(obj2);
console.log(`Объекты равны по содержимому: ${areEqual}`); // true


// ==========================================
// Задание 7: Число секунд с начала дня
// ==========================================

/**
 * Возвращает число секунд, прошедших с начала текущего дня.
 * @returns {number} Количество секунд.
 */
function getSecondsToday() {
    const now = new Date();
    // Создаем объект даты, установленный строго на 00:00:00 текущего дня
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Разница между датами возвращается в миллисекундах, переводим в секунды
    return Math.floor((now - startOfDay) / 1000);
}

// Демонстрация работы Задания 7:
console.log("\n--- Задание 7: getSecondsToday ---");
console.log(`Секунд с начала дня прошло: ${getSecondsToday()}`);


// ==========================================
// Задание 8: Форматирование даты
// ==========================================

/**
 * Возвращает переданную дату в виде строки формата "дд.мм.гг".
 * @param {Date} date - Объект даты для форматирования.
 * @returns {string} Строка даты формата "дд.мм.гг".
 */
function formatDate(date) {
    // Получаем день и месяц, при необходимости добавляем ведущий ноль в начало строки через padStart
    let day = date.getDate().toString().padStart(2, '0');
    // Месяцы в JS начинаются с 0 (0 - январь, 11 - декабрь), поэтому прибавляем 1
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    // Получаем последние две цифры года с помощью slice(-2)
    let year = date.getFullYear().toString().slice(-2);
    
    return `${day}.${month}.${year}`;
}

// Демонстрация работы Задания 8:
console.log("\n--- Задание 8: formatDate ---");
console.log(`Текущая отформатированная дата: ${formatDate(new Date())}`);

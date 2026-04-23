        // === ЗАДАНИЯ 1-25 (ВЫВОД В КОНСОЛЬ) ===
        console.log("%c--- РЕЗУЛЬТАТЫ ФУНКЦИЙ (1-25) ---", "color: blue; font-weight: bold;");

        const getSquare = n => n * n;
        const isDivisibleBy3 = n => n % 3 === 0;
        const getRemainder = (a, b) => a % b;
        const celsiusToFahrenheit = c => (c * 9/5) + 32;
        const maxOfThree = (a, b, c) => Math.max(a, b, c);
        const toUpper = str => str.toUpperCase();
        const removeSpaces = str => str.replace(/\s+/g, '');
        const replaceAwithO = str => str.replace(/[aа]/gi, 'o');
        const getStringLength = str => { let c = 0; for(let i of str) c++; return c; };
        const containsSub = (str, sub) => str.includes(sub);

        const arr = [1, 2, 3, 4, 5, 6];
        const sumEven = a => a.filter(x => x % 2 === 0).reduce((s, x) => s + x, 0);
        const countGreater = (a, n) => a.filter(x => x > n).length;
        const removeFirst = a => { a.shift(); return a; };
        const addFirst = (a, el) => { a.unshift(el); return a; };
        const maxArr = a => Math.max(...a);
        const minArr = a => Math.min(...a);
        const reverseManual = a => { let r = []; for(let i=a.length-1; i>=0; i--) r.push(a[i]); return r; };
        const sumEvenIdx = a => a.reduce((s, x, i) => i % 2 === 0 ? s + x : s, 0);
        const copyArr = a => [...a];
        const hasEl = (a, el) => a.includes(el);

        const user = { name: "justkaray", age: 20 }; // Используем твой никнейм
        const getKeys = o => Object.keys(o);
        const getValues = o => Object.values(o);
        const addProp = (o, k, v) => { o[k] = v; return o; };
        const delProp = (o, k) => { delete o[k]; return o; };

        // Тестовые вызовы
        console.log("Квадрат 6:", getSquare(6));
        console.log("Делится ли 10 на 3:", isDivisibleBy3(10));
        console.log("25°C в Фаренгейты:", celsiusToFahrenheit(25));
        console.log("Строка без пробелов:", removeSpaces("Hello World JS"));
        console.log("Сумма чётных в [1..6]:", sumEven(arr));
        console.log("Развернутый массив вручную:", reverseManual([10, 20, 30]));
        console.log("Объект пользователя:", user);
        console.log("Ключи объекта:", getKeys(user));

        // === ЗАДАНИЯ 26-30 (ИНТЕРАКТИВ) ===

        // 26. Изменить цвет текста при клике
        document.getElementById('btn-color').addEventListener('click', () => {
            const colors = ['red', 'green', 'blue', 'orange', 'purple'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById('target-text').style.color = randomColor;
            console.log("26. Цвет изменен на:", randomColor);
        });

        // 27. Скрыть элемент при нажатии
        document.getElementById('btn-hide').addEventListener('click', () => {
            document.getElementById('item-to-hide').style.display = 'none';
            console.log("27. Элемент скрыт");
        });

        // 28. Показать значение input
        document.getElementById('btn-show').addEventListener('click', () => {
            const val = document.getElementById('user-input').value;
            alert("Значение в поле: " + val);
            console.log("28. Значение input:", val);
        });

        // 29. Добавить элемент в список
        document.getElementById('btn-add').addEventListener('click', () => {
            const li = document.createElement('li');
            li.textContent = "Новый элемент " + (document.getElementById('my-list').children.length + 1);
            document.getElementById('my-list').appendChild(li);
            console.log("29. Элемент добавлен в список");
        });

        // 30. Очистить поле после отправки
        document.getElementById('btn-clear').addEventListener('click', () => {
            const input = document.getElementById('user-input');
            console.log("30. Данные отправлены:", input.value);
            input.value = ''; // Очистка
        });
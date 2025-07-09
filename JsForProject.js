document.addEventListener('DOMContentLoaded', function() {
    // Инициализация частиц
    particlesJS('particles-js', {
        particles: {
            number: { 
                value: 80, 
                density: { 
                    enable: true, 
                    value_area: 1000 
                } 
            },
            color: { 
                value: ["#FFD700", "#00B4DB", "#8A2BE2"] 
            },
            shape: { 
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: { 
                value: 0.7, 
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.3,
                    sync: false
                }
            },
            size: { 
                value: 4, 
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: { 
                enable: true, 
                distance: 150, 
                color: "#ffffff", 
                opacity: 0.3, 
                width: 1 
            },
            move: { 
                enable: true, 
                speed: 2, 
                direction: "none", 
                random: true, 
                straight: false, 
                out_mode: "out" 
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { 
                    enable: true, 
                    mode: "repulse" 
                },
                onclick: { 
                    enable: true, 
                    mode: "push" 
                }
            }
        }
    });

    // Данные книг
    const books = {
        obligatory: [
            "«Повесть о житии и о храбрости благородного и великого князя Александра Невского»",
            "Фонвизин Д. И. Комедия «Недоросль»",
            "Пушкин А. С. Маленькие трагедии. «Моцарт и Сальери». Роман «Капитанская дочка»",
            "Лермонтов М. Ю. Поэма «Мцыри»",
            "Гоголь Н. В. Повесть «Шинель». Комедия «Ревизор»",
            "Тургенев И. С. Повести «Ася», «Первая любовь»",
            "Достоевский Ф. М. «Бедные люди», «Белые ночи»",
            "Толстой Л. Н. «После бала», «Отрочество» (главы)",
            "Шмелёв И. С. «Как я стал писателем»",
            "Осоргин М. А. «Пенсне»",
            "Тэффи Н. «Жизнь и воротник»",
            "Булгаков М. А. «Собачье сердце»",
            "Твардовский А. Т. Поэма «Василий Тёркин»",
            "Шолохов М. А. Рассказ «Судьба человека»",
            "Солженицын А. И. Рассказ «Матрёнин двор»",
            "Астафьев В. П. Рассказ «Фотография, на которой меня нет»",
            "Шекспир У. Трагедия «Ромео и Джульетта»",
            "Мольер Ж.-Б. Комедия «Мещанин во дворянстве»"
        ],
        optional: [
            "Свирский А. Повесть «Рыжик»",
            "Грин А. Повесть «Бегущая по волнам»",
            "Дубов Н. Рассказ «Мальчик у моря»",
            "Погодин Р. Рассказы «Сколько стоит долг»",
            "Железников В. Повесть «Чучело»",
            "Скребицкий Г. Повесть «От первых проталин до первой грозы»",
            "Куприн А. Рассказы (на выбор)",
            "Пушкин А. С. Цикл повестей «Повести покойного Ивана Петровича Белкина»",
            "Толстой Л. Н. Повести из трилогии «Отрочество», «Юность»",
            "Горький М. Повести из трилогии «Детство»",
            "Диккенс Ч. Роман «Большие надежды»",
            "Дюма А. Роман «Три мушкетера»",
            "Скотт В. Роман «Квентин Дорвард»",
            "Твен М. Роман «Приключения Гекльберри Финна»",
            "Беляев А. Роман «Человек-амфибия»",
            "Верн Ж. Роман «Двадцать тысяч лье под водой»",
            "Ефремов И. Повесть «Звёздные корабли»",
            "Купер Ф. Роман «Пионер»",
            "Уэллс Г. Роман «Человек-невидимка»",
            "Булычёв К. Повесть «Девочка с Земли»"
        ],
        shortest: [
            "1. Осоргин М. А. «Пенсне» (рассказ, 5 стр.) — ироничная зарисовка о жизни вещей",
            "2. Тэффи Н. «Жизнь и воротник» (рассказ, 8 стр.) — сатира о власти вещей над человеком",
            "3. Шмелёв И. С. «Как я стал писателем» (рассказ, 10 стр.) — автобиографический очерк",
            "4. Толстой Л. Н. «После бала» (рассказ, 12 стр.) — перелом в восприятии мира",
            "5. Астафьев В. П. «Фотография, на которой меня нет» (рассказ, 15 стр.) — трогательная история",
            "6. Шекспир У. Сонеты (стихи) — №66, №130 и другие",
            "7. Пушкин А. С. «Моцарт и Сальери» (пьеса, 20 стр.) — маленькая трагедия",
            "8. Достоевский Ф. М. «Белые ночи» (повесть, 25 стр.) — лиричная история",
            "9. Солженицын А. И. «Матрёнин двор» (рассказ, 30 стр.) — мощная новелла",
            "10. Шолохов М. А. «Судьба человека» (рассказ, 35 стр.) — эпичное повествование",
            "11. Гоголь Н. В. «Шинель» (повесть, 40 стр.) — знаменитая петербургская история"
        ]
    };

    // Ключи для localStorage
    const PROGRESS_KEY = 'summer_reading_progress';
    const JOURNAL_KEY = 'reading_journal_entries';

    // Сохраняем состояние книг
    function saveProgress() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const progress = Array.from(checkboxes).map(checkbox => checkbox.checked);
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }

    // Загружаем состояние книг
    function loadProgress() {
        const savedProgress = localStorage.getItem(PROGRESS_KEY);
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            
            checkboxes.forEach((checkbox, index) => {
                if (progress[index]) {
                    checkbox.checked = true;
                    // Добавляем класс для анимации уже прочитанных книг
                    checkbox.parentElement.classList.add('read');
                }
            });
            
            updateProgress();
        }
    }

    // Создаем элемент книги с улучшенной анимацией
    function createBookItem(book, type, index) {
        const li = document.createElement('li');
        li.className = 'animate__animated animate__fadeIn';
        li.style.animationDelay = `${index * 0.05}s`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `book-${type}-${index}`;
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                playSound('checkSound');
                this.parentElement.classList.add('read');
                
                // Анимация проверки
                this.parentElement.classList.add('animate__tada');
                setTimeout(() => {
                    this.parentElement.classList.remove('animate__tada');
                }, 1000);
            } else {
                this.parentElement.classList.remove('read');
            }
            updateProgress();
            saveProgress();
        });

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = book;
        
        // Иконка книги
        const bookIcon = document.createElement('i');
        bookIcon.className = 'fas fa-book book-icon';
        label.prepend(bookIcon);

        li.appendChild(checkbox);
        li.appendChild(label);
        return li;
    }

    // Переключение вкладок с улучшенной анимацией
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Анимация переключения
            document.querySelectorAll('.tab-content').forEach(content => {
                if (content.id === tabId) {
                    content.style.display = 'block';
                    content.classList.remove('animate__fadeOut');
                    content.classList.add('animate__fadeInUp');
                } else {
                    content.classList.remove('animate__fadeInUp');
                    content.classList.add('animate__fadeOut');
                    setTimeout(() => {
                        content.style.display = 'none';
                    }, 300);
                }
            });
            
            // Анимация кнопок
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.classList.remove('animate__pulse');
            });
            btn.classList.add('active');
            btn.classList.add('animate__pulse');
            setTimeout(() => {
                btn.classList.remove('animate__pulse');
            }, 500);
        });
    });

    // Обновление прогресса с усовершенствованной анимацией
    function updateProgress() {
        const totalBooks = books.obligatory.length + books.optional.length + books.shortest.length;
        const checkedBooks = document.querySelectorAll('input[type="checkbox"]:checked').length;
        const progress = Math.round((checkedBooks / totalBooks) * 100);

        const progressFill = document.getElementById('progressFill');
        const progressText = progressFill.querySelector('.progress-text');
        
        // Плавная анимация заполнения
        let currentProgress = parseInt(progressFill.style.width) || 0;
        const animateProgress = () => {
            if (currentProgress < progress) {
                currentProgress++;
                progressFill.style.width = `${currentProgress}%`;
                progressText.textContent = `${currentProgress}%`;
                requestAnimationFrame(animateProgress);
            }
        };
        animateProgress();
        
        // Обновление счётчика
        document.getElementById('booksRead').textContent = checkedBooks;
        
        // Эффект при заполнении
        if (progress === 100) {
            progressFill.classList.add('complete');
            diamondRainEffect();
            confettiEffect();
        } else {
            progressFill.classList.remove('complete');
        }
    }

    // Эффект конфетти при 100% выполнении
    function confettiEffect() {
        if (typeof confetti === 'function') {
            // Основной взрыв
            confetti({
                particleCount: 300,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#FFD700', '#8A2BE2', '#00FF7F', '#00B4DB', '#FFFFFF']
            });
            
            // Бриллиантовые частицы
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.5 },
                    shapes: ['square'],
                    colors: ['#00B4DB', '#aee1ff']
                });
            }, 300);
            
            // Золотой дождь
            setTimeout(() => {
                confetti({
                    particleCount: 150,
                    spread: 60,
                    angle: 60,
                    origin: { x: 0 },
                    colors: ['#FFD700']
                });
                
                confetti({
                    particleCount: 150,
                    spread: 60,
                    angle: 120,
                    origin: { x: 1 },
                    colors: ['#FFD700']
                });
            }, 600);
        }
    }

    // Эффект бриллиантового дождя
    function diamondRainEffect() {
        const diamondsContainer = document.querySelector('.floating-diamonds');
        
        for (let i = 0; i < 30; i++) {
            const diamond = document.createElement('div');
            diamond.className = 'diamond';
            diamond.style.setProperty('--size', `${Math.random() * 20 + 10}px`);
            diamond.style.left = `${Math.random() * 100}%`;
            diamond.style.animationDuration = `${Math.random() * 10 + 5}s`;
            diamond.style.opacity = Math.random() * 0.5 + 0.3;
            diamond.style.setProperty('--delay', `${Math.random() * 2}s`);
            
            diamondsContainer.appendChild(diamond);
            
            // Удаление после анимации
            setTimeout(() => {
                diamond.remove();
            }, 15000);
        }
    }

    // Читательский дневник
    const journalTable = document.querySelector('#journalTable tbody');
    const addJournalBtn = document.getElementById('addJournalEntry');

    // Загрузка дневника из localStorage
    function loadJournal() {
        const savedEntries = localStorage.getItem(JOURNAL_KEY);
        if (savedEntries) {
            const entries = JSON.parse(savedEntries);
            entries.forEach(entry => {
                addJournalEntry(entry);
            });
        }
    }

    // Сохранение дневника в localStorage
    function saveJournal() {
        const rows = document.querySelectorAll('#journalTable tbody tr');
        const entries = [];
        
        rows.forEach(row => {
            const inputs = row.querySelectorAll('input');
            const entry = {
                author: inputs[0].value,
                title: inputs[1].value,
                genre: inputs[2].value,
                heroes: inputs[3].value,
                plot: inputs[4].value,
                idea: inputs[5].value
            };
            entries.push(entry);
        });
        
        localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
    }

    // Добавление записи в дневник
    function addJournalEntry(data = {}) {
        const newRow = journalTable.insertRow();
        newRow.className = 'animate__animated animate__fadeIn';
        
        const fields = ['author', 'title', 'genre', 'heroes', 'plot', 'idea'];
        fields.forEach(field => {
            const cell = newRow.insertCell();
            const input = document.createElement('input');
            input.type = 'text';
            input.value = data[field] || '';
            input.placeholder = {
                author: 'Автор',
                title: 'Название',
                genre: 'Жанр',
                heroes: 'Герои',
                plot: 'Сюжет',
                idea: 'Основная мысль'
            }[field];
            
            input.addEventListener('input', saveJournal);
            cell.appendChild(input);
        });
    }

    // Воспроизведение звуков
    function playSound(id) {
        const sound = document.getElementById(id);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("Autoplay prevented: ", e));
        }
    }

    // Кнопка сброса прогресса
    document.getElementById('resetProgress').addEventListener('click', function() {
        // Анимация кнопки
        this.classList.add('animate__rotateIn');
        setTimeout(() => {
            this.classList.remove('animate__rotateIn');
        }, 500);
        
        // Сброс чекбоксов
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.parentElement.classList.remove('read');
        });
        
        // Сброс прогресс-бара
        const progressFill = document.getElementById('progressFill');
        progressFill.style.width = '0%';
        progressFill.querySelector('.progress-text').textContent = '0%';
        document.getElementById('booksRead').textContent = '0';
        
        // Очистка localStorage
        localStorage.removeItem(PROGRESS_KEY);
    });

    // Инициализация
    function init() {
        renderBooks();
        loadJournal();
        updateProgress();
        
        // Анимация заголовка при загрузке
        setTimeout(() => {
            document.querySelector('h1').classList.add('animate__pulse');
            setTimeout(() => {
                document.querySelector('h1').classList.remove('animate__pulse');
            }, 2000);
        }, 1000);
    }

    // Заполняем списки книг
    function renderBooks() {
        const obligatoryList = document.getElementById('obligatory-list');
        const optionalList = document.getElementById('optional-list');
        const shortestList = document.getElementById('shortest-list');
        
        // Установка общего количества книг
        document.getElementById('totalBooks').textContent = 
            books.obligatory.length + books.optional.length + books.shortest.length;

        books.obligatory.forEach((book, index) => {
            const li = createBookItem(book, 'obligatory', index);
            obligatoryList.appendChild(li);
        });

        books.optional.forEach((book, index) => {
            const li = createBookItem(book, 'optional', index);
            optionalList.appendChild(li);
        });

        books.shortest.forEach((book, index) => {
            const li = createBookItem(book, 'shortest', index);
            shortestList.appendChild(li);
        });

        // Загружаем сохранённый прогресс
        loadProgress();
    }

    // Добавление записи по кнопке
    addJournalBtn.addEventListener('click', () => {
        addJournalEntry();
        saveJournal();
        // Анимация кнопки
        addJournalBtn.classList.add('animate__tada');
        setTimeout(() => {
            addJournalBtn.classList.remove('animate__tada');
        }, 1000);
    });

    // Запуск приложения
    init();
});
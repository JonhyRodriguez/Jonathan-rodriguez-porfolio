document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const flagEs = langToggle.querySelector('.flag-es');
    const flagEn = langToggle.querySelector('.flag-en');

    let currentLang = localStorage.getItem('lang');
    if (!currentLang) {
        const browserLang = navigator.language.slice(0, 2);
        currentLang = browserLang === 'en' ? 'en' : 'es';
    }

    function setLanguage(lang) {
        // Actualizar textos traducibles
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Actualizar atributo de idioma
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);

        // Mostrar bandera del idioma al que se puede cambiar
        flagEs.classList.toggle('active', lang === 'en');
        flagEn.classList.toggle('active', lang === 'es');

    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(currentLang);
    });

    setLanguage(currentLang);
});

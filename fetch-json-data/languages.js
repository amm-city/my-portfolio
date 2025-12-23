export async function loadLanguages() {
    const res = await fetch('../json-fake-db/languages.json');
    if(!res.ok) throw new Error("Response is not Ok");
    const data = await res.json();

    const languagesContainer = document.querySelector(".lang-menu");
    const languages = data.map(lang => `<li class="card">
            <img src="${lang.img}" alt="lang" width="100">
        </li>`).join('');

    languagesContainer.innerHTML += languages;
}
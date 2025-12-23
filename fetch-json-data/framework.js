export async function loadFrameworks() {
    const res = await fetch('../json-fake-db/frameworks.json');
    if(!res.ok) throw new Error("Response is not ok");
    const data = await res.json();

    const frameworksContainer = document.querySelector(".framework-menu");

    data.forEach(framework => {
        const frameworkCard = 
        `
            <li class="card">
            <img src="${framework.img}" alt="lang" width="100">
            </li>
        `;

        frameworksContainer.innerHTML += frameworkCard;
    });
}
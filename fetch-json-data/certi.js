export async function loadCertificates() {
    const res = await fetch('../json-fake-db/certifications.json');
    if(!res.ok) throw new Error("Response is not Ok");
    const data = await res.json();

    const certiContainer = document.querySelector(".certi-cards");

    const certificates = data.map(certi => `
        <div class="image-card">
            <img src="${certi.img}" alt="Image 1" class="gallery-image" data-fullsrc="${certi.img}">
            <h2 class="certi-name">${certi.name}</h2>
        </div>
        `).join('');

    certiContainer.innerHTML = certificates;
}
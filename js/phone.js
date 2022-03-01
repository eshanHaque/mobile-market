const mobilePhone = () => {
    const mobileInput = document.getElementById("input-feild").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${mobileInput}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMobile(data.data));
}

const displayMobile = (mobiles) => {
    for(const mobile of mobiles){
        const displayParent = document.getElementById("mobile-container");

    const div = document.createElement('div')
    div.classList.add('col-lg-4')
    div.innerHTML = `<div class="card p-3 shadow-lg mb-4">
    <div><img class="mx-auto d-block" src="${mobile.image}" alt=""></div>
    <h4 class="text-center">${mobile.phone_name}</h4>
    <h5 class="text-center">${mobile.brand}</h5>
    <div class="text-center"><button onclick="details('${mobile.slug}')" class="btn-success" >Detailes</button></div>
    </div>`;
    displayParent.appendChild(div);
    }
};

const details = (mobileId) => {
    const url =`https://openapi.programming-hero.com/api/phone/${mobileId}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => detailsMobile(data.data));
};

const detailsMobile = (specification) => {
    document.getElementById("mobile-details").innerHTML = ` <div class="card p-3 shadow-lg mb-4">
    <div><img class="mx-auto d-block" src="${specification.image}" alt=""></div>
    <h3 class="text-center"></h3>
    <h5 class="text-center"></h5>
    <h5 class="text-center">realease</h5>
    <h5 class="text-center">Feature</h5>
    <h5 class="text-center">storage</h5>
    <h5 class="text-center">displaysize</h5>
    <h5 class="text-center">chipset</h5>
    <h5 class="text-center">memory</h5>
    <h5 class="text-center">sensors</h5>
    <h5 class="text-center">waln</h5>
    <h5 class="text-center">bluetooth</h5>
    <h5 class="text-center">gps</h5>
    <h5 class="text-center">nfc</h5>
    <h5 class="text-center">radio</h5>
    <h5 class="text-center"></h5>
</div>`
}
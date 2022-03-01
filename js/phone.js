const mobilePhone = () => {
    document.getElementById("mobile-container").innerHTML="";

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
    <h3 class="text-center">${specification.name}</h3>
    <h5 class="text-center">${specification.releaseDate}</h5>
    <h5 class="text-center">Feature:</h5>
    <h5 class="text-center">${specification.mainFeatures.storage}</h5>
    <h5 class="text-center">${specification.mainFeatures.displaySize}</h5>
    <h5 class="text-center">${specification.mainFeatures.chipSet}</h5>
    <h5 class="text-center">${specification.mainFeatures.memory}</h5>
    <h5 class="text-center">${specification.mainFeatures.sensors}</h5>
</div>`;
}
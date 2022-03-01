// get search input 
const mobilePhone = () => {
    // clear previous load 
    document.getElementById("mobile-container").innerHTML="";


    const mobileInput = document.getElementById("input-feild").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${mobileInput}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.data == false){
                document.getElementById("wrong").style.display = "block";
            }
            else{
                displayMobile(data.data);
                document.getElementById("wrong").style.display = "none";
            }
        });
};


// get search result 
const displayMobile = (mobiles) => {
    for(const mobile of mobiles){
        const displayParent = document.getElementById("mobile-container");

    const div = document.createElement('div')
    div.classList.add('col-lg-4')
    div.innerHTML = `<div class="card p-3 shadow-lg mb-4">
    <div><img class="mx-auto d-block mt-4 mb-1 image-fix" src="${mobile.image}" alt=""></div>
    <h4 class="text-center fw-bold mt-3 mb-2">${mobile.phone_name}</h4>
    <h5 class="text-center">${mobile.brand}</h5>
    <div class="text-center"><button onclick="details('${mobile.slug}')" class="btn btn-primary rounded button-color mt-3 mb-2" >Detailes</button></div>
    </div>`;
    displayParent.appendChild(div);
    }
};


// get details result 
const details = (mobileId) => {
    const url =`https://openapi.programming-hero.com/api/phone/${mobileId}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => detailsMobile(data.data));
};

const detailsMobile = (specification) => {
    

    document.getElementById("mobile-details").innerHTML = ` <div class="card p-3 shadow-lg mb-4">
    <div><img class="mx-auto d-block" src="${specification.image}" alt=""></div>
    <h3 class="text-center mt-2 mb-1 fw-bold">${specification.name}</h3>
    <h5 class="text-center">${specification.releaseDate}</h5>
    <h5 class="text-center">Feature:</h5>
    <h5 class="text-center">Storage: <span class="ftr-font">${specification.mainFeatures.storage}</span></h5>
    <h5 class="text-center">Display Size: <span class="ftr-font">${specification.mainFeatures.displaySize}</span></h5>
    <h5 class="text-center">Chip Set: <span class="ftr-font">${specification.mainFeatures.chipSet}</span></h5>
    <h5 class="text-center">Memory: <span class="ftr-font">${specification.mainFeatures.memory}</span></h5>
    <h5 class="text-center">Sensors: <span class="ftr-font">${specification.mainFeatures.sensors}</span></h5>
</div>`;
};

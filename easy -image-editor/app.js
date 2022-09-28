const fileInputEl = document.querySelector(".file-input"),
filterOptionsEl = document.querySelectorAll(".filter button")
filterNameEl = document.querySelector(".filter-info .name"),
filterValueEl = document.querySelector(".filter-info .value"),
filterSliderEl = document.querySelector(".slider input"),
rotateOptionsEl = document.querySelectorAll(".rotate button")
previewImgEl = document.querySelector(".preview-img img"),
resetFilterBtnEl = document.querySelector(".reset-filter"),
chooseImgBtnEl = document.querySelector(".choose-img"),
saveImgBtnEl = document.querySelector(".save-img");

let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;
let rotate = 0, flipHorizontal = 1, flipVertical = 1;


const applyFilters = () => {
    previewImgEl.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`
    previewImgEl.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
}

const loadImage = () => {
    let file = fileInputEl.files[0];
    if(!file) return;
    previewImgEl.src = URL.createObjectURL(file);
    previewImgEl.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable")
    })
}

filterOptionsEl.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active")
        filterNameEl.innerText = option.innerText;

        if(option.id === "brightness") {
            filterSliderEl.max = "200"
            filterSliderEl.value = brightness
            filterValueEl.innerText = `${brightness}%`;
        } else if(option.id === "saturation") {
            filterSliderEl.max = "200"
            filterSliderEl.value = saturation
            filterValueEl.innerText = `${saturation}%`
        } else if(option.id === "inversion") {
            filterSliderEl.max = "100"
            filterSliderEl.value = inversion
            filterValueEl.innerText = `${inversion}%`
        } else if(option.id === "grayscale") {
            filterSliderEl.max = "100"
            filterSliderEl.value = grayscale
            filterValueEl.innerText = `${grayscale}%`
        }        
    })
});

const updateFilter = () => {
    filterValueEl.innerText = `${filterSliderEl.value}%`;
    const selectedFilter = document.querySelector(".filter .active")

    if(selectedFilter.id === "brightness") {
        brightness = filterSliderEl.value;
    } else if(selectedFilter.id === "saturation") {
        saturation = filterSliderEl.value;
    } else if(selectedFilter.id === "inversion") { 
        inversion = filterSliderEl.value;
    } else {
        grayscale = filterSliderEl.value
    }
    applyFilters()
}


rotateOptionsEl.forEach(option => {
    option.addEventListener("click", () => {
        if(option.id === "left" ) { 
        rotate -= 90;
     } else if(option.id === "right") {
        rotate += 90;
     } else if(option.id === "horizontal") {
        flipHorizontal = flipHorizontal === 1 ? -1 : 1;
     }  else if(option.id === "vertical") {
        flipVertical = flipVertical === 1 ? -1 : 1;
     }
    applyFilters(); 
  })
})


const resetFilter = () => {
    brightness = 100, saturation = 100, inversion = 0, grayscale = 0;
    rotate = 0, flipHorizontal = 1, flipVertical = 1;
    filterOptionsEl[0].click();
    applyFilters()
}

const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")
    canvas.width = previewImgEl.naturalWidth;
    canvas.height = previewImgEl.naturalHeight;

    ctx.filter =  previewImgEl.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
    ctx.translate(canvas.width / 2, canvas.height / 2)
    if (rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal, flipVertical)
    ctx.drawImage(previewImgEl, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    

    const link = document.createElement("a")
    link.download = "image.jpg"
    link.href = canvas.toDataURL();
    link.click();
}


fileInputEl.addEventListener("change", loadImage);
filterSliderEl.addEventListener("input", updateFilter)
resetFilterBtnEl.addEventListener("click", resetFilter)
saveImgBtnEl.addEventListener("click", saveImage)
chooseImgBtnEl.addEventListener("click", () => fileInputEl.click());

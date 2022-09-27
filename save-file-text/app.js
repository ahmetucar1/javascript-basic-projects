const textareaEl = document.querySelector("textarea"),
fileNameInputEl = document.querySelector(".file-name input"),
selectMenuEl = document.querySelector(".save-as select"),
saveBtnEl = document.querySelector(".save-btn");

selectMenuEl.addEventListener("change", () => { 
    let selectedOption = selectMenuEl.options[selectMenuEl.selectedIndex].text;
    saveBtnEl.innerText = `Dosyayı Farklı Kaydet .${selectedOption.split(" ")[0]} `
})

saveBtnEl.addEventListener("click", () => {
    const blob = new Blob([textareaEl.value], {type: selectMenuEl.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInputEl.value;
    link.href = fileUrl;
    link.click();
})

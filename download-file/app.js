const fileInputEl = document.querySelector("input"),
downloadBtnEl = document.querySelector("button");

downloadBtnEl.addEventListener("click", e => {
    e.preventDefault()
    downloadBtnEl.innerText = "Downloading file..."
    fetchFile(fileInputEl.value)
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
    let tempUrl = URL.createObjectURL(file)
    let aTag = document.createElement("a")
    aTag.href = tempUrl
    aTag.download = url.replace(/^.*[///]/, '')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
    URL.revokeObjectURL(tempUrl)
    downloadBtnEl.innerText = "Download file..."
    }).catch(() => {
        downloadBtnEl.innerText = "Download File"
        alert("Failed to download file!")
    })
};

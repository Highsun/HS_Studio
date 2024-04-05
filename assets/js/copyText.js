function copyText() {
    var textToCopy = document.getElementById("copyText").innerText;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    var successful = document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    if (successful) {
        alert("主页网址已成功复制到剪贴板！");
    } else {
        alert("复制失败，请手动复制网址：");
    }
}
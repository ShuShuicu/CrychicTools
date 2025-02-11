function OpenTool(toolFunction) {
    toolFunction().then(function (result) {
        if (result.error) {
            alert('发生错误: ' + result.error);
        } else {
            alert(result.message);
        }
    }).catch(function (error) {
        alert('发生错误: ' + error);
    });
}

function OpenAAct() {
    OpenTool(window.pywebview.api.OpenAAct);
}

function OpenIDM() {
    OpenTool(window.pywebview.api.OpenIDM);
}
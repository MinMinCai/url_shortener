function copy() {
    const urlText = document.querySelector('#completeurl').textContent
    navigator.clipboard.writeText(urlText)
        .then(() => {
        alert('已成功複製網址!')
        })
        .catch(err => {
            console.error('複製失敗: ', err)
            alert('複製失敗，請手動複製')
        })
}
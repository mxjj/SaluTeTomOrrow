function setRem() {
    console.log('执行rem换算')
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    let htmlDom = document.querySelector('html')
    htmlDom.style.fontSize = htmlWidth / 20 + 'px'
}
setRem()
window.onresize = function () {
    setRem()
}
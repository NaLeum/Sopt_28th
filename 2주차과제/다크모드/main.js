let checkBox = document.querySelector('input[name=mode]')

checkBox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'darktheme')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'lighttheme');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
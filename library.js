function $(selector) {
    const self = {
        element: document.querySelector(selector),

        html: () => self.element,
        on: (event, callback) => {
            document.addEventListener(event, callback)
        },
        hide: () => {
            self.element.style.display = 'none'
        },
        attr: (name, value) => {
            if (value === null) {
                self.element.getAttribute(name)
            } else {
                self.element.setAttribute(name, value)
            }
        }
    }
    return self
}

// console.log($('h3').html())

// $('h1').on('click', () => {
//     alert('clicked')
// })

$('h2').on('click', () => {
    $('h2').hide();
})

// $('h1').attr('class', 'heading1')
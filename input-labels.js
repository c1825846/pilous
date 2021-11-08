const orderInputLabels = document.querySelectorAll('.order-form__input-label')
const orderInputs = document.querySelectorAll('.order-form__input')

orderInputs.forEach(input => {
    input.addEventListener('input', e => {
        const label = input.closest('.order-form__input-wrapper').querySelector('.order-form__input-label')
        if (input.value !== ''){
            label.classList.add('order-form__input-label--active')
        } else {
            label.classList.remove('order-form__input-label--active')
        }
    })
})
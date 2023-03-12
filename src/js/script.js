const nextBtn = document.querySelector('.buttons__nextBtn')
const prevBtn = document.querySelector('.buttons__prevBtn')
const sendBtn = document.querySelector('.buttons__sendBtn')
const radio = document.querySelector('.radio')

//Progeres squares
const progressStep1 = document.querySelector('.s1')
const progressStep2 = document.querySelector('.s2')
const progressStep3 = document.querySelector('.s3')

//Progress Line

const progressLine = document.querySelector('.lineblack')

//Form Pages

const pageOne = document.querySelector('.page1')
const pageTwo = document.querySelector('.page2')
const pageThree = document.querySelector('.page3')
const pageAgree = document.querySelector('.formWindow__agree')

// Status Variable

let nameStatus = 0
let emailStatus = 0
let agreeStatus = 0

// select

const need = document.querySelector('#need')
const kindOfProduct = document.querySelector('#kindOfProduct')
const kindOfProductLabel = document.querySelector('#kindOfProductLabel')
const lineOfProducts = document.querySelector('#lineOfProducts')
const lineOfProductsLabel = document.querySelector('#lineOfProductsLabel')
const colorOfProducts = document.querySelector('#colorOfProducts')
const colorOfProductsLabel = document.querySelector('#colorOfProductsLabel')
const describeProducts = document.querySelector('#describeProducts')
const describeProductsLabel = document.querySelector('#describeProductsLabel')
const info = document.querySelector('.info')
const emailLabel = document.querySelector('#emailLabel')
const emailField = document.querySelector('#emailfield')
const nameField = document.querySelector('#nameField')
const nameLabel = document.querySelector('#nameLabel')

// First form page effects

const selectEffect1 = () => {
	if (need.value < 3) {
		kindOfProduct.style.display = 'block'
		kindOfProductLabel.style.display = 'block'
		lineOfProducts.style.display = 'block'
		lineOfProductsLabel.style.display = 'block'
		colorOfProducts.style.display = 'block'
		colorOfProductsLabel.style.display = 'block'
		describeProducts.style.display = 'none'
		describeProductsLabel.style.display = 'none'
	} else {
		kindOfProduct.style.display = 'none'
		kindOfProductLabel.style.display = 'none'
		lineOfProducts.style.display = 'none'
		lineOfProductsLabel.style.display = 'none'
		colorOfProducts.style.display = 'none'
		colorOfProductsLabel.style.display = 'none'
		describeProducts.style.display = 'block'
		describeProductsLabel.style.display = 'block'
		nextBtn.disabled = false
	}
}

// Swichoff disabled option on nextBtn

const selectEffect2 = () => {
	if (kindOfProduct.value > 0) {
		nextBtn.disabled = false
	}
}

// Chcking length of textarea in Page 2

describeProducts.addEventListener('selectionchange', () => {
	if (describeProducts.value.length < 200) {
		describeProductsLabel.textContent = 'Please write more about your need'
		nextBtn.disabled = true
	} else if (describeProducts.value.length > 200) {
		describeProductsLabel.textContent = 'Remember, describe the details of your product vision'
		nextBtn.disabled = false
	}
})

//Checking name and email input using regexp

const checkEmail = () => {
	if (emailField.value.length < 5) {
		console.log(emailField.value.length)
		emailLabel.textContent = 'Please write more...'
		emailStatus = 0
		sendBtnOn()
	} else {
		const validateEmail =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

		if (validateEmail.test(emailField.value)) {
			nextBtn.disabled = false
			emailLabel.textContent = 'Your email address is correct.'
			emailStatus = 1
			sendBtnOn()
		} else {
			emailLabel.textContent = 'Please enter the email address correctly.'
			emailStatus = 0
			sendBtnOn()
		}
	}
}
const checkName = () => {
	if (nameField.value.length < 5) {
		nameLabel.textContent = 'Please write more...'
		nameStatus = 0
		sendBtnOn()
	} else {
		const validateName = /^(([A-ZŁŻ][a-ząęóżźćńłś]{2,})(-[A-ZŁŻ][a-ząęóżźćńłś]{2,})?)|([a-z]{3} [A-Z][a-z]{2,})$/u
		if (validateName.test(nameField.value)) {
			nameLabel.textContent = 'Your name and surname are correct.'
			nameStatus = 1
			sendBtnOn()
		} else {
			nameLabel.textContent = 'Please enter your name and surname correctly.'
			nameStatus = 0
			sendBtnOn()
		}
	}
}

const checkAgree = () => {
	if ((radio.checked = true)) {
		agreeStatus = 1
		sendBtnOn()
	} else {
		agreeStatus = 0
		sendBtnOn()
	}
}

const sendBtnOn = () => {
	console.log('dziala funkcja');
	if (agreeStatus == 1 && nameStatus == 1 && emailStatus == 1) {
		sendBtn.disabled = false
		console.log('dziala funkcja if')
	} else {
		sendBtn.disabled = true
		console.log('dziala funkcja else')
	}
}

//Buttons and Actions

need.addEventListener('change', selectEffect1)
kindOfProduct.addEventListener('change', selectEffect2)
colorOfProducts.addEventListener('change', selectEffect2)
lineOfProducts.addEventListener('change', selectEffect2)
nameField.addEventListener('input', checkName)
emailField.addEventListener('input', checkEmail)

let step = 1

const addStep = () => {
	step++
	if (step > 3) {
		step = 3
	}
	stepsDisplay()
}

const removeStep = () => {
	step--
	if (step < 1) {
		step = 1
	}
	stepsDisplay()
}

const stepsDisplay = () => {
	if (step == 1) {
		pageOne.classList.add('active')
		pageTwo.classList.remove('active')
		pageThree.classList.remove('active')
		pageAgree.classList.remove('active')
		prevBtn.disabled = true
		progressLine.style.width = '0%'

		const delay03 = () => {
			progressStep2.style.display = 'none'
		}
		const delay09 = () => {
			progressStep2.classList.remove('animation-out')
		}

		if (progressStep2.classList.contains('animation-in')) {
			progressStep2.classList.remove('animation-in')
			progressStep2.classList.add('animation-out')
			setTimeout(delay03, 333)
			setTimeout(delay09, 999)
		}
	} else if (step == 2) {
		pageOne.classList.remove('active')
		pageTwo.classList.add('active')
		nextBtn.disabled = true
		pageThree.classList.remove('active')
		pageAgree.classList.remove('active')
		prevBtn.disabled = false
		progressLine.style.width = '50%'
		progressStep2.style.display = 'flex'
		progressStep2.classList.add('animation-in')
		sendBtn.style.display = 'none'
		nextBtn.style.display = 'block'

		const delay03 = () => {
			progressStep3.style.display = 'none'
		}
		const delay09 = () => {
			progressStep3.classList.remove('animation-out')
		}

		if (progressStep3.classList.contains('animation-in')) {
			progressStep3.classList.remove('animation-in')
			progressStep3.classList.add('animation-out')
			setTimeout(delay03, 333)
			setTimeout(delay09, 999)
		}
	} else if (step == 3) {
		pageOne.classList.remove('active')
		pageTwo.classList.remove('active')
		pageThree.classList.add('active')
		pageAgree.classList.add('active')
		progressLine.style.width = '100%'
		progressStep3.style.display = 'flex'
		progressStep3.classList.add('animation-in')
		nextBtn.style.display = 'none'
		sendBtn.style.display = 'block'
		sendBtn.disabled = true
	}
}

const test = () => {
	console.log('dziala')
}

// obsługa selecta

prevBtn.addEventListener('click', removeStep)
nextBtn.addEventListener('click', addStep)
radio.addEventListener('click', checkAgree)

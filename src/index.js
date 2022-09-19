let detail = {
	length: 350,
	width: 250,
	lt: { radius: 0 },
	lb: { radius: 0 },
	rt: { radius: 50 },
	rb: { radius: 0 },
}
let zRotate = 0

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
const app = document.getElementById('app')
const heightInput = document.getElementById('heightInput')
const widthInput = document.getElementById('widthInput')
const rightAngleInput = document.getElementById('rightAngleInput')
const rotateZ = document.getElementById('rotateZ')
const body = document.querySelector('body')
body.style.overflow = 'hidden'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'
body.style.width = '100vw'
widthInput.value = detail.width
heightInput.value = detail.length

const drawFigure = (selector, width, length, radius) => {
	ctx.beginPath()
	ctx.moveTo(length, width)
	ctx.arcTo(0, width, 0, 0, 0)
	ctx.arcTo(0, 0, length, 0, 0)
	ctx.arcTo(length, 0, length, length, radius)
	ctx.arcTo(length, width, 0, 150, 0)
	ctx.stroke()
}
drawFigure(canvas, detail.width, detail.length, detail.rt.radius)
heightInput.addEventListener('change', e => {
	if (e.target.value <= 350 && e.target.value >= 50) {
		detail.length = e.target.value
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		drawFigure(canvas, detail.width, detail.length, detail.rt.radius)
	}
})
widthInput.addEventListener('change', e => {
	if (e.target.value <= 250 && e.target.value >= 50) {
		detail.width = e.target.value
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		drawFigure(canvas, detail.width, detail.length, detail.rt.radius)
	}
})
rightAngleInput.addEventListener('change', e => {
	if (e.target.value <= 350 && e.target.value >= 10) {
		detail.rt.radius = e.target.value
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		drawFigure(canvas, detail.width, detail.length, detail.rt.radius)
	}
})

rotateZ.addEventListener('click', () => {
	if (zRotate === 360) {
		zRotate = 0
	}
	zRotate += 90
	canvas.style = `transform: rotate(${zRotate}deg);`
})

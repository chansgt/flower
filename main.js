onload = () =>{
        document.body.classList.remove("container");
};

const $petals = document.querySelectorAll('.petal')
let color = 0
// const mouse = {
//   x: 1,
//   y: 1
// }

// const handleMouse = (e) => {
//   const x = e.clientX || e.touches[0].clientX
//   const y = e.clientY || e.touches[0].clientY
//   mouse.x = x / window.innerWidth
//   mouse.y = y / window.innerHeight
// }
// ['mousemove', 'touchstart', 'touchmove'].forEach(e => window.addEventListener(e, handleMouse))

const lerp = (a, b, n) => (1 - n) * a + n * b

positionX = 1
positionY = 1

const animate = () => {
  $petals.forEach((b, ind) => {
    const i = ind / $petals.length
    const x = Math.sin(i * Math.PI * 2) * 40
    const y = -Math.cos(i * Math.PI * 2) * 40
    color = lerp(color, positionY * 360, .004)
    const style = {
      transform: `translate(${x}px, ${y}px) rotate(${i * 360 + positionY * 360}deg) scale(${0.5 + positionX * 0.5})`,
      borderRadius: `${50 + positionY * 50}% 0 ${50 + positionX * 50}% 50%`
    }
    Object.assign(b.style, style)
    b.style.setProperty('--color', `hsl(${Math.floor(color)}, 60%, 50%)`)
    positionX += 0.001
    positionY += 0.001

    if(positionX > 5)
    {
        positionX = 1
    }

    if(positionY > 5)
    {
        positionY = 1
    }
  })
  setTimeout(function(){ //throttle requestAnimationFrame to 20fps
        requestAnimationFrame(animate)
    }, 1000/40)
}
animate()
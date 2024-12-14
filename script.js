function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.width = `${Math.random() * 50 + 20}px`;
    firework.style.height = firework.style.width;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.body.appendChild(firework);

    // Remove the firework after the animation ends
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// Create fireworks at random positions
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createFirework(x, y);
}, 500);function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.width = `${Math.random() * 50 + 20}px`;
    firework.style.height = firework.style.width;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    document.body.appendChild(firework);

    // Remove the firework after the animation ends
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// Create fireworks at random positions
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createFirework(x, y);
}, 500);
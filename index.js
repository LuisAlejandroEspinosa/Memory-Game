const emojis = ["😍", "😍", "😉", "😉", "😂", "😂", "😎", "😎", "🥴", "🥴", "😁", "😁", "🫡", "🫡", "🤤", "🤤"];

// Mezcla los emojis de manera aleatoria
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(emojis);

const container = document.querySelector('.container .game');
let openBoxes = [];

emojis.forEach((emoji, index) => {
    let box = document.createElement('div');
    box.classList.add('item');

    box.onclick = (e) => {
        if (!box.classList.contains('boxMatch') && openBoxes.length < 2) {
            box.classList.add('boxOpen');
            openBoxes.push(box);

            if (openBoxes.length === 2) {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes.forEach((openBox) => {
                        openBox.classList.add('boxMatch');
                    });

                    openBoxes = [];

                    const matchedBoxes = document.querySelectorAll('.boxMatch');
                    if (matchedBoxes.length === emojis.length) {
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000); // Recarga la página después de 1 segundo
                    }
                } else {
                    setTimeout(() => {
                        openBoxes.forEach((openBox) => {
                            openBox.classList.remove('boxOpen');
                        });
                        openBoxes = [];
                    }, 500); // Cierra las cartas abiertas después de 0.5 segundos
                }
            }
        }
    };

    box.innerHTML = emoji;
    container.appendChild(box);
});

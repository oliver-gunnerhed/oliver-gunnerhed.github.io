let selected_options = [];

const allFakeButtons = document.querySelectorAll('.tillagg')
const colors = document.querySelectorAll('.colorbtn')
const magnets = document.querySelectorAll('.magnetbtn')
const tyres = document.querySelectorAll('.tyrebtn')
const forhandsvisa = document.querySelector('.forhandsvisa')
const flightmode = document.querySelector('.flightmode')
const defaultOptions = document.querySelectorAll('.selected')
let image = document.querySelector('.preview img')

let forhandsvisar = false;

defaultOptions.forEach(btn => {
    selected_options.push(btn.getAttribute('data-name'))
    console.log(selected_options)
})

changeImage()

allFakeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('selected2')) {
            btn.classList.remove('selected2')
        } else {
            btn.classList.add('selected2')
        }
    })
})

forhandsvisa.addEventListener('click', function () {
    if (forhandsvisar) {
        forhandsvisar = false;
        changeImage()
    } else {
        forhandsvisar = true;
        image.src = 'images/KonfigBilder/RÖD PREFIRMANCEW.png'
    }
});

// flightmode.addEventListener('click', function () {
//     image.src='images/KonfigBilder/0001-0250.gif'
// });

// For loopa
colors.forEach(btn => {
    btn.addEventListener('click', function () {
        selected_options = selected_options.filter(val => val !== document.querySelector('.color .selected').getAttribute("data-name"))
        document.querySelector('.color .selected').classList.remove('selected');
        this.classList.add('selected');
        selected_options.push(this.dataset.name)
        changeImage()
    });
})

magnets.forEach(btn => {
    btn.addEventListener('click', function () {
        selected_options = selected_options.filter(val => val !== document.querySelector('.magnet .selected').getAttribute("data-name"))
        document.querySelector('.magnet .selected').classList.remove('selected');
        this.classList.add('selected');
        selected_options.push(this.dataset.name)
        changeImage()
    });
})

tyres.forEach(btn => {
    btn.addEventListener('click', function () {
        selected_options = selected_options.filter(val => val !== document.querySelector('.tyre .selected').getAttribute("data-name"))
        document.querySelector('.tyre .selected').classList.remove('selected');
        this.classList.add('selected');
        selected_options.push(this.dataset.name)
        changeImage()
    });
})


function changeImage() {
    if (selected_options.includes('red') && selected_options.includes('liten-magnet') && selected_options.includes('arachnid')) {
        image.src = 'images/KonfigBilder/RÖDW.png';
    } else if (selected_options.includes('blue') && selected_options.includes('liten-magnet') && selected_options.includes('arachnid')) {
        image.src = 'images/KonfigBilder/BLÅW.png';
    } else if (selected_options.includes('red') && selected_options.includes('stor-magnet') && selected_options.includes('arachnid')) {
        image.src = 'images/KonfigBilder/RÖD STORW.png';
    } else if (selected_options.includes('blue') && selected_options.includes('stor-magnet') && selected_options.includes('arachnid')) {
        image.src = 'images/KonfigBilder/BLÅ STORW.png';
    } else if (selected_options.includes('red') && selected_options.includes('liten-magnet') && selected_options.includes('chrome')) {
        image.src = 'images/KonfigBilder/RÖD CROMW.png';
    } else if (selected_options.includes('blue') && selected_options.includes('liten-magnet') && selected_options.includes('chrome')) {
        image.src = 'images/KonfigBilder/BLÅ CHROMW.png';
    } else if (selected_options.includes('red') && selected_options.includes('stor-magnet') && selected_options.includes('chrome')) {
        image.src = 'images/KonfigBilder/RÖD STOR CROMW.png';
    } else if (selected_options.includes('blue') && selected_options.includes('stor-magnet') && selected_options.includes('chrome')) {
        image.src = 'images/KonfigBilder/BLÅ STOR CHROMW.png';
    }
}

/* 
Röd färg, liten magnet, arachnid-fälgar
Blå färg, liten magnet, arachnid-fälgar
Röd färg, stor magnet, arachnid-fälgarr
Blå färg, stor magnet, arachnid-fälgar
Röd färg, liten magnet, chrome-fälgar
Blå färg, liten magnet, chrome-fälgar
Röd färg, stor magnet, chrome-fälgar
Blå färg, stor magnet, chrome-fälgar
*/
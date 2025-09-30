const id = window.location.search.split('=')[1]

let data = JSON.parse(localStorage.getItem('datas'))[id]

function getTechLabel(tech) {
    switch (tech) {
        case 'node-js':
            return 'Node Js'
        case 'react':
            return 'React Js'
        case 'n':
            return 'Next Js'
        case 't':
            return 'TypeScript'
    }
}

document.getElementById('title').innerText = data.title
document.getElementById('description').innerText = data.description
document.getElementById('date').innerText = `${data.startDate.reverse().join('/')} - ${data.endDate.reverse().join('/')}`
data.technologies.split(',').forEach(tech => {
    document.getElementById('technologies').innerHTML += `
        <div class="d-flex align-items-center gap-1 mb-2">
            <i class="fa-brands fa-${tech} fa-lg"></i>
            <p class="m-0">${getTechLabel(tech)}</p>
        </div>
    `
})
document.getElementById('duration').innerText = data.duration + ' bulan'
document.getElementById('image').src = data.image
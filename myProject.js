const form = document.getElementById("projectForm")

form.addEventListener("submit", function () {
    let title = document.getElementById("projectName").value
    let startDate = document.getElementById("startDate").value.split('-')
    let endDate = document.getElementById("endDate").value.split('-')
    if (startDate >= endDate) {
        return alert("Tanggal akhir harus lebih besar dari tanggal mulai")
    }
    let duration = (endDate[0] - startDate[0]) * 12 + (endDate[1] - startDate[1])
    let technologies = ''
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        if (checkbox.value == '') technologies += technologies == '' ?  checkbox.id : `,${checkbox.id}`
    })
    let description = document.getElementById("description").value
    let image = document.getElementById("image").files[0]
    const fr = new FileReader()
    fr.readAsDataURL(image)
    fr.onload = function () {
        image = fr.result
    }

    let datas = JSON.parse(localStorage.getItem("datas")) || []
    datas.push({ id: datas.length, title, startDate, endDate, duration, description, technologies, image })
    localStorage.setItem("datas", JSON.stringify(datas))

    alert("Project berhasil ditambahkan")
})

let datas = JSON.parse(localStorage.getItem('datas')) || []

if (datas.length !== 0) datas.forEach(data => {
    document.getElementById('container').innerHTML += `
    <div class="card" style="width: 18rem;">
                <img class="h250px" src="${data.image}"
                    class="card-img-top" alt="Coding 1">
                <div class="card-body">
                    <a href="detailProject.html?id=${data.id}"><h5 class="card-title fw-bold mb-0">${data.title}</h5></a>
                    <p class="text-gray mb-2">durasi : ${data.duration} bulan</p>
                    <p class="card-text">${data.description}</p>
                    <div class="d-flex my-4 gap-1" id="icon">
                        ${data.technologies.split(',').map(tech => `<i class="fa-brands fa-${tech} fa-lg"></i>`).join('')}
                    </div>
                    <div class="d-flex gap-1">
                        <a href="#" class="btn btn-dark flex-grow-1">edit</a>
                        <a href="#" class="btn btn-dark flex-grow-1">delete</a>
                    </div>
                </div>
            </div>
    `
})
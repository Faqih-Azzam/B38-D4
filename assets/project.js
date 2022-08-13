let postProject = []

function addPost(event) {
    event.preventDefault()

    let name = document.getElementById("name").value     
    let desc = document.getElementById("desc").value    
    let image = document.getElementById("file").files   
    let html = document.getElementById("html").checked    
    let js = document.getElementById("js").checked    
    let css = document.getElementById("css").checked    
    let node = document.getElementById("node").checked  
    
    image = URL.createObjectURL(image[0])

    let post = {
        name,
        desc,
        image,
        html,
        js,
        css,
        node
    }

    postProject.push(post)
    renderPost()
}

function renderPost() {
    document.getElementById("project-post").innerHTML = ``

    console.log(postProject);

    for (let i = 0; i < postProject.length; i++) {
        document.getElementById("project-post").innerHTML += `
            <div class="head-post">
                <div class="post">
                    <a href="detail-project.html">
                        <div class="gambar">
                            <img class="img" src="${postProject[i].image}" alt="">
                        </div>
                        <h2>${postProject[i].name}</h2>
                    </a>
                    <p class="duration">Durasi : 3 Bulan</p>
                    <div class="description">
                        <p>${postProject[i].desc}</p>
                    </div>
                    <div id="icon" class="icon">
                        ${postProject[i].html?`<i class="fa-brands fa-html5 fa-2x html"></i>` : ""}
                        ${postProject[i].css?`<i class="fa-brands fa-css3 fa-2x css">` : ""}</i>
                        ${postProject[i].js?`<i class="fa-brands fa-js fa-2x js">` : ""}</i>
                        ${postProject[i].node?`<i class="fa-brands fa-node-js fa-2x node">` : ""}</i>
                    </div>
                    <div class="upload">
                        <button type="button" class="edit">Edit</button>
                        <button type="button" class="delete">Delete</button>
                    </div>
                </div>
            </div>
        `
    }
}
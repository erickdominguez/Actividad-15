const lista=document.getElementById("lista");
const url="https://jsonplaceholder.typicode.com/photos";


    fetch(url)
        .then(response=>response.json())
        .then(posts=>{
            posts.map(post1 =>{
                var li = document.createElement('li');
                li.innerHTML=`<a href="detalle.html?id=${post1.id}"> ${post1.id}</a> ${post1.title}`
                lista.appendChild(li);
            })
        })
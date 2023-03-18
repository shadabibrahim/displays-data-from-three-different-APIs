
function promiseStart() {
    setTimeout( promiseAPI1(),1000);
    setTimeout(promiseAPI2(),2000);
    setTimeout( promiseAPI3(),3000);
   
    
}

function promiseAPI1() {
    fetch("https://dummyjson.com/posts").then((data) => {
        return data.json();
    }).then((objectData) => {
        let tableData = "";
        // console.log(objectData.posts[0]);
        objectData.posts.map((values) => {
            tableData += `<tr>
             <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.body}</td>
            <td>${values.userId}</td>
            <td>${values.tags}</td>
            <td>${values.reactions}</td>
        </tr>`
        });
        document.getElementById("table_body1").
            innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    })
}
function promiseAPI2() {
    let promise2 = fetch("https://dummyjson.com/products").then((data) => {
        return data.json();
    })

    promise2.then((objectData) => {
        let tableData = "";
        objectData.products.map((values) => {
            tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td>${values.discountPercentage}</td>
            <td>${values.rating}</td>
            <td>${values.stock}</td>
            <td>${values.brand}</td>
            <td>${values.category}</td>
             <td><img src="${values.thumbnail}"/></td>
            </tr>`

        })
        document.getElementById("table_body2").
        innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    })
}

function promiseAPI3() {
    let promise3 = fetch("https://dummyjson.com/todos").then((data) => {
        return data.json();
    })
    promise3.then((objectData) => {
        let tableData = "";
        objectData.todos.map((values) => {
            tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.todo}</td>
            <td>${values.completed}</td>
            <td>${values.userId}</td>
            </tr>`
        })
        document.getElementById("table_body3").
        innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    })
}



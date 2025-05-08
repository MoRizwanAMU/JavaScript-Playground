const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise (function ( resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject (new Error("something went wrong"));
            }
            xhr.onerror = function () {
                reject (new Error ("something went wrong"));
            }
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
// its all chaining
    .then(response => {
        const data =  JSON.parse(response);
        // console.log(data);
        return data;
    })
      .then(data => {
        console.log(data);
        // if i want to see third index id
        // console.log(data[3].id);
        const id = data[3].id;
        return id;
    })
     .then(id=> {
            const url = `${URL}/${id}`;
            return sendRequest("GET", url);     
     })
     .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
     })
     // isi tarah chaining kar sakte hai
     // if error
     .catch ( error => {
        console.log(error);
     })
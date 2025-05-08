// fetch

// get means dataRead
// post means dataCreate

const URL = "https://jsonplaceholder.typicode.com/posts";

// const whatIsThis = fetch(URL);
// console.log(whatIsThis);    // fetch returning promise so i can use .then

fetch(URL, fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }) ) 

    .then( itsGiveResponse => {
        // console.log(itsGiveResponse);
        if (itsGiveResponse.ok) {
            return itsGiveResponse.json();
        }
        else {
            throw new Error("something went wrong");
        }
       // return (itsGiveResponse.json());       // it will be parse json
    })
    .then (itsGiveData => {
        console.log(itsGiveData);
    })
    .catch (error => {
        console.log("inside catch");
        console.log(error);
    })


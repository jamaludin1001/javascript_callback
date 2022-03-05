
function getData(url, cb) {
    let xhr = new XMLHttpRequest();
   
    xhr.onload = function () {
      if (xhr.status === 200) {
        return cb(JSON.parse(xhr.responseText));
      }
     
       };
        xhr.open("GET", url);
        xhr.send();
       
      }
      let table = "";
      table += `("<tr>","https://jsonplaceholder.typicode.com/users" )`;
      table.innerHTML=""
  const data = getData("https://jsonplaceholder.typicode.com/users", function(data) {
      console.log(data);
       
  });
  
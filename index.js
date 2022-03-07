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

  const data = getData("https://jsonplaceholder.typicode.com/users/", function(data) {
  
  let tbody = document.getElementById("tbody");

    data.map((d)=>{
     table=`
         <tr> 
        <td> ${d.id} </td> 
        <td> ${d.name} </td> 
        <td> ${d.username} </td> 
        <td> ${d.email} </td> 
        <td> ${d.address.street} ${d.address.suite} ${d.address.city}
         ${d.address.zipcode} ${d.address.geo.lat} ${d.address.geo.lng}  </td>
        <td> ${d.company.name} ${d.company.catchPhrase}  ${d.company.bs}       </td>
        </tr> `
        tbody.innerHTML+= table;
    });
  });
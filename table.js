// let data=[
//    { 
//     name:"chirag",
//     age:22,
//     email:"chirag@gmail.com",
//     phone:74108520,
//     house:4
//    },
//    {
//     name:"ravikesh",
//     age:27,
//     email:"keshg@gmail.com",
//     phone:7410852055,
//     house:50
//    },
//    {
//     name:"ravikesh",
//     age:27,
//     email:"keshg@gmail.com",
//     phone:7410852055,
//     house:30
//    }
// ]
// function readata(){
//     let m = document.querySelector("#sg")
//     let k = " "
//     data.map(l =>(k += <tr>
//         <td>${l.name}</td>
//         <td>${l.age}</td>
//         <td>${l.email}</td>
//         <td>${l.phone}</td>
//         <td>${l.house}</td>
//     </tr>))
//     m.innerHTML= k
    
// }
// Sample data object
const data = [
    {name:"chirag",
        age:22,
        email:"chirag@gmail.com",
        phone:74108520,
        house:80
    },
    
    {name:"rag",
        age:20,
        email:"crag@gmail.com",
        phone:74108520,
        house:80
    },
    {name:"rag",
        age:20,
        email:"crag@gmail.com",
        phone:74108520,
        house:80
    },{name:"rag",
        age:20,
        email:"crag@gmail.com",
        phone:74108520,
        house:80
    },{name:"rag",
        age:20,
        email:"crag@gmail.com",
        phone:74108520,
        house:80
    },{name:"rag",
        age:20,
        email:"crag@gmail.com",
        phone:74108520,
        house:80
    },{name:"rag",
        age:20,
        email:"crag@gmail.com",
        phone:74108520,
        house:80
    },
  ];
  
  // Function to populate the table with data
  function readata() {
    const tbody = document.getElementById("sg");
    
    // Clear existing table rows
    tbody.innerHTML = "";
    
    // Iterate over the data objects and create table rows
    data.forEach(item => {
      const row = `
        <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
          <td>${item.house}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }
  
  // Call the readata function when the page loads
  window.onload = readata;
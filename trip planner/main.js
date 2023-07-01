const form = document.getElementById("myform");
const handleSubmit = (e) => {
  e.preventDefault();
  const days = document.getElementById("days").value;
  const destination = document.getElementById("destination").value;

  const get = async () => {
    const url = `https://ai-trip-planner.p.rapidapi.com/?days=${days}&destination=${destination}`;
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '53b47c47b7mshb86f9b72dbb968dp12a7f8jsn418eef1bef94',
    'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      // for(i=0;i<days;i++){
      //   document.getElementById('result').innerHTML=`Day ${result.plan[i].day} :`;
      //   let actarr= result.plan[i].activities;
      //   for(j=0;j<(actarr.length-1);j++){
      //     document.getElementById('inner').innerHTML=`<li>result.plan[${i}].activities[${j}].time
      //     <ul><li>result.plan[${i}].activities[${j}].description</li></ul>
      //     </li>`
      //   }
      // }



      result.plan.map((cval) =>{
          // document.getElementById('tbl1').innerHTML+= ``
          cval.activities.map((newval)=>{

            document.getElementById('tbl1').innerHTML+=
            // `
               
            //    <li>${newval.time}</li>
            //    <p>${newval.description}</p>
            
            // `
            `
            <tr>
            <td>${cval.day}</td>
            <td>${newval.time}</td>
            <td>${newval.description}</td></tr>
            
            `
          })
      })
    } catch (error) {
      console.error(error);
    }
  };
  get();
};
form.addEventListener("submit", handleSubmit);
// ${cval.activities[0].time} and ${cval.activities[0].description} and ${cval.day}
// result.plan[0].activities.map((cval) => {
//   document.getElementById(
//     "result"
//   ).innerHTML += `${cval.day}<br>${cval.activities.time}<br>${cval.activities.description}` 
//   // `
//   //   <li><h3>Day ${cval.day}:</h3>
//   //   </li>
//   //   `;
// });
// // result.plan[0].activities.map((c) => {
// //   document.getElementById(
// //     "activities"
// //   ).innerHTML += `
// //       <li><h3>${c.time}:</h3>
// //       </li>
// //       <li><h5>${c.description}:</h5>
// //       </li>
// //     `;
// // });


// for(int i=0;)
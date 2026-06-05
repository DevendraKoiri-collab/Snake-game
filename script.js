// console.log("hello");
// let tm=setInterval(function()
// {
//     console.log("hello it is running after 2 sec");
// },2000);

// let tmc=setTimeout(function()
// {
//     alert("hello it is running after 2 sec");
// },2000);

// clearInterval(tm);
// clearTimeout(tmc);

// let clock=document.querySelector(".stopwatch");
// let count=10;
// let tm=setInterval(function()
// {
//       count--;
//        clock.textContent=count;
//     if(count==0)
//     {
//         clearInterval(tm);
//     }
// },1000);


















////// GlassMorphism Downloading////////////////



// let count=0;
// let second=3;
// let progress=document.querySelector(".progress");
// let percent=document.querySelector(".percent");
// let downloaded=document.querySelector("h2");
// let status=document.querySelector(".status");

// let timeint=setInterval(function()
// {
//     count++;
//    progress.style.width = count+"%";
//    percent.textContent=count+"%";
   
//     if(count==100)
//     {
//        downloaded.textContent=" ";
//        status.textContent="Downloaded succesfully";
//         clearInterval(timeint)

//     }
    

// },(second*1000)/100);







//auto hide alert banner after 3 seconds
 let second=3000;
 let form=document.querySelector("form");
 let alertBox = document.querySelector(".success-alert");
 form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    alertBox.style.display = "flex";

    setTimeout(function() {
        alertBox.style.display = "none";
    }, second);
});

let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function() {
    alertBox.style.display = "none";
});
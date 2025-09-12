
function getElement(id){
    const element = document.getElementById(id);
    return element;
}
// call button work
getElement("service-box").addEventListener('click', function(e){
    if(e.target.className.includes("click-call")){
        // console.log("second click");
        const targetBtn = e.target;
        const serviceTitle = targetBtn.parentNode.parentNode.children[1].children[0].innerText;
        const serviceNumber = targetBtn.parentNode.parentNode.children[1].children[2].innerText;
        const totalCoin = getElement("total-coin").innerText;
        
        // console.log(serviceTitle);
        if(totalCoin <= 0){
            alert("আপনার কল করার জন্য পর্যাপ্ত coin নেই।")
        } 
        else {
            alert(`📞 Calling ${serviceTitle}  ${serviceNumber}`);

            const currentCoin = Number(totalCoin) - 20;
            getElement("total-coin").innerText = currentCoin;
            // console.log(currentCoin);

            //call history show
            let now =new Date();
            let localTime = now.toLocaleDateString();

            console.log(localTime);
            const callContainer = getElement("cart-container");
            const newCallAdd = document.createElement("div");
            newCallAdd.innerHTML = ` 
            <div class="bg-[#FAFAFA] flex justify-between items-center font-hind-madurai text-lg text-black-500 p-4 mb-2"> 
                <div>
                    <p class="">${serviceTitle}</p>
                    <p class="text-gray-500">${serviceNumber}</p>
                </div>
                <div>
                    <p>${localTime}</p>
                </div>
                 
            </div>
            `;  
            callContainer.append(newCallAdd);
        }
    }
});

// heart count work
getElement("service-box").addEventListener('click', function(e){
    if(e.target.className.includes("click-copy")){
        // console.log("second click");
        const targetBtn = e.target;
        const serviceNumber = targetBtn.parentNode.parentNode.children[1].children[2].innerText;
        const totalCopy = getElement("total-copy").innerText;
        const currentCopy = Number(totalCopy) + 1;
        getElement("total-copy").innerText = currentCopy;
    }
    

})
// // heart count
// document.getElementById("click-heart").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart2").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart3").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart4").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart5").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart6").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart7").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart8").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })
// document.getElementById("click-heart9").addEventListener('click', function(e){
//     e.preventDefault()
//     //console.log("heart click")
//     const addHeartCount = document.getElementById('add-heartCount');
//     const countValue = parseInt(addHeartCount.innerText);

//     addHeartCount.innerText = countValue+1;
// })


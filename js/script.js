
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

// // call button function

// document.getElementById('click-call')
// .addEventListener('click', function(){
//     alert('📞 Calling জাতীয় জরুরি সেবা 999');
// })

// document.getElementById('click-call2')
// .addEventListener('click', function(){
//     alert('📞 Calling পুলিশ সেবা 999');
// })
// document.getElementById('click-call3')
// .addEventListener('click', function(){
//     alert('📞 Calling ফায়ার সার্ভিস 999');
// })
// document.getElementById('click-call4')
// .addEventListener('click', function(){
//     alert('📞 Calling অ্যাম্বুলেন্স 1994-999999');
// })
// document.getElementById('click-call5')
// .addEventListener('click', function(){
//     alert('📞 Calling নারী ও শিশু সহায়তা 109');
// })
// document.getElementById('click-call6')
// .addEventListener('click', function(){
//     alert('📞 Calling দুদক 106');
// })
// document.getElementById('click-call7')
// .addEventListener('click', function(){
//     alert('📞 Calling বিদ্যুৎ বিভ্রাট 16216');
// })
// document.getElementById('click-call8')
// .addEventListener('click', function(){
//     alert('📞 Calling ব্র্যাক 16445');
// })
// document.getElementById('click-call9')
// .addEventListener('click', function(){
//     alert('📞 Calling বাংলাদেশ রেলওয়ে 163');
// })
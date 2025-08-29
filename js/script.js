
// heart count
document.getElementById("click-heart").addEventListener('click', function(e){
    e.preventDefault()
    //console.log("heart click")
    const addHeartCount = document.getElementById('add-heartCount');
    const countValue = parseInt(addHeartCount.textContent);

    addHeartCount.textContent = countValue+1;
})


// call button function

document.getElementById('click-call')
.addEventListener('click', function(){
    alert('📞 Calling জাতীয় জরুরি সেবা 999');
})

document.getElementById('click-call2')
.addEventListener('click', function(){
    alert('📞 Calling পুলিশ সেবা 999');
})
document.getElementById('click-call3')
.addEventListener('click', function(){
    alert('📞 Calling ফায়ার সার্ভিস 999');
})
document.getElementById('click-call4')
.addEventListener('click', function(){
    alert('📞 Calling অ্যাম্বুলেন্স 1994-999999');
})
document.getElementById('click-call5')
.addEventListener('click', function(){
    alert('📞 Calling নারী ও শিশু সহায়তা 109');
})
document.getElementById('click-call6')
.addEventListener('click', function(){
    alert('📞 Calling দুদক 106');
})
document.getElementById('click-call7')
.addEventListener('click', function(){
    alert('📞 Calling বিদ্যুৎ বিভ্রাট 16216');
})
document.getElementById('click-call8')
.addEventListener('click', function(){
    alert('📞 Calling ব্র্যাক 16445');
})
document.getElementById('click-call9')
.addEventListener('click', function(){
    alert('📞 Calling বাংলাদেশ রেলওয়ে 163');
})
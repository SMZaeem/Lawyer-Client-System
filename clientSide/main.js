function hello(data){

 var mainDiv=document.getElementsByClassName('row d-flex justify-content-center') 

// var mainDiv2=document.getElementsByClassName('card p-3 py-4')
var mainDiv2=document.createElement('div')
mainDiv2.className="col-md-7"

var mainDiv3=document.createElement('div')
mainDiv3.className="card p-3 py-4"

var newDiv=document.createElement("div");
newDiv.className="text-center mt-3"

head=document.createElement('h5')
head.className="mt-2 mb-0"
head.innerHTML=data
newDiv.appendChild(head);



secondDiv=document.createElement("div")
secondDiv.className="px-4 mt-1"

para=document.createElement('p')
para.className="fonts"
para.innerHTML="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
secondDiv.appendChild(para)

newDiv.appendChild(secondDiv)



thirdDiv=document.createElement("div")
thirdDiv.className="buttons"

button1=document.createElement('button')
button1.className="btn btn-outline-primary px-4"
button1.innerHTML="Message"

button2=document.createElement('button')
button2.className="btn btn-primary px-4 ms-3"
button2.innerHTML="Contact"

thirdDiv.appendChild(button1)
thirdDiv.appendChild(button2)

newDiv.appendChild(thirdDiv)

mainDiv3.appendChild(newDiv);
mainDiv2.appendChild(mainDiv3)
mainDiv[0].appendChild(mainDiv2)
}


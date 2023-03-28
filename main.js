let obj={};
let userdata = [
 {
	     
		 "username": "Yuvan",
		 "email": "yuvan@gmail.com",
		 "phone": "9965168204",
		 "passwords": "45"
},
{	 
		
		 "username": "Arjun",
		 "email": "arjun@gmail.com",
		 "phone": "8838987597",
		 "passwords": "12"
		 
}];


let main = document.getElementById("temp");

let connect1 = [
       
{
	id: "link1",
	pic: "images/user-pic 1.jpg",
	name: "Arjun",
	position: "Full Stack Developer",
	company: "Techonology Solutions",
	btn:"Follow"
},						
{
	id: "link2",
	pic: "images/user-pic 1.jpg",
	name: "Kannan",
	position: "Full Stack Developer",
	company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link3",
	pic: "images/user-pic 1.jpg",
	name: "Dinesh",
	position: "Full Stack Developer",
    company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link4",
	pic: "images/user-pic 1.jpg",
	name: "Yuvan",
	position: "Full Stack Developer",
    company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link5",
	pic: "images/user-pic 1.jpg",
	name: "JaiSuriya",
	position: "Full Stack Developer",
	company: "Techonology Solutions",
	btn:"Follow"
},
{
	id: "link6",
	pic: "images/user-pic 1.jpg",
	name: "Santhosh",
	position: "Full Stack Developer",
    company: "Techonology Solutions",
	btn:"Follow"
	
},
]

    connect1.forEach(function(data,i){
		let mainTag = document.createElement("div");
		let bacTag = document.createElement("div");
		let imgTag = document.createElement("div");
		let textTag = document.createElement("div");
		let namTag = document.createElement("h2");
	    let posTag = document.createElement("h3");
	    let comTag = document.createElement("h3");
	    let btnTag = document.createElement("button");
		
		let picTag = document.createElement("img");
		
		
		
		
		mainTag.setAttribute("class", "main");
		bacTag.setAttribute("class", "background");
		imgTag.setAttribute("class", "profile");
        textTag.setAttribute("class", "content");
		mainTag.setAttribute("id",data.id);
		
		
		picTag.src = data.pic;
		
		
		namTag.innerText = data.name;
		posTag.innerText = data.position;
		comTag.innerText = data.company;
		btnTag.innerText = data.btn;
         
         
        		 
		textTag.append(namTag, posTag, comTag, btnTag);
		imgTag.appendChild(picTag);
		mainTag.append(bacTag, imgTag, textTag);
		main.appendChild(mainTag);
        		
		
		
		
		
		 

		

	 
	 
       



});

//sign in
document.getElementById("mainpage").style.display="block";
// document.getElementById("temp").style.display="none"
document.getElementById("register").style.display="none";
document.getElementById("login-page").style.display="none";
  
	//console.log(gmdata);
let signIn=document.getElementById("sign-in");

signIn.addEventListener("click",function(){
	
	
let emld = document.getElementById("uremail");
let gmdata = emld.value;
let pswd = document.getElementById("urpaswd");
let psdata = pswd.value;

for(x of userdata)
{
		if((x["email"] == gmdata) && (x["passwords"] == psdata))
		{
			
			
			
			document.getElementById("mainpage").style.display="block";
			document.getElementById("login-page").style.display="block";
			document.getElementById("main").style.display="none";
			document.getElementById("sign-in").style.display="none";
			document.getElementById("register").style.display="none";
			document.getElementById("login").style.display="none";
			
			
			
		}
		else {
			alert("Please enter a valid email address");
			emld.value="";
		}
		
}
        
});

//sign up
let mainsignup=document.getElementById("main-signup");
let signUp = document.getElementById("sign-up");

mainsignup.addEventListener("click",function(){

		  document.getElementById("register").style.display="block";
		  document.getElementById("mainpage").style.display="block";
		  document.getElementById("welcome").style.display="none";
		  document.getElementById("signin").style.display="none";

signUp.addEventListener("click",function(){
	
	let usrname = document.getElementById("usname");
	let emailId = document.getElementById("email");
	let phNum = document.getElementById("phnumber");
	let passwrd = document.getElementById("paswd");
	let conformpasswords = document.getElementById("conformpaswd");
	
	
    let namedata = usrname.value;
	let emaildata = emailId.value;
	let phnumdata = phNum.value;
	let paswddata = passwrd.value;
	let confrmdata = conformpasswords.value;
	
	
	
	
	   if((paswddata!='')&& (namedata!='')&&(emaildata!='')&&(phnumdata!='')&&(confrmdata!=''))
	   {

		  if((paswddata===confrmdata))
		   {
			   
		  
			obj.username = namedata; 	
			obj.email = emaildata;
			obj.phonenumber = phnumdata;
			obj.passwords= paswddata;
			obj.conformpassword = confrmdata;
			userdata.push(obj);
			
		   usrname.value="";
		   emailId.value="";
		   phNum.value="";
		   passwrd.value="";
		   conformpasswords.value="";
		   }
         else{
			 alert('not correct pass');
			 conformpasswords.value="";
             			 
	   }
		
	  
	   }
	    else {
		    
		   alert("Enter the fields");
		 
	   }
	   
	   
	   
		
	
	     
	
	    
	   
	 
	    document.getElementById("sign-up").style.display="block";
	   
});
		document.getElementById("main").style.display="none"; 
		document.getElementById("mainpage").style.display="block";
	 
});	

       
	  




//  circleslist  =  document.querySelectorAll(".circle");
let column1  =  document.querySelectorAll("span.column1");
let column2  =  document.querySelectorAll("span.column2");
let column3  =  document.querySelectorAll("span.column3");
let column4  =  document.querySelectorAll("span.column4");
let player1 = document.querySelector(".player1");
let player2 =document.querySelector(".player2");
let target =[];
let row1  =  document.querySelectorAll(".row1");
let row2  =  document.querySelectorAll(".row2");
let row3 =  document.querySelectorAll(".row3");
let row4  =  document.querySelectorAll(".row4");
let restart= document.querySelector(".section1");

let di1=document.querySelectorAll(".di1");
let di2=document.querySelectorAll(".di2");
let columnCounter1=3;
let columnCounter2=3;
let columnCounter3=3;
let columnCounter4=3;
 
// let x,y;
// let circle = [...circleslist ];
let Tie;

let culumn1arry= [...column1];
let culumn2arry= [...column2];
let culumn3arry= [...column3];
let culumn4arry= [...column4];
let row1arry=[...row1];
let row2arry=[...row2];
let row3arry=[...row3];
let row4arry=[...row4];
let di1arry=[...di1];
let di2arry=[...di2];
let circle =  [...column1,...column2,...column3,...column4];
  circles=document.querySelector("#circlesList");
      
let count=0
let pleyer =1;
 let rows;
let Trim;

  
function Responsclick(evet){
  Trim = evet.target;
 /// function  column1check  (Trim){   
  if (columnCounter1<4 && columnCounter1 >=0)
 {     if(evet.target.matches('span.column1') ){
      
     
     
       if(pleyer==1){   
               
        culumn1arry[columnCounter1].classList.add("player1");
                 pleyer=0;
                 columnCounter1--;
               console.log("redcolor");
               checkWin()             
 }  
              
else  if(pleyer==0){   
  culumn1arry[columnCounter1].classList.add("player2")
          pleyer=1;
          columnCounter1--;
          checkWin()
} 
}}
if (columnCounter2<4 && columnCounter2 >=0)
  if(evet.target.matches('span.column2') ){
     
     
     
       if(pleyer==1){   
               
        culumn2arry[columnCounter2].classList.add("player1");
                 pleyer=0;
                 columnCounter2--;
               console.log("redcolor");
               checkWin()

             
 }  
              
else  if(pleyer==0){

 
  culumn2arry[columnCounter2].classList.add("player2") 
          pleyer=1;
          columnCounter2--;
          checkWin()

  }  

  } if (columnCounter3<4 && columnCounter3 >=0) 
  if(evet.target.matches('span.column3') ){
      
     
     
    if(pleyer==1){   
            
     culumn3arry[columnCounter3].classList.add("player1");
              pleyer=0;
              columnCounter3--;
            console.log("redcolor");
            checkWin()

          
}  
           
else  if(pleyer==0){
       
  


  
culumn3arry[columnCounter3].classList.add("player2")
       pleyer=1;
       columnCounter3--;
       checkWin()




} 
}if (columnCounter4<4 && columnCounter4 >=0)
if(evet.target.matches('span.column4') ){
      
    
     
  if(pleyer==1){   
          
    culumn4arry[columnCounter4].classList.add("player1");
            pleyer=0;
            columnCounter4--;
          console.log("redcolor");
          checkWin()

          
        
}  
         
else  if(pleyer==0){
     




culumn4arry[columnCounter4].classList.add("player2")
     pleyer=1;
     columnCounter4--;
     checkWin()



} 
}   
}
//check if we have a winner 

let checkWin = function()
{
  let count1r=0, count1b=0 , count2r=0,count2b=0,count3r=0,count3b=0, count4r=0 ,count4b=0;

  let countrow1r=0, countrow1b=0,countrow2r=0,countrow2b=0,countrow3r=0,countrow3b=0,countrow4r=0,countrow4b=0;
  let countdi1r=0,countdi1b=0,countdi2r=0,countdi2b=0;
for (let i = 0 ; i < culumn1arry.length ; i++)
{
  if (culumn1arry[i].classList.contains("player1"))
       count1r++;
  if (culumn1arry[i].classList.contains("player2"))
       count1b++;
}
if(count1r==4)  
{  alert("player1 wins")
location.reload();}
else if (count1b == 4)
{alert("player2 wins")
location.reload();
}

/////////column 2
for (let i = 0 ; i < culumn1arry.length ; i++)
{
  if (culumn2arry[i].classList.contains("player1"))
       count2r++;
  if (culumn2arry[i].classList.contains("player2"))
       count2b++;
}
if(count2r==4)  
{  alert("player1 wins")
location.reload();
}else if (count2b == 4)
{alert("player2 wins")
location.reload();
}

/////////////////////column3
for (let i = 0 ; i < culumn3arry.length ; i++)
{
  if (culumn3arry[i].classList.contains("player1"))
       count3r++;
  if (culumn3arry[i].classList.contains("player2"))
       count3b++;
}
if(count3r==4)  
 { alert("player1 wins")
 location.reload();
}
else if (count3b == 4)
{alert("player2 wins")
location.reload();
}

///////////////////////column4
for (let i = 0 ; i < culumn4arry.length ; i++)
{
  if (culumn4arry[i].classList.contains("player1"))
       count4r++;
  if (culumn4arry[i].classList.contains("player2"))
       count4b++;
}
if(count4r==4)  
  {setTimeout( function(){ alert("player1 wins") ; location.reload(); },500 ) 
 
}
else if (count4b == 4)
{setTimeout( function(){ alert("player2 wins") ; location.reload(); },500 ) 
 
}

/////////////////////row1
for (let i = 0 ; i < row1arry.length ; i++)
{
  if (row1arry[i].classList.contains("player1"))
  countrow1r++;
  if (row1arry[i].classList.contains("player2"))
  countrow1b++;
}
if(countrow1r==4)  
{  alert("player1 wins")
location.reload();
}
else if (countrow1b == 4)
{alert("player2 wins")
location.reload();
}

///////////////////////row2
for (let i = 0 ; i < row2arry.length ; i++)
{
  if (row2arry[i].classList.contains("player1"))
  countrow2r++;
  if (row2arry[i].classList.contains("player2"))
  countrow2b++;
}
if(countrow2r==4)  
  {alert("player1 wins")   
 location.reload();
}
else if (countrow2b == 4)
{alert("player2 wins")   
location.reload();
}
///////////////////////row3
for (let i = 0 ; i < row3arry.length ; i++)
{
  if (row3arry[i].classList.contains("player1"))
  countrow3r++;
  if (row3arry[i].classList.contains("player2"))
  countrow3b++;
}
if(countrow3r==4)  
 { alert("player1 wins")
 location.reload();
}
else if (countrow3b == 4)
{alert("player2 wins")
location.reload();

}



///////////////////////row4

for (let i = 0 ; i < row4arry.length ; i++)
{
  if (row4arry[i].classList.contains("player1"))
  countrow4r++;
  if (row4arry[i].classList.contains("player2"))
  countrow4b++;
}
if(countrow4r==4)  
  {alert("player1 wins")   
  location.reload();
}
else if (countrow4b == 4)
{alert("player2 wins")    

location.reload();

}

///////////////////////di1
for (let i = 0 ; i < row4arry.length ; i++)
{
  if (di1arry[i].classList.contains("player1"))
  countdi1r++;
  if (di1arry[i].classList.contains("player2"))
  countdi1b++;
}
if(countdi1r==4)  
  {alert("player1 wins")   
  location.reload();
}
else if (countdi1b== 4)
{alert("player2 wins")    

location.reload();

}


///////////////////////di2
for (let i = 0 ; i < di2arry.length ; i++)
{
  if (di2arry[i].classList.contains("player1"))
    countdi2r++;
  if (di2arry[i].classList.contains("player2"))
  countdi2b++;
}
if(countdi2r==4)  
  {setTimeout( function(){ alert("player1 wins"); location.reload();      },500 )  
  
}
else if (countdi2b == 4)
{ setTimeout(  function(){ alert("player2 wins"); location.reload();   },500);  



}


///////////////////countall

 

 Tie =columnCounter1+columnCounter2+columnCounter3+columnCounter4;

 if(Tie==-4){   

  alert("your in tiee")
  
  
  }

}

 

  
restart.addEventListener("click",function(){

location.reload();
});
  



 
circles.addEventListener("click",Responsclick);
 
// if(circle[0].classList.("player1")) {
//   console.log("yes");}
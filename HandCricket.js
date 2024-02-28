//CoinToss Code 

function CoinToss(){
  let toss = Math.random();
  if(toss > 0 && toss <= 1/5){
    document.getElementById('id-100').innerHTML = `User Bowl First`;
  }
  else if(toss > 1/5 && toss <= 1){ 
    document.getElementById('id-100').innerHTML = `User Bat First`;
  }
}







  //Creating the Storage Center

   let storage = JSON.parse(localStorage.getItem('record'));
   if(storage === null){
    storage = {
      score:0,perscore:0,zero:0,one:0,two:0,three:0,four:0,five:0,six:0,Cscore:0,perCscore:0,Czero:0,Cone:0,Ctwo:0,Cthree:0,Cfour:0,Cfive:0,Csix:0,count:0
    }
   }


   function Reset(){
    storage = {
      score:0,perscore:0,zero:0,one:0,two:0,three:0,four:0,five:0,six:0,Cscore:0,perCscore:0,Czero:0,Cone:0,Ctwo:0,Cthree:0,Cfour:0,Cfive:0,Csix:0,count:0
    };
    localStorage.removeItem('record');
    perCscore();
SystemLiveScore();
SystemLiveStokes();
perUscore();
UserLiveRun();
UserLiveStokes();
Decision();
document.getElementById('id-100').innerHTML = `Toss again`;
   }




  function SystemPicking(variable){
        let result = '';
        const Systems = SystemPick();

        if(variable === 'Zero'){

            if(Systems !== 'Zero'){
                  result = Systems;
              }
            else if(Systems === 'Zero'){
             document.getElementById('id-03').innerHTML = `System Out`;
             
             systemout();
             Decision();
             
             
            }
                }
        else if(variable === 'One'){

            if(Systems !== 'One' && Systems !== 'Zero'){
              result = Systems;
            }
            else if(Systems ==='Zero'){
              result = variable;

            }
            else if(Systems === 'One'){
              document.getElementById('id-03').innerHTML = `System Out`;
              systemout();
              Decision();
              
            }

        }

        else if(variable === 'Two'){

          if(Systems !== 'Two' && Systems !== 'Zero'){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Two'){
            document.getElementById('id-03').innerHTML = `System Out`;
            systemout();
            Decision();
          }
        }
        else if(variable === 'Three'){

          if(Systems !== 'Three' && Systems !== 'Zero' ){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Three'){
            document.getElementById('id-03').innerHTML = `System Out`;
            systemout();
            Decision();
            
          }
        }
        else if(variable === 'Four'){

          if(Systems !== 'Four' && Systems !== 'Zero'){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Four'){
            document.getElementById('id-03').innerHTML = `System Out`;
            systemout();
            Decision();
           
          }
        }

        else if(variable === 'Five'){

          if(Systems !== 'Five' && Systems !== 'Zero'){
            result = Systems;
          }
          else if(Systems ==='Zero'){
            result = variable;

          }
          else if(Systems === 'Five'){
            document.getElementById('id-03').innerHTML = `System Out`;
            systemout();
            Decision();
          }
        }
        else if(variable === 'Six'){

            if(Systems !== 'Six' && Systems !== 'Zero'){
                result = Systems;
            }
            else if(Systems ==='Zero'){
              result = variable;

            }
            else if(Systems === 'Six'){
              document.getElementById('id-03').innerHTML = `System Out`;
              systemout();
              Decision();
              
            }
            
        }
        if(result === 'One'){
          storage.Cscore  += 1; 
          storage.Cone  += 1;
       }
       else if(result === 'Two'){
         storage.Cscore += 2;
         storage.Ctwo  += 1;
       }
       else if(result === 'Three'){
         storage.Cscore += 3;
         storage.Cthree  += 1;
       }
       else if(result === 'Four'){
         storage.Cscore += 4;
         storage.Cfour  += 1;
       }
       else if(result === 'Five'){
         storage.Cscore += 5;
         storage.Cfive  += 1;
       }
       else if(result === 'Six'){
         storage.Cscore += 6;
         storage.Csix  += 1;
       }


       localStorage.setItem('record',JSON.stringify(storage));
       document.getElementById('id-01').innerHTML = `User ${variable} ${Systems} System`;

       SystemLiveScore();
       SystemLiveStokes();
    
    }

       

   function SystemLiveScore(){
    document.getElementById('id-02').innerHTML = `Live  Total Run ${storage.Cscore}`;
  }
  
  function SystemLiveStokes(){
    document.getElementById('id-05').innerHTML = `Dot's:${storage.Czero} One's:${storage.Cone}
    Two's:${storage.Ctwo} Three's:${storage.Cthree} Four's:${storage.Cfour} Five's:${storage.Cfive} Six's: ${storage.Csix} `; 
  }
  
  
 

  function perCscore(){
    
     document.getElementById('id-04').innerHTML = `Final System Run: ${storage.perCscore}`;
    
  }
  
  function systemout(){
    
    let tempscore = storage.Cscore;
    storage.perCscore = storage.Cscore;
    storage.Cscore = 0;
    perCscore();
    
  }

  

  






  function UserPicking(variables){


   const Systems = SystemPick();

        let results = '';

        if(variables === 'Zero'){

          if(Systems !== 'Zero'){
            results = Systems;
          }
          else if(Systems === 'Zero'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
        
          }
        }

        else if(variables === 'One'){
          
          if(Systems !== 'One' ){
            results = variables;
          }
          else if(Systems === 'One'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
          }
        }

        else if(variables === 'Two'){
          
          if(Systems !== 'Two' ){
             results = variables;
          }
          else if(Systems === 'Two'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
          }
        }
        else if(variables === 'Three'){
          
          if(Systems !== 'Three' ){
             results = variables;
          }
          else if(Systems === 'Three'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
          }
        }
        else if(variables === 'Four'){
          
          if(Systems !== 'Four' ){
             results = variables;
          }
          else if(Systems === 'Four'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
          }

        }

        else if(variables === 'Five'){
          
          if(Systems !== 'Five' ){
             results = variables;
          }
          else if(Systems === 'Five'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
          }

        }
        else if(variables === 'Six'){
          
          if(Systems !== 'Six' ){
              results = variables;
          }
          else if(Systems === 'Six'){
          document.getElementById('id-13').innerHTML = `User \u{1F622} Out`;
          Userout();
          Decision();
          }
        }

        if(results === 'One'){
          storage.score  += 1;
          storage.one  += 1;
       }
       else if(results === 'Two'){
         storage.score += 2;
         storage.two += 1;
       }
       else if(results === 'Three'){
         storage.score += 3;
         storage.three  += 1;
       }
       else if(results === 'Four'){
         storage.score += 4;
         storage.four  += 1;
       }
       else if(results === 'Five'){
         storage.score += 5;
         storage.five  += 1;
       }
       else if(results === 'Six'){
         storage.score += 6;
         storage.six  += 1;
       }
       localStorage.setItem('record',JSON.stringify(storage));
       
       document.getElementById('id-10').innerHTML = `User ${variables} ${Systems} System`;

       UserLiveRun();
       UserLiveStokes();
       
}

function UserLiveRun(){
  document.getElementById('id-11').innerHTML = `Live  Total Run ${storage.score} `;
}

function UserLiveStokes(){
  document.getElementById('id-12').innerHTML = `Dot's:${storage.zero} One's:${storage.one}
   Two's:${storage.two} Three's:${storage.three} Four's:${storage.four} Five's:${storage.five} Six's: ${storage.six}`;
}
function Userout(){
    
  let tempscore = storage.score;
  storage.perscore = tempscore;
  storage.score = 0;
  perUscore();
  
}

function perUscore(){
  
  
  document.getElementById('id-14').innerHTML = `Final System Run: ${storage.perscore}`;
  
  }

 


 




  





  

  



function SystemPick(){
  let picking = '';

  const action = Math.random();

  if(action > 0 && action <= 1/7)
  {
    picking = 'Zero';
  }
  else if(action > 1/7 && action <= 2/7)
  {
    picking = 'One';
  }
  else if(action > 2/7 && action <= 3/7)
  {
    picking = 'Two';
  }
  else if(action > 3/7 && action <= 4/7)
  {
    picking = 'Three';

  }
  else if(action > 4/7 && action <= 5/7)
  {
    picking = 'Four';
  }
  else if(action > 5/7 && action <= 6/7)
  {
    picking = 'Five';
  }
  else if(action > 6/7 && action <= 1)
  {
    picking = 'Six';
  }

  return picking;
  
  
}






function Decision(){
  let diff = 0;
  let User = storage.perscore;
  let System = storage.perCscore;
  if(System !== 0 && User !==0){
    if(System > User){
       diff = System - User;
       storage.count = diff;
      document.getElementById('id-45').innerHTML = ` Result: System Won By ${storage.count} Run`;
      
    }
    else if(System < User){
      diff = User - System;
      storage.count = diff;
      document.getElementById('id-45').innerHTML = `Result: User Won \u{1F44d} By ${storage.count} Run`;
      
    }
    else if(System === User){
      document.getElementById('id-45').innerHTML = ` Result: Match Tie \u{1F648}`;
      
    }
  }
  else if(System === 0 && User ===0){
    document.getElementById('id-45').innerHTML = `Start Play \u{1F600}`;

  }
  else if(System ===0 && User !==0){
    document.getElementById('id-45').innerHTML = ` Result: Generating \u{1F914}....`;
  }
  else if(System !== 0 && User === 0){
    document.getElementById('id-45').innerHTML = ` Result: Generating \u{1F914}....`;
  }
  


}


// System Stable Visible Purpose Function Call
perCscore();
SystemLiveScore();
SystemLiveStokes();

//User Stable Visible  Purpose Function Call

perUscore();
UserLiveRun();
UserLiveStokes();
Decision();
CoinToss();
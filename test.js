const fs = require("fs");


fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const split = data.split(' ');
  for (let j = 0; j < split.length; j++) {
    split[j]=split[j].trim()
  }

  let tab =[];
  for (let i = 0; i < split.length; i++) {
    let sh = "";
    sh = split[i][0]  + split[i][9] + split[i].substr(1,8);
    tab.push(sh);
  }

  tab = tab.sort()
  let result = [];
  for (let k = 0; k < tab.length; k++) {
    let sh = "";
    sh = tab[k][0]  + tab[k].substr(2,9) + tab[k][1]  ;
    result.push(sh);

  
    
  }
  
  result = result.toString();
  result = result.replaceAll(',' , "\n")
  
  fs.writeFile("finalResult.txt", result, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      
    }
  });
   
  
 
  
   

});

























// const content ="gggggggggg";

// fs.writeFile('test.txt',content,err=>{
//     if(err){
//         console.err;
//         return;

//     }

// })

let string = "";                                    // Empty string to show results
let buttons = document.querySelectorAll("button");  // Creating variable of buttons

Array.from(buttons).forEach((button)=>{             // Creating array from buttons & applying for-each arrow function       
    button.addEventListener('click', (e)=>{         // Adding listener to click buttons

      if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'DEL'){
        string = "";
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'AC'){
        string = "";
        document.querySelector('input').value = string;
      }
      else{
      string = string + e.target.innerHTML;                  // Giving empty string a value   
      document.querySelector('input').value = string;        // connecting input & string to show reslut  
    }

    });
});

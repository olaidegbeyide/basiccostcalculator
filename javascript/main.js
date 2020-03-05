let btn = document.getElementById('input-btn');
let results = document.getElementById('result-input');

 btn.addEventListener('click', add);

 function add(){
     let userValue =  document.getElementById('form-input').value;
     if (userValue <= 0) {
         document.getElementById('result-input').value = 0;
     } else {
        let basePrice = 50;
        let userValue = document.getElementById('form-input').value;
        userValue = userValue * 60;
        let totalAmount = basePrice * userValue;
        totalAmount = totalAmount / 100;
        document.getElementById('result-input').value = totalAmount;
   
     }
    }
 

const results = document.getElementById('bmi-output');

function reset(){
    height.value='';
    weight.value='';
    results.innerHTML='';
    description.innerHTML='';
}
function calculate(){
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = ` Please Enter a Valid Height ${height}` ;
        } else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = ` Please Enter a Valid Weight ${weight}` ;
        } else{
            var bmi= (weight / ((height*height)/10000)).toFixed(2);
            results.innerHTML = `<span>Your Calculated BMI Is : ${bmi}</span>`;
        }

        const description= document.querySelector('#description');
        if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = ` Please Enter a Valid Height ${height}` ;
        } else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = ` Please Enter a Valid Weight ${weight}` ;
        } else{
            var bmi= (weight / ((height*height)/10000)).toFixed(2);
            results.innerHTML = `<span>Your Calculated BMI Is : ${bmi}</span>`;
        }
        if(height & weight)
        if(bmi<18.6){
            description.innerHTML="Your Calculated BMI says that you are UNDER WEIGHT";
        }
        else if(18.6 < bmi < 24.9){
            description.innerHTML=`Your Calculated BMI says that you are NORMAL`;
        }
        else{
            description.innerHTML=`Your Calculated BMI says that you are OVER WEIGHT`;
        }
    
}
const Form = document.querySelector("form")
Form.addEventListener('submit',function(e){
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    // console.log(height)
    const results = document.querySelector("#results");
    e.preventDefault()

    if (height == " " || height < 0 || isNaN(height) ){
        results.innerHTML = `please give a valid height ${height}`
    }

    else if (weight == " " || weight < 0 || isNaN(weight) ){
        results.innerHTML = `please give a valid weight ${weight}`
    }

    else{
        const bmi = ((weight) / ((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
    }
});
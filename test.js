
const cost = 0
const option=document.querySelector('.selfdrie');
    option.addEventListener('click' , () => {
        const driver=document.querySelector('.driver-noDisplay');
        if(driver.classList.length == 2){
            driver.classList.remove('active');
        }
        const selfdrive=document.querySelector('.selfdrie-noDisplay');
        selfdrive.classList.toggle('active');
        
    });
    const option1=document.querySelector('.driver');
    option1.addEventListener('click' , () => {


        const selfdrive=document.querySelector('.selfdrie-noDisplay');
        if(selfdrive.classList.length == 2){
            selfdrive.classList.remove('active');
        }
        const driver=document.querySelector('.driver-noDisplay');
        
        driver.classList.toggle('active');
        
        
    });

function showDropdown(opt){
    var drop = document.getElementById("dropdown")
    if(opt === 'opt1'){
        drop.innerHTML = `
        <select id = "select-menu">
            <option value = "default">-select-</option>
            <option value = "pulsar">Pulsar</option>
            <option value = "pulsar">activa</option>
            <option value = "pulsar">KTM</option>
            <option value = "pulsar">BMW</option>
            <option value = "pulsar">duke</option>
        </select>
        `
    }
    if(opt === 'opt2'){
        drop.innerHTML = `
        <select id = "select-menu">
            <option value = "default">-select-</option>
            <option value = "swift">brezza</option>
            <option value = "swift">swift</option>
            <option value = "swift">scorpio</option>
            <option value = "swift">duster</option>
            <option value = "swift">xuv 70</option>
        </select>
        `
    }
    if(opt === 'opt3'){
        drop.innerHTML = `
        <select id = "select-menu">
            <option value = "default">-select-</option>
            <option value = "bus">30 PAX</option>
            <option value = "bus">50 PAX</option>
            <option value = "bus">80 PAX</option>
            <option value = "bus">90 PAX</option>
            <option value = "bus">100 PAX</option>
        </select>
        `
    }
    if(opt === 'opt4'){
        drop.innerHTML = `
        <select id = "select-menu">
            <option value = "default">-select-</option>
            <option value = "swift1">brezza</option>
            <option value = "swift1">swift</option>
            <option value = "swift1">scorpio</option>
            <option value = "swift1">duster</option>
            <option value = "swift1">xuv 70</option>
        </select>
        `
    }
    const selected = document.getElementById("select-menu");
selected.addEventListener("change",()=>{
    if(selected.value === 'pulsar'){
        document.getElementById("img-holder").innerHTML = `<img src="bike.webp" alt="">`;
        document.getElementById("priceperhr").innerHTML = `<p>per hr price : 300 Rs/-</p>`;
        document.getElementById("numberofdrivers").innerHTML = `<input type="number" name="inp" id="noofhrs">`;
        cost = 300
    }
    if(selected.value === 'swift'){
        document.getElementById("img-holder").innerHTML = `<img src="car.jpg" alt=""> `;
        document.getElementById("priceperhr").innerHTML = `<p>per hr price : 700 Rs/-</p>`;
        document.getElementById("numberofdrivers").innerHTML = `<input type="number" name="inp" id="noofhrs">`;
        cost = 700
    }
    if(selected.value === 'bus'){
        document.getElementById("img-holder").innerHTML = `<img src="bus.jpeg" alt="">`;
        document.getElementById("priceperhr").innerHTML = `<p>per hr price : 1500 Rs/-</p>`;
        document.getElementById("numberofdrivers").innerHTML = `<input type="number" name="inp" id="noofhrs">`;
        cost = 1500
    }
    if(selected.value === 'swift1'){
        document.getElementById("img-holder").innerHTML = `<img src="car.jpg" alt="">`;
        document.getElementById("priceperhr").innerHTML = `<p>per hr price : 1000 Rs/-</p>`;
        document.getElementById("numberofdrivers").innerHTML = `<input type="number" name="inp" id="noofhrs">`;
        cost = 1000
    }
    
    
});
}


const submit=document.getElementById("sumbit");
submit.addEventListener("click",()=>{
    
 
});





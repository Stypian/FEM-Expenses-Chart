onload = function() {

    let test = document.querySelector(".exp-chart__balance-heading");
    
    function addGraphExpenses() {
        setTimeout(() => {
            for (let i = 0; i < daysArr.length; i++) {
                document.querySelectorAll(".exp-chart__column")[i].style.height = daysArr[i].amount * 2.8 + 'px';
                document.querySelectorAll(".exp-chart__label-amount")[i].innerHTML = daysArr[i].amount;
                document.querySelectorAll(".exp-chart__day")[i].innerHTML = daysArr[i].day;
            }
        }, 50);

    }

    addGraphExpenses();

   function currentDayColor() {
        const d = new Date();
        const day = d.getDay();
        let today;
        let chartDay = document.querySelectorAll(".exp-chart__day");
        let column = document.querySelectorAll(".exp-chart__column");
        switch (day) {
            case 1:
            today = 'mon';
            break;
            case 2:
            today = 'tue';
            break;
            case 3:
            today = 'wed';
            break;
            case 4:
            today = 'thu';
            break;
            case 5:
            today = 'fri';
            break;
            case 6:
            today = 'sat';
            break;
            case 0:
            today = 'sun';
            break;
        }
        setTimeout(() => {
            for (let i = 0; i < chartDay.length; i++) {
                if (today === chartDay[i].innerHTML) {
                    column[i].classList.add("exp-chart__column--current");
                }
            } 
        }, 110);
   }

   currentDayColor();

   function showLabels() {
    let column = document.querySelectorAll(".exp-chart__column");
    let label = document.querySelectorAll(".exp-chart__label");
    for (let i = 0; i < column.length; i++) {
        column[i].addEventListener("click", function() {
            label[i].classList.toggle("exp-chart__label-show");
            column[i].classList.toggle("exp-chart__column-opacity");
        })
    }
   }

   showLabels();


    
    






























}
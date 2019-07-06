//classes...

class Budget {
    constructor(addBudget) {
        this.budget = Number(addBudget);
        this.budgetLeft = this.budget;
    }
}


class HTML {
    
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
    
}


// variables...

const expenseForm = document.getElementById('add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');


let budget , userBudget;




let html = new HTML();


// event listeners...

eventListeners();

function eventListeners() {
    
    // onload event listener
    document.addEventListener('DOMContentLoaded' , () => {
       
        const addBudget = prompt('Please Enter Your Budget for this week : ');
        
        if (addBudget === null || addBudget == 0 || addBudget === '') {
            window.location.reload();
            
        } else {
            // getting budget value from the prompt to class
            budget = new Budget(addBudget);
            
            // instantiate the html class
            html.insertBudget(budget.budget);
        }
        
    });
    
    
    //form event listener
    expenseForm.addEventListener('submit' , (e) => {
        e.preventDefault();
    });
}



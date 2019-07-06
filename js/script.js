//classes...

class Budget {
    constructor(addBudget) {
        this.budget = Number(addBudget);
        this.budgetLeft = this.budget;
    }
    
    subtractBudget(amount) {
        return this.budgetLeft -= amount;
    }
}


class HTML {
    
    // insert budget amount into the html
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
    
    // insert alert into the html
    insertAlert(message, classname) {
        const alertMessage = document.createElement('div');
        alertMessage.classList.add('alert' , 'fade' , 'show' , classname);
        alertMessage.appendChild(document.createTextNode(message));
        
        // print alert into html
        document.querySelector('.primary').insertBefore(alertMessage , expenseForm);
        
        // remove the alert after 3 seconds
        setTimeout( () => {
            document.querySelector('.primary .alert').remove();
            
        } , 3000);
    }
    
    // insert expenses into the html
    insertExpense(expenseName , amount) {
        const expenseList = document.querySelector('#expenses ul');
        
        // create element
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';
        
        li.innerHTML = `${expenseName} <span class='badge badge-primary badge-pill'>$ ${amount}</span>`;
        
        expenseList.appendChild(li);
    }
    
    // insert left balance into the html
    insertLeft(amount) {
        
        // insert the left amount
        const budgetlSubtractLeft = budget.subtractBudget(amount);
        budgetLeft.innerHTML = `${budgetlSubtractLeft}`;
        
        
        // change color when the amount is less
        if (budgetlSubtractLeft <= (budget.budget / 4)) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
        }
        if (budgetlSubtractLeft <= (budget.budget / 2)) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }
        
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
        
        // get expense form data
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;
        
        // insert alert into the html
        if (expenseName === '' || amount === '') {
            html.insertAlert('there was an error in the data you entered.' , 'alert-danger');
            
        } else {
            // insert expenses into the html
            html.insertExpense(expenseName , amount);

            // insert left amount to html
            html.insertLeft(amount);   
        }
        
    });
}





















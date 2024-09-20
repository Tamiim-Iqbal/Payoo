const btnCashout = getElementById('btn-cash-out');
btnCashout.addEventListener("click", (e) => {

    e.preventDefault();

    const cashout = getValueParseFloat('input-cashout');
    const pinCashout = getValue(('pin-cashout'));

    if(isNaN(cashout))
    {
        const alertBox = getElementById('alert-box');
        alertBox.style.display = 'block';
        alertBox.style.backgroundColor = "#f44336";
        alertBox.innerText = "Failed to Withdraw Money!";
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 4000); 
        
        return;
    }

    if (cashout !== '' && pinCashout !== '')
    {
        const balance = getInnerTextParseFloat('account-balance');

        const newBalance = balance - cashout;

        if(newBalance >= 0)
        {
            getElementById('account-balance').innerText = "$ "+ newBalance;

            // Alert:  
            const alertBox = getElementById('alert-box');
            alertBox.style.display = 'block';
            alertBox.style.backgroundColor = "#4caf50";
            alertBox.innerText = "Cashout successful!"
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000); 

            const p = document.createElement('p');
            p.style.backgroundColor = "#f44336";
            p.style.padding = "5px 3px";
            p.style.borderRadius = "5px";
            p.style.marginTop = "7px";
            p.style.color = "white";

            p.innerHTML = `$ ${cashout} has been withdrawn. Balance $ ${newBalance}`;
            document.getElementById('show-transaction').appendChild(p);
        }
        else
        {
            // Alert
            const alertBox = getElementById('alert-box');
            alertBox.style.display = 'block';
            alertBox.style.backgroundColor = "#f44336";
            alertBox.innerText = "Not enough money!";
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 2000); 
        }

        document.getElementById('input-cashout').value = '';
        document.getElementById('pin-cashout').value = '';
    }
    else
    {
        alert("Please enter your Amount & Pin number");
    }
})
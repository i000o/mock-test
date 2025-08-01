// 1. ACCOUNTS Create accounts - each much have 'accountNumber', 'name' and 'balance'. No dupes allowed. 
const accounts = new Map (); 

function createAccounts(accountNumber, ownerName, currentBalance) { 
// checks for duplicate account numbers, if so, return an error
    if (accounts.has(accountNumber)) {
        return `Account ${accountNumber} already exists.`; 
    }
// otherwise, creates the account 
    accounts.set(accountNumber, { 
        ownerName, 
        currentBalance
    });
}

// DEPOSITS must increase the balance 

function deposit(accountNumber, depositAmount) { 
    const targetAccount = accounts.get(accountNumber); // this creates the relationship between targetAccount and the map

    if (!targetAccount) { // if the targetAccount doesn't exist 
        return `Account ${accountNumber} not found.`; 
    } 

    // converts balance string to a number so JS can use it 
    const numericBalance = Number(targetAccount.currentBalance.replace("£", "")); // .replace("old value", "new value") Number() converts a value to a number (data) so JS can use it 
    depositAmount = Number(depositAmount); 

    if (Number.isNaN(depositAmount)) { 
        return "Please enter a valid number."; 
    }
    const newBalance = numericBalance + depositAmount; 

    
    // updates balance back to a string to present it in correct format
    targetAccount.currentBalance = `£${newBalance}`; // backticks for template literals, remember 
    accounts.set(accountNumber, targetAccount); // .set replaces the existing value at this key i.e. update the accountNumber with the info from targetAccount (including newBalance)
}

// WITHDRAWALS 

function withdraw(accountNumber, withdrawalAmount) { 
    const targetAccount = accounts.get(accountNumber); 

    if (!targetAccount) { 
        return "Account not found.";
    }

    const currentBalance = Number(targetAccount.currentBalance.replace("£", "")); 
    const amount = Number(withdrawalAmount); 

    if (Number.isNaN(amount) || amount <= 0) { 
        return "Please enter a valid withdrawal amount"; 
    }

    if (amount > currentBalance) { 
        return "Insufficient funds."; 
    }

    const newBalance = currentBalance - amount; 
    targetAccount.currentBalance = `£${newBalance}`; 
    accounts.set(accountNumber, targetAccount); 

    return 'Withdrawal successful.'; 
}

// VIEW ACCOUNT 

function viewAccount(accountNumber) { 
    const targetAccount = accounts.get(accountNumber); 

    if (!targetAccount) { 
        return `Account ${accountNumber} not found.`; 
    }

    const ownerName = targetAccount.ownerName; 
    const currentBalance = targetAccount.currentBalance; 

    return `${ownerName}: Your current balance is ${currentBalance}`;
}

// TRANSFER BETWEEN ACCOUNTS 

function transferFunds(senderAccountNumber, receipientAccountNumber, transferAmount) { 
    const senderAccount = accounts.get(senderAccountNumber); 
    const receipientAccount = accounts.get(receipientAccountNumber); 

    if (!senderAccount || !receipientAccount) { 
        throw new Error('Account(s) not found.'); 
    }

    const senderBalance = Number(senderAccount.currentBalance.replace("£", ""));
    const recipientBalance = Number(receipientAccount.currentBalance.replace("£", ""));

    if (transferAmount > senderBalance) {
        throw new Error("Insufficient funds.");
    }

    senderAccount.currentBalance = `£${senderBalance - transferAmount}`;
    receipientAccount.currentBalance = `£${recipientBalance + transferAmount}`;

     return `Transfer successful.`; 
}

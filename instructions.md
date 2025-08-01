## Engineering Test - Prep

Transitioning from procedural code to object-oriented thinking can feel like shifting from flat sketches to architectural blueprints. Let’s build you a mock test that starts simple but nudges you toward OOP without overwhelming you.

---

### 🧪 First Circle–Style Mock Code Test: *Banking Service Light*

Build a simple service that handles basic bank account operations. You’ll simulate the backend logic using JavaScript (or your preferred language). No database — just variables and functions (or classes, if you’re ready).

---

### 🚧 Task Requirements

1. **Create Accounts**
   - Each account must have an `accountNumber`, `name`, and `balance`.
   - No duplicate `accountNumber`s allowed.
2. **Deposit & Withdraw**
   - Deposits must increase the balance.
   - Withdrawals must not allow negative balances.
3. **Transfer Funds**
   - Transfer between two accounts.
   - If the sender doesn’t have enough funds, throw an error.
4. **View Account**
   - Return an account’s current balance and owner name.

---

### 🛠️ Suggested Constraints

- All data should be held in-memory — e.g. an array or object. ✅
- Keep logic modular: one function per operation.
- Bonus: If you're ready, refactor with a `BankAccount` class using methods like `.deposit()`, `.withdraw()`, and `.transfer()`.

---

### 🧠 Stretch Prompt (Optional)

Add a function that returns a summary of all accounts sorted by balance — highest to lowest.

---

Let me know if you'd like to walk through an implementation together, or if you'd like a TypeScript version that gently introduces typing and classes. We can build this one function at a time, and I’ll reflect back your logic as we go to reinforce your understanding. Want to start with `createAccount()`?

### Learning

1. Objects, Arrays, Maps - Data strcutures - How to choose what we're storing and it's behaviour (considering future needs, the nature of the data etc.)
2. `.set` with Maps
3. Using a `function` to help build a Map.

```
const accounts = new Map();

accounts.set(ownerName = "Firstname Surname", accountNumber = 123456, balance = '${'£'}0');
accounts.set(ownerName = "Firstname Surname", accountNumber = 000001, balance = '${'£'}1');
accounts.set(ownerName = "Firstname Surname", accountNumber = 000002, balance = '${'£'}2');
```

to

```
accounts.set(accountNumber, {
    ownerName: "Firstname Surname",
    balance: "£0"
});
```

let account = accountNumber + ownerName + balance; // this doesn't mean anything on its own, JS needs to check if these data sets are present in the variable

// All data should be stored in an array or object
const bankAccount = { // this is an object in which to store multiple datas
accountNumber: "",
ownerName: "",
currentBalance: "",
newBalance: "" // do we need this one?
}

```
// WITHDRAWALS must not allow negative balances
if (withdrawal > 0) {
    return (${fundsError}); // check variable scope here
}

if (transfer > currentBalance) { // if the transfer is greater than the currentBalance
    return (${fundsError}); // throw the error "You have insufficient funds."
} else {
    (transfer - currentBalance) // otherwise minus the tranfer from the currentBalance
} return newBalance;
```

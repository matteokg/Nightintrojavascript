class Atm {
  constructor (balance, interest, transactions) {
    this.balance = 0
    this.interest = 0.001
    this.transactions = []
  }
  calcInterest () {
    var ret = Math.round(this.balance + this.balance * this.interest)
    this.transactions.push('User calculated interest: $' + ret + '\n')
    console.log(ret)
  }
  checkBalance () {
    this.transactions.push('User checked balance: $' + this.balance + '\n')
    console.log(this.balance)
  }
  checkWithdrawal (amount) {
    return this.balance > amount
  }
  deposit (amount) {
    this.transactions.push('User deposited $' + amount + '\n')
    this.balance += amount
  }
  printTransactions () {
    console.log(this.transactions)
  }
  withdraw (amount) {
    if (this.checkWithdrawal(amount)) {
      this.transactions.push('user withdrew $' + amount)
      this.balance -= amount
      return amount
    }
    else {
      this.transactions.push('user tried to withdraw $' + amount)
      console.log('Insufficient funds')
    }
  }
}
var atm = new Atm()
var validInputs = ['deposit', 'd', 'withdraw', 'w', 'check balance', 'b', 'history', 'h', 'exit', 'x']
  while (true) {
    var op = prompt('What would you like to do? \n((d)eposit, (w)ithdraw, check (b)alance, check (h)istory, or e(x)it): ')
    if (op.startsWith('x')) {
      console.log('aight pce dude')
      break
    }
    if (validInputs.includes(op)) {
    while (true) {
      if (op.startsWith('d')) {
        var ui = prompt('how much would you like to' + op)
        let amount = parseInt(ui)
        atm.deposit(amount)
        break
      }
      else if (op.startsWith('w')) {
        var inp = prompt('how much would you like to withdraw?')
        let amount = parseInt(inp)
        atm.withdraw(amount)
        break
      }
      else if (op.startsWith('b')) {
        atm.checkBalance()
        break
      }
      else if (op.startsWith('h')) {
        console.log(atm.printTransactions)
        break
      }
    }
  }
  else {
    console.log('not valid input, try again you idiot')
  }
}

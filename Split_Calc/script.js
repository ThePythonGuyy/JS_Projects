const billtotal = document.getElementById('billTotalInput')
const tip = document.getElementById('tipInput')
const npeople = document.getElementById('numberOfPeople')
const perperson = document.getElementById('perPersonTotal')

let tpeople = Number(npeople.innerText)

function calculateBill() {
    let amount = Number(billtotal.value)
    
    // let tpeople = Number(npeople.innerText)

    if(!tip.value){
        perperson.innerText = '$' + String(amount/tpeople)
    }

    else {

        let tipperc = Number(tip.value)
        
        let amount = Number(billtotal.value)

        console.log(tipperc)

        let tipval = (tipperc/100)*amount + amount

        let x = '$' + String(tipval/tpeople)

        if (x.includes('.')){
            let ax = x.split('.')
            console.log(ax)

            if (ax[1].length > 2) {

                x = ax[0] + '.' + ax[1].slice(0,2)
               
            } 
        }




        perperson.innerText = x
    }
}

function increasePeople() {

    // let tpeople = Number(npeople.innerText)

    tpeople += 1

    npeople.innerText = String(tpeople)

    calculateBill()


}

function decreasePeople() {

    // let tpeople = Number(npeople.innerText)

    if (tpeople > 1){
        tpeople -= 1
    }

    npeople.innerText = String(tpeople)

    calculateBill()

}

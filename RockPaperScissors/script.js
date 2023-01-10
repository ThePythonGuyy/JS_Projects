let choice = document.querySelectorAll('.rpsButton')

let plyrscr = document.getElementById('player-score')

let hands = document.getElementById('hands')

let result = document.getElementById('result')

let reset = document.getElementById('endGameButton')
//[rock, paper, scissor]

let arr = ['Rock', 'Paper', 'Scissors']

let syschoice = null
// console.log(getRandomInt(2))

let usrchoice = null

let score = 0

let pt = 0

function point(usrch, sysch){

    if (usrch==sysch){

        if (usrchoice == 'Rock'){

            usrchoice = syschoice = '✊'
        }
        else if (usrchoice == 'Paper'){

            usrchoice = syschoice = '✋'
        }
        else {

            usrchoice = syschoice = '✌️'
        }
        return 0
    }

    if (usrch=='Rock' && sysch=='Scissors'){

        usrchoice = '✊'
        
        syschoice = '✌️'

        return 1
    }
    if (usrch=='Scissors' && sysch=='Rock'){

        usrchoice = '✌️'

        syschoice = '✊'

        return -1
    }

    if (usrch=='Paper' && sysch=='Scissors'){
        
        usrchoice = '✋'
        
        syschoice = '✌️'

        return -1
    }
    if (usrch=='Scissors' && sysch=='Paper'){

        usrchoice = '✌️'

        syschoice = '✋'

        return 1
    }

    if (usrch=='Rock' && sysch=='Paper'){

        usrchoice = '✊'

        syschoice = '✋'

        return -1
    }
    
    if (usrch=='Paper' && sysch=='Rock'){

        usrchoice = '✋'

        syschoice = '✊'

        return 1
    }

}

let num = 0

choice.forEach(ele => {

    ele.onclick = () => {
        usrchoice = ele.value

        syschoice = arr[Math.floor(Math.random() * 3)]

        num = point(usrchoice,syschoice)

        score += num

        plyrscr.innerHTML = `<h2>${num}</h2>`

        hands.innerText = `🧒 - ${usrchoice}    🤖 - ${syschoice}`

        result.innerHTML = `<h2>Total Score = ${score}</h2>`

        }
})

reset.onclick = () => {

        console.log('hh')

        plyrscr.innerHTML = ''

        hands.innerText = ''

        result.innerHTML = ''


}

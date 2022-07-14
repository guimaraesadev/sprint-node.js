// lib prompt-sync-history
// 'prompt-sync-history' is a library that makes javascript be able to receive values ​​through the terminal.

import prompt from 'prompt-sync'

const input = prompt()

const sortStyles = (receive) => {
    let arr = []
    
    while (receive != "sair" && "SAIR") {
        
        arr.push(receive);
        
        receive = input
       
        (`Write as CSS properties you want to sort.
        We will do it for you. \n
        Type 'sair' or 'SAIR' to finish.`
        )

        break
    }
    
    let outcome = arr.sort()

    return outcome
}

sortStyles()


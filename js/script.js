const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'pierre',
        emoji: '✊',
        beats: 'ciseau'
    },
    {
        name: 'feuille',
        emoji: '✋',
        beats: 'pierre'
    },
    {
        name: 'ciseau',
        emoji: '✌️',
        beats: 'feuille'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selection)
    })
  })

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
  }

function addSelectionResult(selection, winner){

}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}  

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
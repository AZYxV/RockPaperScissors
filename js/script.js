const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelectorAll('[data-final-column]')
const yourScore = document.querySelectorAll('[data-your-score')
const computerScore = document.querySelectorAll('[data-computer-score')
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
  
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
  }
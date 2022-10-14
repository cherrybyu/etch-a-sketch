const buttonCreate = document.querySelector('.create')
buttonCreate.addEventListener('click', function() {
    let units = prompt("grid size, less than 100")
    if (units > 100) {
        alert('ERROR! Max grid size is 100')
        return "ERROR"
    }
    createGrid(units)
})

function createGrid (units) {
    const container = document.querySelector('.container')
    const gridContainer = document.createElement('div')
    gridContainer.classList.add('grid-container')
    container.appendChild(gridContainer)
    const buttonDestroy = document.querySelector('.destroy')
    buttonDestroy.addEventListener('click', function() {
        gridContainer.remove()
    })
    for (i = 0; i < units; i++) {
        const unitContainer = document.createElement('div');
        unitContainer.classList.add('unit-container')
        gridContainer.appendChild(unitContainer)

        for (j = 0; j < units; j++) {
            const gridUnits = document.createElement('div')
            gridUnits.classList.add("grid-units")
            unitContainer.appendChild(gridUnits)
            gridUnits.addEventListener('mouseover', function() {
                gridUnits.classList.add('hover')
            })  
        }
    } 
}

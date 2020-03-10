(function() {
    var gridItems = document.getElementsByClassName('board-grid--item')
    for(var i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("click", function() {
            var data = this.dataset
            console.log(data.row + ' - ' + data.column)
        })
    }
})()
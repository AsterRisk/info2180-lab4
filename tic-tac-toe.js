window.onload = function(){
    const states = ["X","O"];
    var x = 0;
    var status, y;
    var z;
    var btn = document.getElementsByClassName("btn")[0];
    btn.addEventListener("click", function playGame(){
        const divs = document.getElementsByTagName("div");
        var i = 0;
        for(i = 0;i<divs.length;i++)
        {
            if(( divs[i].id == "") && ((divs[i].classList.length == 0) || divs[i].classList.contains("square")))
            {
                divs[i].classList.add("square"); 
                divs[i].classList.remove("X");
                divs[i].classList.remove("O");
                divs[i].innerHTML = "";
                divs[i].classList.remove("finished");
                status = document.getElementById("status");
                status.classList.remove("you-won");
                status.innerHTML = "Move your mouse over a square and click to play an X or an O."
            }
        }
        const squares = document.getElementsByClassName("square");
        var row1, row2, row3, col1, col2, col3, diag1, diag2, gameBoard;
        for(i=0;i<squares.length;i++)
        {
            squares[i].addEventListener("mouseover", function()
            {
                this.classList.add("hover");
            });
            squares[i].addEventListener("mouseout", function()
            {
                this.classList.remove("hover");
            });
            squares[i].addEventListener("click", function(){
                //alert("turn");
                if(this.classList.length < 3)
                {
                    this.classList.add(states[x%2]);
                    this.innerHTML = states[x%2];
                    x++;
                }
                row1 = squares[0].innerHTML + squares[1].innerHTML + squares[2].innerHTML;
                row2 = squares[3].innerHTML + squares[4].innerHTML + squares[5].innerHTML;
                row3 = squares[6].innerHTML + squares[7].innerHTML + squares[8].innerHTML;
                col1 = squares[0].innerHTML + squares[3].innerHTML + squares[6].innerHTML;
                col2 = squares[1].innerHTML + squares[4].innerHTML + squares[7].innerHTML;
                col3 = squares[2].innerHTML + squares[5].innerHTML + squares[8].innerHTML;
                diag1= squares[0].innerHTML + squares[4].innerHTML + squares[8].innerHTML;
                diag2= squares[2].innerHTML + squares[4].innerHTML + squares[6].innerHTML;
                gameBoard = [row1, row2, row3, col1, col2, col3, diag1, diag2];
                for (y=0; y<gameBoard.length; y++)
                {
                    if((gameBoard[y] == "XXX") || (gameBoard[y] == "OOO"))
                    {
                        status = document.getElementById("status");
                        status.classList.add("you-won");
                        status.innerHTML = "<p>" + states[(x-1)%2] + " wins!</p>";
                        for(z=0;z<squares.length;z++){
                            squares[z].classList.add("finished");
                        }
                    }
                    
                }
            }
        ,false)}
    });
}  

window.onload = function(){
    var x = 0, status, y, z;
    var divs = document.getElementsByTagName("div");
    var gameDone = false;
    console.log(divs.length);
    const states = ["X","O"];
    var status;
    for (i=0;i<divs.length;i++)
    {
        console.log(i);
        if((divs[i].id == "" ) && (divs[i].className == ""))
        {
            console.log(i);
            divs[i].classList.add("game");
        }
    }
    const games = document.getElementsByClassName("game");
    for(i=0;i<games.length;i++)
    {
        games[i].addEventListener("click", function(){
            if(!gameDone)
            {
                if(!this.classList.contains("finished"))
                {
                    this.classList.add(states[x%2]);
                    this.innerHTML = states[x%2];
                    x++;
                    this.classList.add("finished");
                }
                var row1 = games[0].innerHTML + games[1].innerHTML + games[2].innerHTML;
                var row2 = games[3].innerHTML + games[4].innerHTML + games[5].innerHTML;
                var row3 = games[6].innerHTML + games[7].innerHTML + games[8].innerHTML;
                var col1 = games[0].innerHTML + games[3].innerHTML + games[6].innerHTML;
                var col2 = games[1].innerHTML + games[4].innerHTML + games[7].innerHTML;
                var col3 = games[2].innerHTML + games[5].innerHTML + games[8].innerHTML;
                var diag1= games[0].innerHTML + games[4].innerHTML + games[8].innerHTML;
                var diag2= games[2].innerHTML + games[4].innerHTML + games[6].innerHTML;
                var gameBoard = [row1, row2, row3, col1, col2, col3, diag1, diag2];
                for (y=0; y<gameBoard.length; y++)
                {
                    if((gameBoard[y] == "XXX") || (gameBoard[y] == "OOO"))
                    {
                        status = document.getElementById("status");
                        status.classList.add("you-won");
                        status.innerHTML = "<p>Congratulations! " + states[(x-1)%2] + " is the winner!</p>";
                        gameDone = true;
                    }
                }
            } 
        })
    }
    var btn = document.getElementsByClassName("btn")[0];
    btn.addEventListener("click", function(){
        x =0;
        var c = 0;
        var status = document.getElementById("status");
        const games = document.getElementsByClassName("game");
        for(c=0;c<games.length;c++)
        {
            console.log(c);
            games[c].classList.remove("square");
            games[c].classList.add("square");
            games[c].classList.remove("X");
            games[c].classList.remove("O");
            games[c].classList.remove("finished");
            games[c].addEventListener("mouseover", function(){
                if(!gameDone)
                {
                    this.classList.add("hover");
                }
            })
            games[c].addEventListener("mouseout", function(){
                this.classList.remove("hover");
            })
            games[c].innerHTML = "";
        }
        status.classList.remove("you-won");
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        gameDone = false;
    })
}
let grid = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
let divs;
let gameOver = false;
let gameOn = false;

function onDivClick(index) {
  if(!gameOn) changeStateToGameOn();

  if(divs === undefined) populateDivs();

  if(!gameOver && grid[index] == ' ') {

    grid[index] = 'X';
    divs[index].textContent = 'X';

    $jsonData = JSON.parse(JSON.stringify(grid));

    $.ajax({
      type : 'POST',
      url : './play/ss.php',
      data : {
        'jsonData' : $jsonData
      },
      datatype : 'json',
      success : function ($response){
        $data = JSON.parse($response);
        if($data.winner != '') {
          if($data.winner == ' ')
            document.getElementById("state").textContent = "It's a draw!";
          else {
            document.getElementById("state").textContent = "Winner is " + $data.winner + "!";
          }
          gameOver = true;
        }
        console.log($data)
        grid = $data.grid;
        for(var i = 0; i < 9; i++) {
          divs[i].textContent = grid[i];
        }
      }, false : function(e) {
        alert('failed');
      }
    });
  }
}

function changeStateToGameOn() {
  document.getElementById("state").textContent = "Game On!";
  gameOn = true;
}

function populateDivs() {
  divs = new Array(9);
  for(var i = 0; i < 9; i++) divs[i] = document.getElementById(i);
}

function addUser(){
  var user = new Object();
  user.username = document.getElementById('username').value;
  user.password = document.getElementById('password').value;
  user.email = document.getElementById('email').value;

  $jsonData = JSON.parse(JSON.stringify(user));
  console.log($jsonData);
  $.ajax({
    type : 'POST',
    url : './adduser',
    data : $jsonData,
    datatype : 'json',
    success : function ($response){
      console.log($response);

    }, false : function(e) {
      alert('failed');
    }
  });
}

function addUserForm(){
  var form = document.getElementById('form1');
  form.action = "/adduser";
  form.submit();
}
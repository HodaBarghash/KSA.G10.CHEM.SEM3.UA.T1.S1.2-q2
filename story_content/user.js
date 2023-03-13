function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZzFwqJV6yM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyvrdge8YSDRC5ZKnQsx65qlanHjjudDCh8qgT70IrftpzmYvvpeRoq2hKdA1T_sjIDuQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


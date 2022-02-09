<!DOCTYPE html>
<html>

<head>
	<title>
		How to convert decimal to
		hex in JavaScript ?
	</title>
</head>
		
<body style = "text-align:center;">
	
	<h1 style = "color:green;" >
		GeeksForGeeks
	</h1>
			
	<p id="up"></p>
    <form action="">
    	<input type="text" id="num">

    </form>
	<button onclick="myGFG()">
		Convert to hex
	</button>
	
	<p id="down" style="color: green"></p>
			
	<script>
   
		var num = document.getElementById("num");
        var GFG_Var =num.value;
		var up = document.getElementById("up");
		up.innerHTML = GFG_Var;
		var down = document.getElementById("down");
	
		function myGFG() {
			var GFG_Var2 = GFG_Var.toString(16);
			down = document.getElementById("down");
			down.innerHTML = "hex of "+ GFG_Var
					+ " is = " + GFG_Var2;
            console.log(GFG_Var)
		}
	</script>
</body>

</html>								

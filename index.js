function validate()
{
	if(document.getElementById("Advanced").checked)
	{
      window.location="index.html"
	}else if(document.getElementById("Simple").checked)
	{
      window.location="simple.html"
	}
	else{
		window.location="index.html"
	}
}
function AC()
	{
		document.getElementById('finaloutput').value="";
	}
function pi(val)
{
    var a=document.getElementById('finaloutput').value+=3.14;
}
	function CE()
	{
		var txt=document.getElementById('finaloutput').value;
		txt=txt.slice(0,-1);
		document.getElementById('finaloutput').value=txt;
	}
	function percent()
	{
		num=document.getElementById("finaloutput").value;
		num=eval(num/100);
		document.getElementById("finaloutput").value=num;
	}
	function display(key)
	{
		var v=document.getElementById('finaloutput').value;
		if(key != 'x!' && key!="π" && key != "e")
		{
			document.getElementById('finaloutput').value+=key;
		}
		else if(key=='e')
		{
			document.getElementById('finaloutput').value= Math.exp(v);
		}
		else if(key=='x!')
		{
            if (v == 0) {
				document.getElementById('finaloutput').value= '1';
			  } 
			  else if (v < 0) {
				document.getElementById('finaloutput').value = NaN;
			  } 
			  else 
			  {
				let number = 1;
				for (let i =v; i > 0; i--) 
				{
				  number *= i;
				}
				document.getElementById('finaloutput').value= number;
		}
		
	}
}
	function solve()
	{
		var v=document.getElementById('finaloutput').value;
	    if(v.indexOf('^') > -1) {
            let base = v.slice(v.indexOf('^')-1);
            let exponent = v.slice(v.indexOf('^') + 1);
            document.getElementById('finaloutput').value=eval('Math.pow(' + base + ',' + exponent + ')');
        }
		if(v.indexOf('√') > -1)
		{
			let value = v.slice(v.indexOf('√')+1,v.length);
            document.getElementById('finaloutput').value=eval('Math.sqrt(' + value + ')');
		}
		if(v.indexOf('sin') > -1)
		{
			
			let value = v.slice(v.indexOf('(')+1,v.indexOf(')'));
			let r=v.match(/sin\(/g);
			if(r!=null)
			{
            document.getElementById('finaloutput').value=eval('Math.sin(' + value + ')');
			}else
			{
				document.getElementById('finaloutput').value="'"+null+"'"+("-> sin(value)");
			}
		}
		if(v.indexOf('cos') > -1)
		{
			let value = v.slice(v.indexOf('(')+1,v.indexOf(')'));
			let r=v.match(/cos\(/g);
			if(r!=null)
			{
				document.getElementById('finaloutput').value=eval('Math.cos(' + value + ')');
			}else
			{
				document.getElementById('finaloutput').value="'"+null+"'"+("-> cos(value)");
			}
		}
		if(v.indexOf('tan') > -1)
		{
			let value = v.slice(v.indexOf('(')+1,v.indexOf(')'));
			let r=v.match(/tan\(/g);
			if(r!=null)
			{
				document.getElementById('finaloutput').value=eval('Math.tan(' + value + ')');
			}else
			{
				document.getElementById('finaloutput').value="'"+null+"'"+("-> tan(value)");
			}
		}
		if(v.match(/log/g)!=null)
		{
			let value = v.slice(v.indexOf('(')+1,v.indexOf(')'));
			let r=v.match(/log\(/g);
			if(r!=null)
			{
				document.getElementById('finaloutput').value=eval('Math.log(' + value + ')');
			}else
			{
				document.getElementById('finaloutput').value="'"+null+"'"+("-> log(value)");
			}
		}
		else
		  {
		var expr=document.getElementById('finaloutput').value;
		var soln=eval(expr);
		document.getElementById('finaloutput').value=soln;
		  }
	}

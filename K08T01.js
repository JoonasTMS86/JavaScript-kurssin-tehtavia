$(document).ready(function()
{
	$('#alue2').hide();
	
	var toimitus1 = 0;
	var toimitus2 = 0;
	var toimitus3 = 0;
	var toimitus4 = 0;
	var numeroita = 0;
	
	$('#n1').change(function() 
	{
		toimitus1 = 0;
	});
	$('#n2').change(function() 
	{
		toimitus1 = 1;
	});
	$('#n3').change(function() 
	{
		toimitus1 = 2;
	});
	$('#n4').change(function() 
	{
		toimitus1 = 3;
	});
	$('#n5').change(function() 
	{
		toimitus2 = 0;
	});
	$('#n6').change(function() 
	{
		toimitus2 = 1;
	});
	$('#n7').change(function() 
	{
		toimitus2 = 2;
	});
	$('#n8').change(function() 
	{
		toimitus2 = 3;
	});
	$('#n9').change(function() 
	{
		toimitus3 = 0;
	});
	$('#n10').change(function() 
	{
		toimitus3 = 1;
	});
	$('#n11').change(function() 
	{
		toimitus3 = 2;
	});
	$('#n12').change(function() 
	{
		toimitus3 = 3;
	});
	$('#n13').change(function() 
	{
		toimitus4 = 0;
	});
	$('#n14').change(function() 
	{
		toimitus4 = 1;
	});
	$('#n15').change(function() 
	{
		toimitus4 = 2;
	});
	$('#n16').change(function() 
	{
		toimitus4 = 3;
	});
	
	$('#nappi').click(function() 
	{
		numeroita = $('#numbers').val();
		if(numeroita < 1)
		{
			alert('Please enter a valid number.');
		}
		else if(numeroita > 5)
		{
			alert('Maximum is 5.');
		}
		else
		{
			$('#alue1').remove();
			$('#alue2').show();
			if(numeroita < 2)
			{
				$('#toka').remove();
			}
			if(numeroita < 3)
			{
				$('#kolmas').remove();
			}
			if(numeroita < 4)
			{
				$('#neljas').remove();
			}
			if(numeroita < 5)
			{
				$('#viides').remove();
			}
		}
	});
	
	function lasketulos(tulos, luku, toiminto) 
	{
		switch (toiminto)
		{
			case 0:
			tulos += luku;
			break;
			case 1:
			tulos -= luku;
			break;
			case 2:
			tulos *= luku;
			break;
			case 3:
			tulos /= luku;
			break;
		}
		return tulos;
	}
	
	$('#laske').click(function() 
	{
		var luku1 = $('#num1').val();
		var luku2 = $('#num2').val();
		var luku3 = $('#num3').val();
		var luku4 = $('#num4').val();
		var luku5 = $('#num5').val();
		luku1 = parseInt(luku1);
		luku2 = parseInt(luku2);
		luku3 = parseInt(luku3);
		luku4 = parseInt(luku4);
		luku5 = parseInt(luku5);
		var tulos = luku1;
		if(numeroita > 1)
		{
			tulos = lasketulos(tulos, luku2, toimitus1);
		}
		if(numeroita > 2)
		{
			tulos = lasketulos(tulos, luku3, toimitus2);
		}
		if(numeroita > 3)
		{
			tulos = lasketulos(tulos, luku4, toimitus3);
		}
		if(numeroita > 4)
		{
			tulos = lasketulos(tulos, luku5, toimitus4);
		}
		$('#tulos').text('Tulos: ' + tulos);
	});
});
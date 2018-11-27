$(document).ready(function()
{
	$('#alue2').hide();
	var paino1 = 0;
	var pituus1 = 0;
	var paino2 = 0;
	var pituus2 = 0;
	var paino3 = 0;
	var pituus3 = 0;
	var paino4 = 0;
	var pituus4 = 0;
	var paino5 = 0;
	var pituus5 = 0;
	var paino6 = 0;
	var pituus6 = 0;
	
	$('#laske').click(function() 
	{
		var ok = false;
		var bmi = [];
		var minimi;
		var maksimi;
		var karvo;
		
		ok = tarkistus();
		if(ok == false)
		{
			alert('Virhe. Luku tai luvut epäkelpoja. Painon on oltava väliltä 41 - 299 kg ja pituuden väliltä 101 - 249 cm.');
		}
		else
		{
			paino1 = $('#pa1').val();
			pituus1 = $('#pi1').val();
			paino2 = $('#pa2').val();
			pituus2 = $('#pi2').val();
			paino3 = $('#pa3').val();
			pituus3 = $('#pi3').val();
			paino4 = $('#pa4').val();
			pituus4 = $('#pi4').val();
			paino5 = $('#pa5').val();
			pituus5 = $('#pi5').val();
			paino6 = $('#pa6').val();
			pituus6 = $('#pi6').val();
			$('#alue1').remove();
			pituus1 /= 100;
			pituus2 /= 100;
			pituus3 /= 100;
			pituus4 /= 100;
			pituus5 /= 100;
			pituus6 /= 100;
			bmi[0] = paino1 / (pituus1 * pituus1);
			bmi[1] = paino2 / (pituus2 * pituus2);
			bmi[2] = paino3 / (pituus3 * pituus3);
			bmi[3] = paino4 / (pituus4 * pituus4);
			bmi[4] = paino5 / (pituus5 * pituus5);
			bmi[5] = paino6 / (pituus6 * pituus6);
			minimi = pienin(bmi);
			maksimi = isoin(bmi);
			karvo = keskiarvo(bmi);
			bmi[0] = Math.round(bmi[0]);
			bmi[1] = Math.round(bmi[1]);
			bmi[2] = Math.round(bmi[2]);
			bmi[3] = Math.round(bmi[3]);
			bmi[4] = Math.round(bmi[4]);
			bmi[5] = Math.round(bmi[5]);
			minimi = Math.round(minimi);
			maksimi = Math.round(maksimi);
			karvo = Math.round(karvo);
			$('#tu1').text(bmi[0]);
			$('#tu2').text(bmi[1]);
			$('#tu3').text(bmi[2]);
			$('#tu4').text(bmi[3]);
			$('#tu5').text(bmi[4]);
			$('#tu6').text(bmi[5]);
			$('#min').text(minimi);
			$('#max').text(maksimi);
			$('#kes').text(karvo);
			$('#alue2').show();
		}
	});
	
	function tarkistus()
	{
		var oikein = 0;
		var minkg = 40;
		var maxkg = 300;
		var mincm = 100;
		var maxcm = 250;
		
		paino1 = $('#pa1').val();
		pituus1 = $('#pi1').val();
		paino2 = $('#pa2').val();
		pituus2 = $('#pi2').val();
		paino3 = $('#pa3').val();
		pituus3 = $('#pi3').val();
		paino4 = $('#pa4').val();
		pituus4 = $('#pi4').val();
		paino5 = $('#pa5').val();
		pituus5 = $('#pi5').val();
		paino6 = $('#pa6').val();
		pituus6 = $('#pi6').val();
		paino1 = parseInt(paino1);
		if(paino1 > minkg && paino1 < maxkg && pituus1 > mincm && pituus1 < maxcm)
		{
			oikein++;
		}
		if(paino2 > minkg && paino2 < maxkg && pituus2 > mincm && pituus2 < maxcm)
		{
			oikein++;
		}
		if(paino3 > minkg && paino3 < maxkg && pituus3 > mincm && pituus3 < maxcm)
		{
			oikein++;
		}
		if(paino4 > minkg && paino4 < maxkg && pituus4 > mincm && pituus4 < maxcm)
		{
			oikein++;
		}
		if(paino5 > minkg && paino5 < maxkg && pituus5 > mincm && pituus5 < maxcm)
		{
			oikein++;
		}
		if(paino6 > minkg && paino6 < maxkg && pituus6 > mincm && pituus6 < maxcm)
		{
			oikein++;
		}
		if(oikein < 6)
		{
			return false;
		}
		return true;
	}
	
	function pienin(luvut) 
	{
		var luku;
		var pos;
		var pos2 = 0;
		var tasmaa = 0;
		while(tasmaa < luvut.length)
		{
			tasmaa = 0;
			pos = 0;
			luku = luvut[pos2];
			while(pos < luvut.length)
			{
				if(luku <= luvut[pos])
				{
					tasmaa++;
				}
				pos++;
			}
			pos2++;
		}
		return luku;
	}
	
	function isoin(luvut) 
	{
		var luku;
		var pos;
		var pos2 = 0;
		var tasmaa = 0;
		while(tasmaa < luvut.length)
		{
			tasmaa = 0;
			pos = 0;
			luku = luvut[pos2];
			while(pos < luvut.length)
			{
				if(luku >= luvut[pos])
				{
					tasmaa++;
				}
				pos++;
			}
			pos2++;
		}
		return luku;
	}
	
	function keskiarvo(luvut) 
	{
		var tulos = 0;
		var pos = 0;
		while(pos < luvut.length)
		{
			tulos += luvut[pos];
			pos++;
		}
		tulos /= luvut.length;
		return tulos;
	}
	
});
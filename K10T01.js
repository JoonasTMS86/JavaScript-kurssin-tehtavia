if(window.attachEvent) 
{
	window.attachEvent('onload', start);
}
else 
{
	if(window.onload) 
	{
		var curronload = window.onload;
		var newonload = function(evt) 
		{
			curronload(evt);
			start(evt);
		};
		window.onload = newonload;
	}
	else
	{
		window.onload = start;
	}
}

function start()
{
	document.addEventListener("submit", kaynnista); 
	var lisaa = document.getElementsByTagName("fieldset");
	var laita = '';
	
	laita = laita + '<table>';
	laita = laita + '<tr>';
	laita = laita + '<th>Henkilo</th>';
	laita = laita + '<th colspan="7">Lottonumerot</th>';
	laita = laita + '</tr>';
	laita = laita + '<tr>';
	laita = laita + '<th>Aku</th>';
	laita = laita + '<td><input type="text" id="n1" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n2" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n3" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n4" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n5" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n6" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n7" maxlength="2" size="2"/></td>';
	laita = laita + '</tr>';
	laita = laita + '<tr>';
	laita = laita + '<th>Tupu</th>';
	laita = laita + '<td><input type="text" id="n8" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n9" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n10" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n11" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n12" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n13" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n14" maxlength="2" size="2"/></td>';
	laita = laita + '</tr>';
	laita = laita + '<tr>';
	laita = laita + '<th>Hupu</th>';
	laita = laita + '<td><input type="text" id="n15" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n16" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n17" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n18" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n19" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n20" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n21" maxlength="2" size="2"/></td>';
	laita = laita + '</tr>';
	laita = laita + '<tr>';
	laita = laita + '<th>Lupu</th>';
	laita = laita + '<td><input type="text" id="n22" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n23" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n24" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n25" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n26" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n27" maxlength="2" size="2"/></td>';
	laita = laita + '<td><input type="text" id="n28" maxlength="2" size="2"/></td>';
	laita = laita + '</tr>';
	laita = laita + '</table>';
	lisaa[0].innerHTML = lisaa[0].innerHTML + laita;
	
	var paalla = localStorage.getItem('paalla');
	var num1 = localStorage.getItem('num1');
	var num2 = localStorage.getItem('num2');
	var num3 = localStorage.getItem('num3');
	var num4 = localStorage.getItem('num4');
	var num5 = localStorage.getItem('num5');
	var num6 = localStorage.getItem('num6');
	var num7 = localStorage.getItem('num7');
	var num8 = localStorage.getItem('num8');
	var num9 = localStorage.getItem('num9');
	var num10 = localStorage.getItem('num10');
	var num11 = localStorage.getItem('num11');
	var num12 = localStorage.getItem('num12');
	var num13 = localStorage.getItem('num13');
	var num14 = localStorage.getItem('num14');
	var num15 = localStorage.getItem('num15');
	var num16 = localStorage.getItem('num16');
	var num17 = localStorage.getItem('num17');
	var num18 = localStorage.getItem('num18');
	var num19 = localStorage.getItem('num19');
	var num20 = localStorage.getItem('num20');
	var num21 = localStorage.getItem('num21');
	var num22 = localStorage.getItem('num22');
	var num23 = localStorage.getItem('num23');
	var num24 = localStorage.getItem('num24');
	var num25 = localStorage.getItem('num25');
	var num26 = localStorage.getItem('num26');
	var num27 = localStorage.getItem('num27');
	var num28 = localStorage.getItem('num28');
	var numerot = [];
	numerot[0] = num1;
	numerot[1] = num2;
	numerot[2] = num3;
	numerot[3] = num4;
	numerot[4] = num5;
	numerot[5] = num6;
	numerot[6] = num7;
	numerot[7] = num8;
	numerot[8] = num9;
	numerot[9] = num10;
	numerot[10] = num11;
	numerot[11] = num12;
	numerot[12] = num13;
	numerot[13] = num14;
	numerot[14] = num15;
	numerot[15] = num16;
	numerot[16] = num17;
	numerot[17] = num18;
	numerot[18] = num19;
	numerot[19] = num20;
	numerot[20] = num21;
	numerot[21] = num22;
	numerot[22] = num23;
	numerot[23] = num24;
	numerot[24] = num25;
	numerot[25] = num26;
	numerot[26] = num27;
	numerot[27] = num28;
	num1 = tyhjenna(num1);
	num2 = tyhjenna(num2);
	num3 = tyhjenna(num3);
	num4 = tyhjenna(num4);
	num5 = tyhjenna(num5);
	num6 = tyhjenna(num6);
	num7 = tyhjenna(num7);
	num8 = tyhjenna(num8);
	num9 = tyhjenna(num9);
	num10 = tyhjenna(num10);
	num11 = tyhjenna(num11);
	num12 = tyhjenna(num12);
	num13 = tyhjenna(num13);
	num14 = tyhjenna(num14);
	num15 = tyhjenna(num15);
	num16 = tyhjenna(num16);
	num17 = tyhjenna(num17);
	num18 = tyhjenna(num18);
	num19 = tyhjenna(num19);
	num20 = tyhjenna(num20);
	num21 = tyhjenna(num21);
	num22 = tyhjenna(num22);
	num23 = tyhjenna(num23);
	num24 = tyhjenna(num24);
	num25 = tyhjenna(num25);
	num26 = tyhjenna(num26);
	num27 = tyhjenna(num27);
	num28 = tyhjenna(num28);
	document.getElementById("n1").value = num1;
	document.getElementById("n2").value = num2;
	document.getElementById("n3").value = num3;
	document.getElementById("n4").value = num4;
	document.getElementById("n5").value = num5;
	document.getElementById("n6").value = num6;
	document.getElementById("n7").value = num7;
	document.getElementById("n8").value = num8;
	document.getElementById("n9").value = num9;
	document.getElementById("n10").value = num10;
	document.getElementById("n11").value = num11;
	document.getElementById("n12").value = num12;
	document.getElementById("n13").value = num13;
	document.getElementById("n14").value = num14;
	document.getElementById("n15").value = num15;
	document.getElementById("n16").value = num16;
	document.getElementById("n17").value = num17;
	document.getElementById("n18").value = num18;
	document.getElementById("n19").value = num19;
	document.getElementById("n20").value = num20;
	document.getElementById("n21").value = num21;
	document.getElementById("n22").value = num22;
	document.getElementById("n23").value = num23;
	document.getElementById("n24").value = num24;
	document.getElementById("n25").value = num25;
	document.getElementById("n26").value = num26;
	document.getElementById("n27").value = num27;
	document.getElementById("n28").value = num28;
	if(paalla == 1)
	{
		var kaikkiOk = tarkistus(numerot);
		if(kaikkiOk == true)
		{
			var arv1 = Math.floor((Math.random() * 39) + 1);
			var arv2 = arvoluvut(arv1, 0, 0, 0, 0, 0);
			var arv3 = arvoluvut(arv1, arv2, 0, 0, 0, 0);
			var arv4 = arvoluvut(arv1, arv2, arv3, 0, 0, 0);
			var arv5 = arvoluvut(arv1, arv2, arv3, arv4, 0, 0);
			var arv6 = arvoluvut(arv1, arv2, arv3, arv4, arv5, 0);
			var arv7 = arvoluvut(arv1, arv2, arv3, arv4, arv5, arv6);
			lisaa = document.getElementsByTagName("div");
			laita = '';
			laita = laita + '<h2>Arvottu lottorivi</h2>';
			laita = laita + '<ul>';
			laita = laita + '<li>' + arv1 + '</li>';
			laita = laita + '<li>' + arv2 + '</li>';
			laita = laita + '<li>' + arv3 + '</li>';
			laita = laita + '<li>' + arv4 + '</li>';
			laita = laita + '<li>' + arv5 + '</li>';
			laita = laita + '<li>' + arv6 + '</li>';
			laita = laita + '<li>' + arv7 + '</li>';
			laita = laita + '</ul>';
			
			var akuOikein = laskeOikeat(numerot, 0, arv1, arv2, arv3, arv4, arv5, arv6, arv7);
			var tupuOikein = laskeOikeat(numerot, 1, arv1, arv2, arv3, arv4, arv5, arv6, arv7);
			var hupuOikein = laskeOikeat(numerot, 2, arv1, arv2, arv3, arv4, arv5, arv6, arv7);
			var lupuOikein = laskeOikeat(numerot, 3, arv1, arv2, arv3, arv4, arv5, arv6, arv7);
			
			laita = laita + '<b>Aku sai ' + akuOikein + ' oikein!</b><br>';
			laita = laita + '<b>Tupu sai ' + tupuOikein + ' oikein!</b><br>';
			laita = laita + '<b>Hupu sai ' + hupuOikein + ' oikein!</b><br>';
			laita = laita + '<b>Lupu sai ' + lupuOikein + ' oikein!</b><br>';
			lisaa[0].innerHTML = lisaa[0].innerHTML + laita;
		}
	}
	localStorage.setItem('paalla', null);
	localStorage.setItem('num1', null);
	localStorage.setItem('num2', null);
	localStorage.setItem('num3', null);
	localStorage.setItem('num4', null);
	localStorage.setItem('num5', null);
	localStorage.setItem('num6', null);
	localStorage.setItem('num7', null);
	localStorage.setItem('num8', null);
	localStorage.setItem('num9', null);
	localStorage.setItem('num10', null);
	localStorage.setItem('num11', null);
	localStorage.setItem('num12', null);
	localStorage.setItem('num13', null);
	localStorage.setItem('num14', null);
	localStorage.setItem('num15', null);
	localStorage.setItem('num16', null);
	localStorage.setItem('num17', null);
	localStorage.setItem('num18', null);
	localStorage.setItem('num19', null);
	localStorage.setItem('num20', null);
	localStorage.setItem('num21', null);
	localStorage.setItem('num22', null);
	localStorage.setItem('num23', null);
	localStorage.setItem('num24', null);
	localStorage.setItem('num25', null);
	localStorage.setItem('num26', null);
	localStorage.setItem('num27', null);
	localStorage.setItem('num28', null);
}

function kaynnista() 
{
	var lue1 = document.getElementById('n1').value;
	var lue2 = document.getElementById('n2').value;
	var lue3 = document.getElementById('n3').value;
	var lue4 = document.getElementById('n4').value;
	var lue5 = document.getElementById('n5').value;
	var lue6 = document.getElementById('n6').value;
	var lue7 = document.getElementById('n7').value;
	var lue8 = document.getElementById('n8').value;
	var lue9 = document.getElementById('n9').value;
	var lue10 = document.getElementById('n10').value;
	var lue11 = document.getElementById('n11').value;
	var lue12 = document.getElementById('n12').value;
	var lue13 = document.getElementById('n13').value;
	var lue14 = document.getElementById('n14').value;
	var lue15 = document.getElementById('n15').value;
	var lue16 = document.getElementById('n16').value;
	var lue17 = document.getElementById('n17').value;
	var lue18 = document.getElementById('n18').value;
	var lue19 = document.getElementById('n19').value;
	var lue20 = document.getElementById('n20').value;
	var lue21 = document.getElementById('n21').value;
	var lue22 = document.getElementById('n22').value;
	var lue23 = document.getElementById('n23').value;
	var lue24 = document.getElementById('n24').value;
	var lue25 = document.getElementById('n25').value;
	var lue26 = document.getElementById('n26').value;
	var lue27 = document.getElementById('n27').value;
	var lue28 = document.getElementById('n28').value;
	localStorage.setItem('paalla', 1);
	localStorage.setItem('num1', lue1);
	localStorage.setItem('num2', lue2);
	localStorage.setItem('num3', lue3);
	localStorage.setItem('num4', lue4);
	localStorage.setItem('num5', lue5);
	localStorage.setItem('num6', lue6);
	localStorage.setItem('num7', lue7);
	localStorage.setItem('num8', lue8);
	localStorage.setItem('num9', lue9);
	localStorage.setItem('num10', lue10);
	localStorage.setItem('num11', lue11);
	localStorage.setItem('num12', lue12);
	localStorage.setItem('num13', lue13);
	localStorage.setItem('num14', lue14);
	localStorage.setItem('num15', lue15);
	localStorage.setItem('num16', lue16);
	localStorage.setItem('num17', lue17);
	localStorage.setItem('num18', lue18);
	localStorage.setItem('num19', lue19);
	localStorage.setItem('num20', lue20);
	localStorage.setItem('num21', lue21);
	localStorage.setItem('num22', lue22);
	localStorage.setItem('num23', lue23);
	localStorage.setItem('num24', lue24);
	localStorage.setItem('num25', lue25);
	localStorage.setItem('num26', lue26);
	localStorage.setItem('num27', lue27);
	localStorage.setItem('num28', lue28);
}

// Tarkistetaan annettujen numerojen kelvollisuus. Eli että ovat numeroita väliltä 1 - 39 ja että kullakin rivillä vain 1 kutakin numeroa.
function tarkistus(numerot)
{
	document.getElementById("n1").style.backgroundColor = vari(0, validnum(numerot, 0));
	document.getElementById("n2").style.backgroundColor = vari(0, validnum(numerot, 1));
	document.getElementById("n3").style.backgroundColor = vari(0, validnum(numerot, 2));
	document.getElementById("n4").style.backgroundColor = vari(0, validnum(numerot, 3));
	document.getElementById("n5").style.backgroundColor = vari(0, validnum(numerot, 4));
	document.getElementById("n6").style.backgroundColor = vari(0, validnum(numerot, 5));
	document.getElementById("n7").style.backgroundColor = vari(0, validnum(numerot, 6));
	document.getElementById("n8").style.backgroundColor = vari(0, validnum(numerot, 7));
	document.getElementById("n9").style.backgroundColor = vari(0, validnum(numerot, 8));
	document.getElementById("n10").style.backgroundColor = vari(0, validnum(numerot, 9));
	document.getElementById("n11").style.backgroundColor = vari(0, validnum(numerot, 10));
	document.getElementById("n12").style.backgroundColor = vari(0, validnum(numerot, 11));
	document.getElementById("n13").style.backgroundColor = vari(0, validnum(numerot, 12));
	document.getElementById("n14").style.backgroundColor = vari(0, validnum(numerot, 13));
	document.getElementById("n15").style.backgroundColor = vari(0, validnum(numerot, 14));
	document.getElementById("n16").style.backgroundColor = vari(0, validnum(numerot, 15));
	document.getElementById("n17").style.backgroundColor = vari(0, validnum(numerot, 16));
	document.getElementById("n18").style.backgroundColor = vari(0, validnum(numerot, 17));
	document.getElementById("n19").style.backgroundColor = vari(0, validnum(numerot, 18));
	document.getElementById("n20").style.backgroundColor = vari(0, validnum(numerot, 19));
	document.getElementById("n21").style.backgroundColor = vari(0, validnum(numerot, 20));
	document.getElementById("n22").style.backgroundColor = vari(0, validnum(numerot, 21));
	document.getElementById("n23").style.backgroundColor = vari(0, validnum(numerot, 22));
	document.getElementById("n24").style.backgroundColor = vari(0, validnum(numerot, 23));
	document.getElementById("n25").style.backgroundColor = vari(0, validnum(numerot, 24));
	document.getElementById("n26").style.backgroundColor = vari(0, validnum(numerot, 25));
	document.getElementById("n27").style.backgroundColor = vari(0, validnum(numerot, 26));
	document.getElementById("n28").style.backgroundColor = vari(0, validnum(numerot, 27));
	document.getElementById("n1").style.color = vari(1, validnum(numerot, 0));
	document.getElementById("n2").style.color = vari(1, validnum(numerot, 1));
	document.getElementById("n3").style.color = vari(1, validnum(numerot, 2));
	document.getElementById("n4").style.color = vari(1, validnum(numerot, 3));
	document.getElementById("n5").style.color = vari(1, validnum(numerot, 4));
	document.getElementById("n6").style.color = vari(1, validnum(numerot, 5));
	document.getElementById("n7").style.color = vari(1, validnum(numerot, 6));
	document.getElementById("n8").style.color = vari(1, validnum(numerot, 7));
	document.getElementById("n9").style.color = vari(1, validnum(numerot, 8));
	document.getElementById("n10").style.color = vari(1, validnum(numerot, 9));
	document.getElementById("n11").style.color = vari(1, validnum(numerot, 10));
	document.getElementById("n12").style.color = vari(1, validnum(numerot, 11));
	document.getElementById("n13").style.color = vari(1, validnum(numerot, 12));
	document.getElementById("n14").style.color = vari(1, validnum(numerot, 13));
	document.getElementById("n15").style.color = vari(1, validnum(numerot, 14));
	document.getElementById("n16").style.color = vari(1, validnum(numerot, 15));
	document.getElementById("n17").style.color = vari(1, validnum(numerot, 16));
	document.getElementById("n18").style.color = vari(1, validnum(numerot, 17));
	document.getElementById("n19").style.color = vari(1, validnum(numerot, 18));
	document.getElementById("n20").style.color = vari(1, validnum(numerot, 19));
	document.getElementById("n21").style.color = vari(1, validnum(numerot, 20));
	document.getElementById("n22").style.color = vari(1, validnum(numerot, 21));
	document.getElementById("n23").style.color = vari(1, validnum(numerot, 22));
	document.getElementById("n24").style.color = vari(1, validnum(numerot, 23));
	document.getElementById("n25").style.color = vari(1, validnum(numerot, 24));
	document.getElementById("n26").style.color = vari(1, validnum(numerot, 25));
	document.getElementById("n27").style.color = vari(1, validnum(numerot, 26));
	document.getElementById("n28").style.color = vari(1, validnum(numerot, 27));

	
	var pos = 0;
	while(pos < 28)
	{
		if(validnum(numerot, pos) == false)
		{
			return false;
		}
		pos++;
	}
	return true;
}

function validnum(numerot, monesko)
{
	// Ensin varmistetaan, että ovat lukuja ja että ovat validilla välillä.
	if(isNaN(numerot[monesko]) == true || numerot[monesko] < 1 || numerot[monesko] > 39)
	{
		return false;
	}
	
	// Ja sitten katsotaan, ettei yhdelläkään neljästä rivistä ole samaa lukua useampi kuin 1 kpl.
	if(monesko < 7)
	{
		var pos = 0;
		while(pos < 7)
		{
			if(monesko != pos && numerot[monesko] == numerot[pos])
			{
				return false;
			}
			pos++;
		}
	}
	if(monesko >= 7 && monesko <= 13)
	{
		var pos = 7;
		while(pos < 14)
		{
			if(monesko != pos && numerot[monesko] == numerot[pos])
			{
				return false;
			}
			pos++;
		}
	}
	if(monesko >= 14 && monesko <= 20)
	{
		var pos = 14;
		while(pos < 21)
		{
			if(monesko != pos && numerot[monesko] == numerot[pos])
			{
				return false;
			}
			pos++;
		}
	}
	if(monesko >= 21 && monesko <= 27)
	{
		var pos = 21;
		while(pos < 28)
		{
			if(monesko != pos && numerot[monesko] == numerot[pos])
			{
				return false;
			}
			pos++;
		}
	}
	
	return true;
}

// 0 = Taustan väri
// 1 = Tekstin väri
function vari(kumpi, ehto)
{
	if(kumpi == 0)
	{
		if(ehto == true)
		{
			return "white";
		}
		return "red";
	}
	if(kumpi == 1)
	{
		if(ehto == true)
		{
			return "black";
		}
		return "white";
	}
}

function tyhjenna(arvo)
{
	if(arvo === "null")
	{
		return "";
	}
	return arvo;
}

function arvoluvut(arv1, arv2, arv3, arv4, arv5, arv6)
{
	var luku;
	var pos;
	var olemassa = [];
	olemassa[0] = arv1;
	if(arv2 != 0)
	{
		olemassa[1] = arv2;
	}
	if(arv3 != 0)
	{
		olemassa[2] = arv3;
	}
	if(arv4 != 0)
	{
		olemassa[3] = arv4;
	}
	if(arv5 != 0)
	{
		olemassa[4] = arv5;
	}
	if(arv6 != 0)
	{
		olemassa[5] = arv6;
	}
	luku = 0;
	while(luku == 0)
	{
		luku = Math.floor((Math.random() * 39) + 1);
		pos = 0;
		while(pos < olemassa.length)
		{
			if(luku == olemassa[pos])
			{
				luku = 0;
				pos = olemassa.length;
			}
			pos++;
		}
	}
	return luku;
}

function laskeOikeat(numerot, rivi, arv1, arv2, arv3, arv4, arv5, arv6, arv7)
{
	var oikeaRivi = [];
	oikeaRivi[0] = arv1;
	oikeaRivi[1] = arv2;
	oikeaRivi[2] = arv3;
	oikeaRivi[3] = arv4;
	oikeaRivi[4] = arv5;
	oikeaRivi[5] = arv6;
	oikeaRivi[6] = arv7;
	/*
	Rivi 0 = Akun rivi
	Rivi 1 = Tupun rivi
	Rivi 2 = Hupun rivi
	Rivi 3 = Lupun rivi
	*/
	if(rivi == 0)
	{
		document.getElementById("n1").style.backgroundColor = oikeanKorostus(0, numerot[0], oikeaRivi);
		document.getElementById("n2").style.backgroundColor = oikeanKorostus(0, numerot[1], oikeaRivi);
		document.getElementById("n3").style.backgroundColor = oikeanKorostus(0, numerot[2], oikeaRivi);
		document.getElementById("n4").style.backgroundColor = oikeanKorostus(0, numerot[3], oikeaRivi);
		document.getElementById("n5").style.backgroundColor = oikeanKorostus(0, numerot[4], oikeaRivi);
		document.getElementById("n6").style.backgroundColor = oikeanKorostus(0, numerot[5], oikeaRivi);
		document.getElementById("n7").style.backgroundColor = oikeanKorostus(0, numerot[6], oikeaRivi);
		document.getElementById("n1").style.color = oikeanKorostus(1, numerot[0], oikeaRivi);
		document.getElementById("n2").style.color = oikeanKorostus(1, numerot[1], oikeaRivi);
		document.getElementById("n3").style.color = oikeanKorostus(1, numerot[2], oikeaRivi);
		document.getElementById("n4").style.color = oikeanKorostus(1, numerot[3], oikeaRivi);
		document.getElementById("n5").style.color = oikeanKorostus(1, numerot[4], oikeaRivi);
		document.getElementById("n6").style.color = oikeanKorostus(1, numerot[5], oikeaRivi);
		document.getElementById("n7").style.color = oikeanKorostus(1, numerot[6], oikeaRivi);
	}
	if(rivi == 1)
	{
		document.getElementById("n8").style.backgroundColor = oikeanKorostus(0, numerot[7], oikeaRivi);
		document.getElementById("n9").style.backgroundColor = oikeanKorostus(0, numerot[8], oikeaRivi);
		document.getElementById("n10").style.backgroundColor = oikeanKorostus(0, numerot[9], oikeaRivi);
		document.getElementById("n11").style.backgroundColor = oikeanKorostus(0, numerot[10], oikeaRivi);
		document.getElementById("n12").style.backgroundColor = oikeanKorostus(0, numerot[11], oikeaRivi);
		document.getElementById("n13").style.backgroundColor = oikeanKorostus(0, numerot[12], oikeaRivi);
		document.getElementById("n14").style.backgroundColor = oikeanKorostus(0, numerot[13], oikeaRivi);
		document.getElementById("n8").style.color = oikeanKorostus(1, numerot[7], oikeaRivi);
		document.getElementById("n9").style.color = oikeanKorostus(1, numerot[8], oikeaRivi);
		document.getElementById("n10").style.color = oikeanKorostus(1, numerot[9], oikeaRivi);
		document.getElementById("n11").style.color = oikeanKorostus(1, numerot[10], oikeaRivi);
		document.getElementById("n12").style.color = oikeanKorostus(1, numerot[11], oikeaRivi);
		document.getElementById("n13").style.color = oikeanKorostus(1, numerot[12], oikeaRivi);
		document.getElementById("n14").style.color = oikeanKorostus(1, numerot[13], oikeaRivi);
	}
	if(rivi == 2)
	{
		document.getElementById("n15").style.backgroundColor = oikeanKorostus(0, numerot[14], oikeaRivi);
		document.getElementById("n16").style.backgroundColor = oikeanKorostus(0, numerot[15], oikeaRivi);
		document.getElementById("n17").style.backgroundColor = oikeanKorostus(0, numerot[16], oikeaRivi);
		document.getElementById("n18").style.backgroundColor = oikeanKorostus(0, numerot[17], oikeaRivi);
		document.getElementById("n19").style.backgroundColor = oikeanKorostus(0, numerot[18], oikeaRivi);
		document.getElementById("n20").style.backgroundColor = oikeanKorostus(0, numerot[19], oikeaRivi);
		document.getElementById("n21").style.backgroundColor = oikeanKorostus(0, numerot[20], oikeaRivi);
		document.getElementById("n15").style.color = oikeanKorostus(1, numerot[14], oikeaRivi);
		document.getElementById("n16").style.color = oikeanKorostus(1, numerot[15], oikeaRivi);
		document.getElementById("n17").style.color = oikeanKorostus(1, numerot[16], oikeaRivi);
		document.getElementById("n18").style.color = oikeanKorostus(1, numerot[17], oikeaRivi);
		document.getElementById("n19").style.color = oikeanKorostus(1, numerot[18], oikeaRivi);
		document.getElementById("n20").style.color = oikeanKorostus(1, numerot[19], oikeaRivi);
		document.getElementById("n21").style.color = oikeanKorostus(1, numerot[20], oikeaRivi);
	}
	if(rivi == 3)
	{
		document.getElementById("n22").style.backgroundColor = oikeanKorostus(0, numerot[21], oikeaRivi);
		document.getElementById("n23").style.backgroundColor = oikeanKorostus(0, numerot[22], oikeaRivi);
		document.getElementById("n24").style.backgroundColor = oikeanKorostus(0, numerot[23], oikeaRivi);
		document.getElementById("n25").style.backgroundColor = oikeanKorostus(0, numerot[24], oikeaRivi);
		document.getElementById("n26").style.backgroundColor = oikeanKorostus(0, numerot[25], oikeaRivi);
		document.getElementById("n27").style.backgroundColor = oikeanKorostus(0, numerot[26], oikeaRivi);
		document.getElementById("n28").style.backgroundColor = oikeanKorostus(0, numerot[27], oikeaRivi);
		document.getElementById("n22").style.color = oikeanKorostus(1, numerot[21], oikeaRivi);
		document.getElementById("n23").style.color = oikeanKorostus(1, numerot[22], oikeaRivi);
		document.getElementById("n24").style.color = oikeanKorostus(1, numerot[23], oikeaRivi);
		document.getElementById("n25").style.color = oikeanKorostus(1, numerot[24], oikeaRivi);
		document.getElementById("n26").style.color = oikeanKorostus(1, numerot[25], oikeaRivi);
		document.getElementById("n27").style.color = oikeanKorostus(1, numerot[26], oikeaRivi);
		document.getElementById("n28").style.color = oikeanKorostus(1, numerot[27], oikeaRivi);
	}
	var oikeat = montakoOikeaa(numerot, rivi, oikeaRivi);
	return oikeat;
}

// 0 = Taustan väri
// 1 = Tekstin väri
function oikeanKorostus(kumpi, luku, oikeaRivi)
{
	var oikein = "#005f5f";
	var eiOikein = "white";
	if(kumpi != 0)
	{
		oikein = "white";
		eiOikein = "black";
	}
	var pos = 0;
	while(pos < oikeaRivi.length)
	{
		if(luku == oikeaRivi[pos])
		{
			return oikein;
		}
		pos++;
	}
	return eiOikein;
}

function montakoOikeaa(numerot, rivi, oikeaRivi)
{
	var oikeat = 0;
	var luku;
	var pos;
	var missaMennaan;
	var kayty = 0;
	switch (rivi)
	{
		case 0:
		missaMennaan = 0;
		break;
		case 1:
		missaMennaan = 7;
		break;
		case 2:
		missaMennaan = 14;
		break;
		case 3:
		missaMennaan = 21;
		break;
	}
	
	while(kayty < 7)
	{
		luku = numerot[missaMennaan];
		pos = 0;
		while(pos < oikeaRivi.length)
		{
			if(luku == oikeaRivi[pos])
			{
				oikeat++;
			}
			pos++;
		}
		missaMennaan++;
		kayty++;
	}
	return oikeat;
}
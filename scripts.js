jQuery(document).ready(function($){
	var tick = new Audio('tick.mp3');
	$('.easywheel').easyWheel({
		items: [
			{
				id      : 'a',
				name    : 'Porte Mouchoire ',
				message : 'Vous avez gagner une porte mouchoire total ',
				color   : '#f44336',
				win     : true
			},{
				id      : 'b',
				name    : 'Pas de chance   ',
				message : 'Vous n"avez pas de chance ajourd"hui',
				color   : '#f44336',
				win     : false
			},{
				id      : 'c',
				name    : '10 Littre de carburant <img src="https://www.icone-png.com/png/23/23432.png"/> ',
				message : 'Vous avez gagné 10 Littre de carburant ',
				color   : '#f44336',
				win     : true
			},{
				id      : 'd',
				name    : 'Lavage',
				message : 'Vous avez gagner un lavage gratuit',
				color   : '#f44336',
				win     : false
			},{
				id      : 'e',
				name    : 'Pare soleil	',
				message : 'Vous avez gagné un pare soleil Total',
				color   : '#f44336',
				win     : true
			},{
				id      : 'f',
				name    : 'Pas de chance ',
				message : 'Ayayay a la prochaine :() ',
				color   : '#f44336',
				win     : false
			}
		],
		centerImageWidth: 40,
		centerBackground: "#ffff",
		centerImage: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/dd/TOTAL_SA_logo.svg/2501px-TOTAL_SA_logo.svg.png",
		random: true,
		button : '.ew-center-empty',
		selected: $('select.select-winner'),
      onStep: function(item, slicePercent, circlePercent) {
            if (typeof tick.currentTime !== 'undefined')
                tick.currentTime = 0;
            tick.play();
        },
		onStart: function(results, spinCount, now) {
			$('.spinner-message').css('color','#90A4AE');
			$('.spinner-message').html('La surprise ...');
		},
		onComplete : function(results,count,now){
			$('.spinner-message').css('color',results.color).html(results.message);
			console.log(results,count,now);
		}
	});
});

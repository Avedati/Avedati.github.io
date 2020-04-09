window.onload = function() {
	['about', 'portfolio', 'resume', 'contact'].forEach(function(v) {
		document.getElementById(v + '-link').onclick = function() {
			[...document.getElementsByClassName('active')].forEach(function(w) {
				w.classList.remove('active');
			});
			document.getElementById(v).classList.add('active');
			this.classList.add('active');
		};
	});

	[...document.getElementsByClassName('portfolio-cell')].forEach(function(v) {
		v.onclick = function() {
			var link = 'https://github.com/Avedati/';
			if     (this.id === 'd2rubikscube') { link += '2DRubiksCube'; }
			else if(this.id === 'd3rubikscube') { link += '3DRubiksCube'; }
			else if(this.id === 'aicourse') { link = 'https://Avedati.github.io/TeachingWebsite#aicourse'; }
			else if(this.id === 'gamedesigncourse') { link = 'https://Avedati.github.io/TeachingWebsite#gamedesigncourse'; }
			else { link += this.id; }
			window.open(link);
		};
	});
}

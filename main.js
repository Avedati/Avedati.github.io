window.onload = function() {
	[...document.getElementById('options').children].forEach(function(li) {
		li.onclick = function() {
			[...document.getElementsByClassName('active')].forEach(function(v) {
				v.classList.remove('active');
			});
			li.classList.add('active');
			[...document.getElementsByClassName('screen')][[...document.getElementById('options').children].indexOf(li)].classList.add('active');
		}
	});

	[...document.getElementsByClassName('project')].forEach(function(v) {
		v.onclick = function() {
			var link = 'https://github.com/Avedati/';
			if     (this.id === 'd2rubikscube') { link += '2DRubiksCube'; }
			else if(this.id === 'd3rubikscube') { link += '3DRubiksCube'; }
			else if(this.id === 'aicourse') { link = 'https://Avedati.github.io/AbhisTutorials/#aicourse'; }
			else if(this.id === 'gamedesigncourse') { link = 'https://Avedati.github.io/AbhisTutorials/#gamedesigncourse'; }
			else { link += this.id; }
			window.open(link);
		};
	}); 

	document.getElementById('mobile-menu').onclick = function(ev) {
		var optionsList = document.getElementById('options');
		if(optionsList.classList.contains('active')) {
			document.getElementById('options').classList.remove('active');
		} else {
			document.getElementById('options').classList.add('active');
		}
	};
};

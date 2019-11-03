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

	var descriptions = {
		'mylisp':'My lisp is a hobby project of mine. It is a minimal, but working and expandable lisp interpreter. It is written in C11.',
		'ai2048':'This is a clone of the popular 2048 game. I wrote this program in C++ using the SFML library for graphics. It is essentially an animation of an AI based on a Pure Monte Carlo tree search playing 2048.',
		'athenaeum':'This is an in progress project. After I wrote my first web scraper, I realized the many inefficiencies that came as strings attached to my method of collecting and filtering through every text element on a webpage. Athenaeum, written in c, will be an improvement on Upsilon.',
		'stork':'Stork is a hobby project of mine. It is a small programming language.',
		'upsilon':'Upsilon is a simple web scraper written in python, using urllib.request to access webpages and tkinter for a GUI.',
		'armadillo':'This is the armadillo text editor. It was made for use on a chromebook. It has minimal features, including execution of HTML, CSS, and JavaScript code and saving multiple files together as a JSON object. This is a hobby project.',
		'summarybuilder':'Summary Builder is a hobby project of mine. It is a simple website that will take some text which the user types into an input field, and summarize it.',
		'htmlgamesandtools':'These are a collection of games and tools written in HTML, CSS, and JavaScript. The games use HTML5 Canvas to render. The minimal graphics are reflective of my programming level at the time that I wrote these pages.',
		'pythongames':'These are a collection of some of my earliest programs (following the two and three dimensional Rubik\'s Cubes). These games are all written in python using a graphics library for python known as pygame. Some of the games are clones of simple games, such as Pong, Breakout, or the 15 Puzzle. The other games are based on my own concepts. Most have rudimentary graphics, a product of my programming knowledge at the time.',
		'd3rubikscube':'This is a 3D Rubik\'s Cube designed in python 2 using the PyOpenGL library. This 3D Rubik\'s Cube was designed shortly after the 2D Rubik\'s Cube was designed. This program also includes many dubious programming practices, and has some rendering issues. It is also a good reference for where I started as a programmer.',
		'd2rubikscube':'The first major progam that I ever built was a rubik\'s cube simulation in python. It is written in python 2 using the turtle library for graphics. You can view it here. As you can see, this program has many ineffeciencies. This program is a good reference for where I started out as a programmer.'
	};

	var projects = {
		'mylisp':'MyLisp',
		'ai2048':'AI2048',
		'athenaeum':'Athenaeum',
		'stork':'Stork',
		'upsilon':'Upsilon',
		'armadillo':'Armadillo',
		'summarybuilder':'SummaryBuilder',
		'htmlgamesandtools':'HTMLGamesAndTools',
		'pythongames':'PythonGames',
		'd3rubikscube':'3DRubiksCube',
		'd2rubikscube':'2DRubiksCube'
	};

	[...document.getElementsByClassName('portfolio-cell')].forEach(function(v) {
		v.onclick = function() {
			document.getElementById('window').classList.remove('hidden');
			document.getElementById('window-title').innerHTML = v.innerHTML;
			var projectURL = 'https://github.com/Avedati/' + projects[v.id];
			document.getElementById('window-content').innerHTML = descriptions[v.id] + '<br/><br/><br/>You can check out this project at <a style=\'color:lightblue\' target=\'_blank\' href=\'' + projectURL + '\'>' + projectURL + '<a/>';
		};
	});

	document.getElementById('close').onclick = function() {
		document.getElementById('window').classList.add('hidden');
		document.getElementById('window-title').innerHTML = '';
		document.getElementById('window-content').innerHTML = '';
	};

	document.getElementById('contact-title').onkeydown = function(ev) { if(ev.keyCode === 13) { ev.preventDefault(); } }
	document.getElementById('contact-send').onclick = function() {
		var subject = document.getElementById('contact-title').value;
		var body = document.getElementById('contact-message').value;
		window.open('mailto:ajvedati@gmail.com?subject=' + subject + '&body=' + body);
	};
}

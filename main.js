(function() {
	var score = 0,
		currentQuestion = 0,
		questions = [	
						{
							question: "Who is the President of the United States?",
							choices: ["Michele Obama", "Bob Dylan", "Barack Obama", "Ray Charles" ],
							correctAnswer: 2
						},
						{
							question: "Where is Cory Booker from?",
							choices: ["Houston, TX", "Atlanta, GA", "The Bronx, NY", "Newark, NJ" ],
							correctAnswer: 3
						},
						{
							question: "Who sings 'Can't Wont' Stop?'",
							choices: ["Myley Cyrus", "Rihanna", "Justin Bieber", "Selena Gomez" ],
							correctAnswer: 0
						},
						{
							question: "What was the New York Yankees' original name?",
							choices: ["New York Mets", "New Jersey Devils", "New York Giants", "Baltimore Orioles" ],
							correctAnswer: 3
						},
						{
							question: "What is Spider-man's real name?",
							choices: ["Peter Parker", "James Bond", "Barack Obama", "Spider Jones" ],
							correctAnswer: 0
						}
					];	

		// Add our answer choices to page
		var addChoices = function(q) {
			// Grab our DOM elements
			var questionSpan = document.getElementById('question');
			var scoreSpan = document.getElementById('score');
			var lists = document.querySelectorAll('li');

			// Grab choices from questions object
			var choices = q.choices;
			var length = choices.length;

			questionSpan.innerHTML = q.question;
			scoreSpan.innerHTML = score;

			for (var i = 0; i < length; i++) {
				lists[i].innerHTML = choices[i]
			}
		

		}

		// Check the correctness of an answer choice and update score
		var submitChoice = function submitChoice(choice) {
			var question = questions[currentQuestion];

			if (choice === question.correctAnswer) {
				score += 20;
				currentQuestion += 1;
			} else {
				currentQuestion += 1;
			}

			if (currentQuestion < questions.length) {
				addChoices(questions[currentQuestion]);
			} 
			
		}
	
		// Add Event Listeners
		document.getElementById('A').addEventListener('click', function() { submitChoice(0) }, false);
		document.getElementById('B').addEventListener('click', function() { submitChoice(1) }, false);
		document.getElementById('C').addEventListener('click', function() { submitChoice(2) }, false);
		document.getElementById('D').addEventListener('click', function() { submitChoice(3) }, false);

		addChoices(questions[currentQuestion]);
})();
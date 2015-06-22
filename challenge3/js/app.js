var number_of_conditions = 6;

function show_answer(option){
 
	var answer;

	 if(option == 1) {
    answer = "NOPE!";
  }
  else if(option == 2) {
    answer = "Depends! Buy diapers.";
  }
  else if(option == 3) {
    answer = "Yeah... I guess.";
  }
  else if(option == 4) {
    answer = "You're an idiot.";
  }
  else if(option == 5) {
    answer = "Go home- You're drunk.";
  }
else if(option == 6) {
    answer = "Fuck off. Ask a professional.";
  }


	display_answer(answer);
}
$(function(){
	
	$("#launch").click(function(){
		
		$('#myOutput').empty();	
		$('body').removeClass();
		
		var myWord = $('#wordInput').val();
		var wordLength = myWord.length;
		var isPalindrome = true;
		
		$('#myOutput').val('');
		
		if (wordLength === 0) {
			alert("Please input a word");
			return;
		}
	
		for (i = 1; i < (Math.floor(wordLength/2) + 1); i++) {
			
			if (myWord[i-1] !== myWord[wordLength-i]) {
				isPalindrome = false;
				{break;} ;
			}
		}
	
		if (isPalindrome === true) {
			$('#myOutput').append(myWord + " is a Palindrome");
			$('body').addClass("palindromeStyle")
		} 
		else {
			$('#myOutput').append(myWord + " is NOT a Palindrome");
			$('body').addClass("notPalindromeStyle")
		}
	
	})
	
	$("#resetting").click(function(){
		$('#wordInput').val([]);
		$('#myOutput').empty();		
		$('body').removeClass();
	})
	
	
	
});
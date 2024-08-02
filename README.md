# MHSP---UBUZIMA
MHSP - UBUZIMA It is a web based , App and coming to be USSD platform that I made for people having mental issues where they will getting educational resources and meeting with professionals.



function submitAssessment() {
    const mood = document.getElementById('mood').value;
    let resultText = '';

    switch(mood) {
        case 'good':
            resultText = 'Great to hear you are feeling good! Keep up the positive mindset and continue engaging in activities that make you happy.';
            break;
        case 'average':
            resultText = 'It’s okay to have average days. Consider exploring our educational resources or joining a peer support forum to connect with others.';
            break;
        case 'bad':
            resultText = 'Sorry to hear you’re not feeling well. It might be helpful to reach out to a mental health professional. Don’t hesitate to use our directory to find help.';
            break;
   

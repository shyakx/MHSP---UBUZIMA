function submitAssessment() {
    const mood = document.getElementById('mood').value;
    const resultDiv = document.getElementById('assessment-result');
    let resultMessage = '';

    if (!mood) {
        resultMessage = 'Please select how you’re feeling today.';
        resultDiv.innerHTML = `<p style="color: #ff0000; font-weight: bold;">${resultMessage}</p>`;
        resultDiv.style.display = 'block';
        return;
    }

    switch (mood) {
        case 'good':
            resultMessage = 'We’re glad you’re feeling good today! Keep up the positive vibes. Consider sharing your positivity with others through our community forum.';
            break;
        case 'average':
            resultMessage = 'It’s okay to have average days. Consider exploring our resources to uplift your mood or connect with others in our support groups.';
            break;
        case 'bad':
            resultMessage = 'We’re sorry you’re feeling down. Please reach out for support from our professional counselors or explore self-care resources to help improve your mood.';
            break;
        default:
            resultMessage = 'Something went wrong. Please try again.';
    }

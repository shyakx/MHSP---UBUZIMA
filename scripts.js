function submitAssessment() {
    const mood = document.getElementById('mood').value;
    const resultDiv = document.getElementById('assessment-result');
    let resultMessage = '';

    if (mood === 'good') {
        resultMessage = 'We’re glad you’re feeling good today! Keep up the positive vibes.';
    } else if (mood === 'average') {
        resultMessage = 'It’s okay to have average days. Consider exploring our resources to uplift your mood.';
    } else if (mood === 'bad') {
        resultMessage = 'We’re sorry you’re feeling down. Reach out if you need support, and remember, you’re not alone.';
    }

    resultDiv.innerHTML = `<p style="color: #2e8b57; font-weight: bold;">${resultMessage}</p>`;
    resultDiv.style.display = 'block';
}
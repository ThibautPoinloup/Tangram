function toggleTheme(value) {
    const sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}

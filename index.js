const textarea = document.querySelector('textarea');
const form = document.querySelector('form');
const resetButton = document.querySelector('.resetButton');

form.addEventListener('submit', evt => {
    evt.preventDefault();
    const words = textarea.value
        .toLowerCase()
        .split('\n')
        .map(word => {
            let loc = word.indexOf('_');
            let firstLetter = word[loc + 1];
            return word.replace('_' + firstLetter, firstLetter.toUpperCase());
        });
    textarea.value = words.join('\n');
});

function reset() {
    textarea.value = '';
}

resetButton.addEventListener('click', reset);

// Developer's note - instead of creating 5 console logs, opted to convert all strings within the textarea box. Additional reset button to clear the textarea.

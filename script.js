let savedWords = [];
        function handleButtonMouseDown() {
            this.classList.add('pressed');
        }
        function handleButtonMouseUp() {
            this.classList.remove('pressed');
            let inputElement = this.id === 'generateBtn1' ? 'insertWord' : 'findWord';
            let inputValue = document.getElementById(inputElement).value;
            if (this.id === 'generateBtn1') {
                savedWords.push(inputValue);
                console.log('Inserted word is: ' + inputValue);
                console.log('Saved words: ' + savedWords.join(', '));
                document.getElementById('insertWord').value = '';
            } else {
                let isWordSaved = savedWords.includes(inputValue);
                let message = isWordSaved ? 'The word is in the dictionary!' : 'The word is NOT in the dictionary!';
                document.getElementById('buttonsContainer2').innerText = message;
                document.getElementById('findWord').value = '';
            }
        }
        document.getElementById('generateBtn1').addEventListener('mousedown', handleButtonMouseDown);
        document.getElementById('generateBtn1').addEventListener('mouseup', handleButtonMouseUp);
        document.getElementById('generateBtn2').addEventListener('mousedown', handleButtonMouseDown);
        document.getElementById('generateBtn2').addEventListener('mouseup', handleButtonMouseUp);

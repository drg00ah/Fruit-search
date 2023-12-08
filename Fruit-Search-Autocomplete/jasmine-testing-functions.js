describe('Autocomplete Feature', function() {
    let fruitInput, suggestions;
  
    beforeEach(function() {
 
      const inputContainer = document.createElement('div');
      inputContainer.innerHTML = `
        <input id="fruit" type="text">
        <div class="suggestions">
          <ul></ul>
        </div>
      `;
  
      document.body.appendChild(inputContainer);
  

      fruitInput = document.querySelector('#fruit');
      suggestions = document.querySelector('.suggestions ul');
  
      fruitInput.addEventListener('input', searchHandler);
      suggestions.addEventListener('click', useSuggestion);
    });

    afterEach(function() {
      document.body.removeChild(fruitInput.parentElement);
      fruitInput.removeEventListener('input', searchHandler);
      suggestions.removeEventListener('click', useSuggestion);
    });
  
    it('should display matching suggestions when input changes', function() {

      fruitInput.value = 'Ap';
      fruitInput.dispatchEvent(new Event('input'));
  
      expect(suggestions.style.display).toBe('block');
    });
  
    it('should select a suggestion when clicked', function() {
      fruitInput.value = 'Ap';
      fruitInput.dispatchEvent(new Event('input'));
      const suggestionItem = suggestions.querySelector('li');
      suggestionItem.click();
  
      expect(fruitInput.value).toBe(suggestionItem.textContent);
      expect(suggestions.style.display).toBe('none');
    });
  
  });
  
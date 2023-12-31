function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    let count = 0;
  
    // Создаем таблицу смещений для каждого символа в подстроке
    const skipTable = {};
    for (let i = 0; i < patternLength - 1; i++) {
      skipTable[pattern[i]] = patternLength - i - 1;
    }
  
    let i = patternLength - 1;
    while (i < textLength) {
      let j = patternLength - 1;
      let k = i;
  
      // Ищем совпадение символов в обратном порядке
      while (j >= 0 && text[k] === pattern[j]) {
        k--;
        j--;
      }
  
      // Если все символы совпали, увеличиваем счетчик
      if (j === -1) {
        count++;
      }
  
      // Вычисляем смещение в соответствии с таблицей смещений
      const skip = skipTable[text[i]] || patternLength;
      i += skip;
    }
  
    return count;
  }
  
  // Пример использования
  const text = 'abracadabra';
  const pattern = 'abra';
  const occurrences = boyerMooreSearch(text, pattern);
  console.log(`Количество вхождений подстроки "${pattern}" в строку "${text}": ${occurrences}`);
  
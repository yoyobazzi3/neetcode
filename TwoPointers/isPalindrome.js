const isPalindrome = (s) => {
    // Convert the string to lowercase and split it into an array of characters
    const filtered = [...s.toLowerCase()].filter((char) => {
        // Keep only alphanumeric characters
        return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
    });

    // Join the filtered characters back into a string
    const cleaned = filtered.join('');

    // Check if the cleaned string is a palindrome
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
};

// Example Usage
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Hello, World!")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
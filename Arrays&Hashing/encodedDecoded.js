class Codec {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded += `${str.length}#${str}`;
        }
        return encoded;
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        const decoded = [];
        let i = 0;

        while (i < s.length) {
            // Find the position of the next '#'
            const delimiterIndex = s.indexOf("#", i);

            // Get the length of the next string
            const length = parseInt(s.slice(i, delimiterIndex));

            // Extract the string of that length
            const str = s.slice(delimiterIndex + 1, delimiterIndex + 1 + length);

            // Add it to the result
            decoded.push(str);

            // Move the pointer past this segment
            i = delimiterIndex + 1 + length;
        }

        return decoded;
    }
}

const codec = new Codec();
const strs = ["hello", "world", "foo", "bar"];
const e = codec.encode(strs)
const d = codec.decode(e)

console.log(e)
console.log(d)
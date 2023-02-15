//The first letter of the word is toUppercase
let str = "lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(str.split(". ").map( item => item.charAt(0).toUpperCase() + item.slice(1)).join('\n\n'))


// filter-anagrams

let words = ['cider','study', 'angel', 'chin','cried', 'glean', 'dusty','inch']

for (let i = 0; i < words.length; i++) {

  let word = words[i];
  let alphabetical = word.split("").sort().join("");

  for (let j = 0; j < words.length; j++) {

    if (i === j) {
      continue;
    }

    let other = words[j];
    if (alphabetical === other.split("").sort().join("")) {
      console.log(word + " = " + other);
    }
  }
}





     



var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'J. R. R. Tolkien',
      title: 'The Lord of the Rings',
      readingStatus: false
    }
];

function showReadingStatus(library) {
for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const { author, title, readingStatus } = book;

    console.log('Book:', title);
    console.log('Author:', author);
    console.log('Reading Status:', readingStatus ? 'Already read' : 'Not read yet');
    console.log('------------------------');
}
}

showReadingStatus(library);
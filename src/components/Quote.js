import {useState} from 'react'

let qId;

// Randomize Quote
 const randQuoteIndex = () => {
    return Math.floor(Math.random() * 4)
}

qId = randQuoteIndex()

const Quote = () => {

    const [quotes] = useState ([
        {
            id: 1,
            text: 'Be yourself; everyone else is already taken.',
            author: 'Oscar Wilde',
        },
        {
            id: 2,
            text: 'Be the change that you wish to see in the world.',
            author: 'Mahatma Gandhi'
        },
        {
            id: 3,
            text: 'We accept the love we think we deserve.',
            author: 'Stephen Chbosky',
        },
        {
            id: 4,
            text: 'There are only two ways to live your life. One is though nothing is a miracle. The other is though everyhing is a miracle.',
            author: 'Albert Einstein',
        }
    ]);

    return (
        <div className='quote-container'>
            <h2 className='quote'>{quotes[qId].text}</h2>
            <h3 className='author'>{quotes[qId].author}</h3>
        </div>   
    )
}

export default Quote

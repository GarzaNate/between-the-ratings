// // interface BookGridProps {
// //     books: Book[];
// // }

// export default function BookGrid({ books }: BookGridProps) {
//     if (books.length === 0) {
//         return (
//             <p className="mt-8">
//                 Search for a book to get started.
//             </p>
//         );
//     }

//     return (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//             {/* {books.map(book => (
//                 <BookCard
//                     key={book.id}
//                     book={book}
//                 />
//             ))} */}
//         </div>
//     );
// }
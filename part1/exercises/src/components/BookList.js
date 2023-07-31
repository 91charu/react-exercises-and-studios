
export default function BookList() {
   let pageTitle = "Lets do it!!";
   let book1 = "https://parade.com/.image/t_share/MTkwNTgxMDM0NTM1MzY0NDc2/quotes-about-reading-books-5-1-jpg.jpg";
   let book2 = "https://hips.hearstapps.com/hmg-prod/images/annie-dillard-book-quote-1531936023.jpg";
   let book3 = "https://hips.hearstapps.com/hmg-prod/images/george-r-r-martin-book-quote-1531932564.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" height="200" width="150"/>
         <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" height="200" width="150" />
         <img src={book3} alt="The London Seance Society by Sarah Penner" height="200" width="150" />
      </div>      
   );
}

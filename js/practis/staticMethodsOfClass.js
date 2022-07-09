class Article {

   constructor(title, date) {
      this.title = title;
      this.date = date;
   }

   static compare(articleA, articleB) {
      return articleA.date - articleB.date;
   }
   static createTodays() {
      return new Article('Todays article', new Date());
   }
}

const articles = [
   new Article('CSS', new Date(1, 1, 2020)),
   new Article('JS', new Date(15, 3, 2020)),
   new Article('HTML', new Date(20, 5, 2020))
];

articles.sort(Article.compare);
console.log(articles[0].title);

const todaysArt = Article.createTodays();
console.log(todaysArt.date);
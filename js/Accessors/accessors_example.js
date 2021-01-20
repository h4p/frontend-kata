// Why Accessors?
//
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes

var person = {
    firstName: "Tobias",
    lastName: "Wessels",
    get birthPlace() {
        return "Ibbenbüren";
    },
    language : "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
}


person.lang = "en";
console.log(person.language);
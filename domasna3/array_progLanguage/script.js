//TOP CHOICE

// 2.Write an array called prog_languages that has three objects. 
// The objects should keep three properties (name: string, founder: object, founded: year). 
// The founder property is also an object that stores the name and e-mail values of the founder 
// (these don't have to be real values, you can make them up... or Google them). 

// a.Output the whole array in the console
// b.In another line, output only the first item in the array
// c.In another line, output the e-mail of the founder of the second item in the array
// d.Add one item (object) to the beginning of the array
// e.Add one item (object) to the end of the array
// f.Output the changes

let prog_lang = [{
    name: "javascript",
    founded: 1978,
    founder: {
        name: "Brian Allen",
        e_mail: "brian@gmail.com"
    }
},
{
    name: "fortran",
    founded: 1985,
    founder: {
        name: "Bob Staford",
        e_mail: "bob@gmail.com"

}
},
{
    name: "visualBasic",
    founded: 1993,
    founder: {
        name: "bill fraiser",
        e_mail: "fraiser@gmail.com"

}
}
]

prog_lang.unshift({
    name: "pyton",
    founded: 1995,
    founder: {
        name: "marry frimon",
        e_mail: "freemon@gmail.com"
}
})


prog_lang.push({
    name: "c++",
    founded: 1993,
    founder: {
        name: "florence bimon",
        e_mail: "florence@gmail.com"
}
})
console.log(prog_lang);
console.log(prog_lang[0]);
console.log(prog_lang[1].e_mail);



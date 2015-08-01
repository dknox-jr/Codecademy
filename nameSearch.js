var text = "Hello, my name is Dave, but you can just call me Dave.  Is that alright with you?";

var myName = "Dave";

var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === "D") {
        for (j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }
}
if (hits.length == 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
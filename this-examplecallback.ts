interface UIElements {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Element2 implements UIElements{
    addClickListener(onclick: (this: void, e: Event) => void) {       
        console.log("sss");
        onclick(null);
    }
}

class Handler{
    info: string;
    onclickBad(this: void, e: Event) {
        console.log("clicked");
    }
}

let h = new Handler();
new Element2().addClickListener(h.onclickBad);
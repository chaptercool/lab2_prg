//Zadanie 1
class Prostokat{
    //a
    constructor(x, y, name){
        this.wysokosc=x;
        this.szerokosc=y;
        this.nazwa=name;
    }
    //c
    Obwod(){
        return (this.wysokosc+this.szerokosc)*2
    }
    //d
    Pole(){
        return this.wysokosc*this.szerokosc
    }
    //e
    PorownajZ(innyP){
        if(this.Pole() != innyP.Pole()){
            if(this.Pole() > innyP.Pole()){
                return this
            }else{
                return innyP
            }
        }else{
            return 0
        }
    }
    // Zadanie 6
    ZmianaNazwy(nowaNazwa){
        this.nazwa = nowaNazwa;
        return this.nazwa
    }
}


//b
prostokat1= new Prostokat(2,4,"Numer 1");
prostokat2= new Prostokat(3,6,"Numer 2");
prostokat3= new Prostokat(4,2,"Numer 3");

console.log(prostokat1.nazwa + ", pole prostokąta wynosi " + prostokat1.Pole());
console.log(prostokat2.nazwa + ", pole prostokąta wynosi " + prostokat2.Pole());
console.log(prostokat3.nazwa + ", pole prostokąta wynosi " + prostokat3.Pole());

// //c
 console.log("Obwód prostokąta o wymiarach: " + prostokat1.wysokosc + " i " + prostokat1.szerokosc + " wynosi: " + prostokat1.Obwod());

// //d
 console.log("Pole prostokąta o wymiarach: " + prostokat1.wysokosc + " i " + prostokat1.szerokosc + " wynosi: " + prostokat1.Pole());

// //e
 console.log( "Większy prostokąt to: "+prostokat1.PorownajZ(prostokat2).nazwa);

// // równe
 console.log( "Większy prostokąt to: "+prostokat1.PorownajZ(prostokat3).nazwa); //undefined


//Zadanie 2
class Trojkat{
    //a
    constructor(x, y, name){
        this.wysokosc=x;
        this.podstawa=y;
        this.nazwa=name;
    }

    //c
    Pole(){
        return this.wysokosc*this.podstawa/2
    }

    //d
    PorownajZ(innyT){
        if(this.Pole() != innyT.Pole()){
            if(this.Pole() > innyT.Pole()){
                return this
            }else{
                return innyT
            }
        }else{
            return 0
        }
        
    }
}

//b
t1= new Trojkat(2,4,"T 1");
t2= new Trojkat(3,6,"T 2");
t3= new Trojkat(8,2,"T 3");

console.log(t1.nazwa + ", pole trójkąta wynosi " + t1.Pole());
console.log(t2.nazwa + ", pole trójkąta wynosi " + t2.Pole());
console.log(t3.nazwa + ", pole trójkąta wynosi " + t3.Pole());

// //c
// console.log("Pole trojkata o wymiarach: " + t1.wysokosc + " i " + t1.podstawa + " wynosi: " + t1.Pole());

// //d
// console.log( "Większy prostokąt to: "+t1.PorownajZ(t2).nazwa);

//Zadanie 3 - ponownie wystarczy przerobić klasę - samodzielnie
class Trapez{
    //a, b
    constructor(wysokosc, podstawa1, podstawa2, name){
        this.wysokosc_=wysokosc;
        this.podstawa_1=podstawa1;
        this.postawa_2 = podstawa2;
        this.nazwafigury = name;
    }

    //c
    Pole(){
        return (this.podstawa_1 + this.postawa_2) * this.wysokosc_ / 2;
    }
}

poletrapeza = new Trapez(10, 10, 2, "trapez");
console.log("Pole trapeza wynosi " + poletrapeza.Pole());


//Zadanie 4
function porownywanieFigur(f1, f2, f3) {
    let max = f1.Pole();
    let figurename = f1.name;
    if (f2.Pole() > max) {
        max = f2.Pole();
        figurename = f2.name;
    }
    if (f3.Pole() > max) {
        max = f3.Pole();
        figurename = f3.name;
    }
    console.log("Największą figurą jest " + figurename);
}

porownywanieFigur(t1, prostokat1, poletrapeza)


//zadanie 5
function porownanieprostokatow(pr1, pr2){
    if(pr1.Pole() != pr2.Pole()){
        if(pr1.Pole() > pr2.Pole()){
            console.log("Większa jest figura: "+pr1.nazwa);
        }else{
            console.log("Większa jest figura: "+pr2.nazwa); // nwm jaki błąd naprawdę(
        }
    }else{
        console.log("Pola figur są równe!")
    }
}

porownanieprostokatow(prostokat1, prostokat2) // 8 !> 18
porownanieprostokatow(prostokat2, prostokat3) // 18 > 8
porownanieprostokatow(prostokat1, prostokat3) // 8 != 8
//Zadanie 6
console.log("Nazwa figury została zmieniona na " + prostokat1.ZmianaNazwy("P8"));
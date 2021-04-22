
type CustomerType = {
    id: number,
    name: string;
    city?: string;
};

let cust: CustomerType = {
    id: 1,
    name: "Customer",
    city: 'Coimbatore'
}
console.log(cust);
////////////////////////////////////////////////////////////////////////////////
//Union types and interface/class/type;

interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");
//configure("automatic"); //error

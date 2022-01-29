// =========================================================================
// variables with prices
// -------------------------------------------------------------------------
// Stage 1
const costBand11 = 75;
const costBand12 = 110;
const costBand13 = 100;
// Stage 2
const costBand21 = 65;
const costBand22 = 80;
const costBand23 = 99;
// Stage 3
const costBand31 = 70;
const costBand32 = 120;
const costBand33 = 90;
// -------------------------------------------------------------------------
// output the pricelist
console.log(`The prices for Stage 1 are ${costBand11}€, ${costBand12}€ and ${costBand13}€`);
console.log(`The prices for Stage 2 are ${costBand21}€, ${costBand22}€ and ${costBand23}€`);
console.log(`The prices for Stage 3 are ${costBand31}€, ${costBand32}€ and ${costBand33}€`);
// =========================================================================


// invoices
// =========================================================================
// function to calculate invoices
const calculateInvoice = (event1, event2, event3) => {return event1 + event2 + event3};
//student invoice function
const studentInvoice = (event1, event2, event3) => {
    return calculateInvoice(event1, event2, event3) / 10 * 9;
}
// -------------------------------------------------------------------------
//generelle text snipets for outputs
const invoiceText = 'The total price for the choosen three events is: ';
const invoiceTextStudents = '(For students only!) The total discounted price for the choosen three events is: ';

// -------------------------------------------------------------------------
//some invoice examples:

// (normal price)
const invoice1 = invoiceText + calculateInvoice(costBand11, costBand22, costBand33) +'€';
const invoice2 = invoiceText + calculateInvoice(costBand12, costBand23, costBand31) +'€';
const invoice3 = invoiceText + calculateInvoice(costBand13, costBand21, costBand32) +'€';
// (includes student discount)
const invoice1S = invoiceTextStudents + studentInvoice(costBand13, costBand22, costBand33) +'€';
const invoice2S = invoiceTextStudents + studentInvoice(costBand12, costBand23, costBand31) +'€';
const invoice3S = invoiceTextStudents + studentInvoice(costBand11, costBand21, costBand32) +'€';
// -------------------------------------------------------------------------

//output the invoices by console
console.log(invoice1);
console.log(invoice2);
console.log(invoice3);

console.log(invoice1S);
console.log(invoice2S);
console.log(invoice3S);
// =========================================================================
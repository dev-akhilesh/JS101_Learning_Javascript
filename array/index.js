var products = ["earphone", "headphones", "mic", "ipad", "cell phone", "laptop"];
var start = 0;
if(products.length>3)
{
start = products.length - 3;
}
for(var i=start; i<products.length; i++)
{
console.log(products[i]);
}


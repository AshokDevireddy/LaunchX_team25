

//var button = document.getElementsById('root');
//console.log(button[0].tagName);
//button.style.color = 'blue';

/*if (document.href = 'https://www.instacart.com')
	{
		console.log(document.href);
		console.log(document.pathname);
		console.log(document.href);
		document.body.style.backgroundColor = "green";
		var elem = document.getElementById('root');
		elem.style.background = 'green';
	}*/
//document.location.reload();
//if (document.location.href == "https://www.instacart.com/store/safeway/storefront")
	//{

		var a1 = document.createElement('img');
		a1.src = 'https://lh3.googleusercontent.com/EzoDNKFRBb9spainA8DzZIM3zxz7QGoFYYwZIiN1bvjgdNIi8FEHEaeidkdRWO7vpQiJpHfveZPoUNszY_iD3jgS5smJeRIHBvOkiY5V67ta76QoifBsGAsoHQgHc905kkSHkoayIBqGtKJYGyxyS1IEu2PtZfdPpQCTW1y7cIqVnhrcfvZW63RYdb-Ul5s35TgvX7-c-T-UOEnBjuF07EVHy1kPP8Wf2Epm_-nGX0IAkUwsbV3fXCNx9VMMRtyVeyanM246FsC4wNZX5xIlOwaQ6CPqrzJ5-vv3GHrH6l0_nst9T6vYlUmbgBJIPibt-Et4_29emARq7qhs1SG7q8aiy1KjVLtdnh2I4zZ55_pOTvhMCW1Y6hEK3oRhdBYGEGd4oKyyowxQoRaEf0LQC7yhb6ASlb0h-dAW76yG2rXJN09QJ1ibqExGAnFUqY_fn7Df6KYVFNI4IB7kbksz7gRg4RkEkMshQwVp5uIAJFmelJdL2Pvy_mQFlM9jiulaTMR1EY5PyxEfG84_cyhQ_3JUqbJ4EQdjEQ8MlAik9dGD6XICGAcefYu-eGCqyrQ9AzJtbpfZBHG-mDdlZwire5V6Ko7V4eQDksQ3Ik5Uf1e3m9-w-9Cj9lpjrx7A-nEdtjSU2OvP7VVVIuwH9p3d2En42CKL9qIEiJKDMLJrCWuja8m1spe1gLV1enY=w276-h145-no?authuser=3';
		var button = document.querySelector("button[data-identifier='cart_view_button']"); 
//a1.style.position = "absolute";
		a1.style.width = "auto";
		a1.style.height = "100px";
		var thing = button.parentElement;
		thing.appendChild(a1);
		if (document.body.clientWidth > 1455)
		{
			var within = document.querySelector("div[data-identifier='availability_chooser']");
			within.style.marginRight = "200px";
		}
		var input = document.querySelector("form[data-identifier='search_input']").parentElement.parentElement;
var input2 = document.querySelector("form[data-identifier='search_input']").parentElement;
var img = document.createElement('img');
img.src= "https://d2d8wwwkmhfcva.cloudfront.net/155x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4d179410-4324-437b-8530-04c6912958b2.JPG";
img.style.marginLeft = '50%';
		input.insertBefore(img, input2);
	//}


document.querySelector("button[data-identifier='cart_view_button']").addEventListener("click", function() {
	console.log("hi");
	var img2 = document.createElement('img');
	img2.src = "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1/d2240f3c-34d1-4d25-8653-77213b4bd41c.png";
	setTimeout(function()
		{	   var x = document.querySelector("a[class='ic-btn ic-btn-success ic-btn-lg']").parentElement;
	x.appendChild(img2);},4000);
	
});

setTimeout(function(){
	
	console.log("hissss");
document.querySelectorAll('.item-card-contents').forEach(item => {

	item.parentElement.addEventListener("click", event => {
		console.log("hissss");
		setTimeout(function() {
			console.log("hix");
			var img2 = document.createElement('img');
			img2.src = "https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1/d2240f3c-34d1-4d25-8653-77213b4bd41c.png";
			var x = document.querySelector("div[class='col-md-7']");
			x.appendChild(img2);
		},4000);
	})
})
	}, 4000);




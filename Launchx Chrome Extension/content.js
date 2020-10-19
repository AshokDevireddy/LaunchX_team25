

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
		a1.src = 'https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/cart.png?raw=true';
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
img.src= "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/search.png?raw=true";
img.style.marginLeft = '35%';
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
			img2.src = "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/goback.png?raw=true";
			//img2.style.position = "absolute";
			img2.style.position = "absolute";
			img2.style.maxWidth = "none";
			console.log("aaaaaa");
			var x = document.querySelector("div[class='icModalClose']");
			x.appendChild(img2);
			
			var img3 = document.createElement('img');
			img3.src = "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/amount.png?raw=true";
			var z = document.querySelector("select[id='quantity-selector']").parentElement.parentElement;
			z.appendChild(img3);
			
			var img4 = document.createElement('img');
			img4.src = "https://github.com/AshokDevireddy/LaunchX_team25/blob/master/Launchx%20Chrome%20Extension/images/scroll.png?raw=true";
			img4.style.marginLeft = "40%";
			var a = document.querySelector("div[class='item-detail-module clearfix']").parentElement;
			a.appendChild(img4);
		},3000);
	})
})
	}, 6000);




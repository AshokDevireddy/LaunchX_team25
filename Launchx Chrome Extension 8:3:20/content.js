

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
var a1 = document.createElement('img');
a1.src = 'https://lh3.googleusercontent.com/EzoDNKFRBb9spainA8DzZIM3zxz7QGoFYYwZIiN1bvjgdNIi8FEHEaeidkdRWO7vpQiJpHfveZPoUNszY_iD3jgS5smJeRIHBvOkiY5V67ta76QoifBsGAsoHQgHc905kkSHkoayIBqGtKJYGyxyS1IEu2PtZfdPpQCTW1y7cIqVnhrcfvZW63RYdb-Ul5s35TgvX7-c-T-UOEnBjuF07EVHy1kPP8Wf2Epm_-nGX0IAkUwsbV3fXCNx9VMMRtyVeyanM246FsC4wNZX5xIlOwaQ6CPqrzJ5-vv3GHrH6l0_nst9T6vYlUmbgBJIPibt-Et4_29emARq7qhs1SG7q8aiy1KjVLtdnh2I4zZ55_pOTvhMCW1Y6hEK3oRhdBYGEGd4oKyyowxQoRaEf0LQC7yhb6ASlb0h-dAW76yG2rXJN09QJ1ibqExGAnFUqY_fn7Df6KYVFNI4IB7kbksz7gRg4RkEkMshQwVp5uIAJFmelJdL2Pvy_mQFlM9jiulaTMR1EY5PyxEfG84_cyhQ_3JUqbJ4EQdjEQ8MlAik9dGD6XICGAcefYu-eGCqyrQ9AzJtbpfZBHG-mDdlZwire5V6Ko7V4eQDksQ3Ik5Uf1e3m9-w-9Cj9lpjrx7A-nEdtjSU2OvP7VVVIuwH9p3d2En42CKL9qIEiJKDMLJrCWuja8m1spe1gLV1enY=w276-h145-no?authuser=3';
var button = document.querySelector("button[data-identifier='cart_view_button']");
//a1.style.position = "absolute";
a1.style.top = "40px";
a1.style.right = "100px";
var thing = button.parentElement;
thing.appendChild(a1);



document.body.style.backgroundColor = 'green';
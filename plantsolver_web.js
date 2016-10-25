var nutrients = Nutrient.nutrients()

function filter()
{
	var locations = get_primary_locations(nutrients)
	
	var elements = []
	for (loc in locations)
	{
		var element = $("<a></a>").text(loc)
		$(element).click(function() {
			alert(loc + "clicked!")
		})

		elements.push(element)
	}

	for (element in elements)
	{
		console.log("adding element: " + element.text)
		$("#location_div").append(element)
	}
}

window.onload = function()
{
	filter();
}
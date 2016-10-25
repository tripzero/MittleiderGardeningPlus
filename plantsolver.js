class Colors
{
	static get yellow() { return "yellow"; }
	static get red() { return "red"; }
	static get purple() { return "purple"; }
	static get brown() { return "brown"; }
	static get green() { return "green"; }
	static get dark_green() { return "dark green"; }
	static get orange() { return "orange"; }
	static get creamy_white() { return "creamy white"; }
}

class Color
{
	constructor(color, attribute = undefined)
	{
		this.color = color
		this.color_attribute = attribute
	}
}

class ColorAttributes
{
	static get general() { return "general"; }
	static get blotches() { return "blotches"; }
	static get streaks() { return "streaks"; }
}

class Fruit
{
	static get poor_fruit_quality() { return "poor fruit quality"; }
	static get misshapen() { return "misshapen"; }
	static get failure() { return "failure to fruit"; }
	static get poor_fruit_set() { return "poor fruit set"; }
}

class Flowering
{
	static get poor_fruit_set() { return "poor fruit set"; }
	static get poor_flower_set() { return "poor flower set"; }
	static get flower_drop() { return "flower drop"; }
	static get failure() { return "failure to flower"; }
}

class Structural
{
	static get scorching() { return "scorching"; }
	static get death () { return "death"; }
	static get wilting () { return "wilting"; }
	static get enlarged_leaves () { return "enlarged leaves"; }
	static get weak () { return "weak"; }
	static get downward_bend() { return "downward bend"; }
	static get leathery_feel() { return "leathery feel"; }
	static get stunted_growth() { return "stunted growth"; }
	static get twisted() { return "twisted"; }
	static get leaf_drop() { return "leaf drop"; }
	static get spindly() { return "spindly"; }
	static get thin() { return "thin"; }
	static get rupture() { return "rupture"; }
	static get curl() { return "curl"; }
	static get undersized() { return "undersized"; }
}

class Location
{
	static get new_leaves() { return "new leaves"; }
	static get old_leaves() { return "old leaves"; }
	static get roots() { return "roots"; }
	static get stem() { return "stem"; }
	static get terminal_bud() { return "terminal bud"; }
	static get seed_leaves() { return "seed leaves"; }
	static get leaf_veins() { return "leaf veins"; }
	static get between_leaf_veins() { return "between leaf veins"; }
	static get fruit() { return "fruit"; }
	static get flower() { return "flower"; }
	static get leaf_upper_side() { return "leaf upper side"; }
	static get leaf_underside() { return "leaf underside"; }
	static get leaf_edge() { return "leaf edge"; }

	constructor(location, structure = [], color = [])
	{
		this.location = location
		this.structure = structure
		this.color = color
	}
}

class Nutrient
{
	constructor()
	{
		this.location = []
	}

	static nutrients()
	{
		return [new Nitrogen(), new Phosphorus(), new Potassium(), new Calcium(), new Manganese(),
		    new Boron(), new Iron(), new Molybdemnum(),
		    new  Sulfer(), new Manganese(), new Copper(), new Zinc(), new Chlorine()]
	}
}

class Nitrogen extends Nutrient
{
	constructor()
	{
		super()
		var old_leaves = new Location(Location.old_leaves, [Structural.weak, Structural.spindly, Structural.death], [new Color(Colors.yellow)])
		var stem = new Location(Location.stem, [Structural.weak, Structural.spindly])
		var fruit = new Location(Location.fruit, [Fruit.failure])

		this.location = [old_leaves, stem, fruit]
	}
}

class Phosphorus extends Nutrient
{
	constructor()
	{
		super()
		var stem = new Location(Location.stem, [Structural.weak, Structural.spindly, Structural.thin])
		var leaves = new Location(Location.stem, [Structural.weak, Structural.spindly, Structural.thin],
		                  [new Color(Colors.red, new ColorAttributes(ColorAttributes.general, [Location.leaf_upper_side])), 
		                   new Color(Colors.purple, new ColorAttributes(ColorAttributes.blotches, [Location.between_leaf_veins, Location.leaf_underside])),
		                   new Color(Colors.purple, new ColorAttributes(ColorAttributes.general, [Location.leaf_upper_side]))])

		var fruit = new Location(Location.fruit, [Fruit.poor_fruit_set, Fruit.poor_fruit_quality])

		this.location = [stem, leaves, fruit]
	}
}

class Potassium extends Nutrient
{
	constructor() {
		super()

		var leaves = new Location(Location.old_leaves, [Structural.scorching],
		                 [new Color(Colors.brown, new ColorAttributes(ColorAttributes.blotches, [Location.between_leaf_veins])),
		                  new Color(Colors.brown, new ColorAttributes(ColorAttributes.general, [Location.leaf_edge]))])

		var stem = new Location(Location.stem, [Structural.weak, Structural.downward_bend])
		var fruit = new Location(Location.fruit, [Fruit.poor_fruit_quality])
		var root = new Location(Location.roots, [Structural.stunted_growth])

		this.location = [leaves, stem, fruit, root]
	}
}

class Calcium extends Nutrient
{
	constructor() {
		super()

		var terminal_bud = new Location(Location.terminal_bud, [Structural.death])
		var leaves = new Location(Location.new_leaves, [Structural.wilting, Structural.death, Structural.scorching, Structural.enlarged_leaves, Structural.stunted_growth],
			              [new Color(Colors.brown, new ColorAttributes(ColorAttributes.general))])

		var fruit = new Location(Location.fruit, [Fruit.poor_fruit_set])
		var flower = new Location(Location.flower, [Flowering.poor_flower_set])

		this.location = [terminal_bud, leaves, fruit, flower]
	}
}

class Magnesium extends Nutrient
{
	constructor() {
		super()

		var leaves = new Location(Location.old_leaves, [], [new Color(Colors.yellow, new ColorAttributes(ColorAttributes.blotches, [Location.between_leaf_veins])),
			                                        new Color(Colors.red),
			                                        new Color(Colors.purple),
			                                        new Color(Colors.orange)])

		var flower = new Location(Location.flower, [Flowering.flower_drop], [new Color(Colors.yellow)])

		this.location = [leaves, flower]
	}
}

class Boron extends Nutrient
{
	constructor() {
		super()

		var terminal_bud = new Location(Location.terminal_bud, [Structural.death])
		var seed_leaves = new Location(Location.seed_leaves, [Structural.enlarged_leaves, Structural.leathery_feel])

		this.location = [terminal_bud, seed_leaves]
	}
}

class Iron extends Nutrient
{
	constructor() {
		super()

		var leaves = new Location(Location.new_leaves, [], [new Color(Colors.yellow, new ColorAttributes(ColorAttributes.blotches, [Location.between_leaf_veins])),
			                                        new Color(Colors.dark_green, new ColorAttributes(ColorAttributes.general, [Location.leaf_veins]))])

		var old_leaves = new Location(Location.old_leaves, [Structural.leaf_drop], [new Color(Colors.yellow, new ColorAttributes(ColorAttributes.general))])

		var flowers = new Location(Location.flower, [Flowering.flower_drop])

		this.location = [leaves, old_leaves, flowers]
	}
}

class Molybdemnum extends Nutrient
{
	constructor() {
		super()

		var leaves = new Location(Location.new_leaves, [Structural.spindly, Structural.rupture])
		var fruit = new Location(Location.fruit, [Fruit.poor_fruit_quality])
		var flower = new Location(Location.flower, [Flowering.flower_drop])

		this.location = [leaves, fruit, flower]
	}
}

class Sulfer extends Nutrient
{
	constructor() {
		super()

		var leaves = new Location(Location.new_leaves, [], [new Color(Colors.creamy_white)])
		var terminal_buds = new Location(Location.terminal_bud, [Structural.death])
		var old_leaves = new Location(Location.old_leaves, [Structural.death, Structural.leaf_drop])

		this.location = [leaves, terminal_buds, old_leaves]
	}
}

class Manganese extends Nutrient
{
	constructor() {
		super()
		
		var iron = new Iron()
		var sulfer = new Sulfer()

		for (var i=0; i<iron.location.length; i++)
			var item = iron.location[i]
			this.location.push(item)

		for (var i=0; i<sulfer.location.length; i++)
			var item = sulfer.location[i]
			this.location.push(item)
	}
}

class Copper extends Nutrient
{
	constructor() {
		super()

		var leaves = new Location(Location.new_leaves, [Structural.curl], [new Color(Colors.yellow, new ColorAttributes(ColorAttributes.streaks, [Location.between_leaf_veins]))])

		this.location.push(leaves)
	}
}

class Zinc extends Nutrient
{
	constructor() {
		super()

		var terminal_bud = new Location(Location.terminal_bud, [Structural.undersized])

		var leaves = new Location(Location.new_leaves, [], [new Color(Colors.yellow, new ColorAttributes(ColorAttributes.streaks, [Location.between_leaf_veins])),
			                                        new Color(Colors.green, new ColorAttributes(ColorAttributes.general, [Location.leaf_veins])),
			                                        new Color(Colors.red, new ColorAttributes(ColorAttributes.general, [Location.between_leaf_veins])),
			                                        new Color(Colors.orange, new ColorAttributes(ColorAttributes.general, [Location.between_leaf_veins]))])

		this.location.push(leaves)
	}
}

class Chlorine extends Nutrient
{
	constructor() {
		super()

		var leaves = new 	Location(Location.new_leaves, [Structural.wilting])
		var stem = new 	Location(Location.stem, [Structural.wilting])

		this.location = [leaves, stem]
	}
}

function unique(list)
{
	function onlyUnique(value, index, self) { 
    	return self.indexOf(value) === index;
	}

	return list.filter(onlyUnique);
}

function get_primary_locations(nutrients) {
	
	var locations = []

	for (var n_=0; n_<nutrients.length; n_++) {
		var n = nutrients[n_]
		for (var l_ = 0; l_<n.location.length; l_++) {
			var l = n.location[l_]
			console.log("adding location: "+ l.location)
			locations.push(l.location)
		}
	}

	var locations = unique(locations)

	return locations
}

function get_nutrients_for_primary_location(location) {
	var filtered_nutrients = []

	for (var n_=0; n<nutrients.length; n_++) {
		var n = nutrients[n_]
		for (var l_=0; l_<n.location.length; l_++) {
			var l = n.location[l_]
			if (l.location === location) {
				filtered_nutrients.push(n)
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_colors(nutrients) {

	var colors = []

	for (var n_=0; n_< nutrients.length; n_++) {
		var n = nutrients[n_]
		for (var l_=0; l_< n.location.length; l_++) {
			l = n.location[l_]
			for (var c_=0; c_<l.color.length; c_++) {
				c = l.color[c_]
				colors.push(c.color)
			}
		}
	}

	colors = unique(colors)

	return colors
}

function get_nutrients_for_color(color) {
	var filtered_nutrients = []

	for (var n=0; n< nutrients.list; n++) {
		var nutrient = nutrients[n]
		for (var l=0; l<nutrient.location.length; l++) {
			var location = nutrient.location[l]
			for (var c=0; c<location.color.length; c++) {
				var color = location.color[c]
				if (color.color === color) {
					filtered_nutrients.push(nutrient)
				}
			}
		}
	}

	filtered_nutrients = unique(filtered_nutrients)
	return filtered_nutrients
}

function get_structural(nutrients) {

	var structs = []
	for (var n=0; n<nutrients.length; n++) {
		var nutrient = nutrients[n]
		for (var l=0; l<nutrient.location; l++) {
			var location = nutrient.location[l]
			structs.concat(location.structure)
		}
	}

	structs = unique(structs)

	return structs
}

function get_nutrients_for_structural_symptom(symptom) {
	var filtered_nutrients = []

	for (var n=0; n<nutrients.length; n++) {
		var nutrient = nutrients[n]
		for (var l=0; l<nutrient.location.length; l++) {
			var location=nutrient.location[l]
			for (var s=0; s<location.structure.length; s++) {
				var symp = location.structure[s]
				if (symp === symptom) {
					filtered_nutrients.push(nutrient)
				}
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_secondary_location(nutrients) {

	var locations = []

	for (var n=0; n<nutrients.length; n++) {
		var nutrient = nutrients[n]
		for (var l=0; l<nutrient.location.length; l++) {
			var location=nutrient.location[l]
			for (var c=0; c<location.color.length; c++) {
				color = location.color[c]
				if (color.color_attribute) {
					locations.concat(ccolor.color_attribute.location)
				}
			}
		}
	}

	locations = unique(locations)

	return locations
}

function get_nutrients_for_secondary_location(sec_loc) {

	var filtered_nutrients = []

	for (var n=0; n<nutrients.length; n++) {
		var nutrient = nutrients[n]
		for (var l=0; l<nutrient.location.length; l++) {
			var location=nutrient.location[l]
			for (var c=0; c<location.color.length; c++) {
				color = location.color[c]
				if (color.color_attribute) {
					for (var al=0; al<color.color_attribute.location.length) {
						loc = color.color_attribute.location[al]
						if (al === sec_loc) {
							filtered_nutrients.push(nutrient)
						}
					}
				}
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_color_attribute(nutrients) {

	var attributes = []

	for (var n in nutrients) {
		for (var l in n.location) {
			for (var c in l.color) {
				if (c.color_attribute) {
					attributes.push(c.color_attribute.attribute)
				}
			}
		}
	}

	attributes = unique(attributes)

	return attributes
}

function get_nutrients_for_color_attribute(col_att) {

	var filtered_nutrients = []

	for (var n in nutrients) {
		for (var l in n.location) {
			for (var c in l.color) {
				if (c.color_attribute && c.color_attribute.attribute === col_att) {
					filtered_nutrients.push(n)
				}
			}
		}
	}

	return unique(filtered_nutrients)
}

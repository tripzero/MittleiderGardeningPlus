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
	constructor(color, attribute = None)
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
		return [Nitrogen(), Phosphorus(), Potassium(), Calcium(), Manganese(), Boron(), Iron(), Molybdemnum(), Sulfer(), Manganese(), Copper(), Zinc(), Chlorine()]
	}
}

class Nitrogen extends Nutrient
{
	constructor()
	{
		super()
		old_leaves = Location(Location.old_leaves, [Structural.weak, Structural.spindly, Structural.death], [Color(Colors.yellow)])
		stem = Location(Location.stem, [Structural.weak, Structural.spindly])
		fruit = Location(Location.fruit, [Fruit.failure])

		this.location = [old_leaves, stem, fruit]
	}
}

class Phosphorus extends Nutrient
{
	constructor()
	{
		super()
		stem = Location(Location.stem, [Structural.weak, Structural.spindly, Structural.thin])
		leaves = Location(Location.stem, [Structural.weak, Structural.spindly, Structural.thin],
		                  [Color(Colors.red, ColorAttribute(ColorAttributes.general, [Location.leaf_upper_side])), 
		                   Color(Colors.purple, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins, Location.leaf_underside])),
		                   Color(Colors.purple, ColorAttribute(ColorAttributes.general, [Location.leaf_upper_side]))])

		fruit = Location(Location.fruit, [Fruit.poor_fruit_set, Fruit.poor_fruit_quality])

		this.location = [stem, leaves, fruit]
	}
}

class Potassium extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.old_leaves, [Structural.scorching],
		                 [Color(Colors.brown, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins])),
		                  Color(Colors.brown, ColorAttribute(ColorAttributes.general, [Location.leaf_edge]))])

		stem = Location(Location.stem, [Structural.weak, Structural.downward_bend])
		fruit = Location(Location.fruit, [Fruit.poor_fruit_quality])
		root = Location(Location.roots, [Structural.stunted_growth])

		this.location = [leaves, stem, fruit, root]
	}
}

class Calcium extends Nutrient
{
	constructor() {
		super()

		terminal_bud = Location(Location.terminal_bud, [Structural.death])
		leaves = Location(Location.new_leaves, [Structural.wilting, Structural.death, Structural.scorching, Structural.enlarged_leaves, Structural.stunted_growth],
			              [Color(Colors.brown, ColorAttribute(ColorAttributes.general))])

		fruit = Location(Location.fruit, [Fruit.poor_fruit_set])
		flower = Location(Location.flower, [Flowering.poor_flower_set])

		this.location = [terminal_bud, leaves, fruit, flower]
	}
}

class Magnesium extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.old_leaves, [], [Color(Colors.yellow, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins])),
			                                        Color(Colors.red),
			                                        Color(Colors.purple),
			                                        Color(Colors.orange)])

		flower = Location(Location.flower, [Flowering.flower_drop], [Color(Colors.yellow)])

		this.location = [leaves, flower]
	}
}

class Boron extends Nutrient
{
	constructor() {
		super()

		terminal_bud = Location(Location.terminal_bud, [Structural.death])
		seed_leaves = Location(Location.seed_leaves, [Structural.enlarged_leaves, Structural.leathery_feel])

		this.location = [terminal_bud, seed_leaves]
	}
}

class Iron extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.new_leaves, [], [Color(Colors.yellow, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins])),
			                                        Color(Colors.dark_green, ColorAttribute(ColorAttributes.general, [Location.leaf_veins]))])

		old_leaves = Location(Location.old_leaves, [Structural.leaf_drop], [Color(Colors.yellow, ColorAttribute(ColorAttributes.general))])

		flowers = Location(Location.flower, [Flowering.flower_drop])

		this.location.extend([leaves, old_leaves, flowers])
	}
}

class Molybdemnum extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.new_leaves, [Structural.spindly, Structural.rupture])
		fruit = Location(Location.fruit, [Fruit.poor_fruit_quality])
		flower = Location(Location.flower, [Flowering.flower_drop])

		this.location = [leaves, fruit, flower]
	}
}

class Sulfer extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.new_leaves, [], [Color(Colors.creamy_white)])
		terminal_buds = Location(Location.terminal_bud, [Structural.death])
		old_leaves = Location(Location.old_leaves, [Structural.death, Structural.leaf_drop])

		this.location.extend([leaves, terminal_buds, old_leaves])
	}
}

class Manganese extends Nutrient
{
	constructor() {
		super()
		
		iron = Iron()
		sulfer = Sulfer()

		this.location.extend(iron.location)
		this.location.extend(sulfer.location)
	}
}

class Copper extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.new_leaves, [Structural.curl], [Color(Colors.yellow, ColorAttribute(ColorAttributes.streaks, [Location.between_leaf_veins]))])

		this.location.append(leaves)
	}
}

class Zinc extends Nutrient
{
	constructor() {
		super()

		terminal_bud = Location(Location.terminal_bud, [Structural.undersized])

		leaves = Location(Location.new_leaves, [], [Color(Colors.yellow, ColorAttribute(ColorAttributes.streaks, [Location.between_leaf_veins])),
			                                        Color(Colors.green, ColorAttribute(ColorAttributes.general, [Location.leaf_veins])),
			                                        Color(Colors.red, ColorAttribute(ColorAttributes.general, [Location.between_leaf_veins])),
			                                        Color(Colors.orange, ColorAttribute(ColorAttributes.general, [Location.between_leaf_veins]))])

		this.location.append(leaves)
	}
}

class Chlorine extends Nutrient
{
	constructor() {
		super()

		leaves = Location(Location.new_leaves, [Structural.wilting])
		stem = Location(Location.stem, [Structural.wilting])

		this.location.extend([leaves, stem])
	}
}

function unique(list)
{
	function onlyUnique(value, index, self) { 
    return self.indexOf(value) ==== index;
	}

	return list.filter(onlyUnique);
}

function get_primary_locations(nutrients) {
	
	locations = []

	for n in nutrients {
		for l in n.location {
			locations.append(l.location)
		}
	}

	locations = unique(locations)

	return locations
}

function get_nutrients_for_primary_location(location)
	filtered_nutrients = []

	for n in nutrients {
		for l in n.location {
			if l.location === location {
				filtered_nutrients.append(n)
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_colors(nutrients) {

	colors = []

	for n in nutrients {
		for l in n.location {
			for c in l.color {
				colors.append(c.color)
			}
		}
	}

	colors = unique(colors)

	return colors
}

function get_nutrients_for_color(color) {}
	filtered_nutrients = []

	for n in nutrients {
		for l in n.location {
			for c in l.color {
				if c.color === color {
					filtered_nutrients.append(n)
				}
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_structural(nutrients) {

	structs = []
	for n in nutrients {
		for l in n.location {
			structs.extend(l.structure)
		}
	}

	structs = unique(structs)

	return structs
}

function get_nutrients_for_structural_symptom(symptom)
	filtered_nutrients = []

	for (n in nutrients) {
		for (l in n.location) {
			for (s in l.structure) {
				if (s === symptom) {
					filtered_nutrients.append(n)
				}
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_secondary_location(nutrients) {

	locations = []

	for (n in nutrients) {
		for (l in n.location) {
			for (c in l.color) {
				if (c.color_attribute) {
					locations.extend(c.color_attribute.location)
				}
			}
		}
	}

	locations = unique(locations)

	return locations
}

function get_nutrients_for_secondary_location(sec_loc) {

	filtered_nutrients = []

	for (n in nutrients) {
		for (l in n.location) {
			for (c in l.color) {
				if (c.color_attribute) {
					for (al in c.color_attribute.location) {
						if (al === sec_loc) {
							filtered_nutrients.append(n)
						}
					}
				}
			}
		}
	}

	return unique(filtered_nutrients)
}

function get_color_attribute(nutrients) {

	attributes = []

	for (n in nutrients) {
		for (l in n.location) {
			for (c in l.color) {
				if (c.color_attribute) {
					attributes.append(c.color_attribute.attribute)
				}
			}
		}
	}

	attributes = unique(attributes)

	return attributes
}

function get_nutrients_for_color_attribute(col_att) {

	filtered_nutrients = []

	for (n in nutrients) {
		for (l in n.location) {
			for (c in l.color) {
				if (c.color_attribute and c.color_attribute.attribute === col_att) {
					filtered_nutrients.append(n)
				}
			}
		}
	}


	return unique(filtered_nutrients)
}

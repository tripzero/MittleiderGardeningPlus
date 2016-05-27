#!/usr/bin/env python

import collections
import numpy as np

class Colors:
	yellow = "yellow"
	red = "red"
	purple = "purple"
	brown = "brown"
	green = "green"
	dark_green = "dark green"
	orange = "orange"
	creamy_white = "creamy white"

class Color:
	
	def __init__(self, color, attribute = None):
		self.color = color
		self.color_attribute = attribute

class ColorAttributes:
	general = "general"
	blotches = "blotches"
	streaks = "streaks"

class ColorAttribute:
	def __init__(self, attribute, location = []):
		self.attribute = attribute
		self.location = location

class Fruit:
	poor_fruit_quality = "poor fruit quality"
	misshapen = "misshapen"
	failure = "failure to fruit"
	poor_fruit_set = "poor fruit set"

class Flowering:
	poor_fruit_set = "poor fruit set"
	poor_flower_set = "poor flower set"
	flower_drop = "flower drop"
	failure = "failure to flower"


class Structural:
	scorching = "scorching"
	death = "death"
	wilting = "wilting"
	enlarged_leaves = "enlarged leaves"
	weak = "weak"
	downward_bend = "downward bend"
	leathery_feel = "leathery feel"
	stunted_growth = "stunted growth"
	twisted = "twisted"
	leaf_drop = "leaf drop"
	spindly = "spindly"
	thin = "thin"
	rupture = "rupture"
	curl = "curl"
	undersized = "undersized"


class Location:
	new_leaves = "new leaves"
	old_leaves = "old leaves"
	roots = "roots"
	stem = "stem"
	terminal_bud = "terminal bud"
	seed_leaves = "seed leaves"
	leaf_veins = "leaf veins"
	between_leaf_veins = "between leaf veins"
	fruit = "fruit"
	flower = "flower"
	leaf_upper_side = "leaf upper side"
	leaf_underside = "leaf underside"
	leaf_edge = "leaf edge"

	def __init__(self, location, structure = [], color = []):
		self.location = location
		self.structure = structure
		self.color = color

class Nutrient(object):

	def __init__(self):
		self.location = []

	@staticmethod
	def nutrients():
		return [Nitrogen(), Phosphorus(), Potassium(), Calcium(), Manganese(), Boron(), Iron(), Molybdemnum(), Sulfer(), Manganese(), Copper(), Zinc(), Chlorine()]

class Nitrogen(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)
		old_leaves = Location(Location.old_leaves, [Structural.weak, Structural.spindly, Structural.death], [Color(Colors.yellow)])
		stem = Location(Location.stem, [Structural.weak, Structural.spindly])
		fruit = Location(Location.fruit, [Fruit.failure])

		self.location = [old_leaves, stem, fruit]

class Phosphorus(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		stem = Location(Location.stem, [Structural.weak, Structural.spindly, Structural.thin])
		leaves = Location(Location.stem, [Structural.weak, Structural.spindly, Structural.thin],
		                  [Color(Colors.red, ColorAttribute(ColorAttributes.general, [Location.leaf_upper_side])), 
		                   Color(Colors.purple, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins, Location.leaf_underside])),
		                   Color(Colors.purple, ColorAttribute(ColorAttributes.general, [Location.leaf_upper_side]))])

		fruit = Location(Location.fruit, [Fruit.poor_fruit_set, Fruit.poor_fruit_quality])

		self.location = [stem, leaves, fruit]

class Potassium(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.old_leaves, [Structural.scorching],
		                 [Color(Colors.brown, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins])),
		                  Color(Colors.brown, ColorAttribute(ColorAttributes.general, [Location.leaf_edge]))])

		stem = Location(Location.stem, [Structural.weak, Structural.downward_bend])
		fruit = Location(Location.fruit, [Fruit.poor_fruit_quality])
		root = Location(Location.roots, [Structural.stunted_growth])

		self.location = [leaves, stem, fruit, root]

class Calcium(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		terminal_bud = Location(Location.terminal_bud, [Structural.death])
		leaves = Location(Location.new_leaves, [Structural.wilting, Structural.death, Structural.scorching, Structural.enlarged_leaves, Structural.stunted_growth],
			              [Color(Colors.brown, ColorAttribute(ColorAttributes.general))])

		fruit = Location(Location.fruit, [Fruit.poor_fruit_set])
		flower = Location(Location.flower, [Flowering.poor_flower_set])

		self.location = [terminal_bud, leaves, fruit, flower]

class Magnesium(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.old_leaves, [], [Color(Colors.yellow, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins])),
			                                        Color(Colors.red),
			                                        Color(Colors.purple),
			                                        Color(Colors.orange)])

		flower = Location(Location.flower, [Flowering.flower_drop], [Color(Colors.yellow)])

		self.location = [leaves, flower]

class Boron(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		terminal_bud = Location(Location.terminal_bud, [Structural.death])
		seed_leaves = Location(Location.seed_leaves, [Structural.enlarged_leaves, Structural.leathery_feel])

		self.location = [terminal_bud, seed_leaves]

class Iron(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.new_leaves, [], [Color(Colors.yellow, ColorAttribute(ColorAttributes.blotches, [Location.between_leaf_veins])),
			                                        Color(Colors.dark_green, ColorAttribute(ColorAttributes.general, [Location.leaf_veins]))])

		old_leaves = Location(Location.old_leaves, [Structural.leaf_drop], [Color(Colors.yellow, ColorAttribute(ColorAttributes.general))])

		flowers = Location(Location.flower, [Flowering.flower_drop])

		self.location.extend([leaves, old_leaves, flowers])

class Molybdemnum(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.new_leaves, [Structural.spindly, Structural.rupture])
		fruit = Location(Location.fruit, [Fruit.poor_fruit_quality])
		flower = Location(Location.flower, [Flowering.flower_drop])

		self.location = [leaves, fruit, flower]

class Sulfer(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.new_leaves, [], [Color(Colors.creamy_white)])
		terminal_buds = Location(Location.terminal_bud, [Structural.death])
		old_leaves = Location(Location.old_leaves, [Structural.death, Structural.leaf_drop])

		self.location.extend([leaves, terminal_buds, old_leaves])

class Manganese(Iron, Sulfer):
	def __init__(self):
		Iron.__init__(self)
		Sulfer.__init__(self)

class Copper(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.new_leaves, [Structural.curl], [Color(Colors.yellow, ColorAttribute(ColorAttributes.streaks, [Location.between_leaf_veins]))])

		self.location.append(leaves)

class Zinc(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		terminal_bud = Location(Location.terminal_bud, [Structural.undersized])

		leaves = Location(Location.new_leaves, [], [Color(Colors.yellow, ColorAttribute(ColorAttributes.streaks, [Location.between_leaf_veins])),
			                                        Color(Colors.green, ColorAttribute(ColorAttributes.general, [Location.leaf_veins])),
			                                        Color(Colors.red, ColorAttribute(ColorAttributes.general, [Location.between_leaf_veins])),
			                                        Color(Colors.orange, ColorAttribute(ColorAttributes.general, [Location.between_leaf_veins]))])

		self.location.append(leaves)

class Chlorine(Nutrient):
	def __init__(self):
		Nutrient.__init__(self)

		leaves = Location(Location.new_leaves, [Structural.wilting])
		stem = Location(Location.stem, [Structural.wilting])

		self.location.extend([leaves, stem])



def print_menu(choices, question):

	index = 0

	for c in choices:
		print("{} - {}".format(index, c))
		index += 1

	choice = input(question + " ")

	if choice > len(choices):
		return None

	return choices[choice]

def input_primary_locations(nutrients):
	
	locations = []

	for n in nutrients:
		for l in n.location:
			locations.append(l.location)

	locations = np.unique(locations)

	location = print_menu(locations, "Select primary location")

	filtered_nutrients = []

	for n in nutrients:
		for l in n.location:
			if l.location == location:
				filtered_nutrients.append(n)

	return np.unique(filtered_nutrients)

def input_colors(nutrients):

	colors = []

	for n in nutrients:
		for l in n.location:
			for c in l.color:
				colors.append(c.color)

	colors = np.unique(colors)
	
	color = print_menu(colors, "Select color of symptom")

	filtered_nutrients = []

	for n in nutrients:
		for l in n.location:
			for c in l.color:
				if c.color == color:
					filtered_nutrients.append(n)

	return np.unique(filtered_nutrients)

def input_structural(nutrients):

	structs = []
	for n in nutrients:
		for l in n.location:
			structs.extend(l.structure)

	structs = np.unique(structs)

	symptom = print_menu(structs, "Select structural symptom")

	filtered_nutrients = []

	for n in nutrients:
		for l in n.location:
			for s in l.structure:
				if s == symptom:
					filtered_nutrients.append(n)

	return np.unique(filtered_nutrients)

def input_secondary_location(nutrients):

	locations = []

	for n in nutrients:
		for l in n.location:
			for c in l.color:
				if c.color_attribute:
					locations.extend(c.color_attribute.location)

	locations = np.unique(locations)
	sec_loc = print_menu(locations, "Select secondary location of symptom")

	filtered_nutrients = []

	for n in nutrients:
		for l in n.location:
			for c in l.color:
				if c.color_attribute:
					for al in c.color_attribute.location:
						if al == sec_loc:
							filtered_nutrients.append(n)

	return np.unique(filtered_nutrients)

def input_color_attribute(nutrients):

	attributes = []

	for n in nutrients:
		for l in n.location:
			for c in l.color:
				if c.color_attribute:
					attributes.append(c.color_attribute.attribute)

	attributes = np.unique(attributes)

	col_att = print_menu(attributes, "Select color attribute of symptom")

	filtered_nutrients = []

	for n in nutrients:
		for l in n.location:
			for c in l.color:
				if c.color_attribute and c.color_attribute.attribute == col_att:
					filtered_nutrients.append(n)


	return np.unique(filtered_nutrients)


def find_by_type(types):
	return print_menu(types, "Select symptom type?")


def get_nutrient_names(nutrients):
	str_nuts = []

	for n in nutrients:
		str_nuts.append(type(n.__class__()).__name__)

	return str_nuts


if __name__ == "__main__":
	nutrients = Nutrient.nutrients()

	types = ["Location (primary)", "Color", "Structural", "Location (secondary)", "Color Attribute"]

	print ("Filter by symptom as much as you want.  Select 'b' to return to last filter".format(len(types)))

	history = collections.deque([])

	while True:

		print("Possible nutrient deficiency: {}".format(" ".join(get_nutrient_names(nutrients))))
		
		t = find_by_type(types)

		if t == None:
			nutrients = history[-1]
			history.pop()
			continue
		else:
			history.append(nutrients)

		if t == "Location (primary)":
			nutrients = input_primary_locations(nutrients)
		elif t == "Color":
			nutrients = input_colors(nutrients)
		elif t == "Structural":
			nutrients = input_structural(nutrients)
		elif t == "Location (secondary)":
			nutrients = input_secondary_location(nutrients)
		elif t == "Color Attribute":
			nutrients = input_color_attribute(nutrients)














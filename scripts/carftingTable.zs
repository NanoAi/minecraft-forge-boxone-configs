//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[Nameless Trinkets]
//Removed
craftingTable.remove(<item:nameless_trinkets:reforger>);
craftingTable.remove(<item:nameless_trinkets:ethereal_wings>);
craftingTable.remove(<item:nameless_trinkets:tick>);
craftingTable.remove(<item:nameless_trinkets:super_magnet>);


//Edited
craftingTable.remove(<item:nameless_trinkets:experience_magnet>);
craftingTable.addShaped("experience_magnet_recipe", <item:nameless_trinkets:experience_magnet>, [
    [<item:minecraft:experience_bottle>, 		<item:minecraft:glass_bottle>, 			<item:minecraft:experience_bottle>		],
    [<item:enlightened_end:refined_magnetite>, 	<item:nameless_trinkets:dubious_dust>, 	<item:enlightened_end:refined_magnetite>],
    [<item:minecraft:experience_bottle>, 		<item:minecraft:redstone>, 				<item:minecraft:experience_bottle>		]]);

craftingTable.remove(<item:nameless_trinkets:broken_magnet>);
craftingTable.addShaped("broken_magnet", <item:nameless_trinkets:broken_magnet>, [
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:lapis_lazuli>, 			<item:enlightened_end:refined_magnetite>],
    [<item:minecraft:redstone>, 				<item:nameless_trinkets:dubious_dust>, 	<item:minecraft:lapis_lazuli>			],
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:redstone>, 				<item:enlightened_end:refined_magnetite>]]);

craftingTable.remove(<item:nameless_trinkets:experience_battery>);
craftingTable.addShaped("experience_battery", <item:nameless_trinkets:experience_battery>, [
    [<item:minecraft:experience_bottle>, <item:minecraft:redstone>, 			<item:minecraft:experience_bottle>],
    [<item:minecraft:experience_bottle>, <item:nameless_trinkets:glowing_dust>, <item:minecraft:experience_bottle>],
    [<item:minecraft:experience_bottle>, <item:minecraft:iron_ingot>, 			<item:minecraft:experience_bottle>]]);
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[Pickle Tweaks]
//Removed
craftingTable.remove(<item:pickletweaks:magnet>);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[Sophisticated Backpacks]
//Removed


//Edited
craftingTable.remove(<item:sophisticatedbackpacks:magnet_upgrade>);
craftingTable.addShaped("sophisticated_backpacks_magnet", <item:sophisticatedbackpacks:magnet_upgrade>, [
    [<item:minecraft:ender_pearl>, 				<item:minecraft:iron_ingot>, 					<item:minecraft:ender_pearl>			],
    [<item:enlightened_end:refined_magnetite>, 	<item:sophisticatedbackpacks:pickup_upgrade>, 	<item:enlightened_end:refined_magnetite>],
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:air>, 							<item:enlightened_end:refined_magnetite>]]);

craftingTable.remove(<item:sophisticatedbackpacks:advanced_magnet_upgrade>);
craftingTable.addShaped("sophisticated_backpacks_advanced_magnet", <item:sophisticatedbackpacks:advanced_magnet_upgrade>, [
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:diamond>, 						<item:enlightened_end:refined_magnetite>],
    [<item:minecraft:gold_ingot>, 				<item:sophisticatedbackpacks:magnet_upgrade>, 	<item:minecraft:gold_ingot>				],
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:redstone>, 						<item:enlightened_end:refined_magnetite>]]);
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[Sophisticated Storage]
//Removed


//Edited
craftingTable.remove(<item:sophisticatedstorage:magnet_upgrade>);
craftingTable.addShaped("sophisticated_storage_magnet", <item:sophisticatedstorage:magnet_upgrade>, [
    [<item:minecraft:ender_pearl>, 				<item:minecraft:iron_ingot>, 				<item:minecraft:ender_pearl>			],
    [<item:enlightened_end:refined_magnetite>, 	<item:sophisticatedstorage:pickup_upgrade>, <item:enlightened_end:refined_magnetite>],
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:air>, 						<item:enlightened_end:refined_magnetite>]]);

craftingTable.remove(<item:sophisticatedstorage:advanced_magnet_upgrade>);
craftingTable.addShaped("sophisticated_storage_advanced_magnet", <item:sophisticatedstorage:advanced_magnet_upgrade>, [
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:diamond>, 						<item:enlightened_end:refined_magnetite>],
    [<item:minecraft:gold_ingot>, 				<item:sophisticatedstorage:magnet_upgrade>, 	<item:minecraft:gold_ingot>				],
    [<item:enlightened_end:refined_magnetite>, 	<item:minecraft:redstone>, 						<item:enlightened_end:refined_magnetite>]]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[Minecraft]
//Removed


//Edited


//New
craftingTable.addShapeless("flint_recipe_gravel", <item:minecraft:flint>, [
    <tag:items:forge:gravel>, <tag:items:forge:gravel>, 
    <tag:items:forge:gravel>, <tag:items:forge:gravel>
]);

craftingTable.addShapeless("flint_recipe_sand", <item:minecraft:flint>, [
    <tag:items:forge:sand>, <tag:items:forge:sand>, <tag:items:forge:sand>,
    <tag:items:forge:sand>, <tag:items:forge:sand>, <tag:items:forge:sand>,
    <tag:items:forge:sand>, <tag:items:forge:sand>, <tag:items:forge:sand>
]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[Template]
//Crafting Remove
craftingTable.remove(<item:minecraft:air>);

//Crafting Add Shaped Recipe
//craftingTable.addShaped("example_name", <output>, [
//    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
//    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
//    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
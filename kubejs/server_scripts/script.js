// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    // Change recipes here
})

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
    event.get('productivebees:flowers/quarry').add('greekfantasy:limestone');
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let noRecursing = false;
EntityEvents.hurt(event => {
    if ( noRecursing ) return;
    noRecursing = true;

    const {entity, player, source} = event;
    const im = source.getImmediate();
    const rand = ( getRandomInt(1, 8) == 1 );

    if ( rand && im != null && player != null && entity != null ) {
        if ( entity.isPlayer() && im.type.includes('spider') )  {
            if ( !player.potionEffects.isActive('minecraft:slowness') ) {
                player.potionEffects.add('minecraft:slowness', 120, 3);
                player.potionEffects.add('ars_nouveau:snared', 40, 0);
            }
        }
    }

    noRecursing = false;
});

ServerEvents.recipes( event => {
    event.shapeless('pmmo_xp_bottles:wood_cutting_bottle', [Item.of('minecraft:golden_axe').ignoreNBT(), '3x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:miningbottle', [Item.of('minecraft:golden_pickaxe').ignoreNBT(), '3x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:endurancebottle', [Item.of('minecraft:golden_chestplate').ignoreNBT(), '3x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:agilitybottle', [Item.of('minecraft:golden_boots').ignoreNBT(), '3x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:combatbottle', [Item.of('minecraft:golden_sword').ignoreNBT(), '3x create_sa:heap_of_experience']);

    event.shapeless('create:limestone', 'greekfantasy:limestone');
    event.shapeless('greekfantasy:limestone', 'create:limestone');
    event.shapeless('theabyss:loran', ['phantasm:crystal_spike_tip', 'minecraft:obsidian']);
});
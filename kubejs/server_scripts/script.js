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

    event.get('toughasnails:drinks')
        .add('botania:brew_flask')
        .add('ars_nouveau:potion_flask')
        .add('farmersdelight:melon_juice')
        .add('delightful:prickly_pear_juice')
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
    event.shapeless('pmmo_xp_bottles:wood_cutting_bottle', [Item.of('minecraft:iron_axe').ignoreNBT(), '8x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:miningbottle', [Item.of('minecraft:iron_pickaxe').ignoreNBT(), '8x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:endurancebottle', [Item.of('minecraft:diamond_chestplate').ignoreNBT(), '8x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:agilitybottle', ['#forge:ingots/silver', '8x create_sa:heap_of_experience']);
    event.shapeless('pmmo_xp_bottles:combatbottle', [Item.of('minecraft:netherite_axe').ignoreNBT(), '8x create_sa:heap_of_experience']);
});
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

global.LivingEntityUseItemEvent = (event) => {
    const {item, entity} = event;
    if ( item.hasTag("toughasnails:drinks") ) {
        entity.potionEffects.add("toughasnails:climate_clemency", 0, 0, true, false);
        switch ( item.getId() ) {
            case "botania:brew_flask":
                entity.potionEffects.add("toughasnails:climate_clemency", 3600, 2, false, false);
                break;
            case "delightful:prickly_pear_juice":
            case "farmersdelight:melon_juice":
            case "ars_nouveau:potion_flask":
                entity.potionEffects.add("toughasnails:climate_clemency", 600, 1, false, false);
                break;
            default:
                break;
        }
    }
}
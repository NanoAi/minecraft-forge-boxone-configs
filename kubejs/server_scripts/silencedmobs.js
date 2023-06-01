BlockEvents.placed('minecraft:white_wool', event => {
    const ply = event.getPlayer();
    const silencer = Item.of('minecraft:white_wool', "{display:{Name:'{\"text\":\"silence\"}'}}");
    const spawnEgg = '_spawn_egg';

    if ( ply == null ) return;

    if ( ply.getMainHandItem() === silencer ) {
        const offHand = ply.getOffHandItem().item;
        const offHandId = offHand.getId();

        if ( offHandId.endsWith(spawnEgg) ) {
            const eggId = offHandId.split(spawnEgg)[0];

            const offHandItem = ply.getOffHandItem();
            const mainHandItem = ply.getMainHandItem();
            const ohc = offHandItem.getCount();
            const mhc = mainHandItem.getCount();
            
            if ( ohc > 1 ) {
                offHandItem.setCount( ohc - 1 );
            } else {
                ply.setOffHandItem('minecraft:air');
            }

            if ( mhc > 1 ) {
                mainHandItem.setCount( mhc - 1 );
            } else {
                ply.setMainHandItem('minecraft:air');
            }

            const ent = event.block.createEntity( eggId );
            ent.setSilent(true);
            ent.spawn();

            event.cancel();
        }
    }
});

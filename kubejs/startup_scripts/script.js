// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')
global.LivingEntityUseItemEvent = (event) => {};

StartupEvents.registry('item', event => {
    // Register new items here
    // event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
    // Register new blocks here
    // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish', event => {
    global.LivingEntityUseItemEvent(event);
});
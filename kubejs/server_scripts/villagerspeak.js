const $Villager = Java.loadClass('net.minecraft.world.entity.npc.Villager')

const msgCan = [
    "Sure is a nice day for a walk.",
    "Greeting traveller.",
    "Something feels off...",
    "There are whispers about a dark figure roaming the woods...",
    "You're not from around here are you?",
    "Strange that you'd ask me that.",
    "I guess, but that question makes me uncomfortable.",
    "Nah, I don't think so.",
    "That really depends.",
    "Sometimes I get a little bored.",
    "You got any emeralds?",
    "I heard if you give me an emerald something would happen.",
    "Look that's cool and all, but the heck?",
    "I told you that in confidence...",
    "Hello, traveller!",
    "What's up?",
    "Do you like bees?",
    "I enjoy a bee once in a h'wile.",
    "Axalotls are very cute!",
    "Uh huh.",
    "hmm~",
    "HMMM.",
    "Hmm-"
]

const msgCanLen = msgCan.length - 1;

ItemEvents.entityInteracted(event => {
    const ply = event.getPlayer();
    const target = event.getTarget();

    if ( target instanceof $Villager ) {
        ply.sendSystemMessage('§7Villager§f: ' + msgCan[getRandomInt(0, msgCanLen)]);
    }
})

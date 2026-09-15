PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_inventory'))
    {
        event.player.stages.add('starting_inventory')
        event.getEntity().getServer().runCommandSilent("/tellraw " + event.player.getName().getString() + " {\"text\":\"Welcome to Creosote!\",\"color\":\"gold\"}")
        event.player.give('akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"forestry"},count:1,id:"forestry:foresters_manual"},{components:{"akashictome:defined_mod":"tis3d"},count:1,id:"tis3d:manual"},{components:{"akashictome:defined_mod":"immersiveengineering"},count:1,id:"immersiveengineering:manual"},{components:{"akashictome:defined_mod":"embers"},count:1,id:"embers:ancient_codex"},{components:{"akashictome:defined_mod":"occultism"},count:1,id:"occultism:dictionary_of_spirits"}]]')
    }
})

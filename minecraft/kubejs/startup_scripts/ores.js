WorldgenEvents.remove(event => {  
event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    //props.worldgenLayer = 'underground_ores'

    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    //props.blocks = ['minecraft:iron_ore', 'minecraft:copper_ore']
    props.blocks = ['occultism:silver_ore', 'occultism:silver_ore_deepslate', 'embers:silver_ore', 'embers:deepslate_silver_ore', 'embers:lead_ore', 'embers:deepslate_lead_ore']
})})

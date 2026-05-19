ServerEvents.recipes(event => {
    //Removing overlapping/unnecessary content from Create: Crafts & Additions

    event.remove({ id: 'immersiveengineering:metalpress/plate_zinc' })

    //Capacitor
    event.remove({ id: 'createaddition:crafting/capacitor_1' })
    event.remove({ id: 'createaddition:crafting/capacitor_2' })

    //Seed Oil, Biofuel and prerequisites
    event.remove({ id: 'createaddition:compacting/seed_oil' })

    event.remove({ id: 'createaddition:mixing/biomass_from_flowers' })
    event.remove({ id: 'createaddition:mixing/biomass_from_plants' })
    event.remove({ id: 'createaddition:mixing/biomass_from_crops' })
    event.remove({ id: 'createaddition:mixing/biomass_from_leaves' })
    event.remove({ id: 'createaddition:mixing/biomass_from_saplings' })
    event.remove({ id: 'createaddition:mixing/biomass_from_honeycomb' })
    event.remove({ id: 'createaddition:mixing/biomass_from_plant_foods' })
    event.remove({ id: 'createaddition:mixing/biomass_from_sticks' })

    event.remove({ id: 'createaddition:compacting/biomass_pellet' })
    event.remove({ id: 'createaddition:crafting/biomass_pellet_block' })
    event.remove({ id: 'createaddition:mixing/bioethanol' })

    //Barbed wire
    event.remove({ id: 'createaddition:crafting/barbed_wire' })

    //Machines
    event.remove({ id: 'createaddition:crafting/rolling_mill' })
    event.remove({ id: 'createaddition:mechanical_crafting/tesla_coil' })
    event.remove({ id: 'createaddition:crafting/portable_energy_interface' })
    event.remove({ id: 'createaddition:crafting/redstone_relay' })
    event.remove({ id: 'createaddition:crafting/small_connector_copper' })
    event.remove({ id: 'createaddition:crafting/small_light_connector' })
    event.remove({ id: 'createaddition:crafting/large_connector_gold' })
    event.remove({ id: 'createaddition:crafting/large_connector_electrum' })

    event.remove({ id: 'createaddition:crafting/modular_accumulator_electrum' })
    event.remove({ id: 'createaddition:crafting/modular_accumulator_gold' })

    event.remove({ id: 'createaddition:mechanical_crafting/alternator' })
    event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })

    event.recipes.immersiveengineering.blueprint('createaddition:alternator', ['1x immersiveengineering:component_iron', '1x immersiveengineering:component_electronic', '4x immersiveengineering:wirecoil_copper'], 'Motors & Alternators')
    event.recipes.immersiveengineering.blueprint('createaddition:electric_motor', ['1x immersiveengineering:component_iron', '1x immersiveengineering:component_electronic', '4x immersiveengineering:wirecoil_copper'], 'Motors & Alternators')

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"Motors & Alternators"}'),
                 [
                     'ABA',
                     'CCC',
                     'DDD'
                 ],
                 {
                     A: 'immersiveengineering:wirecoil_copper',
                     B: 'minecraft:iron_ingot',
                     C: 'minecraft:blue_dye',
                     D: 'minecraft:paper'
                 })

    //Straw (recipe change)
    event.remove({ id: 'createaddition:rolling/straw' })
    event.shaped('createaddition:straw',
                 [
                    '  A',
                    ' A ',
                    '   '
                 ],
                 { A: 'minecraft:bamboo' }
                )

    //Rods
    event.remove({ id: 'createaddition:rolling/copper_ingot' })
    event.remove({ id: 'createaddition:rolling/iron_ingot' })
    event.remove({ id: 'createaddition:rolling/gold_ingot' })
    event.remove({ id: 'createaddition:rolling/electrum_ingot' })
    event.remove({ id: 'createaddition:rolling/brass_ingot' })
    event.remove({ id: 'createaddition:rolling/steel_ingot' })
    event.remove({ id: 'createaddition:rolling/aluminum_ingot' })

    //Wires
    event.remove({ id: 'createaddition:rolling/copper_plate' })
    event.remove({ id: 'createaddition:rolling/iron_plate' })
    event.remove({ id: 'createaddition:rolling/gold_plate' })
    event.remove({ id: 'createaddition:rolling/electrum_plate' })
    event.remove({ id: 'createaddition:rolling/lead_plate' })
    event.remove({ id: 'createaddition:rolling/steel_plate' })
    event.remove({ id: 'createaddition:rolling/aluminum_plate' })

    //Spools
    event.remove({ id: 'createaddition:crafting/spool' })
    event.remove({ id: 'createaddition:crafting/copper_spool' })
    event.remove({ id: 'createaddition:crafting/gold_spool' })
    event.remove({ id: 'createaddition:crafting/electrum_spool' })
    event.remove({ id: 'createaddition:crafting/festive_spool' })

    //Plate
    event.remove({ id: 'createaddition:pressing/zinc_ingot' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/zinc/plate_gold_cast' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/zinc/plate_sand_cast' })

    //Removing all traces of Create: Crafts & Additions Electrum
    event.remove({ id: 'createaddition:crafting/electrum_ingot' })
    event.remove({ id: 'createaddition:crafting/electrum_block' })
    event.remove({ id: 'createaddition:mixing/electrum' })
    event.recipes.create.mixing('immersiveengineering:ingot_electrum', ['#forge:ingots/gold', '#forge:ingots/silver']).heated()
    event.remove({ id: 'createaddition:pressing/electrum_ingot' })

    //Use Immersive Engineering plates instead of Create sheets when available
    event.remove({ id: 'create:pressing/copper_ingot' })
    event.recipes.create.pressing('immersiveengineering:plate_copper', 'minecraft:copper_ingot')
    event.remove({ id: 'create:pressing/iron_ingot' })
    event.recipes.create.pressing('immersiveengineering:plate_iron', 'minecraft:iron_ingot')
    event.remove({ id: 'create:pressing/gold_ingot' })
    event.recipes.create.pressing('immersiveengineering:plate_gold', 'minecraft:gold_ingot')

    event.remove({ id: 'tconstruct:smeltery/casting/metal/copper/plate_gold_cast' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/copper/plate_sand_cast' })
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/plate' },
        cast_consumed: true,
        cooling_time: 50,
        fluid: {
            amount: 90,
            tag: 'forge:molten_copper'
        },
        result: { item: 'immersiveengineering:plate_copper' }
    })
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/plate' },
        cast_consumed: false,
        cooling_time: 50,
        fluid: {
            amount: 90,
            tag: 'forge:molten_copper'
        },
        result: { item: 'immersiveengineering:plate_copper' }
    })

    event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/plate_gold_cast' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/plate_sand_cast' })
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/plate' },
        cast_consumed: true,
        cooling_time: 50,
        fluid: {
            amount: 90,
            tag: 'forge:molten_iron'
        },
        result: { item: 'immersiveengineering:plate_iron' }
    })
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/plate' },
        cast_consumed: false,
        cooling_time: 50,
        fluid: {
            amount: 90,
            tag: 'forge:molten_iron'
        },
        result: { item: 'immersiveengineering:plate_iron' }
    })

    event.remove({ id: 'tconstruct:smeltery/casting/metal/gold/plate_gold_cast' })
    event.remove({ id: 'tconstruct:smeltery/casting/metal/gold/plate_sand_cast' })
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/plate' },
        cast_consumed: true,
        cooling_time: 50,
        fluid: {
            amount: 90,
            tag: 'forge:molten_gold'
        },
        result: { item: 'immersiveengineering:plate_gold' }
    })
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/plate' },
        cast_consumed: false,
        cooling_time: 50,
        fluid: {
            amount: 90,
            tag: 'forge:molten_gold'
        },
        result: { item: 'immersiveengineering:plate_gold' }
    })

    //Unify dusts and ingots

    //Iron
    event.replaceOutput(
        { output: 'create:crushed_raw_iron' },
        'create:crushed_raw_iron',
        'immersiveengineering:dust_iron'
    )

    //Gold
    event.replaceOutput(
        { output: 'create:crushed_raw_gold' },
        'create:crushed_raw_gold',
        'immersiveengineering:dust_gold'
    )

    //Copper
    event.replaceOutput(
        { output: 'create:crushed_raw_copper' },
        'create:crushed_raw_copper',
        'immersiveengineering:dust_copper'
    )

    //Silver
    event.replaceOutput(
        { output: 'create:crushed_raw_silver' },
        'create:crushed_raw_silver',
        'immersiveengineering:dust_silver'
    )

    //Lead
    event.replaceOutput(
        { output: 'create:crushed_raw_lead' },
        'create:crushed_raw_lead',
        'immersiveengineering:dust_lead'
    )

    //Aluminum
    event.replaceOutput(
        { output: 'create:crushed_raw_aluminum' },
        'create:crushed_raw_aluminum',
        'immersiveengineering:dust_aluminum'
    )

    //Uranium
    event.replaceOutput(
        { output: 'create:crushed_raw_uranium' },
        'create:crushed_raw_uranium',
        'immersiveengineering:dust_uranium'
    )

    //Nickel
    event.replaceOutput(
        { output: 'create:crushed_raw_nickel' },
        'create:crushed_raw_nickel',
        'immersiveengineering:dust_nickel'
    )

    //Steel

    //Bronze

    //event.remove({ id: 'immersiveengineering:alloysmelter/bronze'})

    //Removing the Immersive Engineering recipe for electrum ingot from nuggets, to make it fully oredictionary compatible
    event.remove({ id: 'immersiveengineering:crafting/nugget_electrum_to_ingot_electrum' })
    event.shapeless('immersiveengineering:ingot_electrum', '9x #forge:nuggets/electrum')

    //Removing some interactions to encourage alloying in smelters
    event.remove({ id: 'forestry:ingot_bronze_alloying' })
    event.remove({ id: 'immersiveengineering:alloysmelter/manyullyn' })

    //Removing methods to get brass before going to the nether
    //event.remove({ id: 'immersiveengineering:alloysmelter/brass' })
    //event.remove({ id: 'tconstruct:smeltery/alloys/molten_brass' })
    //event.custom({
    //    type: 'tconstruct:alloy',
    //    inputs: [
    //        { tag: 'tconstruct:molten_copper', amount: 90 },
    //        { tag: 'tconstruct:molten_zinc', amount: 90 }
    //    ],
    //    result: { fluid: 'tconstruct:molten_brass', amount: 180 },
    //    temperature: 1100
    //})

    //Steel is cooler than iron
    //event.remove({ id: 'cyber_ware_port:katana' })
    //event.shaped('cyber_ware_port:katana',
    //             [
    //                '  A',
    //                ' A ',
    //                'B  '
    //             ],
    //             {
    //                 A: '#forge:ingots/steel',
    //                 B: 'minecraft:stick'
    //             }
    //)

    event.replaceInput(
        { input: 'minecraft:honeycomb' },
        'minecraft:honeycomb',
        '#forestry:combs'
    )
})

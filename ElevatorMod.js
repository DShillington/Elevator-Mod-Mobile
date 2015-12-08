/*
Elevator Mod Mobile
Author: papertazer
*/
var 180 = "https://raw.githubusercontent.com/papertazer/Elevator-Mod-Mobile/master/PlayerUp.png";
ModPE.overrideTexture("images/items-opaque.png", 180);
//Blocks
Block.defineBlock(180, "Elevator Up [Player]", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(181, "Elevator Down [Player]", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(182, "Elevator Up [Mob]", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(183, "Elevator Down [Mob]", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(184, "Elevator Up [Item]", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(185, "Elevator Down [Item]", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(186, "Elevator Base", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);
Block.defineBlock(187, "Elevator Cover", [["diamond_block", 0], ["lapis_block", 0], ["gold_block", 0], ["emerald_block", 0], ["iron_block", 0], ["coal_block", 0]]);

ModPE.overrideTexture(images/)

//Block Destroy Times
Block.setDestroyTime(180, 0.3);
Block.setDestroyTime(181, 0.3);
Block.setDestroyTime(182, 0.3);
Block.setDestroyTime(183, 0.3);
Block.setDestroyTime(184, 0.3);
Block.setDestroyTime(185, 0.3);
Block.setDestroyTime(186, 0.3);
Block.setDestroyTime(187, 0.3);

//Block Transparancy
//1 = transparent.
//2 = translucent.
//0 = opaque.
Block.setRenderLayer(180,0);
Block.setRenderLayer(181,0);
Block.setRenderLayer(182,0);
Block.setRenderLayer(183,0);
Block.setRenderLayer(184,0);
Block.setRenderLayer(185,0);
Block.setRenderLayer(186,0);
Block.setRenderLayer(187,0);
//Items
ModPE.setItem(500, "fireworks", 0, "Thank you! - Papertazer");
ModPE.setItem(501, "fireworks", 0, "Up Arrow [Player]");
ModPE.setItem(502, "fireworks", 0, "Down Arrow [Player]");
ModPE.setItem(503, "fireworks", 0, "Up Arrow [Mob]");
ModPE.setItem(504, "fireworks", 0, "Down Arrow [Mob]");
ModPE.setItem(505, "fireworks", 0, "Up Arrow [Item]");
ModPE.setItem(506, "fireworks", 0, "Down Arrow [Item]");
ModPE.setItem(507, "fireworks", 0, "Iron Rod");

//Inventory
Player.addItemCreativeInv(500, 5, 0);
Player.addItemCreativeInv(501, 5, 0);
Player.addItemCreativeInv(502, 5, 0);
Player.addItemCreativeInv(503, 5, 0);
Player.addItemCreativeInv(504, 5, 0);
Player.addItemCreativeInv(505, 5, 0);
Player.addItemCreativeInv(506, 5, 0);
Player.addItemCreativeInv(507, 5, 0);

Player.addItemCreativeInv(180, 5, 0);
Player.addItemCreativeInv(181, 5, 0);
Player.addItemCreativeInv(182, 5, 0);
Player.addItemCreativeInv(183, 5, 0);
Player.addItemCreativeInv(184, 5, 0);
Player.addItemCreativeInv(185, 5, 0);
Player.addItemCreativeInv(186, 5, 0);
Player.addItemCreativeInv(187, 5, 0);

//Category
Item.setCategory(500, ItemCategory.TOOL);
Item.setCategory(501, ItemCategory.TOOL);
Item.setCategory(502, ItemCategory.TOOL);
Item.setCategory(503, ItemCategory.TOOL);
Item.setCategory(504, ItemCategory.TOOL);
Item.setCategory(505, ItemCategory.TOOL);
Item.setCategory(506, ItemCategory.TOOL);
Item.setCategory(507, ItemCategory.TOOL);

Item.setCategory(180, ItemCategory.TOOL);
Item.setCategory(181, ItemCategory.TOOL);
Item.setCategory(182, ItemCategory.TOOL);
Item.setCategory(183, ItemCategory.TOOL);
Item.setCategory(184, ItemCategory.TOOL);
Item.setCategory(185, ItemCategory.TOOL);
Item.setCategory(186, ItemCategory.TOOL);
Item.setCategory(187, ItemCategory.TOOL);

//NewLevel
function newLevel(){
	print("Elevator Mod by");
print("Papertazer");
	if(ModPE.getMinecraftVersion()!="0.13.0"){
		clientMessage("<server> Minecraft PE " + ModPE.getMinecraftVersion() + "isn't compatible with Elevator Mod 0.1.0");
		clientMessage("Update/downgrade your MCPE or check for mod updates.");
	}
    if(ModPE.getMinecraftVersion()=="0.13.0"){
clientMessage("<Elevator Mod> Loaded Version: 0.1.0");
}
}

/*
Elevator Mod Mobile
Author: papertazer
*/

//SetItem
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
Player.addItemCreativeInv(503,  5, 0);
Player.addItemCreativeInv(504, 5, 0);
Player.addItemCreativeInv(505, 5, 0);
Player.addItemCreativeInv(506, 5, 0);
Player.addItemCreativeInv(507, 5, 0);

//Category
Item.setCategory(500, ItemCategory.TOOL);
Item.setCategory(501, ItemCategory.TOOL);
Item.setCategory(502, ItemCategory.TOOL);
Item.setCategory(503, ItemCategory.TOOL);
Item.setCategory(504, ItemCategory.TOOL);
Item.setCategory(505, ItemCategory.TOOL);
Item.setCategory(506, ItemCategory.TOOL);
Item.setCategory(507, ItemCategory.TOOL);

//NewLevel
function newLevel(){
	print("Elevator Mod by");
print("Papertazer");
	if(ModPE.getMinecraftVersion()!="0.13.0"){
		clientMessage("<server> Minecraft PE " + ModPE.getMinecraftVersion() + "isn't compatible with Elevator Mod 0.1.0");
		clientMessage("Update/downgrade your MCPE or check for mod updates.");
	}
    if(ModPE.getMinecraftVersion()=="0.13.0"){
clientMessage("<Elevator Mod Mod> Loaded Version: 0.1.0");
}
}

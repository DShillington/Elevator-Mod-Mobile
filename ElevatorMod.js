/*
Elevator Mod Mobile
Author: papertazer
EARLY ALPHA
*/

Block.setColor(180,[0x4dd2ff]);
Block.setColor(181,[0x4dd2ff]);
//Blocks
Block.defineBlock(180, "Elevator Up", [["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0]]);
Block.defineBlock(181, "Elevator Down", [["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0]]);

//Block Destroy Times
Block.setDestroyTime(180, 0.3);
Block.setDestroyTime(181, 0.3);

Player.addItemCreativeInv(180, 5, 0);
Player.addItemCreativeInv(181, 5, 0);

Item.setCategory(180, ItemCategory.TOOL);
Item.setCategory(181, ItemCategory.TOOL);

var y;
var z;
function modTick()
{
  x = getPlayerX();
  y = getPlayerY();
  z = getPlayerZ();
  if(getTile(x, y-2, z) == 180)
  {
setVelY(getPlayerEnt(), 1.50);
  }
} 

//NewLevel
function newLevel(){
	print("ALPHA Elevator Mod by");
print("Papertazer");
	if(ModPE.getMinecraftVersion()!="0.13.0"){
		clientMessage("<server> Minecraft PE " + ModPE.getMinecraftVersion() + "isn't compatible with Elevator Mod 0.1.0");
		clientMessage("Update/downgrade your MCPE or check for mod updates.");
	}
    if(ModPE.getMinecraftVersion()=="0.13.0"){
clientMessage("<Elevator Mod ALPHA> Loaded Version: 0.1.0");
}
}

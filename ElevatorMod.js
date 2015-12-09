/*
Elevator Mod Mobile
Author: papertazer
EARLY ALPHA
*/

Block.setColor(180,[0x4dd2ff]);

//Blocks
Block.defineBlock(180, "Elevator", [["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0], ["stained_clay", 0]], 3, 3);

//Block Destroy Times
Block.setDestroyTime(180, 0.3);

Player.addItemCreativeInv(180, 5, 0);

Item.setCategory(180, ItemCategory.TOOL);

var y;
var z;
function modTick()
{
  x = getPlayerX();
  y = getPlayerY();
  z = getPlayerZ();
  
  if(getTile(x, y, z-1) == 180)
  {
setVelY(getPlayerEnt(), 0.50);
  }
  
  if(getTile(x, y, z+1) == 180)
  {
setVelY(getPlayerEnt(), 0.50);
  }
  
  if(getTile(x-1, y, z) == 180)
  {
setVelY(getPlayerEnt(), 0.50);
  }
  
  if(getTile(x+1, y, z) == 180)
  {
setVelY(getPlayerEnt(), 0.50);
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
    if(ModPE.getMinecraftVersion()=="0.13"){
clientMessage("<Elevator Mod ALPHA> Loaded Version: 0.1");
}
}

var sdk;
var efgth = 0;

function sleep(milliseconds)
{
  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++)
  {
    if ((new Date().getTime() - start) > milliseconds)
    {
      break;
    }
  }
}

alicorn.shard("auton_shoot_twice")

  .create(function(self)
  {
    sdk = self.require("AndroidFTC");
  })

  .update(function(self)
  {
    if(efgth == 0 || efgth == 1)
    {
      //fire that crossbow whaddup
      //TWICE

      //get the crank in position
      sdk.set("crank", 0.25);
      sleep(1750);
      sdk.set("crank", 0);
      sleep(100);

      //grab the elastic
      sdk.set("release", -1);
      sleep(500);

      if(efgth == 1)
      {
        //reload the crossbow
        sdk.set("reload", 0);
        sleep(1000);
      }

      //pull the elastic back
      sdk.set("crank", -0.25);
      sleep(1250);
      sdk.set("crank", 0);
      sleep(1000);

      if(efgth == 1)
      {
        //reload the crossbow
        sdk.set("reload", -1);
        sleep(1000);
      }

      //release it
      sdk.set("release", 0);
      efgth += 1;
    }
  })

  .destroy(function(self)
  {
    efgth = 0;
  });

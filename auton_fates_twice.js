var sdk;
var hgtvc = 0;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

alicorn.shard("auton_fates_twice")

  .create(function(self) {

    sdk = self.require("AndroidFTC");

  })

  .update(function(self) {

    if(hgtvc == 0 || hgtvc == 1) {

      //get the crank in position
      sdk.set("crank", 0.25);
      sleep(1750);
      sdk.set("crank", 0);
      sleep(100);

      //grab the elastic
      sdk.set("release", -1);
      sleep(500);

      if(hgtvc == 1) {
        //reload the crossbow
        sdk.set("reload", 0);
        sleep(1000);
      }

      //pull the elastic back
      sdk.set("crank", -0.25);
      sleep(1500);
      sdk.set("crank", 0);
      sleep(1500);

      if(hgtvc == 1) {
        //reload the crossbow
        sdk.set("reload", -1);
        sleep(1000);
      }

      //release it
      sdk.set("release", 0);
      sleep(1000);

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //what's up lets hit that ball

      if(hgtvc == 1) {
        //to the middle bit
    	  sdk.set("left", -.5);
    	  sdk.set("right", .5);
        sleep(2500);

        sdk.set("left", 0);
    	  sdk.set("right", 0);
        sleep(1000);

  		  //roobt does a little turn to try to dislodge the ball
  		  sdk.set("left", -.25);
  		  sdk.set("right", -.25);
  		  sleep(1000);

  		  //robot stops and waits
        sdk.set("left", 0);
    	  sdk.set("right", 0);
        sleep(1000);

        sdk.set("left", .25);
  		  sdk.set("right", .25);
  		  sleep(1000);

        sdk.set("left", 0);
    	  sdk.set("right", 0);
        sleep(1000);

        //sdk.set("left", -.5);
    	  //sdk.set("right", .5);
        //sleep(500);

        //maybe change back later
        sdk.set("left", -1);
    	  sdk.set("right", 1);
        sleep(250);

        sdk.set("left", 0);
        sdk.set("right", 0);
        sleep(100);
      }
      hgtvc += 1;
    }

    if(hgtvc == 2) {
      sdk.set("left", 0);
      sdk.set("right", 0);
      sdk.set("release", 0);

      hgtvc = 3;
    }

  })

  .destroy(function(self) {
    hgtvc = 0;
  });

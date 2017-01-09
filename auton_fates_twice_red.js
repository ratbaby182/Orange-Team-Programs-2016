var sdk;
var gtfh = 0;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

alicorn.shard("auton_fates_twice_red")

  .create(function(self) {

    sdk = self.require("AndroidFTC");

  })

  .update(function(self) {

    if(gtfh == 0 || gtfh == 1) {

      //get the crank in position
      sdk.set("crank", 0.25);
      sleep(1750);
      sdk.set("crank", 0);
      sleep(100);

      //grab the elastic
      sdk.set("release", -1);
      sleep(500);

      if(gtfh == 1) {
        //reload the crossbow
        sdk.set("reload", 0);
        sleep(1000);
      }

      //pull the elastic back
      sdk.set("crank", -0.25);
      sleep(1500);
      sdk.set("crank", 0);
      sleep(1500);

      if(gtfh == 1) {
        //reload the crossbow
        sdk.set("reload", -1);
        sleep(1000);
      }

      //release it
      sdk.set("release", 0);
      sleep(1000);

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //what's up lets hit that ball

      if(gtfh == 1) {
        //to the middle bit
    	  sdk.set("left", -.55);
    	  sdk.set("right", .5);
        sleep(3000);

        sdk.set("left", 0);
    	  sdk.set("right", 0);
        sleep(1000);

  		  //roobt does a little turn to try to dislodge the ball
  		  sdk.set("left", .50);
  		  sdk.set("right", .50);
  		  sleep(3000);

  		  //robot stops and waits
        sdk.set("left", 0);
    	  sdk.set("right", 0);
        sleep(1000);

        sdk.set("left", -.50);
  		  sdk.set("right", -.50);
  		  sleep(1000);

        sdk.set("left", 0);
    	  sdk.set("right", 0);
        sleep(1000);

        sdk.set("left", .5);
    	  sdk.set("right", -.5);
        sleep(1000);

        sdk.set("left", 0);
        sdk.set("right", 0);
        sleep(100);
      }
      gtfh += 1;
    }

    if(gtfh == 2) {
      sdk.set("left", 0);
      sdk.set("right", 0);
      sdk.set("release", 0);

      gtfh = 3;
    }

  })

  .destroy(function(self) {
    gtfh = 0;
  });

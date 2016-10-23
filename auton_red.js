/*yo
javascript doesnt have sleep() so i stole this fucntion below from the internet and now it does
just use sleep()
it might mot work tho 
enjoy 
*/
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }}}

var sdk;

alicorn.shard("AutonRed")	
	.create(function(self) {

		sdk = self.require("AndroidFTC");
	  //left - controls the left treads
		//right - controls the right treads
		//crank - the motor that primes the crossbow

		//left_servo - the left button pusher
		//right_servo - the right button pusher
		//pusher - pushes the ball out of the plow
		//release - the servo on the crossbow
	});
.update(function(self) {
		
		//get robot away from wall, pointd in riht direction
		sdk.set("left_servo", 1);
		sdk.set("right_servo", 1);
		
		sdk.set("left", 0.5);
		sdk.set("right", -0.5);
		sleep(1000);
		
		sdk.set("left", 0);
		sdk.set("right", 0);
		sleep(100);
		
		sdk.set("left", -0.5);
		sdk.set("right", -0.5);
		sleep(1000);
		
		sdk.set("left", 0);
		sdk.set("right", 0);
		sleep(100);
		
		while (true){ 
			//go forward
			sdk.set("left", 0.5);
			sdk.set("right", -0.5);
			
			//loooking for white
			if (down_color >= 123 && down_color <= 4646){
				 //to the beacon
				sdk.set("left", 0);
				sdk.set("right", 0);
				sleep(100);
				
				sdk.set("left", -0.5);
				sdk.set("right", -0.5);
				sleep(100);
				
				sdk.set("left", 0);
				sdk.set("right", 0);
				sleep(100);
				
				//checking the beacon's current color and adjusting servos
				if (left_color < 123){
					
					sdk.set("left_servo", 0);
					
					var a = 0;
				}
				else if (left_color > 123){
					sdk.set("right_servo", 0);
					var a = 1;
				}
				
				//push it real good 
				sdk.set("left", 0.5);
				sdk.set("right", -0.5);
				sleep(100);
				
				sdk.set("left", 0);
				sdk.set("right", 0);
				sleep(100);
				
				sdk.set("left", -0.5);
				sdk.set("right", 0.5);
				sleep(100);
				
				sdk.set("left", 0);
				sdk.set("right", 0);
				sleep(100);
				
				if (a == 0){
					sdk.set("left_servo", 1);
				}	
				else{
					
					sdk.set("right_servo", 1);
				}
				
				sdk.set("left", 0.5);
				sdk.set("right", 0.5);
				sleep(100);
				
				sdk.set("left", 0);
				sdk.set("right", 0);
				sleep(100);
			}
}
	
.destroy(function(self) {
		//whaddup
	});
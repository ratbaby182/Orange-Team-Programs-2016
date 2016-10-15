class Teleop < Alicorn::Shard
	
	def create
		
		@sdk = getSphere("AndroidFTC")
		@joy1 = @sdk.get("gamepad_1")
		#@joy2 = @sdk.get("gamepad_2")
		
		#left - controls the left treads
		#right - controls the right treads
		
		#left_servo - the left button pusher
		#right_servo - the right button pusher
		
	end
	
	def update
		
		#drive section
		
		@left = @joy1.get("x1").subtract(@joy1.get("y1")).divide(2).invert()
        @right = @joy1.get("x1").add(@joy1.get("y1")).divide(2)invert()
		
		@sdk.set("left", @left)
		@sdk.set("right", @right)
		
		#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		#button pushers
		
		if @joy1.get("left_bumper") == true && @sdk.get("left_servo") > 0
			
			@sdk.set("left_servo", Alicorn::Vector.zero)
			
		elsif @joy1.get("left_bumper") == true && @sdk.get("left_servo") <= 0
			
			@sdk.set("left_servo", Alicorn::Vector.max)
			
		end
		
		if @joy1.get("right_bumper") == true && @sdk.get("right_servo") > 0
			
			@sdk.set("right_servo", Alicorn::Vector.zero)
			
		elsif @joy1.get("right_bumper") == true && @sdk.get("right_servo") <= 0
			
			@sdk.set("right_servo", Alicorn::Vector.max)
			
		end
		
	end
	
	def destroy
		
		#hey guys what's up?
		
	end
	
end
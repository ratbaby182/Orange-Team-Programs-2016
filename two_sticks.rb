class TwoSticks < Alicorn::Shard
	
	@teleop = true
	
	def create
		
		@sdk = getSphere("AndroidFTC")
		@joy1 = @sdk.get("gamepad_1")
		@joy2 = @sdk.get("gamepad_2")
		
		#left - controls the left treads
		#right - controls the right treads
		#crank - winds the crossbow
		
		#left_servo - the left button pusher
		#right_servo - the right button pusher
		#pusher - pushes the ball out of the plow
		#release - lets go of the crossbow string
		
		@sdk.set("release", Alicorn::Vector.zero)
		
	end
	
	def update
		
		#drive section
		
		@left = @joy1.get("y1").divide(20).multiply(13)
		@right = @joy1.get("y2").divide(20).multiply(-13)
		
		@sdk.set("left", @left)
		@sdk.set("right", @right)
		
=begin
		
		#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		#button pushers
		
		@zero = Alicorn::Vector.zero
		@min = Alicorn::Vector.min
		
		if @joy1.get("a") == true
			
			@sdk.set("left_servo", Alicorn::Vector.zero)
		
		elsif @joy1.get("b") == true
			
			@sdk.set("left_servo", Alicorn::Vector.min)
			
		end
		
		if @joy1.get("x") == true
			
			@sdk.set("right_servo", @zero)
		
		elsif @joy1.get("y") == true
			
			@sdk.set("right_servo", @min)
			
		end
		
		#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		if @joy1.get("left_bumper") == true
			
			@sdk.set("pusher", Alicorn::Vector.zero)
			
		end
		
		if @joy1.get("right_bumper") == true
			
			@sdk.set("pusher", Alicorn::Vector.min)
			
		end
		
=end
		
		#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		if @joy2.get("a") == true
			
			@sdk.set("crank", Alicorn::Vector.new(-0.125))
			
		elsif @joy2.get("b") == true
			
			@sdk.set("crank", Alicorn::Vector.new(0.125))
			
		else
			
			@sdk.set("crank", Alicorn::Vector.zero)
			
		end
		
		if @joy2.get("x") == true
			
			@sdk.set("release", Alicorn::Vector.min)
			
		else
			
			@sdk.set("release", Alicorn::Vector.zero)
			
		end
		
	end
	
	def destroy
		
		#who here loves robots?
		
	end
	
end
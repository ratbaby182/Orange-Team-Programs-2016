class AutonRed < Alicorn::Shard
	
	def create
		
		@sdk = getSphere("AndroidFTC")
		
	end
	
	def update
		
		@sdk.set("left_servo", Alicorn::Vector.max)
		@sdk.set("right_servo", Alicorn::Vector.max)
		
		@sdk.set("left", Alicorn::Vector.new(0.5))
		@sdk.set("right", Alicorn::Vector.new(0.5).invert())
		sleep(1000)
		
		@sdk.set("left", Alicorn::Vector.zero)
		@sdk.set("right", Alicorn::Vector.zero)
		sleep(100)
		
		@sdk.set("left", Alicorn::Vector.new(0.5).invert())
		@sdk.set("right", Alicorn::Vector.new(0.5).invert())
		sleep(1000)
		
		@sdk.set("left", Alicorn::Vector.zero)
		@sdk.set("right", Alicorn::Vector.zero)
		sleep(100)
		
		while true
			
			@sdk.set("left", Alicorn::Vector.new(0.5))
			@sdk.set("right", Alicorn::Vector.new(0.5).invert())
			
			if @down_color >= 123 && @down_color <= 4646
				
				@sdk.set("left", Alicorn::Vector.zero)
				@sdk.set("right", Alicorn::Vector.zero)
				sleep(100)
				
				@sdk.set("left", Alicorn::Vector.new(0.5).invert())
				@sdk.set("right", Alicorn::Vector.new(0.5).invert())
				sleep(100)
				
				@sdk.set("left", Alicorn::Vector.zero)
				@sdk.set("right", Alicorn::Vector.zero)
				sleep(100)
				
				if @left_color < 123
					
					@sdk.set("left_servo", Alicorn::Vector.zero)
					
					@a = 0
					
				elsif @left_color > 123
					
					@sdk.set("right_servo", Alicorn::Vector.zero)
					
					@a = 1
					
				end
				
				@sdk.set("left", Alicorn::Vector.new(0.5))
				@sdk.set("right", Alicorn::Vector.new(0.5).invert())
				sleep(100)
				
				@sdk.set("left", Alicorn::Vector.zero)
				@sdk.set("right", Alicorn::Vector.zero)
				sleep(100)
				
				@sdk.set("left", Alicorn::Vector.new(0.5).invert())
				@sdk.set("right", Alicorn::Vector.new(0.5))
				sleep(100)
				
				@sdk.set("left", Alicorn::Vector.zero)
				@sdk.set("right", Alicorn::Vector.zero)
				sleep(100)
				
				if @a == 0
					
					@sdk.set("left_servo", Alicorn::Vector.max)
					
				else
					
					@sdk.set("right_servo", Alicorn::Vector.max)
					
				end
				
				@sdk.set("left", Alicorn::Vector.new(0.5))
				@sdk.set("right", Alicorn::Vector.new(0.5))
				sleep(100)
				
				@sdk.set("left", Alicorn::Vector.zero)
				@sdk.set("right", Alicorn::Vector.zero)
				sleep(100)
				
			end
			
		end
		
	end
	
	def destroy
		
		#peepo
		
	end
	
end
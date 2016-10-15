class Heck < Alicorn::Shard
    @speed_boost = false

    def create
        @sdk = getSphere("AndroidFTC")
        @joy1 = @sdk.get("gamepad_1")
        @joy2 = @sdk.get("gamepad_2")
    end

    def update
        if @joy1.get("a")
            @speed_boost = true
        elsif @joy1.get("b")
            @speed_boost = false
        end

        y1 = @joy1.get("y1")
        x2 = @joy1.get("x2")

        left = x2.add(y1).require(0.15)
        right = x2.subtract(y1).require(0.15)

        if !@speed_boost
            left = left.divide(2)
            right = right.divide(2)
        end

        @sdk.set("left", left)
        @sdk.set("right", right)
    end
end

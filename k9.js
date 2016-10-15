/**
 * Copyright (c) 2016 Brandon Sanders [brandon@alicorn.io]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sdk;
var joy1;
var joy2;

/**
 * A simple example program for the FTC K9 robot.
 */
alicorn.sphere("k9.js")

    /**
     * Called when this Sphere is first created, shortly before it begins receiving
     * updates.
     *
     * In FTC, this method should be used to initialize your robot and prepare it
     * for operation.
     */
    .create(function(self, args) {
        // Get a reference to the Android FTC SDK.
        sdk = self.require("AndroidFTC");

        // Get a reference to the operator gamepads.
        joy1 = sdk.get("gamepad_1");
        joy2 = sdk.get("gamepad_2");
    })

    /**
     * Called whenever this Sphere is updated.
     *
     * In FTC, this method should be used to control your robot during the
     * teleoperated portion of the game. If you need to delay for any reason,
     * you can call self.sleep(milliseconds) from within this method to
     * temporarily halt the execution of this Sphere until the specified amount
     * of time has passed; don't worry, everything else will keep working while
     * your Sphere is sleeping.
     */
    .update(function(self) {
        // Get the X and Y axis values of the driver gamepad.
        var x = joy1.get("x2") * -1;
        var y = joy1.get("y1");

        // Calculate the speeds for the left and right sides of the drivetrain.
        // x.require(0.25) returns a value of 0 if X is not at least 0.25 from zero.
        var left = (x - y).require(0.25);
        var right = (x + y).require(0.25);

        // Set the speeds of motor_0 and motor_1 to the values of
        // left and right, respectively.
        sdk.set("motor_0", left);
        sdk.set("motor_1", right);
    })

    /**
     * Called when this Sphere is destroyed.
     *
     * In FTC, this method should be used to safely shutdown your robot
     * after a match ends.
     */
    .destroy(function(self) {
        // Your shutdown code goes here.
    });
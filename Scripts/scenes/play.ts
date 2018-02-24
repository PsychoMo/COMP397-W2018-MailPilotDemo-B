module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _plane: objects.Plane;

        // Public Properties

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Private Methods
        

        // Public Methods

        // Initialize Game Variables and Objects
        public Start(): void {
            this._ocean = new objects.Ocean(this.assetManager);
            this._island = new objects.Island(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this.Main();
        }

        public Update(): void {
            this._ocean.Update();
            this._island.Update();
            this._plane.Update();
        }

        // This is where the fun happens
        public Main(): void {
            // add the ocean to the scene
            this.addChild(this._ocean);

            // add the island to the scene
            this.addChild(this._island);

            // add the plane to the scene
            this.addChild(this._plane);
        }
    }
}
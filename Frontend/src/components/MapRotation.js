class MapRotation {
    constructor(map) {
        this.map = map;
        this.interval = null;
        this.heading = this.map.getViewModel().getLookAtData().heading;
    }

    start() {
        const rotationInterval = 10; // Interval in milliseconds
        const rotationDelay = 300; // Delay before starting rotation in milliseconds
        const rotationIncrement = 0.015; // Increment of rotation

        // Set initial map view
        this.map.getViewModel().setLookAtData({
            tilt: 60,
            heading: this.heading += rotationIncrement
        }, true);

        // Start rotation after a delay
        setTimeout(() => {
            this.interval = setInterval(() => {
                // Update map view with incremented heading
                this.map.getViewModel().setLookAtData({
                    tilt: 60,
                    heading: this.heading += rotationIncrement
                });
            }, rotationInterval);
        }, rotationDelay);
    }

    stop() {
        // Clear rotation interval
        clearInterval(this.interval);
        this.interval = null;

        // Reset map view to default
        this.map.getViewModel().setLookAtData({
            tilt: 0,
            heading: 180
        }, true);
    }
}

export default MapRotation;

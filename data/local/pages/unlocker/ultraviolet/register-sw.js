"use strict";

/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */

// The location of your bridge file in the ROOT
const stockSW = "/uv-sw.js";

/**
 * List of hostnames allowed to run service workers on http (testing)
 */
const swAllowedHostnames = ["localhost", "127.0.0.1", "0.0.0.0"];

/**
 * Global registration utility
 */
async function registerSW() {
    if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
    ) {
        throw new Error("Service workers cannot be registered without https.");
    }

    if ("serviceWorker" in navigator) {
        // We only need ONE registration call. 
        // We use stockSW (/uv-sw.js) and the scope from your config.
        await navigator.serviceWorker.register(stockSW, {
            scope: __uv$config.prefix, // This is likely '/s/'
        }).then((registration) => {
            console.log("Vertex: Service Worker Active at scope:", registration.scope);
        }).catch((err) => {
            console.error("Vertex: SW Registration failed:", err);
        });
    }
}

/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */

// Changed from "uv-sw.js" to "/uv/uv.sw.js" to match your actual directory structure 
// while ensuring it points to the correct JavaScript file.
const stockSW = "/uv/uv.sw.js"; 

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
    if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
    )
        throw new Error("Service workers cannot be registered without https.");

    if (!navigator.serviceWorker)
        throw new Error("Your browser doesn't support service workers.");

    // The 'Service-Worker-Allowed' header is often required if the SW is in a subfolder.
    // However, the simplest fix is ensuring the path here is absolute from the root.
    await navigator.serviceWorker.register(stockSW, {
        scope: __uv$config.prefix,
    });
}

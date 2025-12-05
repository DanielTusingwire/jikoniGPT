"use client"

import { useEffect } from "react"

export function PWARegister() {
    useEffect(() => {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
            // Register service worker
            navigator.serviceWorker
                .register("/sw.js", { scope: "/" })
                .then((registration) => {
                    console.log("Service Worker registered successfully:", registration.scope)

                    // Check for updates periodically
                    setInterval(() => {
                        registration.update()
                    }, 60000) // Check every minute

                    // Listen for updates
                    registration.addEventListener("updatefound", () => {
                        const newWorker = registration.installing
                        if (newWorker) {
                            newWorker.addEventListener("statechange", () => {
                                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                                    // New service worker available
                                    console.log("New service worker available")

                                    // Optionally show update notification
                                    if (confirm("New version available! Reload to update?")) {
                                        newWorker.postMessage({ type: "SKIP_WAITING" })
                                        window.location.reload()
                                    }
                                }
                            })
                        }
                    })
                })
                .catch((error) => {
                    console.error("Service Worker registration failed:", error)
                })

            // Handle controller change (new service worker activated)
            navigator.serviceWorker.addEventListener("controllerchange", () => {
                console.log("Service Worker controller changed")
            })
        }
    }, [])

    return null
}

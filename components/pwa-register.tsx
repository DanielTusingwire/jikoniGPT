"use client"

import { useEffect } from "react"
import { toast } from "sonner"

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
                                    // Optionally show update notification
                                    toast("New version available!", {
                                        description: "A new version of Chef is ready.",
                                        action: {
                                            label: "Update",
                                            onClick: () => {
                                                newWorker.postMessage({ type: "SKIP_WAITING" })
                                            }
                                        },
                                        duration: Infinity,
                                    })
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
                window.location.reload()
            })
        }
    }, [])

    return null
}

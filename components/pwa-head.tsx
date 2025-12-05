import Script from 'next/script'

export function PWAHead() {
    return (
        <>
            {/* iOS Splash Screens */}
            <link
                rel="apple-touch-startup-image"
                media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                href="/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-startup-image"
                media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                href="/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-startup-image"
                media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                href="/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-startup-image"
                media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                href="/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-startup-image"
                media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                href="/apple-touch-icon.png"
            />

            {/* Microsoft Tiles */}
            <meta name="msapplication-TileColor" content="#171717" />
            <meta name="msapplication-TileImage" content="/android-chrome-512x512.png" />
            <meta name="msapplication-config" content="none" />

            {/* Disable automatic detection */}
            <meta name="format-detection" content="telephone=no" />
            <meta name="format-detection" content="date=no" />
            <meta name="format-detection" content="address=no" />
            <meta name="format-detection" content="email=no" />

            {/* iOS Status Bar */}
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Prevent iOS from showing banner */}
            <meta name="apple-itunes-app" content="app-id=none" />
        </>
    )
}

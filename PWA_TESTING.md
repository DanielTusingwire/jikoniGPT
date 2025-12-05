# 🧪 PWA Testing Quick Guide

## Quick Test Checklist

### 1️⃣ Desktop Testing (Chrome/Edge)

**Test Install Prompt:**
```bash
1. Open http://localhost:3000 in Chrome/Edge
2. Wait 5 seconds
3. Install banner should appear at bottom-right
4. Click "Install"
5. App should open in standalone window
```

**Test Offline:**
```bash
1. Open DevTools (F12)
2. Go to "Application" → "Service Workers"
3. Check "Offline" checkbox
4. Refresh page
5. Should see offline fallback page
```

**Test Manifest:**
```bash
1. Open DevTools (F12)
2. Go to "Application" → "Manifest"
3. Verify all fields are correct
4. Check icons load properly
```

---

### 2️⃣ Mobile Testing (Android)

**Test on Real Device:**
```bash
1. Deploy to production or use ngrok for HTTPS
2. Open in Chrome on Android
3. Wait 5 seconds for install prompt
4. Tap "Install"
5. Check home screen for app icon
6. Open app from home screen
7. Verify standalone mode (no browser UI)
```

**Test with Chrome DevTools:**
```bash
1. Connect Android device via USB
2. Enable USB debugging
3. Open chrome://inspect
4. Inspect your device
5. Test PWA features remotely
```

---

### 3️⃣ iOS Testing (Safari)

**Test on Real Device:**
```bash
1. Deploy to production (HTTPS required)
2. Open in Safari on iPhone/iPad
3. Wait 5 seconds
4. Tap "Show How" in install banner
5. Follow on-screen instructions:
   - Tap Share button
   - Tap "Add to Home Screen"
   - Tap "Add"
6. Check home screen for app icon
7. Open app from home screen
```

**Note:** iOS doesn't support automatic install prompts, so we show instructions instead.

---

## 🔍 DevTools Inspection

### Service Worker Status
```javascript
// Check in browser console
navigator.serviceWorker.getRegistration().then(reg => {
  console.log('SW Status:', reg.active ? 'Active' : 'Not Active')
  console.log('SW Scope:', reg.scope)
})
```

### Check if Installed
```javascript
// Check in browser console
const isInstalled = window.matchMedia('(display-mode: standalone)').matches
console.log('Is Installed:', isInstalled)
```

### Check Install Prompt Availability
```javascript
// Check localStorage
const dismissed = localStorage.getItem('pwa-install-dismissed')
console.log('Prompt Dismissed:', dismissed)

// Clear to test again
localStorage.removeItem('pwa-install-dismissed')
```

---

## 🐛 Common Issues & Fixes

### Issue: Install prompt not showing
**Fix:**
```bash
1. Clear localStorage: localStorage.removeItem('pwa-install-dismissed')
2. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Wait 5 seconds
4. Check if already installed (uninstall first)
```

### Issue: Service worker not registering
**Fix:**
```bash
1. Check browser console for errors
2. Verify /sw.js is accessible: http://localhost:3000/sw.js
3. Unregister old SW:
   - DevTools → Application → Service Workers
   - Click "Unregister"
4. Hard refresh
```

### Issue: Offline mode not working
**Fix:**
```bash
1. Verify service worker is active
2. Check cache storage in DevTools
3. Test with DevTools offline mode first
4. Then test with actual network disconnect
```

### Issue: iOS not installing
**Fix:**
```bash
1. Must use Safari (not Chrome/Firefox on iOS)
2. Must be on HTTPS (production)
3. Manual installation only (no auto-prompt)
4. Check apple-touch-icon exists
```

---

## 📊 Lighthouse PWA Audit

### Run Audit:
```bash
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Progressive Web App"
4. Click "Generate report"
```

### Target Scores:
- ✅ PWA: 100%
- ✅ Performance: 90%+
- ✅ Accessibility: 90%+
- ✅ Best Practices: 90%+
- ✅ SEO: 90%+

### Common PWA Audit Failures:
- ❌ Not served over HTTPS → Deploy to production
- ❌ No manifest → Check /manifest.json loads
- ❌ No service worker → Check /sw.js loads
- ❌ Icons missing → Verify icon files exist
- ❌ No offline fallback → Check service worker caching

---

## 🚀 Production Testing

### Pre-Deployment Checklist:
```bash
□ Test on real iOS device (Safari)
□ Test on real Android device (Chrome)
□ Test on desktop (Chrome/Edge)
□ Run Lighthouse PWA audit (aim for 100%)
□ Test offline mode
□ Test install/uninstall flow
□ Test update mechanism
□ Verify HTTPS enabled
□ Check manifest.json loads
□ Check service worker registers
□ Test on slow 3G network
```

### Post-Deployment Verification:
```bash
1. Open production URL on mobile
2. Wait for install prompt
3. Install app
4. Test offline mode
5. Check analytics for install events
6. Monitor service worker errors
```

---

## 📱 Test URLs

### Local Development:
```
http://localhost:3000
```
**Note:** PWA features work on localhost, but iOS requires HTTPS

### Production Testing:
```
https://your-domain.com
```
**Note:** Required for iOS and full PWA testing

### Test with ngrok (for mobile testing):
```bash
# Install ngrok
npm install -g ngrok

# Run your dev server
npm run dev

# In another terminal, create HTTPS tunnel
ngrok http 3000

# Use the HTTPS URL on your mobile device
```

---

## 🎯 Success Criteria

### ✅ Installation Works:
- [ ] Install prompt appears after 5 seconds
- [ ] Install button works on Android/Desktop
- [ ] iOS shows installation instructions
- [ ] App icon appears on home screen
- [ ] App opens in standalone mode

### ✅ Offline Works:
- [ ] Service worker registers successfully
- [ ] Static assets cached
- [ ] Offline page shows when no connection
- [ ] App works without internet (cached pages)

### ✅ Updates Work:
- [ ] New version detected automatically
- [ ] Update prompt appears
- [ ] App updates without data loss

### ✅ Cross-Platform:
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome
- [ ] Works on Desktop Chrome/Edge
- [ ] Looks native on all platforms

---

## 🔧 Debug Commands

### Clear All Caches:
```javascript
// Run in browser console
caches.keys().then(keys => {
  keys.forEach(key => caches.delete(key))
  console.log('All caches cleared')
})
```

### Unregister Service Worker:
```javascript
// Run in browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(reg => reg.unregister())
  console.log('All service workers unregistered')
})
```

### Force Update:
```javascript
// Run in browser console
navigator.serviceWorker.getRegistration().then(reg => {
  reg.update()
  console.log('Service worker update triggered')
})
```

### Reset Everything:
```javascript
// Run in browser console
localStorage.clear()
caches.keys().then(keys => keys.forEach(key => caches.delete(key)))
navigator.serviceWorker.getRegistrations().then(regs => 
  regs.forEach(reg => reg.unregister())
)
location.reload()
```

---

## 📞 Need Help?

Check the full documentation: `PWA.md`

Happy testing! 🎉

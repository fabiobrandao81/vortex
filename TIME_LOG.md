# Time Log

**Candidate:** Fabio Vinicius Correa Brandao
**Assessment:** Mobile — React Native (Vortex Storm Chaser App)

---

## Summary

| Phase | Description | Time |
| --- | --- | --- |
| 0 | Environment setup (WSL2, ADB, Java, Android Studio) | ~3h |
| 1 | Project scaffold, navigation, theme system | ~1.5h |
| 2 | Weather data view (API, geolocation, UI, tests) | ~2h |
| 3 | Storm documentation (camera, form, validation, tests) | ~2.5h |
| 4 | Persistence layer (AsyncStorage, log screen, tests) | ~1.5h |
| 5 | Bonus features (dark mode toggle, skeleton screens, icon) | ~2h |
| 6 | Documentation (README, AI disclosure, time log) | ~0.5h |
| — | Debugging (vision-camera, AsyncStorage, ADB, Metro) | ~3h |
| **Total** | | **~16h** |

---

## Notes

A significant portion of time (~3h) was spent resolving environment and dependency issues that are not typical of a standard macOS or Linux React Native setup:

- WSL2 ADB bridging required enabling mirrored networking mode and creating an ADB wrapper script
- `react-native-vision-camera` v3, v4 and v5 were all evaluated and found Not required for the project. Switched to `react-native-image-picker` which delegates to the native camera intent
- `@react-native-async-storage/async-storage` latest version introduced a transitive Maven dependency that failed to resolve; pinned to v1.23.1
- CMake build cache contamination after uninstalling native packages required manual cache clearing

These issues are documented in the README and AI Disclosure for transparency.

# AI Tools Disclosure

**Candidate:** Fabio Vinicius Correa Brandao
**Assessment:** Mobile — React Native (Vortex Storm Chaser App)

---

## Tools Used

### Claude (Anthropic — claude.ai)

Used as a primary development assistant throughout the assessment.

#### Environment setup

- Diagnosing and resolving WSL2 + ADB connectivity issues (mirrored networking mode, ADB wrapper script)
- Java version compatibility guidance (React Native vs Gradle vs JDK 17/25)
- Node.js compatibility verification

#### Architecture planning

- Project folder structure and feature-sliced architecture design
- Phase-by-phase implementation roadmap with commit strategy
- Library selection rationale (Open-Meteo, react-native-image-picker over vision-camera, AsyncStorage version pinning)

#### Code generation

- Initial scaffolding of screen components, hooks, services and navigation
- Theme system (`ThemeProvider`, `useTheme`, typography and layout tokens)
- `weatherService.ts` including the threshold lookup table for `mapWeatherCode`
- `storageService.ts` (AsyncStorage CRUD operations)
- `useWeather` and `useStormLog` custom hooks
- `StormFormScreen` and `CameraScreen` components
- `SkeletonBox`, `WeatherSkeleton` and `LogSkeleton` components
- `ThemeToggle` component with SVG sun/moon icons
- Jest mocks for all native modules
- Jest configuration (`jest.config.js` transform patterns)
- Unit tests for `mapWeatherCode`, `buildStormEntryDraft`, `validateDraft` and `storageService`

#### Debugging

- Resolving `react-native-vision-camera` v3/v4/v5 compatibility failures with RN 0.85.x
- Resolving AsyncStorage Maven dependency resolution failure (pinned to v1.23.1)
- Fixing CMake cache contamination after package uninstalls
- Diagnosing Metro cache issues after folder restructuring

#### Documentation

- README.md, AI_DISCLOSURE.md and TIME_LOG.md drafts

### Midjourney

Used to generate the app icon image based on the following prompt:
> *"App icon, square format, photorealistic dramatic scene, a person wearing a bright yellow plastic rain coat running through a dark rye field toward a massive thunderstorm, heavy rain pouring down, lightning bolt striking in the background, dark storm clouds, cinematic lighting, golden wheat field foreground, moody dark atmosphere, ultra detailed, 1024x1024"*

The resulting image was processed by Claude using Python/Pillow to generate all required Android mipmap and iOS AppIcon sizes.

---

## Human Contributions

- All architectural decisions and tradeoffs were discussed and approved by the candidate
- Debugging sessions were collaborative — the candidate identified error patterns and directed investigation
- Code was reviewed, understood and integrated by the candidate at each step
- The candidate identified and corrected several API mismatches (e.g. `useCameraDevices` returning an array in v3, bare `catch {}` syntax for unused error bindings)
- The candidate made independent decisions on style (dedicated `.styles.ts` files, `type` over `interface` for data models, `it.each` for data-driven tests)
- All git commits were authored by the candidate

// expects to receive MAESTRO_TESTENV from the environment

const androidApp = "com.android.chrome"
const iosApp = "com.apple.mobilesafari"

console.log("MAESTRO_TESTENV: " + MAESTRO_TESTENV)

if (MAESTRO_TESTENV === "ios") {
    output.appIdUnderTest = iosApp
} else {
    output.appIdUnderTest = androidApp
}
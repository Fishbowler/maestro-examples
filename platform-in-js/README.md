# Detect platform in Javascript

How to make decisions in Javascript based on the platform the code is running on.

Assuming Javascript that works like this:
    
```javascript
if (platform === 'android') {
    output.user = 'alice'
} else if (platform === 'ios') {
    output.user = 'bob'
}
```

...then the only way to achieve this would be to call it like this:

```yaml
- runFlow:
    when:
      platform: 'Android'
    commands:
      - runScript: 
          file: myScript.js
          env:
            platform: 'android'
- runFlow:
    when:
      platform: 'iOS'
    commands:
      - runScript: 
          file: myScript.js
          env:
            platform: 'ios'

- assertVisible: ${output.user}
```

...which probably defeats the purpose.

Instead, there's a new `maestro.platform` object that you can use to detect the platform in Javascript:

```javascript
if (maestro.platform == 'android') {
    output.user = 'alice'
} else if (maestro.platform == 'ios') {
    output.user = 'bob'
}
```

...allowing us to call it like this:

```yaml
- runScript: 
    file: myScript.js
- assertVisible: ${output.user}
```
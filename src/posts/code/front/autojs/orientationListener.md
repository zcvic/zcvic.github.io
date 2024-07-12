---
icon: router
date: 2024-07-12
category:
  - 前端
  - autojs
---

# autojs横竖屏监听

```jsx
"ui";

let currentOrientation = context.resources.configuration.orientation

ui.layout(
    <vertical gravity="center">
        <text text="{{currentOrientation}}" />
    </vertical>
)

function onConfigurationChanged(newConfig) {
    if (newConfig.orientation != currentOrientation) {
        if (newConfig.orientation == 2) {
            log("横屏")
        } else {
            log("竖屏")
        }
    }
    currentOrientation = newConfig.orientation
}

context.registerComponentCallbacks({
    onConfigurationChanged: onConfigurationChanged
})
```
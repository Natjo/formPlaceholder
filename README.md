
# Form placeholder

![version](https://img.shields.io/github/manifest-json/v/Natjo/formPlaceholder)  

  
Set label as placeholder with animation

## Parameters
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| selector | string | .placeholder | element selector |

## Events
| Name | Arguments | Description |
| ------ | ------ | ------ |
| placeholder.reset() | - | - |


## Usage
```javascript
import placeholder from '../../modules/formPlaceholder/formPlaceholder.js';

placeholder();
```

```css
.field{
        z-index: 0;
}
label{
    height: 34px;
    display: flex;
    align-items: center;

    &.placeholder{
        position: absolute;
        z-index: -1;
        user-select: none;
        pointer-events: none;
        transition: all .15s ease;
    }
    &.active{
        transform: translateY(-20px);
    }
}
```

## Demo




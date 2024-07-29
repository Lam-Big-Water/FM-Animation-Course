# Fundamentals
## Duration
**How long an iteration of an animation takes to complete.**
## Delay
**How long it takes before an animation starts.**

## Timing function
**The easing of an animation.**
```css
cubic-bezier(0.5, 0, 0.5, 1);
```


## CSS Variables
**Also known as css Custom Properties**
```css
:root {
	--duratuin: 2s;
	--primary-color: red;
}

.thing {
	// --duration or 1s
	animation-duration: calc(var(--duration, 1s)); 
}

.ball {
	// overWriting
	--primary-color: bule;
	background-color: var(--primary-color);
}
```

## What to animate
**Transform and opacity -- great**

**Color and background -- good**

**Height, width, left, right, etc -- bad**

### Transition
**transition-property**

**transition-duration**

**transition-delay**

**transition-timing-function**

```scss
// short form
transition: all 2s 0.5s ease-in-out;
```


### @keyframes

**animation-name**

**animation-duration**

**animation-timing-function**

**animation-delay**

**animation-iteration-count**

**animation-direction**

**animation-fill-mode**



```scss
// short form
animation: move-around 4s ease 0.1s infinite reverse both;

@keyframes {
	from {
		transform: none;
	}

	to {
		transform: translateX(20vw);
	}
}
```
- :focus-within {}
- :invalid:not(:focus) {}
- animation-play-state: paused;
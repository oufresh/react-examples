# React animation examples

When working with React, there are times when you want to animate a component directly after it has been mounted, or directly prior to it being unmounted. Let’s say you map over an array of objects and render a component for each object to create a list in your application. Now let’s say you want to add animations to fade-in new items that have been added to the array or fade-out items as they are removed from the array. This can be problematic because as soon as you alter the underlying data in the array by removing an item, React will unmount the associated component immediately before you have a chance to fade it out. Likewise, if you are using stateless functional components (which we’ve already established is a good idea whenever possible) you have no life cycle methods to trigger the fade-in animation when a component is first mounted as new objects are added to your array.

ReactCSSTransitionGroup is itself a component in which you can nest child components. Any child component that mounts will undergo the ‘enter’ transition right after it mounts, and any child component that unmounts will undergo a leave transition before it unmounts. The ReactCSSTransitionGroup component takes in transitionEnterTimeout and transitionLeaveTimeout as props. What these values represent are the duration in milliseconds of your enter and leave transitions. Essentially these props help ReactCSSTransitionGroup know when to add and remove the various CSS classes involved in the transitions and when it can unmount child components.

### className of transitions
By convention, if the value of ‘example’ is passed in to the transitionName prop of ReactCSSTransitionGroup, it will look for these CSS classes:

* example-enter : defines the beginning state of the enter transition
* example-enter.example-enter-active : defines the actual enter transition
* example-leave : defines the beginning state of the leave transition
* example-leave.example-leave-active : defines the actual leave transition



When using ReactCSSTransitionGroup, there’s no way for your components to be notified when a transition has ended or to perform any more complex logic around animation. If you want more fine-grained control, you can use the lower-level ReactTransitionGroup API which provides the hooks you need to do custom transitions